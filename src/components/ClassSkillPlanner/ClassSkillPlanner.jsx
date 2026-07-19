import { ChevronDown, ChevronUp, Settings } from 'lucide-react'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import './ClassSkillPlannerStyles.css'
import { createClassModel, pointLimitForSpecVersion } from '../../lib/classModel.js'
import { assetUrl } from '../../lib/dom.js'
import { allocatedTotal, cleanupLevels, skillLevel } from '../../lib/pointBuy.js'
import { skillAvailableInVersion } from '../../lib/specs.js'
import { jobIconUrlForLabelAndPath } from '../../lib/jobIcons.js'
import { translatedSkillName, translateUi } from '../../lib/translations.js'
import { BuildToolbar } from '../BuildToolbar'
import { ClassHeader } from '../ClassHeader'
import { EmptyState } from '../EmptyState'
import {
  DEFAULT_PINNED_SPEC_IDS,
  PinnedSkillPopup,
  PinnedSkillSummary,
  PinnedSpecOptionsPopover,
} from '../PinnedSkillPopup'
import { SkillCard } from '../SkillCard'
import { SkillTree } from '../SkillTree'

const EMPTY_LEVELS = {}
const DETAIL_PANEL_DEFAULT_WIDTH = 620
const DETAIL_PANEL_MIN_WIDTH = 360
const DETAIL_PANEL_MAX_WIDTH = 1100
const DETAIL_RESIZER_WIDTH = 18
const TREE_AREA_MIN_WIDTH = 560
const DETAIL_DRAWER_COLLAPSED_HEIGHT = 48
const DETAIL_DRAWER_DEFAULT_HEIGHT = 220
const DETAIL_DRAWER_FULL_RATIO = 0.5
const DETAIL_DRAWER_MAX_RATIO = 0.92
const DETAIL_DRAWER_DRAG_THRESHOLD = 4
const MAX_BUILD_PRESETS = 24
const MAIN_CLASS_DEFAULT_SPEC_VERSION = 'rebalance-1'
const EXPANDED_CLASS_DEFAULT_SPEC_VERSION = 'pre'
const EXPANDED_CLASS_IDS = new Set([
  'night-watch',
  'shinkiro',
  'shiranui',
  'sky-emperor',
  'soul-ascetic',
  'spirit-handler',
  'hyper-novice',
  'alitea',
])

