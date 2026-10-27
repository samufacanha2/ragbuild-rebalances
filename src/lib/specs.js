import { coreSpecLabels } from './classModel.js'
import { forumUrlForNote } from './rebalanceSources.js'
import { rebalance2IntroductionForSkill } from './rebalance2SkillAdditions.js'
import { sigmaInitialLevelTable, sigmaInitialSpecRows } from './sigmaInitialSkills.js'

export function notesForVersion(skill, versionId) {
  if (versionId === 'pre') return []
  const introduction = rebalance2IntroductionForSkill(skill)
  if (versionId === 'current') return introduction ? [introduction, ...skill.balanceNotes] : skill.balanceNotes
  if (versionId === 'rebalance-2' && introduction) return [introduction, ...skill.balanceNotes.filter((entry) => entry.versionId === versionId)]
  return skill.balanceNotes.filter((entry) => entry.versionId === versionId)
}

export function skillAvailableInVersion(data, skill, versionId) {
  const addedEntry = firstAddedEntry(data, skill)
  if (!addedEntry) return true
  if (versionId === 'current') return true
  if (versionId === 'pre') return false

  const versionOrder = versionOrderForData(data)
  const selectedIndex = versionOrder.get(versionId)
  const addedIndex = versionOrder.get(addedEntry.versionId)
  if (!Number.isFinite(selectedIndex) || !Number.isFinite(addedIndex)) return true
  return selectedIndex >= addedIndex
}

export function specVersionTitle(model, versionId) {
  if (versionId === 'pre') return 'Pre-Rebalance Specs'
  if (versionId === 'current') return 'Current Specs'
  return `${model.versionById.get(versionId)?.label ?? 'Selected'} Specs`
}

export function patchNotesTitle(model, versionId) {
  if (versionId === 'pre') return 'Patch Notes'
  if (versionId === 'current') return 'Patch Notes'
  return `${model.versionById.get(versionId)?.label ?? 'Selected'} Patch Notes`
}

export function effectiveSpecRows(model, skill, versionId, levelTable) {
  const baseByLabel = baseSpecMap(skill.details.rows)
  const deltas = specDeltas(model, skill)
  const selectedIndex = selectedVersionIndex(model, versionId)
  const deltasByLabel = new Map()
  const hiddenLabels = levelTableCoveredLabels(levelTable)

  for (const delta of deltas) {
    if (!deltasByLabel.has(delta.label)) deltasByLabel.set(delta.label, [])
    deltasByLabel.get(delta.label).push(delta)
  }

  const labels = [
    ...coreSpecLabels,
    ...[...deltasByLabel.keys()].filter((label) => !coreSpecLabels.includes(label)),
    ...[...baseByLabel.keys()].filter((label) => !coreSpecLabels.includes(label) && !deltasByLabel.has(label)),
  ].filter((label) => !hiddenLabels.has(label) || deltasByLabel.has(label))

  const rows = labels
    .flatMap((label) => {
      const labelDeltas = deltasByLabel.get(label) ?? []
      const appliedDelta = labelDeltas.filter((delta) => delta.versionIndex <= selectedIndex).at(-1)
      const firstDelta = labelDeltas[0]
      const nextDelta = labelDeltas.find((delta) => delta.versionIndex > selectedIndex)
      const baseValues = baseByLabel.get(label) ?? []
      const baseValue = baseValues[0] ?? ''

      if (label === 'Base Damage') return effectiveDamageSpecRows(model, labelDeltas, selectedIndex, baseValues)

      const value = appliedDelta?.after || (!appliedDelta && firstDelta?.before) || baseValue || ''
      if (shouldHideFuturePlaceholderSpec(label, appliedDelta, baseValue, firstDelta)) return []

      const values = !appliedDelta && !firstDelta && baseValues.length ? baseValues : [value]
      return values.map((entryValue) => ({
        label,
        value: entryValue,
        changed: Boolean(appliedDelta),
        changeNote: appliedDelta ? appliedChangeNote(appliedDelta) : futureChangeNote(nextDelta),
        changeUrl: forumUrlForDelta(model, appliedDelta ?? nextDelta),
      }))
    })
    .filter((row) => row?.value)
  if (versionId !== 'rebalance-2') return rows
  const initial = sigmaInitialSpecRows(skill.id)
  if (!initial.length) return rows
  // Do not inherit mechanics that the initial Sigma guide does not specify.
  return [...rows.filter((row) => row.label === 'Type' || row.label === 'Levels'), ...initial]
}
export function effectiveLevelTable(model, skill, versionId) {
  const source = skill.details.levelTables?.[0]
  if (!source) return null
  if (versionId === 'rebalance-2') {
    const initial = sigmaInitialLevelTable(skill, source)
    if (initial) return initial
  }

  const table = {
    ...source,
    columns: source.columns.map((column) => ({ ...column })),
    rows: source.rows.map((row) => ({
      level: row.level,
      values: { ...row.values },
    })),
  }
  const selectedIndex = selectedVersionIndex(model, versionId)
  const deltas = specDeltas(model, skill)

  for (const entry of effectiveLevelDeltas(deltas, selectedIndex)) applyLevelDelta(table, entry.delta, entry.value)
  stripTimelineControlledLevelColumns(table, deltas)
  stripDamageFromLevelTable(table)

  return table.columns.length ? table : null
}

