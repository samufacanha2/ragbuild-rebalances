import { Minus, Plus, Settings, X } from 'lucide-react'
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import './PinnedSkillPopupStyles.css'
import { DEFAULT_PINNED_SPEC_IDS, PINNED_SPEC_OPTIONS } from './config.js'
import { assetUrl } from '../../lib/dom.js'
import { effectiveSpecRows } from '../../lib/specs.js'
import { selectedComparisonSpecIds, updatedComparisonHiddenSpecIds } from '../../lib/rebalancePinnedSpecSelection.js'
import { translateRebalanceNote } from '../../lib/rebalanceNoteTranslations.js'
import { translatedSkillName, translateSpecLabel, translateSpecValue, translateUi } from '../../lib/translations.js'

const POPUP_MARGIN = 8
const POPUP_GAP = 0
const POPUP_STICK_DISTANCE = 18
const POPUP_DEFAULT_WIDTH = 340
const POPUP_MOBILE_WIDTH = 320
const POPUP_DEFAULT_HEIGHT = 180

export function PinnedSkillPopup({
  model,
  skill,
  specVersion,
  language,
  index,
  globalSpecIds = DEFAULT_PINNED_SPEC_IDS,
  globalHiddenSpecIds = [],
  localSpecIds,
  localHiddenSpecIds,
  onGlobalSpecIdsChange,
  onLocalSpecIdsChange,
  onClose,
  comparisonMode = false,
  comparison = null,
  notes = [],
  fallbackName = '',
  iconUrl,
  loadError = false,
}) {
  const popupRef = useRef(null)
  const configButtonRef = useRef(null)
  const configPopoverRef = useRef(null)
  const dragRef = useRef(null)
  const initialPlacementRef = useRef(null)
  const [position, setPosition] = useState(() => {
    const placement = initialPopupPlacement(index)
    initialPlacementRef.current = placement
    return placement.position
  })
  const [showConfig, setShowConfig] = useState(false)
  const [minimized, setMinimized] = useState(false)
  const [applyToAll, setApplyToAll] = useState(true)
  const name = translatedSkillName(skill ?? { name: fallbackName }, language)
  const options = useMemo(() => comparisonMode ? [...new Set(comparison?.rows.map((row) => row.label) ?? [])].map((label) => ({ id: label, label })) : PINNED_SPEC_OPTIONS, [comparisonMode, comparison])
  const optionIds = options.map((option) => option.id)
  const globalSelection = comparisonMode ? selectedComparisonSpecIds(optionIds, globalHiddenSpecIds) : globalSpecIds
  const selectedSpecIds = applyToAll ? globalSelection : comparisonMode
    ? selectedComparisonSpecIds(optionIds, localHiddenSpecIds ?? globalHiddenSpecIds)
    : (localSpecIds ?? globalSelection)
  const rows = useMemo(() => model && skill ? effectiveSpecRows(model, skill, specVersion, null) : [], [model, skill, specVersion])
  const compactItems = useMemo(
    () => compactSpecItems(rows, selectedSpecIds, language),
    [language, rows, selectedSpecIds],
  )

  useLayoutEffect(() => {
    const placement = initialPlacementRef.current
    if (!placement || placement.settled) return
    placement.settled = true
    setPosition((current) => settleInitialPopupPosition(current, popupRef.current, placement))
  }, [])

  useLayoutEffect(() => {
    if (!comparisonMode) return
    setPosition((current) => {
      const next = clampForMode(current, popupRef.current, comparisonMode)
      return next.x === current.x && next.y === current.y ? current : next
    })
  }, [comparison, comparisonMode, minimized])

  useEffect(() => {
    const keepInView = () => setPosition((current) => {
      const next = clampForMode(current, popupRef.current, comparisonMode)
      return next.x === current.x && next.y === current.y ? current : next
    })
    const observer = new ResizeObserver(keepInView)
    if (comparisonMode && popupRef.current) observer.observe(popupRef.current)
    window.addEventListener('resize', keepInView)
    return () => { observer.disconnect(); window.removeEventListener('resize', keepInView) }
  }, [comparisonMode])

  useLayoutEffect(() => {
    if (!showConfig) return undefined

    const closeConfig = (event) => {
      if (configButtonRef.current?.contains(event.target)) return
      if (configPopoverRef.current?.contains(event.target)) return
      setShowConfig(false)
    }

    document.addEventListener('mousedown', closeConfig, true)
    document.addEventListener('touchstart', closeConfig, true)
    return () => {
      document.removeEventListener('mousedown', closeConfig, true)
      document.removeEventListener('touchstart', closeConfig, true)
    }
  }, [showConfig])

  const moveToPointer = useCallback((clientX, clientY) => {
    const drag = dragRef.current
    if (!drag) return

    setPosition(() => {
      const next = {
        x: drag.startX + clientX - drag.pointerX,
        y: drag.startY + clientY - drag.pointerY,
      }
      return clampForMode(stickPopupPosition(next, popupRef.current), popupRef.current, comparisonMode)
    })
  }, [comparisonMode])

  const startDrag = useCallback(
    (event) => {
      if (event.button !== 0) return
      event.preventDefault()
      event.currentTarget.setPointerCapture(event.pointerId)
      dragRef.current = {
        pointerX: event.clientX,
        pointerY: event.clientY,
        startX: position.x,
        startY: position.y,
      }
      moveToPointer(event.clientX, event.clientY)
    },
    [moveToPointer, position.x, position.y],
  )

  const moveDrag = useCallback(
    (event) => {
      if (!dragRef.current) return
      moveToPointer(event.clientX, event.clientY)
    },
    [moveToPointer],
  )

  const stopDrag = useCallback((event) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    dragRef.current = null
  }, [])

  const changeSelectedSpecIds = useCallback(
    (nextIds) => {
      if (applyToAll) {
        if (comparisonMode) {
          onGlobalSpecIdsChange(updatedComparisonHiddenSpecIds(optionIds, nextIds, globalHiddenSpecIds))
        } else {
          onGlobalSpecIdsChange(nextIds)
        }
      } else {
        onLocalSpecIdsChange(comparisonMode
          ? updatedComparisonHiddenSpecIds(optionIds, nextIds, localHiddenSpecIds ?? globalHiddenSpecIds)
          : nextIds)
      }
    },
    [applyToAll, comparisonMode, globalHiddenSpecIds, localHiddenSpecIds, onGlobalSpecIdsChange, onLocalSpecIdsChange, optionIds],
  )

  const changeApplyToAll = useCallback(
    (event) => {
      const checked = event.target.checked
      setApplyToAll(checked)
      if (!checked && (comparisonMode ? !localHiddenSpecIds : !localSpecIds)) {
        onLocalSpecIdsChange(comparisonMode ? [...globalHiddenSpecIds] : globalSelection)
      }
    },
    [comparisonMode, globalHiddenSpecIds, globalSelection, localHiddenSpecIds, localSpecIds, onLocalSpecIdsChange],
  )

  return (
    <aside
      className={`pinned-skill-popup${comparisonMode ? ' rebalance-pin-popup' : ''}${minimized ? ' is-minimized' : ''}`}
      ref={popupRef}
      style={{ left: `${position.x}px`, top: `${position.y}px`, zIndex: 40 + index }}
      aria-label={`${translateUi('Pinned skill', language)}: ${name}`}
    >
      <header
        className="pinned-skill-popup-bar"
        onPointerDown={startDrag}
        onPointerMove={moveDrag}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
      >
        <span className="pinned-skill-title">
          <img src={assetUrl(skill?.iconUrl ?? iconUrl)} alt="" width="28" height="28" />
          <strong>{name}</strong>
        </span>
        <span className="pinned-skill-actions">
          {!minimized ? (
            <button
              type="button"
              aria-label={translateUi('Configure pinned specs', language)}
              aria-pressed={showConfig}
              ref={configButtonRef}
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => setShowConfig((current) => !current)}
            >
              <Settings size={15} aria-hidden="true" />
            </button>
          ) : null}
          <button
            type="button"
            aria-label={translateUi(minimized ? 'Expand pinned skill' : 'Minimize pinned skill', language)}
            aria-expanded={!minimized}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => { setShowConfig(false); setMinimized((current) => !current) }}
          >
            {minimized ? <Plus size={16} aria-hidden="true" /> : <Minus size={16} aria-hidden="true" />}
          </button>
          <button
            type="button"
            aria-label={translateUi('Close', language)}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onClose}
          >
            <X size={16} aria-hidden="true" />
          </button>
        </span>
      </header>
      {showConfig && !minimized ? (
        <PinnedSpecOptionsPopover
          applyToAll={applyToAll}
          language={language}
          options={options}
          popoverRef={configPopoverRef}
          selectedSpecIds={selectedSpecIds}
          showApplyToAll
          onApplyToAllChange={changeApplyToAll}
          onSpecIdsChange={changeSelectedSpecIds}
        />
      ) : null}
      {!minimized ? <div className="pinned-skill-popup-body">
        {comparisonMode ? (
          comparison ? <RebalanceComparison comparison={comparison} notes={notes} selectedSpecIds={selectedSpecIds} language={language} />
            : <p className="pinned-empty-specs">{translateUi(loadError || model ? 'Skill details unavailable.' : 'Loading', language)}{!loadError && !model ? '...' : ''}</p>
        ) : <PinnedSpecGrid compactItems={compactItems} language={language} />}
      </div> : null}
    </aside>
  )
}

