import { Settings, X } from 'lucide-react'
import { useCallback, useMemo, useRef, useState } from 'react'
import './PinnedSkillPopupStyles.css'
import { DEFAULT_PINNED_SPEC_IDS, PINNED_SPEC_OPTIONS } from './config.js'
import { assetUrl } from '../../lib/dom.js'
import { effectiveSpecRows } from '../../lib/specs.js'
import { translatedSkillName, translateSpecLabel, translateSpecValue, translateUi } from '../../lib/translations.js'

export function PinnedSkillPopup({
  model,
  skill,
  specVersion,
  language,
  index,
  globalSpecIds = DEFAULT_PINNED_SPEC_IDS,
  localSpecIds,
  onGlobalSpecIdsChange,
  onLocalSpecIdsChange,
  onClose,
}) {
  const popupRef = useRef(null)
  const dragRef = useRef(null)
  const [position, setPosition] = useState(() => initialPopupPosition(index))
  const [showConfig, setShowConfig] = useState(false)
  const [applyToAll, setApplyToAll] = useState(true)
  const name = translatedSkillName(skill, language)
  const selectedSpecIds = applyToAll ? globalSpecIds : (localSpecIds ?? globalSpecIds)
  const rows = useMemo(() => effectiveSpecRows(model, skill, specVersion, null), [model, skill, specVersion])
  const compactItems = useMemo(
    () => compactSpecItems(rows, selectedSpecIds, language),
    [language, rows, selectedSpecIds],
  )

  const moveToPointer = useCallback((clientX, clientY) => {
    const drag = dragRef.current
    if (!drag) return

    setPosition(() => {
      const next = {
        x: drag.startX + clientX - drag.pointerX,
        y: drag.startY + clientY - drag.pointerY,
      }
      return clampPopupPosition(next, popupRef.current)
    })
  }, [])

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

  const toggleSpec = useCallback(
    (id) => {
      const nextSet = new Set(selectedSpecIds)
      if (nextSet.has(id)) {
        nextSet.delete(id)
      } else {
        nextSet.add(id)
      }
      const nextIds = PINNED_SPEC_OPTIONS.map((option) => option.id).filter((optionId) => nextSet.has(optionId))

      if (applyToAll) {
        onGlobalSpecIdsChange(nextIds)
      } else {
        onLocalSpecIdsChange(nextIds)
      }
    },
    [applyToAll, onGlobalSpecIdsChange, onLocalSpecIdsChange, selectedSpecIds],
  )

  const changeApplyToAll = useCallback(
    (event) => {
      const checked = event.target.checked
      setApplyToAll(checked)
      if (!checked && !localSpecIds) onLocalSpecIdsChange(globalSpecIds)
    },
    [globalSpecIds, localSpecIds, onLocalSpecIdsChange],
  )

  return (
    <aside
      className="pinned-skill-popup"
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
          <img src={assetUrl(skill.iconUrl)} alt="" width="28" height="28" />
          <strong>{name}</strong>
        </span>
        <span className="pinned-skill-actions">
          <button
            type="button"
            aria-label={translateUi('Configure pinned specs', language)}
            aria-pressed={showConfig}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => setShowConfig((current) => !current)}
          >
            <Settings size={15} aria-hidden="true" />
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
      <div className="pinned-skill-popup-body">
        {showConfig ? (
          <div className="pinned-spec-config">
            <label className="pinned-apply-toggle">
              <input type="checkbox" checked={applyToAll} onChange={changeApplyToAll} />
              <span>{translateUi('Apply to all pinned cards', language)}</span>
            </label>
            <div className="pinned-spec-options">
              {PINNED_SPEC_OPTIONS.map((option) => (
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
        ) : null}

        {compactItems.length ? (
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
        )}
      </div>
    </aside>
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

function initialPopupPosition(index) {
  if (typeof window === 'undefined') return { x: 80 + index * 26, y: 80 + index * 26 }

  return clampPopupPosition({
    x: Math.max(12, window.innerWidth - 352 - index * 24),
    y: 56 + index * 24,
  })
}

function clampPopupPosition(position, element) {
  if (typeof window === 'undefined') return position

  const width = element?.offsetWidth ?? 340
  const height = element?.offsetHeight ?? 180
  const margin = 8
  const maxX = Math.max(margin, window.innerWidth - Math.min(width, window.innerWidth - margin * 2) - margin)
  const maxY = Math.max(margin, window.innerHeight - Math.min(height, window.innerHeight - margin * 2) - margin)

  return {
    x: clamp(Math.round(position.x), margin, maxX),
    y: clamp(Math.round(position.y), margin, maxY),
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}