function effectiveLevelDeltas(deltas, selectedIndex) {
  const byKey = new Map()

  for (const delta of deltas) {
    const key = levelDeltaKey(delta)
    const entry = byKey.get(key) ?? { applied: null, future: null }

    if (delta.versionIndex <= selectedIndex) {
      entry.applied = { delta, value: delta.after }
    } else if (!entry.future) {
      entry.future = { delta, value: delta.before }
    }

    byKey.set(key, entry)
  }

  return [...byKey.values()].map((entry) => entry.applied ?? entry.future).filter(Boolean)
}

function firstAddedEntry(data, skill) {
  const versionOrder = versionOrderForData(data)
  return [rebalance2IntroductionForSkill(skill), ...(skill.balanceNotes ?? [])]
    .filter(Boolean)
    .filter((entry) => entry.added)
    .sort((a, b) => (versionOrder.get(a.versionId) ?? Number.MAX_SAFE_INTEGER) - (versionOrder.get(b.versionId) ?? Number.MAX_SAFE_INTEGER))
    .at(0)
}

function versionOrderForData(data) {
  return new Map((data.rebalanceVersions ?? []).map((version, index) => [version.id, index]))
}

function levelDeltaKey(delta) {
  const level = delta.scope?.match(/Lv\s+\d+/i)?.[0] ?? delta.scope ?? ''
  return [delta.label, level].join('|')
}

function applyLevelDelta(table, delta, value) {
  const targetRow = rowForDelta(table, delta)
  if (!targetRow) return

  if (delta.label === 'Base Damage') return

  const label = delta.label === 'Buff Duration' ? 'Duration' : delta.label
  const column = table.columns.find((candidate) => candidate.label === label)
  if (!column) return

  targetRow.values[column.id] = formatLevelDeltaValue(label, value)
}

function stripTimelineControlledLevelColumns(table, deltas) {
  const controlledLabels = new Set(
    deltas
      .map((delta) => delta.label)
      .filter((label) => label === 'Duration'),
  )
  if (!controlledLabels.size) return

  const controlledColumnIds = new Set(
    table.columns
      .filter((column) => controlledLabels.has(normalizeSpecLabel(column.label)))
      .map((column) => column.id),
  )
  if (!controlledColumnIds.size) return

  for (const row of table.rows) {
    for (const id of controlledColumnIds) delete row.values[id]
  }

  table.columns = table.columns.filter((column) => !controlledColumnIds.has(column.id))
}

function rowForDelta(table, delta) {
  const level = delta.scope?.match(/Lv\s+(\d+)/i)?.[1]
  if (!level) return null
  return table.rows.find((row) => row.level === Number(level)) ?? null
}

function removeDamageEffect(value) {
  return String(value ?? '')
    .split(/\n+/)
    .map((line) =>
      line
        .split(/\s*\/\s*/)
        .map((segment) => segment.trim())
        .filter((segment) => segment && !effectSegmentLooksLikeDamage(segment))
        .join(' / '),
    )
    .filter(Boolean)
    .join('\n')
}