export function PinnedSpecOptionsPopover({
  applyToAll = false,
  className = '',
  language,
  options = PINNED_SPEC_OPTIONS,
  selectedSpecIds,
  showApplyToAll = false,
  onApplyToAllChange,
  popoverRef,
  onSpecIdsChange,
}) {
  const toggleSpec = (id) => {
    const nextSet = new Set(selectedSpecIds)
    if (nextSet.has(id)) {
      nextSet.delete(id)
    } else {
      nextSet.add(id)
    }
    const nextIds = options.map((option) => option.id).filter((optionId) => nextSet.has(optionId))
    onSpecIdsChange(nextIds)
  }

  return (
    <div
      className={['pinned-spec-popover', className].filter(Boolean).join(' ')}
      ref={popoverRef}
      role="dialog"
      aria-label={translateUi('Configure pinned specs', language)}
    >
      {showApplyToAll ? (
        <label className="pinned-apply-toggle">
          <input type="checkbox" checked={applyToAll} onChange={onApplyToAllChange} />
          <span>{translateUi('Apply to all pinned cards', language)}</span>
        </label>
      ) : null}
      <div className="pinned-spec-options">
        {options.map((option) => (
          <label key={option.id}>
            <input
              type="checkbox"
              checked={selectedSpecIds.includes(option.id)}
              onChange={() => toggleSpec(option.id)}
            />
            <span>{translateSpecLabel(option.label, language)}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function RebalanceComparison({ comparison, notes, selectedSpecIds, language }) {
  const changed = comparison.rows.some((row) => row.changed)
  const visibleRows = comparison.rows.filter((row) => selectedSpecIds.includes(row.label))
  return (
    <>
      <p className="rebalance-pin-version">
        {comparison.newSkill ? translateUi('New skill', language) : `${translateUi('Compared with', language)} ${translateUi(comparison.previousVersionId === 'pre' ? 'Pre-rebalances' : `Rebalance ${comparison.previousVersionId.split('-')[1]}`, language)}`}
      </p>
      {!changed && notes.length ? <RebalanceChangeNotes notes={notes} language={language} /> : null}
      <dl className="pinned-spec-grid rebalance-pin-specs">
        {visibleRows.map((row, index) => (
          <div className={`pinned-spec-item${row.changed ? ' is-changed' : ''}${(row.changed ? Math.max(row.before.length, row.after.length) > 20 : row.after.length > 22) ? ' is-wide' : ''}`} key={`${row.label}-${index}`}>
            <dt title={translateSpecLabel(row.label, language)}>{translateSpecLabel(row.label, language)}</dt>
            <dd>
              <span className="pinned-main-value">{row.after ? localizedComparisonValue(row.after, row.afterPtBr, language) : '—'}</span>
              {row.changed && row.before ? <span className="pinned-previous-value">{translateUi('Before', language)}: {localizedComparisonValue(row.before, row.beforePtBr, language)}</span> : null}
            </dd>
          </div>
        ))}
      </dl>
      {!visibleRows.length ? <p className="pinned-empty-specs">{translateUi('No selected specs found.', language)}</p> : null}
      {comparison.levelTable?.rows?.length ? <RebalanceLevelComparison comparison={comparison} language={language} /> : null}
      {changed && notes.length ? <RebalanceChangeNotes notes={notes} language={language} /> : null}
    </>
  )
}

function localizedComparisonValue(value, translated, language) {
  return language === 'pt-BR' && translated ? translated : translateSpecValue(value, language)
}

function RebalanceChangeNotes({ notes, language }) {
  return (
    <details className="rebalance-pin-notes">
      <summary>{translateUi('Change notes', language)}</summary>
      <ul>{notes.map((note, index) => <li key={index}>{translateRebalanceNote(note, language)}</li>)}</ul>
    </details>
  )
}

function RebalanceLevelComparison({ comparison, language }) {
  const table = comparison.levelTable
  const previousLevels = new Map(comparison.previousLevelTable?.rows.map((row) => [row.level, row.values]) ?? [])
  return (
    <details className="rebalance-pin-levels">
      <summary>{translateUi('Level scaling', language)}</summary>
      <div className="rebalance-pin-level-scroll">
        <table>
          <thead><tr><th>{translateUi('Level', language)}</th>{table.columns.map((column) => <th key={column.id}>{translateSpecLabel(column.label, language)}</th>)}</tr></thead>
          <tbody>{table.rows.map((row) => (
            <tr key={row.level}>
              <th>{row.level}</th>
              {table.columns.map((column) => {
                const before = previousLevels.get(row.level)?.[column.id] ?? ''
                const after = row.values[column.id] ?? ''
                return <td className={before !== after ? 'is-changed' : ''} key={column.id}>{translateSpecValue(after, language)}{before && before !== after ? <small>{translateUi('Before', language)}: {translateSpecValue(before, language)}</small> : null}</td>
              })}
            </tr>
          ))}</tbody>
        </table>
      </div>
    </details>
  )
}

export function PinnedSkillSummary({
  model,
  skill,
  specVersion,
  language,
  specIds = DEFAULT_PINNED_SPEC_IDS,
  className = '',
}) {
  const rows = useMemo(() => effectiveSpecRows(model, skill, specVersion, null), [model, skill, specVersion])
  const compactItems = useMemo(
    () => compactSpecItems(rows, specIds, language),
    [language, rows, specIds],
  )

  return (
    <div className={['pinned-skill-popup-body', className].filter(Boolean).join(' ')}>
      <PinnedSpecGrid compactItems={compactItems} language={language} />
    </div>
  )
}

function PinnedSpecGrid({ compactItems, language }) {
  return compactItems.length ? (
    <dl className="pinned-spec-grid">
      {compactItems.map((item) => (
        <div
          key={item.id}
          className={item.wide ? 'pinned-spec-item is-wide' : 'pinned-spec-item'}
          title={item.tooltip}
          aria-label={item.tooltip}
        >
          <dt title={item.fullLabel}>{item.label}</dt>
          <dd>
            {item.kind === 'cast' ? (
              <CompactCastValue fixed={item.fixed} variable={item.variable} />
            ) : (
              <CompactValues values={item.values} />
            )}
          </dd>
        </div>
      ))}
    </dl>
  ) : (
    <p className="pinned-empty-specs">{translateUi('No selected specs found.', language)}</p>
  )
}

function CompactCastValue({ fixed, variable }) {
  return (
    <span className="pinned-cast-value">
      {fixed ? (
        <span className="pinned-cast-part is-fixed">
          <strong>{fixed}</strong>
          <em>FCT</em>
        </span>
      ) : null}
      {fixed && variable ? <span className="pinned-cast-plus">+</span> : null}
      {variable ? (
        <span className="pinned-cast-part is-variable">
          <strong>{variable}</strong>
          <em>VCT</em>
        </span>
      ) : null}
    </span>
  )
}

function CompactValues({ values }) {
  return (
    <span className="pinned-spec-values">
      {values.map((value, index) => (
        <span key={`${value}-${index}`}>{value}</span>
      ))}
    </span>
  )
}

function compactSpecItems(rows, selectedSpecIds, language) {
  const byLabel = rowsByLabel(rows)
  return selectedSpecIds.flatMap((id) => compactSpecItem(id, byLabel, language) ?? [])
}

function compactSpecItem(id, byLabel, language) {
  if (id === 'sp-cost') {
    const values = rowValues(byLabel, 'SP Cost').map(formatSpCost)
    return values.length ? specItem(id, translateSpecLabel('SP Cost', language), values) : null
  }

  if (id === 'cast') {
    const fixed = rowValues(byLabel, 'Fixed Cast Time').at(0)
    const variable = rowValues(byLabel, 'Variable Cast Time').at(0)
    if (!fixed && !variable) return null
    const fullLabel = translateSpecLabel('Cast', language)
    const fixedValue = fixed ? formatSeconds(fixed) : ''
    const variableValue = variable ? formatSeconds(variable) : ''
    return {
      id,
      kind: 'cast',
      label: compactLabelForSpec(id, fullLabel),
      fullLabel,
      fixed: fixedValue,
      variable: variableValue,
      tooltip: tooltipForSpec(fullLabel, [
        fixedValue ? `FCT ${fixedValue}` : '',
        variableValue ? `VCT ${variableValue}` : '',
      ]),
    }
  }

  if (id === 'cast-delay') {
    return compactSingleSpec(id, byLabel, 'Cast Delay', 'Cast Delay', language, formatSeconds)
  }

  if (id === 'cooldown') {
    return compactSingleSpec(id, byLabel, 'Cooldown', 'Global Cooldown', language, formatSeconds)
  }

  if (id === 'target') {
    return compactSingleSpec(id, byLabel, 'Target', 'Target', language, (value) => translateSpecValue(value, language))
  }

  if (id === 'area') {
    return compactSingleSpec(id, byLabel, 'Area of Effect', 'Area', language, (value) => compactArea(translateSpecValue(value, language)))
  }

  if (id === 'range') {
    return compactSingleSpec(id, byLabel, 'Cast Range', 'Range', language, (value) => translateSpecValue(value, language))
  }

  if (id === 'base-damage') {
    const values = rowValues(byLabel, 'Base Damage').map((value) => translateSpecValue(value, language))
    return values.length ? specItem(id, translateSpecLabel('Base Damage', language), values, true) : null
  }

  return null
}

function compactSingleSpec(id, byLabel, sourceLabel, displayLabel, language, formatValue) {
  const values = rowValues(byLabel, sourceLabel).map(formatValue)
  return values.length ? specItem(id, translateSpecLabel(displayLabel, language), values) : null
}

function specItem(id, fullLabel, values, wide = false) {
  const compactValues = values.map((value) => String(value ?? '').trim()).filter(Boolean)
  return {
    id,
    label: compactLabelForSpec(id, fullLabel),
    fullLabel,
    values: compactValues,
    tooltip: tooltipForSpec(fullLabel, compactValues),
    wide: wide || compactValues.some((value) => String(value).length > 22),
  }
}

function compactLabelForSpec(id, fallbackLabel) {
  if (id === 'sp-cost') return 'SP'
  if (id === 'cast-delay') return 'Delay'
  if (id === 'cooldown') return 'GCD'
  if (id === 'area') return 'AoE'
  if (id === 'base-damage') return 'DMG'
  return fallbackLabel
}

function tooltipForSpec(label, values) {
  const compactValues = values.filter(Boolean)
  return compactValues.length ? `${label}: ${compactValues.join(' | ')}` : label
}

function rowsByLabel(rows) {
  const map = new Map()
  for (const row of rows) {
    if (!map.has(row.label)) map.set(row.label, [])
    map.get(row.label).push(row)
  }
  return map
}

function rowValues(byLabel, label) {
  const seen = new Set()
  return (byLabel.get(label) ?? [])
    .map((row) => String(row.value ?? '').trim())
    .filter(Boolean)
    .filter((value) => {
      if (seen.has(value)) return false
      seen.add(value)
      return true
    })
}

function formatSpCost(value) {
  const text = String(value ?? '').trim()
  if (!text || /\bSP\b/i.test(text)) return text
  return `${text} SP`
}

function formatSeconds(value) {
  return String(value ?? '')
    .trim()
    .replace(/\b(\d+(?:\.\d+)?)\s+seconds?\b/gi, '$1s')
    .replace(/\b(\d+(?:\.\d+)?)\s+secs?\b/gi, '$1s')
    .replace(/\s+/g, ' ')
}

function compactArea(value) {
  return String(value ?? '')
    .replace(/\s*celulas?\b/gi, '')
    .replace(/\s*cells?\b/gi, '')
    .trim()
}

function initialPopupPlacement(index) {
  if (typeof window === 'undefined') {
    return { anchor: 'fallback', position: { x: 80 + index * 26, y: 80 + index * 26 } }
  }

  const popupSize = estimatedPopupSize()
  const cards = pinnedPopupRects()
  if (!cards.length) {
    return {
      anchor: 'bottom-left',
      position: clampPopupPosition({
        x: POPUP_MARGIN,
        y: window.innerHeight - popupSize.height - POPUP_MARGIN,
      }),
    }
  }

  const rightMostCard = cards.reduce((rightMost, card) => (card.right > rightMost.right ? card : rightMost), cards[0])
  const positionToRight = {
    x: rightMostCard.right + POPUP_GAP,
    y: rightMostCard.top,
  }
  if (positionToRight.x + popupSize.width <= window.innerWidth - POPUP_MARGIN) {
    return { anchor: 'right', target: rightMostCard, position: clampPopupPosition(positionToRight) }
  }

  const leftMostCard = cards.reduce((leftMost, card) => (card.left < leftMost.left ? card : leftMost), cards[0])
  const positionAboveLeftMost = {
    x: leftMostCard.left,
    y: leftMostCard.top - popupSize.height - POPUP_GAP,
  }
  if (positionAboveLeftMost.y >= POPUP_MARGIN) {
    return { anchor: 'above-left-most', target: leftMostCard, position: clampPopupPosition(positionAboveLeftMost) }
  }

  return {
    anchor: 'below-left-most',
    target: leftMostCard,
    position: clampPopupPosition({
      x: leftMostCard.left,
      y: leftMostCard.bottom + POPUP_GAP,
    }),
  }
}

function settleInitialPopupPosition(currentPosition, element, placement) {
  if (!element || typeof window === 'undefined') return currentPosition

  if (placement.anchor === 'bottom-left') {
    return clampPopupPosition({
      x: POPUP_MARGIN,
      y: window.innerHeight - element.offsetHeight - POPUP_MARGIN,
    }, element)
  }

  if (placement.anchor === 'right' && placement.target) {
    return clampPopupPosition({
      x: placement.target.right + POPUP_GAP,
      y: placement.target.top,
    }, element)
  }

  if (placement.anchor === 'above-left-most' && placement.target) {
    const abovePosition = {
      x: placement.target.left,
      y: placement.target.top - element.offsetHeight - POPUP_GAP,
    }
    if (abovePosition.y >= POPUP_MARGIN) return clampPopupPosition(abovePosition, element)

    return clampPopupPosition({
      x: placement.target.left,
      y: placement.target.bottom + POPUP_GAP,
    }, element)
  }

  if (placement.anchor === 'below-left-most' && placement.target) {
    return clampPopupPosition({
      x: placement.target.left,
      y: placement.target.bottom + POPUP_GAP,
    }, element)
  }

  return clampPopupPosition(currentPosition, element)
}

function pinnedPopupRects(excludeElement) {
  return [...document.querySelectorAll('.pinned-skill-popup')]
    .filter((element) => element !== excludeElement)
    .map((element) => element.getBoundingClientRect())
    .filter((rect) => rect.width > 0 && rect.height > 0)
}

function stickPopupPosition(position, element) {
  if (!element || typeof window === 'undefined') return position

  const width = element.offsetWidth
  const height = element.offsetHeight
  const popupRect = {
    left: position.x,
    top: position.y,
    right: position.x + width,
    bottom: position.y + height,
  }
  const otherCards = pinnedPopupRects(element)
  let next = position

  for (const card of otherCards) {
    const verticalOverlap = rangesTouch(popupRect.top, popupRect.bottom, card.top, card.bottom)
    const horizontalOverlap = rangesTouch(popupRect.left, popupRect.right, card.left, card.right)
    const stickLeftOfCard = card.left - width - POPUP_GAP
    const stickRightOfCard = card.right + POPUP_GAP
    const stickAboveCard = card.top - height - POPUP_GAP
    const stickBelowCard = card.bottom + POPUP_GAP

    if (verticalOverlap && Math.abs(next.x - stickLeftOfCard) <= POPUP_STICK_DISTANCE) {
      next = { ...next, x: stickLeftOfCard }
    } else if (verticalOverlap && Math.abs(next.x - stickRightOfCard) <= POPUP_STICK_DISTANCE) {
      next = { ...next, x: stickRightOfCard }
    }

    if (horizontalOverlap && Math.abs(next.y - stickAboveCard) <= POPUP_STICK_DISTANCE) {
      next = { ...next, y: stickAboveCard }
    } else if (horizontalOverlap && Math.abs(next.y - stickBelowCard) <= POPUP_STICK_DISTANCE) {
      next = { ...next, y: stickBelowCard }
    }

    const snappedRect = {
      left: next.x,
      top: next.y,
      right: next.x + width,
      bottom: next.y + height,
    }

    if (edgesTouch(snappedRect.left, card.right) || edgesTouch(snappedRect.right, card.left)) {
      if (Math.abs(next.y - card.top) <= POPUP_STICK_DISTANCE) next = { ...next, y: card.top }
      if (Math.abs(next.y + height - card.bottom) <= POPUP_STICK_DISTANCE) next = { ...next, y: card.bottom - height }
    }

    if (edgesTouch(snappedRect.top, card.bottom) || edgesTouch(snappedRect.bottom, card.top)) {
      if (Math.abs(next.x - card.left) <= POPUP_STICK_DISTANCE) next = { ...next, x: card.left }
      if (Math.abs(next.x + width - card.right) <= POPUP_STICK_DISTANCE) next = { ...next, x: card.right - width }
    }
  }

  return next
}

function rangesTouch(startA, endA, startB, endB) {
  return startA <= endB + POPUP_STICK_DISTANCE && endA >= startB - POPUP_STICK_DISTANCE
}

function edgesTouch(edgeA, edgeB) {
  return Math.abs(edgeA - edgeB) <= 1
}

function estimatedPopupSize() {
  return {
    width: Math.min(window.innerWidth - POPUP_MARGIN * 2, window.innerWidth <= 720 ? POPUP_MOBILE_WIDTH : POPUP_DEFAULT_WIDTH),
    height: Math.min(window.innerHeight - POPUP_MARGIN * 2, POPUP_DEFAULT_HEIGHT),
  }
}

function clampForMode(position, element, comparisonMode) {
  if (!comparisonMode || window.innerWidth > 640) return clampPopupPosition(position, element)
  const topInset = Math.ceil(document.querySelector('.rebalance-top-bar')?.getBoundingClientRect().bottom ?? 0) + 4
  const bottomInset = Math.ceil(document.querySelector('.rebalance-bottom-bar')?.getBoundingClientRect().height ?? 0) + 8
  return clampPopupPosition(position, element, bottomInset, topInset)
}

function clampPopupPosition(position, element, bottomInset = POPUP_MARGIN, topInset = POPUP_MARGIN) {
  if (typeof window === 'undefined') return position

  const fallbackSize = estimatedPopupSize()
  const width = element?.offsetWidth ?? fallbackSize.width
  const height = element?.offsetHeight ?? fallbackSize.height
  const maxX = Math.max(POPUP_MARGIN, window.innerWidth - Math.min(width, window.innerWidth - POPUP_MARGIN * 2) - POPUP_MARGIN)
  const maxY = Math.max(topInset, window.innerHeight - Math.min(height, window.innerHeight - POPUP_MARGIN * 2) - bottomInset)

  return {
    x: clamp(Math.round(position.x), POPUP_MARGIN, maxX),
    y: clamp(Math.round(position.y), topInset, maxY),
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