export function ClassSkillPlanner({
  dataSet,
  language,
  routeTabId,
  onActiveTabChange,
  onBack,
  onLanguageChange,
  theme,
  onThemeChange,
}) {
  const shellRef = useRef(null)
  const detailDrawerDragRef = useRef(null)
  const drawerSpecButtonRef = useRef(null)
  const drawerSpecPopoverRef = useRef(null)
  const ignoreNextDrawerToggleRef = useRef(false)
  const tabButtonRefs = useRef(new Map())
  const tabs = useMemo(() => skillTabsForData(dataSet.data), [dataSet.data])
  const savedSettings = useMemo(() => readPlannerSettings(dataSet.id), [dataSet.id])
  const savedPresets = useMemo(() => readBuildPresets(dataSet.id), [dataSet.id])
  const initialTabId = firstValidTabId(tabs, routeTabId, savedSettings?.activeTabId)
  const defaultSpecVersion = useMemo(() => defaultSpecVersionForDataSet(dataSet), [dataSet])
  const savedSpecVersionIsValid = isValidSpecVersion(dataSet.data, savedSettings?.specVersion)
  const savedSpecVersionIsCustom = savedSpecVersionIsValid && (
    savedSettings?.hasCustomSpecVersion === true
    || Boolean(savedSettings?.specVersion && savedSettings.specVersion !== 'current')
  )
  const [activeTabId, setActiveTabId] = useState(initialTabId)
  const [specVersion, setSpecVersion] = useState(() =>
    savedSpecVersionIsCustom && isValidSpecVersion(dataSet.data, savedSettings?.specVersion)
      ? savedSettings.specVersion
      : defaultSpecVersion,
  )
  const [hasCustomSpecVersion, setHasCustomSpecVersion] = useState(savedSpecVersionIsCustom)
  const [levelsByTab, setLevelsByTab] = useState(() => sanitizeLevelsByTab(savedSettings?.levelsByTab))
  const [detailPanelWidth, setDetailPanelWidth] = useState(() => sanitizeDetailPanelWidth(savedSettings?.detailPanelWidth))
  const [isResizingDetailPanel, setIsResizingDetailPanel] = useState(false)
  const [presets, setPresets] = useState(savedPresets)
  const [selectedPresetId, setSelectedPresetId] = useState(savedPresets[0]?.id ?? '')
  const [presetName, setPresetName] = useState(savedPresets[0]?.name ?? '')
  const [hoveredSkillId, setHoveredSkillId] = useState(null)
  const [detailDrawerHeight, setDetailDrawerHeight] = useState(DETAIL_DRAWER_COLLAPSED_HEIGHT)
  const [isResizingDetailDrawer, setIsResizingDetailDrawer] = useState(false)
  const [showDrawerSpecOptions, setShowDrawerSpecOptions] = useState(false)
  const [viewportHeight, setViewportHeight] = useState(() => (
    typeof window === 'undefined' ? 0 : window.innerHeight
  ))
  const [isMobileLayout, setIsMobileLayout] = useState(() => (
    typeof window !== 'undefined' && window.innerWidth <= 900
  ))
  const [requirementTooltipPositions, setRequirementTooltipPositions] = useState({})
  const [pinnedSkillIds, setPinnedSkillIds] = useState([])
  const [pinnedSpecIds, setPinnedSpecIds] = useState(DEFAULT_PINNED_SPEC_IDS)
  const [localPinnedSpecIdsBySkill, setLocalPinnedSpecIdsBySkill] = useState({})
  const visibleTabs = useMemo(() => tabs.map((tab) => tabForSpecVersion(dataSet.data, tab, specVersion)), [dataSet.data, specVersion, tabs])
  const activeTab = visibleTabs.find((tab) => tab.id === activeTabId) ?? visibleTabs[0]
  const plannerIndex = useMemo(() => createPlannerIndex(visibleTabs), [visibleTabs])
  const activeData = useMemo(
    () => ({
      ...dataSet.data,
      tree: {
        ...dataSet.data.tree,
        ...activeTab.tree,
      },
      skills: activeTab.skills,
    }),
    [activeTab, dataSet.data],
  )
  const model = useMemo(() => createClassModel(activeData, dataSet.id), [activeData, dataSet.id])
  const [selectedId, setSelectedId] = useState(model.initialSkillId)
  const levels = useMemo(
    () => effectiveLevelsForTab(levelsByTab, activeTab, plannerIndex),
    [activeTab, levelsByTab, plannerIndex],
  )
  const pointLimit = useMemo(() => pointLimitForTab(model.data, activeTab, specVersion), [activeTab, model.data, specVersion])
  const activeModel = useMemo(
    () => ({
      ...model,
      data: {
        ...model.data,
        pointLimit,
      },
    }),
    [model, pointLimit],
  )
  const detailDrawerMaxHeight = Math.max(
    DETAIL_DRAWER_COLLAPSED_HEIGHT,
    Math.round((viewportHeight || 720) * DETAIL_DRAWER_MAX_RATIO),
  )
  const isDetailDrawerCollapsed = detailDrawerHeight <= DETAIL_DRAWER_COLLAPSED_HEIGHT + 1
  const isDetailDrawerFull = !isDetailDrawerCollapsed
    && detailDrawerHeight > Math.round((viewportHeight || 720) * DETAIL_DRAWER_FULL_RATIO)
  const shouldShowFullSkillDetails = !isMobileLayout || isDetailDrawerFull

  useEffect(() => {
    if (!tabs.some((tab) => tab.id === routeTabId)) return
    if (routeTabId !== activeTabId) setActiveTabId(routeTabId)
  }, [activeTabId, routeTabId, tabs])

  useEffect(() => {
    if (!activeTab?.id) return
    if (tabs.some((tab) => tab.id === routeTabId)) return
    onActiveTabChange(activeTab.id, { replace: true })
  }, [activeTab?.id, onActiveTabChange, routeTabId, tabs])

  useEffect(() => {
    if (selectedId && model.skillById.has(selectedId)) return
    setSelectedId(model.initialSkillId)
  }, [model, selectedId])

  useEffect(() => {
    setLevelsByTab((current) => {
      const normalized = normalizeBorrowedOverflow({
        data: dataSet.data,
        levelsByTab: current,
        plannerIndex,
        specVersion,
      })
      return levelsByTabEqual(current, normalized) ? current : normalized
    })
  }, [dataSet.data, plannerIndex, specVersion])

  useEffect(() => {
    writePlannerSettings(dataSet.id, {
      activeTabId: activeTab.id,
      detailPanelWidth,
      hasCustomSpecVersion,
      specVersion,
      levelsByTab,
    })
  }, [activeTab.id, dataSet.id, detailPanelWidth, hasCustomSpecVersion, levelsByTab, specVersion])

  useEffect(() => {
    writeBuildPresets(dataSet.id, presets)
  }, [dataSet.id, presets])

  useEffect(() => {
    setPinnedSkillIds((current) => current.filter((id) => model.skillById.has(id)))
  }, [model.skillById])

  useEffect(() => {
    const updateViewportMetrics = () => {
      setViewportHeight(window.innerHeight)
      setIsMobileLayout(window.innerWidth <= 900)
    }

    updateViewportMetrics()
    window.addEventListener('resize', updateViewportMetrics)
    return () => window.removeEventListener('resize', updateViewportMetrics)
  }, [])

  useEffect(() => {
    setDetailDrawerHeight((current) => clamp(current, DETAIL_DRAWER_COLLAPSED_HEIGHT, detailDrawerMaxHeight))
  }, [detailDrawerMaxHeight])

  useEffect(() => {
    if (isDetailDrawerFull) setShowDrawerSpecOptions(false)
  }, [isDetailDrawerFull])

  useEffect(() => {
    if (!hoveredSkillId) return undefined

    const closeRequirementTooltip = () => setHoveredSkillId(null)

    document.addEventListener('mousedown', closeRequirementTooltip, true)
    document.addEventListener('touchstart', closeRequirementTooltip, true)
    return () => {
      document.removeEventListener('mousedown', closeRequirementTooltip, true)
      document.removeEventListener('touchstart', closeRequirementTooltip, true)
    }
  }, [hoveredSkillId])

  useEffect(() => {
    if (!showDrawerSpecOptions) return undefined

    const closeSpecOptions = (event) => {
      if (drawerSpecButtonRef.current?.contains(event.target)) return
      if (drawerSpecPopoverRef.current?.contains(event.target)) return
      setShowDrawerSpecOptions(false)
    }

    document.addEventListener('mousedown', closeSpecOptions, true)
    document.addEventListener('touchstart', closeSpecOptions, true)
    return () => {
      document.removeEventListener('mousedown', closeSpecOptions, true)
      document.removeEventListener('touchstart', closeSpecOptions, true)
    }
  }, [showDrawerSpecOptions])

  const selectedSkill = useMemo(
    () => model.data.skills.find((skill) => skill.id === selectedId) ?? null,
    [model.data.skills, selectedId],
  )
  const selectedSkillLevel = selectedSkill ? skillLevel(levels, selectedSkill.id) : 0
  const hoveredSkill = useMemo(
    () => (hoveredSkillId ? plannerIndex.skillById.get(skillKey(hoveredSkillId)) ?? null : null),
    [hoveredSkillId, plannerIndex],
  )
  const pinnedSkills = useMemo(
    () => pinnedSkillIds.map((id) => model.skillById.get(id)).filter(Boolean),
    [model.skillById, pinnedSkillIds],
  )
  const pointSummary = useMemo(
    () => pointSummaryForTab({
      activeTab,
      effectiveLevels: levels,
      levelsByTab,
      plannerIndex,
    }),
    [activeTab, levels, levelsByTab, plannerIndex],
  )
  const totalBuildPoints = useMemo(
    () => Object.values(levelsByTab).reduce((sum, tabLevels) => sum + allocatedTotal(tabLevels), 0),
    [levelsByTab],
  )
  const previousRequirementGroups = useMemo(
    () => previousRequirementGroupsForSkill(hoveredSkill, plannerIndex, visibleTabs, language),
    [hoveredSkill, language, plannerIndex, visibleTabs],
  )
  const highlightedRequirementTabIds = useMemo(
    () => new Set(previousRequirementGroups.map((group) => group.tab.id)),
    [previousRequirementGroups],
  )

  useLayoutEffect(() => {
    if (!previousRequirementGroups.length) {
      setRequirementTooltipPositions({})
      return
    }

    const nextPositions = {}
    for (const group of previousRequirementGroups) {
      const tabButton = tabButtonRefs.current.get(group.tab.id)
      if (!tabButton) continue

      const bounds = tabButton.getBoundingClientRect()
      nextPositions[group.tab.id] = {
        left: bounds.left + bounds.width / 2,
        top: bounds.top,
      }
    }
    setRequirementTooltipPositions(nextPositions)
  }, [previousRequirementGroups])

  const increaseSkill = useCallback(
    (id) => {
      const result = buySkillAcrossTabs({
        activeTab,
        data: dataSet.data,
        id,
        levelsByTab,
        plannerIndex,
        specVersion,
      })
      setSelectedId(id)
      if (result.ok) setLevelsByTab(result.levelsByTab)
    },
    [activeTab, dataSet.data, levelsByTab, plannerIndex, specVersion],
  )

  const decreaseSkill = useCallback(
    (id) => {
      const result = refundSkillAcrossTabs({
        activeTab,
        data: dataSet.data,
        id,
        levelsByTab,
        plannerIndex,
        specVersion,
      })
      setSelectedId(id)
      if (result.ok) setLevelsByTab(result.levelsByTab)
    },
    [activeTab, dataSet.data, levelsByTab, plannerIndex, specVersion],
  )

  const canIncreaseSkill = useCallback(
    (id) => canBuySkillAcrossTabs({
      activeTab,
      data: dataSet.data,
      id,
      levelsByTab,
      plannerIndex,
      specVersion,
    }),
    [activeTab, dataSet.data, levelsByTab, plannerIndex, specVersion],
  )

  const resetBuild = useCallback(() => {
    setLevelsByTab((current) => (
      pointSummary.usesPastPointSplit
        ? resetSourceTabLevels(current, activeTab.id, plannerIndex)
        : resetTabSkillLevels(current, activeTab, plannerIndex)
    ))
  }, [activeTab, plannerIndex, pointSummary.usesPastPointSplit])
  const resetAllBuild = useCallback(() => {
    setLevelsByTab({})
  }, [])

  const changeSelectedPreset = useCallback(
    (presetId) => {
      setSelectedPresetId(presetId)
      setPresetName(presets.find((preset) => preset.id === presetId)?.name ?? '')
    },
    [presets],
  )

  const savePreset = useCallback(() => {
    const existingPreset = presets.find((preset) => preset.id === selectedPresetId)
    const id = existingPreset?.id ?? createPresetId()
    const name = sanitizePresetName(presetName) || existingPreset?.name || nextPresetName(presets)
    const preset = {
      id,
      name,
      activeTabId: activeTab.id,
      specVersion,
      levelsByTab: cleanupLevelsByTab(cloneLevelsByTab(levelsByTab)),
      savedAt: new Date().toISOString(),
    }

    setPresets((current) => {
      const next = current.filter((entry) => entry.id !== id)
      next.unshift(preset)
      return next.slice(0, MAX_BUILD_PRESETS)
    })
    setSelectedPresetId(id)
    setPresetName(name)
  }, [activeTab.id, levelsByTab, presetName, presets, selectedPresetId, specVersion])

  const loadPreset = useCallback(() => {
    const preset = presets.find((entry) => entry.id === selectedPresetId)
    if (!preset) return

    const nextSpecVersion = isValidSpecVersion(dataSet.data, preset.specVersion) ? preset.specVersion : specVersion
    const nextTabId = firstValidTabId(tabs, preset.activeTabId, activeTab.id)

    setLevelsByTab(sanitizeLevelsByTab(preset.levelsByTab))
    setSpecVersion(nextSpecVersion)
    setActiveTabId(nextTabId)
    setPresetName(preset.name)
    if (nextTabId !== activeTab.id) onActiveTabChange(nextTabId)
  }, [activeTab.id, dataSet.data, onActiveTabChange, presets, selectedPresetId, specVersion, tabs])

  const deletePreset = useCallback(() => {
    setPresets((current) => current.filter((preset) => preset.id !== selectedPresetId))
    setSelectedPresetId('')
    setPresetName('')
  }, [selectedPresetId])

  const pinSkill = useCallback((id) => {
    setPinnedSkillIds((current) => [...current.filter((entry) => entry !== id), id])
  }, [])

  const unpinSkill = useCallback((id) => {
    setPinnedSkillIds((current) => current.filter((entry) => entry !== id))
    setLocalPinnedSpecIdsBySkill((current) => {
      const { [id]: _removed, ...next } = current
      return next
    })
  }, [])

  const changeLocalPinnedSpecIds = useCallback((id, specIds) => {
    setLocalPinnedSpecIdsBySkill((current) => ({ ...current, [id]: specIds }))
  }, [])

  const changeTab = useCallback(
    (tabId) => {
      setHoveredSkillId(null)
      setDetailDrawerHeight(DETAIL_DRAWER_COLLAPSED_HEIGHT)
      setActiveTabId(tabId)
      onActiveTabChange(tabId)
    },
    [onActiveTabChange],
  )
  const selectSkill = useCallback((id) => {
    setSelectedId(id)
  }, [])
  const openCompactDetailDrawer = useCallback(() => {
    setDetailDrawerHeight(Math.min(DETAIL_DRAWER_DEFAULT_HEIGHT, detailDrawerMaxHeight))
  }, [detailDrawerMaxHeight])
  const openFullDetailDrawer = useCallback(() => {
    setShowDrawerSpecOptions(false)
    setDetailDrawerHeight(detailDrawerMaxHeight)
  }, [detailDrawerMaxHeight])
  const lowerDetailDrawer = useCallback(() => {
    setDetailDrawerHeight(isDetailDrawerFull
      ? Math.min(DETAIL_DRAWER_DEFAULT_HEIGHT, detailDrawerMaxHeight)
      : DETAIL_DRAWER_COLLAPSED_HEIGHT)
  }, [detailDrawerMaxHeight, isDetailDrawerFull])
  const toggleDetailDrawer = useCallback(() => {
    if (ignoreNextDrawerToggleRef.current) {
      ignoreNextDrawerToggleRef.current = false
      return
    }

    setDetailDrawerHeight((current) => (
      current <= DETAIL_DRAWER_COLLAPSED_HEIGHT + 1
        ? Math.min(DETAIL_DRAWER_DEFAULT_HEIGHT, detailDrawerMaxHeight)
        : DETAIL_DRAWER_COLLAPSED_HEIGHT
    ))
  }, [detailDrawerMaxHeight])
  const startDetailDrawerResize = useCallback(
    (event) => {
      if (event.button !== 0) return
      event.preventDefault()
      event.currentTarget.setPointerCapture(event.pointerId)
      setIsResizingDetailDrawer(true)
      detailDrawerDragRef.current = {
        pointerY: event.clientY,
        startHeight: detailDrawerHeight,
        startedOnTitle: Boolean(event.target.closest?.('.detail-drawer-title')),
        moved: false,
      }
    },
    [detailDrawerHeight],
  )
  const moveDetailDrawerResize = useCallback(
    (event) => {
      const drag = detailDrawerDragRef.current
      if (!drag) return

      const delta = drag.pointerY - event.clientY
      if (Math.abs(delta) > DETAIL_DRAWER_DRAG_THRESHOLD) drag.moved = true
      setDetailDrawerHeight(clamp(
        Math.round(drag.startHeight + delta),
        DETAIL_DRAWER_COLLAPSED_HEIGHT,
        detailDrawerMaxHeight,
      ))
    },
    [detailDrawerMaxHeight],
  )
  const stopDetailDrawerResize = useCallback((event) => {
    const drag = detailDrawerDragRef.current
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    if (drag?.moved && drag.startedOnTitle) ignoreNextDrawerToggleRef.current = true
    detailDrawerDragRef.current = null
    setIsResizingDetailDrawer(false)
  }, [])
  const changeSpecVersion = useCallback((nextSpecVersion) => {
    setHasCustomSpecVersion(true)
    setSpecVersion(nextSpecVersion)
  }, [])
  const detailPanelMaxWidth = useCallback(() => {
    const shellWidth = shellRef.current?.getBoundingClientRect().width
    if (!shellWidth) return DETAIL_PANEL_MAX_WIDTH
    return Math.max(
      DETAIL_PANEL_MIN_WIDTH,
      Math.min(DETAIL_PANEL_MAX_WIDTH, shellWidth - TREE_AREA_MIN_WIDTH - DETAIL_RESIZER_WIDTH),
    )
  }, [])
  const resizeDetailPanel = useCallback(
    (nextWidth) => {
      setDetailPanelWidth(clamp(nextWidth, DETAIL_PANEL_MIN_WIDTH, detailPanelMaxWidth()))
    },
    [detailPanelMaxWidth],
  )
  const resizeDetailPanelFromPointer = useCallback(
    (clientX) => {
      const bounds = shellRef.current?.getBoundingClientRect()
      if (!bounds) return
      resizeDetailPanel(Math.round(bounds.right - clientX - DETAIL_RESIZER_WIDTH / 2))
    },
    [resizeDetailPanel],
  )
  const startDetailPanelResize = useCallback(
    (event) => {
      if (event.button !== 0) return
      event.preventDefault()
      event.currentTarget.setPointerCapture(event.pointerId)
      setIsResizingDetailPanel(true)
      resizeDetailPanelFromPointer(event.clientX)
    },
    [resizeDetailPanelFromPointer],
  )
  const moveDetailPanelResize = useCallback(
    (event) => {
      if (!isResizingDetailPanel) return
      resizeDetailPanelFromPointer(event.clientX)
    },
    [isResizingDetailPanel, resizeDetailPanelFromPointer],
  )
  const stopDetailPanelResize = useCallback((event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    setIsResizingDetailPanel(false)
  }, [])
  const resizeDetailPanelWithKeyboard = useCallback(
    (event) => {
      const step = event.shiftKey ? 48 : 16
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        resizeDetailPanel(detailPanelWidth + step)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        resizeDetailPanel(detailPanelWidth - step)
      } else if (event.key === 'Home') {
        event.preventDefault()
        resizeDetailPanel(DETAIL_PANEL_MIN_WIDTH)
      } else if (event.key === 'End') {
        event.preventDefault()
        resizeDetailPanel(detailPanelMaxWidth())
      }
    },
    [detailPanelMaxWidth, detailPanelWidth, resizeDetailPanel],
  )

  return (
    <main
      className={isResizingDetailPanel ? 'app-shell is-resizing-detail-panel' : 'app-shell'}
      ref={shellRef}
      style={{
        '--detail-panel-width': `${detailPanelWidth}px`,
        '--detail-drawer-height': `${detailDrawerHeight}px`,
      }}
    >
      <section className="tree-area" aria-label={`${model.data.className} skill tree`}>
        <ClassHeader
          model={activeModel}
          specVersion={specVersion}
          roLatamSpecVersion={defaultSpecVersion}
          language={language}
          onLanguageChange={onLanguageChange}
          onSpecVersionChange={changeSpecVersion}
          onBack={onBack}
          theme={theme}
          onThemeChange={onThemeChange}
        />

        <BuildToolbar
          variant="presets"
          language={language}
          presets={presets}
          selectedPresetId={selectedPresetId}
          presetName={presetName}
          onPresetNameChange={setPresetName}
          onSelectedPresetChange={changeSelectedPreset}
          onSavePreset={savePreset}
          onLoadPreset={loadPreset}
          onDeletePreset={deletePreset}
        />

        {tabs.length > 1 ? (
          <div className="skill-tabs" role="tablist" aria-label="Class skill trees">
            {visibleTabs.map((tab) => (
              <button
                key={tab.id}
                ref={(node) => {
                  if (node) {
                    tabButtonRefs.current.set(tab.id, node)
                  } else {
                    tabButtonRefs.current.delete(tab.id)
                  }
                }}
                className={[
                  'skill-tab',
                  tab.id === activeTab.id ? 'is-active' : '',
                  highlightedRequirementTabIds.has(tab.id) ? 'has-previous-requirements' : '',
                ].filter(Boolean).join(' ')}
                type="button"
                role="tab"
                aria-selected={tab.id === activeTab.id}
                onClick={() => changeTab(tab.id)}
              >
                {tabIconUrl(tab, dataSet) ? (
                  <img className="skill-tab-icon" src={assetUrl(tabIconUrl(tab, dataSet))} alt="" width="24" height="24" />
                ) : null}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        ) : null}

        {previousRequirementGroups.map((group) => {
          const position = requirementTooltipPositions[group.tab.id]
          if (!position) return null

          return (
            <div
              className="previous-requirement-tooltip"
              key={group.tab.id}
              role="tooltip"
              style={{ left: `${position.left}px`, top: `${position.top}px` }}
            >
              <ul className="previous-requirement-list">
                {group.requirements.map((requirement) => (
                  <li className="previous-requirement-item" key={requirement.skill.id}>
                    <img src={assetUrl(requirement.skill.iconUrl)} alt="" width="24" height="24" />
                    <span>{requirement.name}</span>
                    <strong>
                      {translateUi('Lv', language)} {requirement.level}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}


        <SkillTree
          model={activeModel}
          levels={levels}
          selectedId={selectedId}
          specVersion={specVersion}
          onSelectSkill={selectSkill}
          onHoverSkillChange={setHoveredSkillId}
          onIncreaseSkill={increaseSkill}
          onDecreaseSkill={decreaseSkill}
          canIncreaseSkill={canIncreaseSkill}
          canDecreaseSkill={(id) => canDecreaseSkillAcrossTabs(activeTab.id, id, levelsByTab, plannerIndex)}
          language={language}
          footer={(
            <BuildToolbar
              variant="summary"
              totalPoints={pointSummary.treePoints}
              pastPoints={pointSummary.pastTreePoints}
              pointLimit={pointLimit}
              language={language}
              onReset={resetBuild}
              onResetAll={resetAllBuild}
              totalBuildPoints={totalBuildPoints}
            />
          )}
        />
      </section>

      <div
        className="panel-resizer"
        role="separator"
        aria-label="Resize skill details panel"
        aria-orientation="vertical"
        aria-valuemin={DETAIL_PANEL_MIN_WIDTH}
        aria-valuemax={detailPanelMaxWidth()}
        aria-valuenow={detailPanelWidth}
        tabIndex={0}
        onKeyDown={resizeDetailPanelWithKeyboard}
        onPointerDown={startDetailPanelResize}
        onPointerMove={moveDetailPanelResize}
        onPointerUp={stopDetailPanelResize}
        onPointerCancel={stopDetailPanelResize}
      />

      <aside
        className={[
          'detail-panel',
          isDetailDrawerCollapsed ? 'is-detail-drawer-closed' : 'is-detail-drawer-open',
          isDetailDrawerFull ? 'is-detail-drawer-full' : 'is-detail-drawer-compact',
          isResizingDetailDrawer ? 'is-resizing-detail-drawer' : '',
        ].join(' ')}
        aria-live="polite"
        style={{ '--detail-drawer-height': `${detailDrawerHeight}px` }}
      >
        {selectedSkill ? (
          <>
            <header
              className="detail-drawer-bar"
              onPointerDown={startDetailDrawerResize}
              onPointerMove={moveDetailDrawerResize}
              onPointerUp={stopDetailDrawerResize}
              onPointerCancel={stopDetailDrawerResize}
            >
              <button
                className="detail-drawer-title"
                type="button"
                aria-expanded={!isDetailDrawerCollapsed}
                onClick={toggleDetailDrawer}
              >
                <img src={assetUrl(selectedSkill.iconUrl)} alt="" width="28" height="28" />
                <span>
                  <strong>{translatedSkillName(selectedSkill, language)}</strong>
                  <em>
                    {selectedSkillLevel}/{selectedSkill.maxLevel}
                  </em>
                </span>
              </button>
              <span className="detail-drawer-actions">
                {!isDetailDrawerFull ? (
                  <button
                    type="button"
                    aria-label={translateUi('Configure pinned specs', language)}
                    aria-pressed={showDrawerSpecOptions}
                    ref={drawerSpecButtonRef}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={() => setShowDrawerSpecOptions((current) => !current)}
                  >
                    <Settings size={16} aria-hidden="true" />
                  </button>
                ) : null}
                <button
                  type="button"
                  aria-label={translateUi('Collapse skill details', language)}
                  aria-expanded={!isDetailDrawerCollapsed}
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={lowerDetailDrawer}
                  disabled={isDetailDrawerCollapsed}
                >
                  <ChevronDown size={17} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label={translateUi('Open skill details', language)}
                  aria-expanded={!isDetailDrawerCollapsed}
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={isDetailDrawerCollapsed ? openCompactDetailDrawer : openFullDetailDrawer}
                  disabled={isDetailDrawerFull}
                >
                  <ChevronUp size={17} aria-hidden="true" />
                </button>
                {showDrawerSpecOptions && !isDetailDrawerFull ? (
                  <PinnedSpecOptionsPopover
                    className="detail-spec-popover"
                    language={language}
                    popoverRef={drawerSpecPopoverRef}
                    selectedSpecIds={pinnedSpecIds}
                    onSpecIdsChange={setPinnedSpecIds}
                  />
                ) : null}
              </span>
            </header>
            <div className="detail-drawer-body">
              {shouldShowFullSkillDetails ? (
                <SkillCard
                  model={activeModel}
                  skill={selectedSkill}
                  level={selectedSkillLevel}
                  specVersion={specVersion}
                  language={language}
                  onIncreaseSkill={increaseSkill}
                  onDecreaseSkill={decreaseSkill}
                  canIncreaseSkill={canIncreaseSkill}
                  canDecreaseSkill={(id) => canDecreaseSkillAcrossTabs(activeTab.id, id, levelsByTab, plannerIndex)}
                  onPinSkill={pinSkill}
                  isPinned={pinnedSkillIds.includes(selectedSkill.id)}
                />
              ) : (
                <PinnedSkillSummary
                  model={activeModel}
                  skill={selectedSkill}
                  specVersion={specVersion}
                  language={language}
                  specIds={pinnedSpecIds}
                  className="detail-compact-specs"
                />
              )}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </aside>

      {pinnedSkills.map((skill, index) => (
        <PinnedSkillPopup
          key={skill.id}
          model={activeModel}
          skill={skill}
          specVersion={specVersion}
          language={language}
          index={index}
          globalSpecIds={pinnedSpecIds}
          localSpecIds={localPinnedSpecIdsBySkill[skill.id]}
          onGlobalSpecIdsChange={setPinnedSpecIds}
          onLocalSpecIdsChange={(specIds) => changeLocalPinnedSpecIds(skill.id, specIds)}
          onClose={() => unpinSkill(skill.id)}
        />
      ))}
    </main>
  )
}

function skillTabsForData(data) {
  if (data.skillTabs?.length) return data.skillTabs
  return [
    {
      id: 'current',
      label: data.className,
      tree: data.tree,
      skills: data.skills,
    },
  ]
}

function defaultSpecVersionForDataSet(dataSet) {
  const defaultVersion = EXPANDED_CLASS_IDS.has(dataSet.id)
    ? EXPANDED_CLASS_DEFAULT_SPEC_VERSION
    : MAIN_CLASS_DEFAULT_SPEC_VERSION

  return isValidSpecVersion(dataSet.data, defaultVersion) ? defaultVersion : 'current'
}

function tabIconUrl(tab, dataSet) {
  const source = tab.id === 'current'
    ? (dataSet.jobIconUrl ?? dataSet.data.tree.jobIconUrl ?? tab.jobIconUrl)
    : tab.jobIconUrl
  return jobIconUrlForLabelAndPath(tab.label, source)
}

function tabForSpecVersion(data, tab, specVersion) {
  const skills = tab.skills.filter((skill) => skillAvailableInVersion(data, skill, specVersion))
  return {
    ...tab,
    tree: treeForVisibleSkills(tab.tree, skills),
    skills,
  }
}

function treeForVisibleSkills(tree, skills) {
  if (!skills.length) return tree

  const maxRow = Math.max(...skills.map((skill) => Number(skill.tree.row ?? 0)))
  const maxCol = Math.max(...skills.map((skill) => Number(skill.tree.col ?? 0)))
  const columns = Math.max(Number(tree.columns ?? 0), maxCol + 1, 1)

  return {
    ...tree,
    columns,
    rows: maxRow + 1,
  }
}

function firstValidTabId(tabs, ...tabIds) {
  for (const tabId of tabIds) {
    if (tabs.some((tab) => tab.id === tabId)) return tabId
  }

  return tabs[0]?.id
}

function previousRequirementGroupsForSkill(skill, plannerIndex, tabs, language) {
  if (!skill) return []

  const selectedTabId = plannerIndex.tabIdBySkillId.get(skillKey(skill.id))
  const selectedIndex = tabIndexForId(plannerIndex, selectedTabId)
  if (selectedIndex === null) return []

  const groupsByTabId = new Map()
  const visitedCurrentSkillIds = new Set()
  const visitCurrentClassRequirements = (currentSkill) => {
    const currentSkillId = skillKey(currentSkill?.id)
    if (!currentSkill || visitedCurrentSkillIds.has(currentSkillId)) return
    visitedCurrentSkillIds.add(currentSkillId)

    for (const requirement of currentSkill.tree.requirements) {
      const requiredSkill = plannerIndex.skillById.get(skillKey(requirement.id))
      const requirementTabId = plannerIndex.tabIdBySkillId.get(skillKey(requirement.id))
      const requirementIndex = tabIndexForId(plannerIndex, requirementTabId)

      if (!requiredSkill || requirementIndex === null) continue

      if (requirementIndex > selectedIndex) {
        const tab = plannerIndex.tabById.get(requirementTabId)
        const group = groupsByTabId.get(requirementTabId) ?? {
          tab,
          requirementsBySkillId: new Map(),
        }
        const existing = group.requirementsBySkillId.get(requiredSkill.id)
        group.requirementsBySkillId.set(requiredSkill.id, {
          skill: requiredSkill,
          name: translatedSkillName(requiredSkill, language),
          level: Math.max(existing?.level ?? 0, requirement.level),
        })
        groupsByTabId.set(requirementTabId, group)
        continue
      }

      if (requirementIndex === selectedIndex) {
        visitCurrentClassRequirements(requiredSkill)
      }
    }
  }

  visitCurrentClassRequirements(skill)

  return tabs
    .map((tab) => {
      const group = groupsByTabId.get(tab.id)
      if (!group) return null

      return {
        tab,
        requirements: [...group.requirementsBySkillId.values()].sort(compareRequirementItems),
      }
    })
    .filter(Boolean)
}

function compareRequirementItems(first, second) {
  return Number(first.skill.tree.row ?? 0) - Number(second.skill.tree.row ?? 0)
    || Number(first.skill.tree.col ?? 0) - Number(second.skill.tree.col ?? 0)
    || first.name.localeCompare(second.name)
}

function readPlannerSettings(classId) {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey(classId)) ?? 'null')
  } catch {
    return null
  }
}

function writePlannerSettings(classId, settings) {
  try {
    window.localStorage.setItem(storageKey(classId), JSON.stringify(settings))
  } catch {
    // Ignore storage failures; the simulator still works for this session.
  }
}

function storageKey(classId) {
  return `skill-planner-settings:${classId}`
}

function readBuildPresets(classId) {
  try {
    return sanitizeBuildPresets(JSON.parse(window.localStorage.getItem(presetsStorageKey(classId)) ?? '[]'))
  } catch {
    return []
  }
}

function writeBuildPresets(classId, presets) {
  try {
    window.localStorage.setItem(presetsStorageKey(classId), JSON.stringify(sanitizeBuildPresets(presets)))
  } catch {
    // Ignore storage failures; named presets are an optional convenience.
  }
}

function presetsStorageKey(classId) {
  return `skill-planner-presets:${classId}`
}

function isValidSpecVersion(data, versionId) {
  if (versionId === 'pre' || versionId === 'current') return true
  return data.rebalanceVersions.some((version) => version.id === versionId)
}

function sanitizeLevelsByTab(value) {
  if (!value || typeof value !== 'object') return {}

  const levelsByTab = {}
  for (const [tabId, levels] of Object.entries(value)) {
    if (!levels || typeof levels !== 'object') continue
    const sanitized = {}
    for (const [skillId, level] of Object.entries(levels)) {
      const number = Number(level)
      if (Number.isFinite(number) && number > 0) sanitized[skillId] = number
    }
    if (Object.keys(sanitized).length) levelsByTab[tabId] = sanitized
  }

  return levelsByTab
}

function sanitizeBuildPresets(value) {
  if (!Array.isArray(value)) return []

  return value
    .map((preset) => ({
      id: sanitizePresetName(preset?.id),
      name: sanitizePresetName(preset?.name),
      activeTabId: sanitizePresetName(preset?.activeTabId),
      specVersion: sanitizePresetName(preset?.specVersion),
      levelsByTab: sanitizeLevelsByTab(preset?.levelsByTab),
      savedAt: sanitizePresetName(preset?.savedAt),
    }))
    .filter((preset) => preset.id && preset.name)
    .slice(0, MAX_BUILD_PRESETS)
}

function sanitizePresetName(value) {
  return String(value ?? '').replace(/\s+/g, ' ').trim().slice(0, 80)
}

function createPresetId() {
  return `preset-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function nextPresetName(presets) {
  let index = presets.length + 1
  const names = new Set(presets.map((preset) => preset.name))
  while (names.has(`Preset ${index}`)) index += 1
  return `Preset ${index}`
}

function sanitizeDetailPanelWidth(value) {
  return clamp(Number(value) || DETAIL_PANEL_DEFAULT_WIDTH, DETAIL_PANEL_MIN_WIDTH, DETAIL_PANEL_MAX_WIDTH)
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function pointSummaryForTab({ activeTab, effectiveLevels, levelsByTab, plannerIndex }) {
  const activeSourceLevels = levelsByTab[activeTab.id] ?? EMPTY_LEVELS
  const treePoints = allocatedTotal(effectiveLevels)
  const { pastTreePoints } = splitSourcePoints(activeSourceLevels, activeTab.id, plannerIndex)

  if (pastTreePoints > 0) {
    return {
      treePoints,
      pastTreePoints,
      usesPastPointSplit: true,
    }
  }

  return { treePoints, pastTreePoints: 0, usesPastPointSplit: false }
}

function normalizeBorrowedOverflow({ data, levelsByTab, plannerIndex, specVersion }) {
  const draft = cloneLevelsByTab(levelsByTab)

  for (let ownerIndex = plannerIndex.tabs.length - 1; ownerIndex > 0; ownerIndex -= 1) {
    const sourceTab = plannerIndex.tabs[ownerIndex]
    const targetTab = plannerIndex.tabs[ownerIndex - 1]
    if (!sourceTab || !targetTab) continue

    let overflow = splitSourcePoints(draft[sourceTab.id] ?? EMPTY_LEVELS, sourceTab.id, plannerIndex).treePoints
      - pointLimitForTab(data, sourceTab, specVersion)

    while (overflow > 0) {
      if (!moveOwnTreePointToLaterSource(draft, sourceTab.id, targetTab.id, plannerIndex)) break
      overflow -= 1
    }
  }

  return cleanupLevelsByTab(draft)
}

function moveOwnTreePointToLaterSource(levelsByTab, fromTabId, toTabId, plannerIndex) {
  const fromLevels = levelsByTab[fromTabId] ?? EMPTY_LEVELS
  const movedEntry = Object.entries(fromLevels)
    .reverse()
    .find(([skillId, level]) => (
      skillLevel(fromLevels, skillId) > 0
      && Number(level || 0) > 0
      && plannerIndex.tabIdBySkillId.get(skillKey(skillId)) === fromTabId
    ))
  if (!movedEntry) return false

  const [skillId] = movedEntry
  const toLevels = levelsByTab[toTabId] ?? EMPTY_LEVELS
  levelsByTab[fromTabId] = cleanupLevels({
    ...fromLevels,
    [skillId]: skillLevel(fromLevels, skillId) - 1,
  })
  levelsByTab[toTabId] = {
    ...toLevels,
    [skillId]: skillLevel(toLevels, skillId) + 1,
  }

  return true
}

function resetSourceTabLevels(levelsByTab, tabId, plannerIndex) {
  const next = cloneLevelsByTab(levelsByTab)
  delete next[tabId]
  removeInvalidDependents(next, plannerIndex)
  return cleanupLevelsByTab(next)
}

function resetTabSkillLevels(levelsByTab, tab, plannerIndex) {
  const skillIds = new Set(tab.skills.map((skill) => skillKey(skill.id)))
  const next = cloneLevelsByTab(levelsByTab)

  for (const [sourceTabId, levels] of Object.entries(next)) {
    for (const skillId of Object.keys(levels)) {
      if (!skillIds.has(skillKey(skillId))) continue
      if (!sourceTabCanSpendOnSkill(sourceTabId, skillId, plannerIndex)) continue

      delete levels[skillId]
    }
    next[sourceTabId] = cleanupLevels(levels)
  }

  removeInvalidDependents(next, plannerIndex)

  return cleanupLevelsByTab(next)
}

function skillKey(id) {
  return String(id)
}

function levelsByTabEqual(first, second) {
  const firstTabIds = Object.keys(first).sort()
  const secondTabIds = Object.keys(second).sort()
  if (firstTabIds.length !== secondTabIds.length) return false

  return firstTabIds.every((tabId, index) => {
    if (tabId !== secondTabIds[index]) return false

    const firstLevels = first[tabId] ?? EMPTY_LEVELS
    const secondLevels = second[tabId] ?? EMPTY_LEVELS
    const firstSkillIds = Object.keys(firstLevels).sort()
    const secondSkillIds = Object.keys(secondLevels).sort()
    if (firstSkillIds.length !== secondSkillIds.length) return false

    return firstSkillIds.every((skillId, skillIndex) => (
      skillId === secondSkillIds[skillIndex]
      && skillLevel(firstLevels, skillId) === skillLevel(secondLevels, skillId)
    ))
  })
}

function createPlannerIndex(tabs) {
  const tabById = new Map(tabs.map((tab) => [tab.id, tab]))
  const tabOrder = new Map(tabs.map((tab, index) => [tab.id, index]))
  const skillById = new Map()
  const tabIdBySkillId = new Map()

  for (const tab of tabs) {
    for (const skill of tab.skills) {
      const key = skillKey(skill.id)
      skillById.set(key, skill)
      if (!tabIdBySkillId.has(key)) tabIdBySkillId.set(key, tab.id)
    }
  }

  return { tabs, tabById, tabOrder, skillById, tabIdBySkillId }
}

function effectiveLevelsForTab(levelsByTab, tab, plannerIndex) {
  return Object.fromEntries(
    tab.skills
      .map((skill) => [skill.id, Math.min(effectiveSkillLevel(levelsByTab, skill.id, plannerIndex), skill.maxLevel)])
      .filter(([, level]) => level > 0),
  )
}

function effectiveSkillLevel(levelsByTab, skillId, plannerIndex) {
  const skill = plannerIndex.skillById.get(skillKey(skillId))
  let level = 0

  for (const [sourceTabId, levels] of Object.entries(levelsByTab)) {
    if (!sourceTabCanSpendOnSkill(sourceTabId, skillId, plannerIndex)) continue
    level += skillLevel(levels, skillId)
  }

  return skill ? Math.min(level, skill.maxLevel) : level
}

function canBuySkillAcrossTabs(options) {
  return buySkillAcrossTabs(options).ok
}

function buySkillAcrossTabs({ activeTab, data, id, levelsByTab, plannerIndex, specVersion }) {
  const skill = plannerIndex.skillById.get(skillKey(id))
  if (!skill) return { ok: false, levelsByTab }

  if (effectiveSkillLevel(levelsByTab, id, plannerIndex) >= skill.maxLevel) {
    return { ok: false, levelsByTab }
  }

  const draft = cloneLevelsByTab(levelsByTab)

  if (!ensureRequirements({
    draft,
    plannerIndex,
    preferredTabId: activeTab.id,
    skill,
  })) {
    return { ok: false, levelsByTab }
  }

  const nextLevel = effectiveSkillLevel(draft, id, plannerIndex) + 1
  if (!addLevelsForSkill({
    draft,
    plannerIndex,
    preferredTabId: activeTab.id,
    skill,
    targetLevel: nextLevel,
  })) {
    return { ok: false, levelsByTab }
  }

  return {
    ok: true,
    levelsByTab: normalizeBorrowedOverflow({ data, levelsByTab: draft, plannerIndex, specVersion }),
  }
}

function refundSkillAcrossTabs({ activeTab, data, id, levelsByTab, plannerIndex, specVersion }) {
  const sourceTabId = refundableSourceTabId(activeTab.id, id, levelsByTab, plannerIndex)
  if (!sourceTabId) return { ok: false, levelsByTab }

  const draft = cloneLevelsByTab(levelsByTab)
  const sourceLevels = draft[sourceTabId] ?? EMPTY_LEVELS
  draft[sourceTabId] = cleanupLevels({
    ...sourceLevels,
    [id]: skillLevel(sourceLevels, id) - 1,
  })
  removeInvalidDependents(draft, plannerIndex)

  return {
    ok: true,
    levelsByTab: normalizeBorrowedOverflow({ data, levelsByTab: draft, plannerIndex, specVersion }),
  }
}

function ensureRequirements({ draft, plannerIndex, preferredTabId, skill }) {
  for (const requirement of skill.tree.requirements) {
    const requiredSkill = plannerIndex.skillById.get(skillKey(requirement.id))
    if (!requiredSkill) continue

    const requirementSourceTabId = ownSourceTabForSkill({
      fallbackTabId: preferredTabId,
      plannerIndex,
      skillId: requiredSkill.id,
    })

    if (!ensureRequirements({
      draft,
      plannerIndex,
      preferredTabId: requirementSourceTabId,
      skill: requiredSkill,
    })) {
      return false
    }

    if (!addLevelsForSkill({
      draft,
      plannerIndex,
      preferredTabId: requirementSourceTabId,
      skill: requiredSkill,
      targetLevel: requirement.level,
    })) {
      return false
    }
  }

  return true
}

function addLevelsForSkill({ draft, plannerIndex, preferredTabId, skill, targetLevel }) {
  if (targetLevel > skill.maxLevel) return false

  while (effectiveSkillLevel(draft, skill.id, plannerIndex) < targetLevel) {
    const sourceTabId = sourceTabForSkill({
      plannerIndex,
      preferredTabId,
      skillId: skill.id,
    })
    if (!sourceTabId) return false

    const levels = draft[sourceTabId] ?? EMPTY_LEVELS
    draft[sourceTabId] = {
      ...levels,
      [skill.id]: skillLevel(levels, skill.id) + 1,
    }
  }

  return true
}

function sourceTabForSkill({ plannerIndex, preferredTabId, skillId }) {
  return sourceTabCandidates(preferredTabId, skillId, plannerIndex)[0]?.id ?? null
}

function ownSourceTabForSkill({ fallbackTabId, plannerIndex, skillId }) {
  const ownerTabId = plannerIndex.tabIdBySkillId.get(skillKey(skillId))
  if (ownerTabId && sourceTabCanSpendOnSkill(ownerTabId, skillId, plannerIndex)) return ownerTabId
  return fallbackTabId
}

function sourceTabCandidates(preferredTabId, skillId, plannerIndex) {
  const ownerTabId = plannerIndex.tabIdBySkillId.get(skillKey(skillId))
  const ownerIndex = tabIndexForId(plannerIndex, ownerTabId)
  if (ownerIndex === null) return []

  const preferredIndex = tabIndexForId(plannerIndex, preferredTabId)
  const candidates = []
  const seen = new Set()
  const pushIndex = (index) => {
    const tab = plannerIndex.tabs[index]
    if (!tab || index > ownerIndex || seen.has(tab.id)) return
    if (!sourceTabCanSpendOnSkill(tab.id, skillId, plannerIndex)) return

    seen.add(tab.id)
    candidates.push(tab)
  }

  if (preferredIndex === null) {
    for (let index = ownerIndex; index >= 0; index -= 1) pushIndex(index)
    return candidates
  }

  pushIndex(preferredIndex)
  for (let index = preferredIndex - 1; index >= 0; index -= 1) pushIndex(index)
  for (let index = preferredIndex + 1; index <= ownerIndex; index += 1) pushIndex(index)

  return candidates
}

function sourceTabCanSpendOnSkill(sourceTabId, skillId, plannerIndex) {
  const ownerTabId = plannerIndex.tabIdBySkillId.get(skillKey(skillId))
  const sourceIndex = tabIndexForId(plannerIndex, sourceTabId)
  const ownerIndex = tabIndexForId(plannerIndex, ownerTabId)

  return sourceIndex !== null && ownerIndex !== null && sourceIndex <= ownerIndex
}

function tabIndexForId(plannerIndex, tabId) {
  const index = plannerIndex.tabOrder.get(tabId)
  return Number.isInteger(index) ? index : null
}

function canDecreaseSkillAcrossTabs(tabId, id, levelsByTab, plannerIndex) {
  return Boolean(refundableSourceTabId(tabId, id, levelsByTab, plannerIndex))
}

function refundableSourceTabId(preferredTabId, skillId, levelsByTab, plannerIndex) {
  const refundableSources = sourceTabCandidates(preferredTabId, skillId, plannerIndex)
    .sort((first, second) => tabIndexForId(plannerIndex, first.id) - tabIndexForId(plannerIndex, second.id))

  for (const sourceTab of refundableSources) {
    const levels = levelsByTab[sourceTab.id] ?? EMPTY_LEVELS
    if (skillLevel(levels, skillId) > 0) return sourceTab.id
  }

  return null
}

function removeInvalidDependents(levelsByTab, plannerIndex) {
  let changed = true

  while (changed) {
    changed = false

    for (const [sourceTabId, levels] of Object.entries(levelsByTab)) {
      for (const skillId of Object.keys(levels)) {
        const skill = plannerIndex.skillById.get(skillKey(skillId))
        if (!skill) {
          delete levelsByTab[sourceTabId][skillId]
          changed = true
          continue
        }

        if (skillLevel(levels, skillId) <= 0) continue
        if (requirementsAreMet({ levelsByTab, plannerIndex, skill })) continue

        delete levelsByTab[sourceTabId][skillId]
        changed = true
      }
    }
  }
}

function requirementsAreMet({ levelsByTab, plannerIndex, skill }) {
  for (const requirement of skill.tree.requirements) {
    if (effectiveSkillLevel(levelsByTab, requirement.id, plannerIndex) < requirement.level) return false
  }

  return true
}

function splitSourcePoints(levels, sourceTabId, plannerIndex) {
  const sourceIndex = tabIndexForId(plannerIndex, sourceTabId)
  let treePoints = 0
  let pastTreePoints = 0

  for (const [skillId, level] of Object.entries(levels)) {
    const ownerTabId = plannerIndex.tabIdBySkillId.get(skillKey(skillId))
    const ownerIndex = tabIndexForId(plannerIndex, ownerTabId)
    const points = Number(level || 0)
    if (!points || sourceIndex === null || ownerIndex === null) continue

    if (ownerIndex === sourceIndex) treePoints += points
    if (ownerIndex > sourceIndex) pastTreePoints += points
  }

  return { treePoints, pastTreePoints }
}

function pointLimitForTab(data, tab, specVersion) {
  if (tab.id === 'current') return pointLimitForSpecVersion(data, specVersion)
  return Number(tab.pointLimit ?? 49)
}

function cloneLevelsByTab(levelsByTab) {
  return Object.fromEntries(Object.entries(levelsByTab).map(([tabId, levels]) => [tabId, { ...levels }]))
}

function cleanupLevelsByTab(levelsByTab) {
  return Object.fromEntries(
    Object.entries(levelsByTab)
      .map(([tabId, levels]) => [tabId, cleanupLevels(levels)])
      .filter(([, levels]) => Object.keys(levels).length),
  )
}