function effectSegmentLooksLikeDamage(value) {
  const text = String(value ?? '').trim()
  if (!text) return false
  if (/\b(?:ATK|MATK)\b/i.test(text) && /[0-9]/.test(text) && /%/.test(text)) return true
  return /[0-9][0-9,]*\s*\+\s*\([^)]*(?:level|lv|mastery|count)[^)]*\)\s*%/i.test(text)
}

function stripDamageFromLevelTable(table) {
  const damageColumnIds = new Set(table.columns.filter((column) => isDamageLevelColumn(column.label)).map((column) => column.id))
  const effectColumn = table.columns.find((column) => column.label === 'Effect')

  for (const row of table.rows) {
    for (const id of damageColumnIds) delete row.values[id]

    if (effectColumn && row.values[effectColumn.id]) {
      const effect = removeDamageEffect(row.values[effectColumn.id])
      if (effect) {
        row.values[effectColumn.id] = effect
      } else {
        delete row.values[effectColumn.id]
      }
    }
  }

  table.columns = table.columns.filter((column) => !damageColumnIds.has(column.id))
  table.columns = table.columns.filter((column) => table.rows.some((row) => row.values[column.id]))
}

function isDamageLevelColumn(label) {
  const normalized = String(label ?? '').trim()
  if (/^(?:Base\s+)?Damage(?:\s*\(|$)/i.test(normalized)) return true
  if (/^Bonus Damage \(.+\) Multiplier$/i.test(normalized)) return true
  return ['Under Blessing of Four Directions', 'Cursed Target Factor', 'Skill Level Factor'].includes(label)
}

function levelTableCoveredLabels(table) {
  const covered = new Set()
  if (!table) return covered

  const columnLabels = new Set(table.columns.map((column) => column.label))
  if (columnLabels.has('Cooldown')) covered.add('Cooldown')
  if (columnLabels.has('Area of Effect')) covered.add('Area of Effect')
  if (columnLabels.has('Duration')) {
    covered.add('Duration')
    covered.add('Buff Duration')
  }

  return covered
}

function formatLevelDeltaValue(label, value) {
  if (label === 'Area of Effect') return String(value).replace(/\s*x\s*/gi, 'x').replace(/\s*cells?$/i, '')
  return String(value)
}

function baseSpecMap(rows) {
  const map = new Map()

  for (const row of rows) {
    const label = normalizeSpecLabel(row.label)
    if (!map.has(label)) map.set(label, [])
    const values = map.get(label)
    const value = normalizeSkillValue(row.value)
    if (value && !values.includes(value)) values.push(value)
  }

  return map
}

function specDeltas(model, skill) {
  return (skill.balanceNotes ?? [])
    .flatMap((entry) =>
      specRowsForEntry(entry).map((row) => ({
        ...row,
        label: normalizeSpecLabel(row.label),
        versionId: entry.versionId,
        versionLabel: entry.versionLabel,
        versionIndex: model.versionOrder.get(entry.versionId) ?? Number.MAX_SAFE_INTEGER,
      })),
    )
    .sort((a, b) => a.versionIndex - b.versionIndex)
}

function specRowsForEntry(entry) {
  const rows = []
  const seen = new Set()

  for (const row of entry.specRows ?? []) addSpecRow(rows, seen, normalizeSpecRow(row))

  for (const note of entry.notes ?? []) {
    for (const row of parseSpecRowsFromNote(note)) {
      addSpecRow(rows, seen, row)
    }
  }

  return mergeSpecRows(rows)
}

function addSpecRow(rows, seen, row) {
  if (rows.some((existing) => isDuplicateSpecRow(existing, row))) return

  const key = specRowKey(row)
  if (seen.has(key)) return

  rows.push(row)
  seen.add(key)
}

function isDuplicateSpecRow(left, right) {
  if (normalizeSpecLabel(left.label) !== normalizeSpecLabel(right.label)) return false
  if ((left.scope ?? '') !== (right.scope ?? '')) return false
  if (!left.source || !right.source) return false
  return left.source.includes(right.source) || right.source.includes(left.source)
}

function normalizeSpecRow(row) {
  const label = /\bglobal cooldown\b/i.test(row.source ?? '') ? 'Cast Delay'
    : /\barea of effect bonus\b/i.test(row.source ?? '') ? 'Area of Effect Bonus'
      : /\barea of effect of secondary damage\b/i.test(row.source ?? '') ? 'Secondary Area of Effect'
        : normalizeSpecLabel(row.label)
  const qualifier = label === 'Base Damage' ? damageMetricQualifier(row.label) : ''
  const repaired = /\([^)]*\bto\b[^)]*\)/i.test(row.source ?? '')
    ? parseSpecRowsFromNote(row.source).find((parsed) => parsed.label === label && parsed.scope === row.scope)
    : null
  const removedMetric = /^Removes\s+(.+?)(?:\s+after skill)?\.?$/i.exec(row.source ?? '')?.[1] ?? ''
  const removedTime = row.after === 'Removed' && ['Fixed Cast Time', 'Variable Cast Time', 'Cast Delay', 'Cooldown'].includes(label)
  const previousSeconds = removedMetric.match(/^(\d+(?:\.\d+)?)\s+seconds?\b/i)?.[1]

  return {
    ...row,
    label,
    before: removedTime && previousSeconds ? `${previousSeconds} ${Number(previousSeconds) === 1 ? 'second' : 'seconds'}` : appendDamageQualifier(repaired?.before ?? (removedTime ? removedMetric : row.before), qualifier),
    after: removedTime ? '0 seconds' : appendDamageQualifier(repaired?.after ?? row.after, qualifier),
  }
}

