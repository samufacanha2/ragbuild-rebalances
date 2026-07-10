import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './ClassSkillPlannerStyles.css'
import { createClassModel, pointLimitForSpecVersion } from '../../lib/classModel.js'
import { allocatedTotal, cleanupLevels, skillLevel } from '../../lib/pointBuy.js'
import { skillAvailableInVersion } from '../../lib/specs.js'
import { BuildToolbar } from '../BuildToolbar'
import { ClassHeader } from '../ClassHeader'
import { EmptyState } from '../EmptyState'
import { SkillCard } from '../SkillCard'
import { SkillTree } from '../SkillTree'

const EMPTY_LEVELS = {}
const DETAIL_PANEL_DEFAULT_WIDTH = 620
const DETAIL_PANEL_MIN_WIDTH = 360
const DETAIL_PANEL_MAX_WIDTH = 1100
const DETAIL_RESIZER_WIDTH = 18
const TREE_AREA_MIN_WIDTH = 560

export function ClassSkillPlanner({ dataSet, language, routeTabId, onActiveTabChange }) {
  const shellRef = useRef(null)
  const tabs = useMemo(() => skillTabsForData(dataSet.data), [dataSet.data])
  const savedSettings = useMemo(() => readPlannerSettings(dataSet.id), [dataSet.id])
  const initialTabId = firstValidTabId(tabs, routeTabId, savedSettings?.activeTabId)
  const [activeTabId, setActiveTabId] = useState(initialTabId)
  const [specVersion, setSpecVersion] = useState(() =>
    isValidSpecVersion(dataSet.data, savedSettings?.specVersion) ? savedSettings.specVersion : 'current',
  )
  const [levelsByTab, setLevelsByTab] = useState(() => sanitizeLevelsByTab(savedSettings?.levelsByTab))
  const [detailPanelWidth, setDetailPanelWidth] = useState(() => sanitizeDetailPanelWidth(savedSettings?.detailPanelWidth))
  const [isResizingDetailPanel, setIsResizingDetailPanel] = useState(false)
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
    () => visibleLevelsForTab(levelsByTab[activeTab.id] ?? EMPTY_LEVELS, activeTab),
    [activeTab, levelsByTab],
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
    writePlannerSettings(dataSet.id, {
      activeTabId: activeTab.id,
      detailPanelWidth,
      specVersion,
      levelsByTab,
    })
  }, [activeTab.id, dataSet.id, detailPanelWidth, levelsByTab, specVersion])

  const selectedSkill = useMemo(
    () => model.data.skills.find((skill) => skill.id === selectedId) ?? null,
    [model.data.skills, selectedId],
  )
  const totalPoints = useMemo(() => allocatedTotal(levels), [levels])

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
        id,
        levelsByTab,
        plannerIndex,
      })
      setSelectedId(id)
      if (result.ok) setLevelsByTab(result.levelsByTab)
    },
    [activeTab, levelsByTab, plannerIndex],
  )

  const resetBuild = useCallback(() => {
    setLevelsByTab((current) => withTabLevels(current, activeTab.id, {}))
  }, [activeTab.id])

  const changeTab = useCallback(
    (tabId) => {
      setActiveTabId(tabId)
      onActiveTabChange(tabId)
    },
    [onActiveTabChange],
  )
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
      style={{ '--detail-panel-width': `${detailPanelWidth}px` }}
    >
      <section className="tree-area" aria-label={`${model.data.className} skill tree`}>
        <ClassHeader
          model={activeModel}
          specVersion={specVersion}
          language={language}
          onSpecVersionChange={setSpecVersion}
        />

        {tabs.length > 1 ? (
          <div className="skill-tabs" role="tablist" aria-label="Class skill trees">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={tab.id === activeTab.id ? 'skill-tab is-active' : 'skill-tab'}
                type="button"
                role="tab"
                aria-selected={tab.id === activeTab.id}
                onClick={() => changeTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        ) : null}

        <BuildToolbar totalPoints={totalPoints} pointLimit={pointLimit} language={language} onReset={resetBuild} />

        <SkillTree
          model={activeModel}
          levels={levels}
          selectedId={selectedId}
          specVersion={specVersion}
          onSelectSkill={setSelectedId}
          onIncreaseSkill={increaseSkill}
          onDecreaseSkill={decreaseSkill}
          canDecreaseSkill={(id) => canDecreaseSkillAcrossTabs(activeTab.id, id, levelsByTab)}
          language={language}
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

      <aside className="detail-panel" aria-live="polite">
        {selectedSkill ? (
          <SkillCard
            model={activeModel}
            skill={selectedSkill}
            level={skillLevel(levels, selectedSkill.id)}
            levels={levels}
            specVersion={specVersion}
            language={language}
            onIncreaseSkill={increaseSkill}
            onDecreaseSkill={decreaseSkill}
            canDecreaseSkill={(id) => canDecreaseSkillAcrossTabs(activeTab.id, id, levelsByTab)}
          />
        ) : (
          <EmptyState />
        )}
      </aside>
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

function visibleLevelsForTab(levels, tab) {
  const visibleIds = new Set(tab.skills.map((skill) => String(skill.id)))
  return Object.fromEntries(Object.entries(levels).filter(([id]) => visibleIds.has(id)))
}

function firstValidTabId(tabs, ...tabIds) {
  for (const tabId of tabIds) {
    if (tabs.some((tab) => tab.id === tabId)) return tabId
  }

  return tabs[0]?.id
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

function sanitizeDetailPanelWidth(value) {
  return clamp(Number(value) || DETAIL_PANEL_DEFAULT_WIDTH, DETAIL_PANEL_MIN_WIDTH, DETAIL_PANEL_MAX_WIDTH)
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

function withTabLevels(levelsByTab, tabId, levels) {
  const next = { ...levelsByTab }
  if (Object.keys(levels).length) {
    next[tabId] = levels
  } else {
    delete next[tabId]
  }
  return next
}

function createPlannerIndex(tabs) {
  const tabById = new Map(tabs.map((tab) => [tab.id, tab]))
  const skillById = new Map()
  const tabIdBySkillId = new Map()

  for (const tab of tabs) {
    for (const skill of tab.skills) {
      skillById.set(skill.id, skill)
      if (!tabIdBySkillId.has(skill.id)) tabIdBySkillId.set(skill.id, tab.id)
    }
  }

  return { tabById, skillById, tabIdBySkillId }
}

function buySkillAcrossTabs({ activeTab, data, id, levelsByTab, plannerIndex, specVersion }) {
  const skill = plannerIndex.skillById.get(id)
  if (!skill) return { ok: false, levelsByTab }

  const draft = cloneLevelsByTab(levelsByTab)
  const targetLevels = draft[activeTab.id] ?? {}
  if (skillLevel(targetLevels, id) >= skill.maxLevel) return { ok: false, levelsByTab }

  ensureRequirements({
    data,
    draft,
    plannerIndex,
    skill,
    specVersion,
    tabId: activeTab.id,
  })

  const nextTargetLevels = draft[activeTab.id] ?? {}
  nextTargetLevels[id] = skillLevel(nextTargetLevels, id) + 1
  draft[activeTab.id] = nextTargetLevels

  return allTabsWithinLimit({ data, levelsByTab: draft, plannerIndex, specVersion })
    ? { ok: true, levelsByTab: cleanupLevelsByTab(draft) }
    : { ok: false, levelsByTab }
}

function refundSkillAcrossTabs({ activeTab, id, levelsByTab, plannerIndex }) {
  const levels = levelsByTab[activeTab.id] ?? EMPTY_LEVELS
  const currentLevel = skillLevel(levels, id)
  if (currentLevel <= 0) return { ok: false, levelsByTab }

  const draft = cloneLevelsByTab(levelsByTab)
  draft[activeTab.id] = cleanupLevels({
    ...(draft[activeTab.id] ?? {}),
    [id]: currentLevel - 1,
  })
  removeInvalidDependents(draft, plannerIndex)

  return {
    ok: true,
    levelsByTab: cleanupLevelsByTab(draft),
  }
}

function ensureRequirements({ data, draft, plannerIndex, skill, specVersion, tabId }) {
  for (const requirement of skill.tree.requirements) {
    const requirementTabId = requirement.visible ? tabId : plannerIndex.tabIdBySkillId.get(requirement.id)
    if (!requirementTabId) continue

    const requiredSkill = plannerIndex.skillById.get(requirement.id)
    if (!requiredSkill) continue

    ensureRequirements({
      data,
      draft,
      plannerIndex,
      skill: requiredSkill,
      specVersion,
      tabId: requirementTabId,
    })

    const levels = draft[requirementTabId] ?? {}
    if (skillLevel(levels, requirement.id) < requirement.level) {
      draft[requirementTabId] = {
        ...levels,
        [requirement.id]: requirement.level,
      }
    }
  }
}

function canDecreaseSkillAcrossTabs(tabId, id, levelsByTab) {
  const levels = levelsByTab[tabId] ?? EMPTY_LEVELS
  return skillLevel(levels, id) > 0
}

function removeInvalidDependents(levelsByTab, plannerIndex) {
  let changed = true

  while (changed) {
    changed = false

    for (const [tabId, tab] of plannerIndex.tabById.entries()) {
      const levels = levelsByTab[tabId] ?? EMPTY_LEVELS
      for (const skill of tab.skills) {
        if (skillLevel(levels, skill.id) <= 0) continue
        if (requirementsAreMet({ levelsByTab, plannerIndex, skill, tabId })) continue

        delete levelsByTab[tabId][skill.id]
        changed = true
      }
    }
  }
}

function requirementsAreMet({ levelsByTab, plannerIndex, skill, tabId }) {
  for (const requirement of skill.tree.requirements) {
    const requirementTabId = requirement.visible ? tabId : plannerIndex.tabIdBySkillId.get(requirement.id)
    if (!requirementTabId) return false

    const levels = levelsByTab[requirementTabId] ?? EMPTY_LEVELS
    if (skillLevel(levels, requirement.id) < requirement.level) return false
  }

  return true
}

function allTabsWithinLimit({ data, levelsByTab, plannerIndex, specVersion }) {
  for (const [tabId, levels] of Object.entries(levelsByTab)) {
    const tab = plannerIndex.tabById.get(tabId)
    if (!tab) continue
    if (allocatedTotalForTab(levels, tab) > pointLimitForTab(data, tab, specVersion)) return false
  }

  return true
}

function allocatedTotalForTab(levels, tab) {
  return allocatedTotal(visibleLevelsForTab(levels, tab))
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