function mergeSpecRows(rows) {
  const merged = []
  const damageByScope = new Map()

  for (const row of rows) {
    if (row.label !== 'Base Damage') {
      merged.push(row)
      continue
    }

    const key = 'Base Damage'
    const existing = damageByScope.get(key)
    if (!existing) {
      const copy = { ...row }
      damageByScope.set(key, copy)
      merged.push(copy)
      continue
    }

    existing.before = joinSpecValues(existing.before, row.before)
    existing.after = joinSpecValues(existing.after, row.after)
    existing.scope = joinSpecValues(existing.scope, row.scope)
    existing.source = joinSources(existing.source, row.source)
  }

  return merged
}

function shouldHideFuturePlaceholderSpec(label, appliedDelta, baseValue, firstDelta) {
  if (appliedDelta || baseValue) return false
  return label === 'Use Condition' && /^Unavailable$/i.test(firstDelta?.before ?? '')
}

function joinSpecValues(left, right) {
  if (!left) return right
  if (!right || left === right) return left
  return `${left}/${right}`
}

function joinSources(left, right) {
  if (!left) return right
  if (!right || left.includes(right)) return left
  return `${left} / ${right}`
}

function effectiveDamageSpecRows(model, deltas, selectedIndex, baseValues) {
  const result = effectiveDamageState(deltas, selectedIndex, baseValues)
  if (!result.components.length) return []

  return result.components.map((component) => {
    const beforeValue = result.beforeComponents.get(component.key)?.value ?? result.before

    return {
      label: 'Base Damage',
      value: component.value,
      changed: Boolean(result.appliedDelta),
      changeNote: result.appliedDelta
        ? appliedChangeNote({ ...result.appliedDelta, before: beforeValue })
        : futureChangeNote(result.nextDelta),
      changeUrl: forumUrlForDelta(model, result.appliedDelta ?? result.nextDelta),
    }
  })
}

function effectiveDamageState(deltas, selectedIndex, baseValues) {
  const state = new Map()
  const order = []
  const sorted = [...deltas].sort((a, b) => a.versionIndex - b.versionIndex)

  for (const delta of sorted) {
    mergeDamageComponents(state, order, parseDamageComponents(delta.before), { onlyMissing: true })
  }
  if (!state.size) mergeDamageComponents(state, order, parseDamageComponents(baseValues), { onlyMissing: true })

  let appliedDelta = null
  let before = ''
  let beforeComponents = new Map()
  let nextDelta = null

  for (const delta of sorted) {
    if (delta.versionIndex > selectedIndex) {
      if (!nextDelta) nextDelta = delta
      continue
    }

    mergeDamageComponents(state, order, parseDamageComponents(delta.before), { preferHigher: true })
    beforeComponents = new Map(state)
    before = formatDamageState(state, order)
    mergeDamageComponents(state, order, parseDamageComponents(delta.after))
    appliedDelta = delta
  }

  return {
    components: damageStateComponents(state, order),
    before,
    beforeComponents,
    appliedDelta,
    nextDelta,
  }
}

function mergeDamageComponents(state, order, components, options = {}) {
  for (const component of components) {
    const existing = state.get(component.key)

    if (!existing) {
      state.set(component.key, component)
      if (!order.includes(component.key)) order.push(component.key)
      continue
    }

    if (options.onlyMissing) continue
    state.set(component.key, options.preferHigher ? higherDamageComponent(existing, component) : component)
  }
}

function higherDamageComponent(left, right) {
  if (!Number.isFinite(left.amount)) return right
  if (!Number.isFinite(right.amount)) return left
  return right.amount > left.amount ? right : left
}

function parseDamageComponents(value) {
  const normalized = Array.isArray(value)
    ? value.map((entry) => normalizeSkillValue(entry)).filter(Boolean).join('/')
    : normalizeSkillValue(value)
  if (!normalized) return []

  const parts = splitDamageParts(normalized)
  const globalStat = normalized.match(/\b(?:ATK|MATK|Atk|Matk)\b/g)?.at(-1) ?? ''

  return parts.map((part, index) => damageComponent(part, index, parts.length, globalStat)).filter(Boolean)
}

function splitDamageParts(value) {
  return String(value ?? '')
    .split('/')
    .map((part) => part.trim())
    .filter(Boolean)
}

function damageComponent(part, index, partCount, globalStat) {
  const text = /\b(?:ATK|MATK|Atk|Matk)\b/.test(part) || !globalStat ? part : `${part}${globalStat}`
  const amount = Number(text.match(/([0-9][0-9,]*)(?=\s*(?:%|\+|$))/)?.[1]?.replace(/,/g, '') ?? Number.NaN)

  return {
    key: damageComponentKey(text, index, partCount),
    value: text,
    amount,
  }
}

function damageComponentKey(value, index, partCount) {
  const text = String(value ?? '').toLowerCase()
  const qualifiers = [...text.matchAll(/\(([^)]*)\)/g)].map((match) => match[1]).join(' ')

  if (/\b(primary|first|1st)\b/.test(qualifiers)) return 'slot-0'
  if (/\b(secondary|second|2nd)\b/.test(qualifiers) || /\barea damage\b/.test(qualifiers)) return 'slot-1'
  if (partCount > 1) return `slot-${index}`
  if (/\b(primary|first|1st)\b/.test(text)) return 'slot-0'
  if (/\b(secondary|second|2nd)\b/.test(text) || /\barea damage\b/.test(text)) return 'slot-1'
  return 'main'
}

function formatDamageState(state, order) {
  return damageStateComponents(state, order)
    .map((component) => component.value)
    .join('/')
}

function damageStateComponents(state, order) {
  return [...state.entries()]
    .sort((a, b) => damageComponentOrder(a[0], order) - damageComponentOrder(b[0], order))
    .map(([key, component]) => ({ ...component, key }))
}

function damageComponentOrder(key, order) {
  if (key === 'main' || key === 'slot-0') return 0
  if (key === 'slot-1') return 1
  const slot = key.match(/^slot-(\d+)$/)?.[1]
  if (slot) return Number(slot)
  return 100 + order.indexOf(key)
}

function parseSpecRowsFromNote(note) {
  const addedTime = String(note ?? '').match(/^Add(?:s|es)?\s+(?:(global cooldown|delay after skill|fixed casting time|variable casting time)\s+by\s+(\d+(?:\.\d+)?)\s+seconds?|(\d+(?:\.\d+)?)\s+seconds?\s+(cooldown|delay after skill))(?:\s+based on level\s+(\d+))?\.?$/i)
  if (addedTime) {
    const metric = addedTime[1] ?? addedTime[4]
    const amount = addedTime[2] ?? addedTime[3]
    return [{ label: noteSpecLabel(metric), before: '0 seconds', after: `${amount} ${Number(amount) === 1 ? 'second' : 'seconds'}`, scope: addedTime[5] ? `Lv ${addedTime[5]}` : '', source: note }]
  }

  const reworkedCooldown = String(note ?? '').match(/^Reworks cooldown from (\d+~\d+ seconds) to (\d+~\d+ seconds) \(level (\d+~\d+)\)\.?$/i)
  if (reworkedCooldown) {
    const scope = `(Lv ${reworkedCooldown[3]})`
    return [{ label: 'Cooldown', before: `${reworkedCooldown[1]} ${scope}`, after: `${reworkedCooldown[2]} ${scope}`, scope: '', source: note }]
  }

  if (/^Removes fixed casting time and variable casting time\.?$/i.test(note)) {
    return ['Fixed Cast Time', 'Variable Cast Time'].map((label) => ({ label, before: '—', after: '0 seconds', scope: '', source: note }))
  }

  const toOnly = String(note ?? '').match(/^(?:Reduces|Increases|Changes|Unifies)\s+(cooldown|delay after skill|area of effect|cast range|trap duration|damage interval|duration)\s+to\s+(.+?)(?:\s+based on level\s+(\d+)|\s+regardless of skill level)?\.?$/i)
  if (toOnly) return [{ label: noteSpecLabel(toOnly[1]), before: '—', after: normalizeSkillValue(toOnly[2]), scope: toOnly[3] ? `Lv ${toOnly[3]}` : '', source: note }]

  const changeMatch = String(note ?? '').match(/^(Increases|Reduces|Decreases|Changes)\s+(.+?)\s+from\s+(.+)$/i)
  if (!changeMatch) return []
  const scopeMatch = changeMatch[3].match(/\s+based on level\s+(\d+)(?:\s+(\([^)]+\)))?\.?$/i)
  const values = (scopeMatch ? changeMatch[3].slice(0, scopeMatch.index) : changeMatch[3]).replace(/\.$/, '')
  const split = splitOutsideParentheses(values, ' to ')
  if (!split) return []

  return [
    {
      label: noteSpecLabel(changeMatch[2]),
      before: appendDamageQualifier(normalizeSkillValue(split[0]), damageMetricQualifier(changeMatch[2])),
      after: appendDamageQualifier(normalizeSkillValue(split[1]), damageMetricQualifier(changeMatch[2])),
      scope: scopeMatch ? `Lv ${scopeMatch[1]}${scopeMatch[2] ? ` ${normalizeSkillValue(scopeMatch[2])}` : ''}` : '',
      source: note,
    },
  ]
}

function splitOutsideParentheses(value, separator) {
  let depth = 0
  for (let index = 0; index < value.length; index++) {
    if (value[index] === '(') depth++
    else if (value[index] === ')') depth--
    else if (depth === 0 && value.startsWith(separator, index)) return [value.slice(0, index), value.slice(index + separator.length)]
  }
  return null
}

function specRowKey(row) {
  return [normalizeSpecLabel(row.label), row.scope ?? '', row.source ?? ''].join('|')
}

function noteSpecLabel(rawMetric) {
  const metric = normalizeSkillValue(rawMetric).toLowerCase()
  if (metric.includes('fixed casting time')) return 'Fixed Cast Time'
  if (metric.includes('variable casting time')) return 'Variable Cast Time'
  if (metric.includes('global cooldown')) return 'Cast Delay'
  if (metric.includes('area of effect bonus')) return 'Area of Effect Bonus'
  if (metric.includes('area of effect of secondary damage')) return 'Secondary Area of Effect'
  if (metric.includes('sp consumption')) return 'SP Cost'
  if (metric.includes('ap consumption')) return 'AP Consumed'
  if (metric.includes('ap recovery')) return 'AP Generated'
  if (isBaseDamageMetric(metric)) return 'Base Damage'
  if (metric.includes('cooldown')) return 'Cooldown'
  if (metric.includes('delay')) return 'Cast Delay'
  if (metric.includes('cast range') || metric === 'range' || metric.includes('skill range')) return 'Cast Range'
  if (metric.includes('area of effect')) return 'Area of Effect'
  if (metric.includes('buff duration')) return 'Buff Duration'

  return rawMetric
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')
}

function selectedVersionIndex(model, versionId) {
  if (versionId === 'pre') return -1
  if (versionId === 'current') return Number.POSITIVE_INFINITY
  return model.versionOrder.get(versionId) ?? -1
}

function appliedChangeNote(delta) {
  const suffix = [delta.versionLabel, delta.scope].filter(Boolean).join(' · ')
  if (!delta.before) return suffix ? `changed in ${suffix}` : ''
  return `was ${delta.before}${suffix ? ` · ${suffix}` : ''}`
}

function futureChangeNote(delta) {
  if (!delta) return ''
  const suffix = [delta.versionLabel, delta.scope].filter(Boolean).join(' · ')
  return suffix ? `changes in ${suffix}` : 'changes in a later rebalance'
}

function forumUrlForDelta(model, delta) {
  return delta ? forumUrlForNote({ versionId: delta.versionId }, model.data.rebalanceVersions) : ''
}

function normalizeSpecLabel(label) {
  const castingTime = String(label).match(/^(?:\d+(?:\.\d+)?\s+seconds?\s+)?(fixed|variable)\s+cast(?:ing)?\s+time(?:\s+based on level\s+\d+)?$/i)
  if (castingTime) return `${castingTime[1].toLowerCase() === 'fixed' ? 'Fixed' : 'Variable'} Cast Time`
  if (label === 'AP Cost') return 'AP Consumed'
  if (label === 'After Cast Delay') return 'Cast Delay'
  if (label === 'Range') return 'Cast Range'
  if (label === 'Buff Duration') return 'Duration'
  if (isBaseDamageMetric(label)) return 'Base Damage'
  return label
}

function isBaseDamageMetric(label) {
  const metric = normalizeSkillValue(label).toLowerCase()
  if (/^damage formula\b/.test(metric) || /^damage bonus\b/.test(metric)) return false
  if (/^base\s+damage\b/.test(metric)) return true
  return /^damage(?:\s*(?:$|\(|of\b|the\b|primary\b|secondary\b|first\b|second\b|1st\b|2nd\b))/.test(metric)
}

function damageMetricQualifier(rawMetric) {
  const metric = normalizeSkillValue(rawMetric).replace(/^base\s+/i, '')
  const parenMatch = metric.match(/^damage\s*\((.+)\)$/i)
  if (parenMatch) return parenMatch[1]

  const suffixMatch = metric.match(/^damage\s+(?:of\s+(?:the\s+)?|)(.+)$/i)
  if (!suffixMatch) return ''

  const qualifier = suffixMatch[1].trim()
  return qualifier && !/^from\b/i.test(qualifier) ? qualifier : ''
}

function appendDamageQualifier(value, qualifier) {
  const normalizedValue = normalizeSkillValue(value)
  const normalizedQualifier = normalizeSkillValue(qualifier)
  if (!normalizedValue || !normalizedQualifier || normalizedValue.toLowerCase().includes(normalizedQualifier.toLowerCase())) {
    return normalizedValue
  }
  return `${normalizedValue} (${normalizedQualifier})`
}

function normalizeSkillValue(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    // Older generated data split the x inside these words; preserve real multiplication below.
    .replace(/\b(?:A\s+x\s+e|E\s+x\s+ceed|e\s+x\s+plosion|fi\s+x\s+ed|e\s+x\s+cept)\b/gi, (match) => match.replace(/\s+x\s+/i, 'x'))
    .replace(/\bClima\s+x\b/gi, 'Climax')
    .replace(/(\d)\s*x\s*(\d)/gi, '$1 x $2')
    .replace(/\s*cell(s)?/gi, ' cells')
    .replace(/\s+%/g, '%')
}
