import { coreSpecLabels } from './classModel.js'

export function notesForVersion(skill, versionId) {
  if (versionId === 'pre') return []
  if (versionId === 'current') return skill.balanceNotes
  return skill.balanceNotes.filter((entry) => entry.versionId === versionId)
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
  ].filter((label) => !hiddenLabels.has(label))

  return labels
    .map((label) => {
      const labelDeltas = deltasByLabel.get(label) ?? []
      const appliedDelta = labelDeltas.filter((delta) => delta.versionIndex <= selectedIndex).at(-1)
      const firstDelta = labelDeltas[0]
      const nextDelta = labelDeltas.find((delta) => delta.versionIndex > selectedIndex)
      const baseValue = baseByLabel.get(label)
      const value = appliedDelta?.after || (!appliedDelta && firstDelta?.before) || baseValue || ''

      return {
        label,
        value,
        changed: Boolean(appliedDelta),
        changeNote: appliedDelta ? appliedChangeNote(appliedDelta) : futureChangeNote(nextDelta),
      }
    })
    .filter((row) => row.value)
}

export function effectiveLevelTable(model, skill, versionId) {
  const source = skill.details.levelTables?.[0]
  if (!source) return null

  const table = {
    ...source,
    columns: source.columns.map((column) => ({ ...column })),
    rows: source.rows.map((row) => ({
      level: row.level,
      values: { ...row.values },
    })),
  }
  const selectedIndex = selectedVersionIndex(model, versionId)

  for (const entry of effectiveLevelDeltas(model, skill, selectedIndex)) applyLevelDelta(table, entry.delta, entry.value)
  stripDamageFromLevelTable(table)

  return table.columns.length ? table : null
}

function effectiveLevelDeltas(model, skill, selectedIndex) {
  const byKey = new Map()

  for (const delta of specDeltas(model, skill)) {
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

function levelDeltaKey(delta) {
  const level = delta.scope?.match(/Lv\s+\d+/i)?.[0] ?? delta.scope ?? ''
  return [delta.label, level].join('|')
}

function applyLevelDelta(table, delta, value) {
  const targetRow = rowForDelta(table, delta)
  if (!targetRow) return

  if (delta.label === 'Damage') return

  const label = delta.label === 'Buff Duration' ? 'Duration' : delta.label
  const column = table.columns.find((candidate) => candidate.label === label)
  if (!column) return

  targetRow.values[column.id] = formatLevelDeltaValue(label, value)
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
  if (/\b(?:ATK|MATK)\b/i.test(text) && /[0-9]/.test(text)) return true
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
  if (/damage/i.test(label)) return true
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
    if (!map.has(label)) map.set(label, row.value)
  }

  return map
}

function specDeltas(model, skill) {
  return skill.balanceNotes
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
  const key = specRowKey(row)
  if (seen.has(key)) return

  rows.push(row)
  seen.add(key)
}

function normalizeSpecRow(row) {
  const label = normalizeSpecLabel(row.label)
  const qualifier = label === 'Damage' ? damageMetricQualifier(row.label) : ''

  return {
    ...row,
    label,
    before: appendDamageQualifier(row.before, qualifier),
    after: appendDamageQualifier(row.after, qualifier),
  }
}

function mergeSpecRows(rows) {
  const merged = []
  const damageByScope = new Map()

  for (const row of rows) {
    if (row.label !== 'Damage') {
      merged.push(row)
      continue
    }

    const key = 'Damage'
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

function parseSpecRowsFromNote(note) {
  const changeMatch = String(note ?? '').match(
    /^(Increases|Reduces|Decreases|Changes)\s+(.+?)\s+from\s+(.+?)\s+to\s+(.+?)(?:\s+based on level\s+(\d+)(?:\s+(\([^)]+\)))?)?\.?$/i,
  )
  if (!changeMatch) return []

  return [
    {
      label: noteSpecLabel(changeMatch[2]),
      before: appendDamageQualifier(normalizeSkillValue(changeMatch[3]), damageMetricQualifier(changeMatch[2])),
      after: appendDamageQualifier(normalizeSkillValue(changeMatch[4]), damageMetricQualifier(changeMatch[2])),
      scope: changeMatch[5] ? `Lv ${changeMatch[5]}${changeMatch[6] ? ` ${normalizeSkillValue(changeMatch[6])}` : ''}` : '',
      source: note,
    },
  ]
}

function specRowKey(row) {
  return [normalizeSpecLabel(row.label), row.scope ?? '', row.source ?? ''].join('|')
}

function noteSpecLabel(rawMetric) {
  const metric = normalizeSkillValue(rawMetric).toLowerCase()
  if (metric.includes('sp consumption')) return 'SP Cost'
  if (metric.includes('ap consumption')) return 'AP Consumed'
  if (metric.includes('ap recovery')) return 'AP Generated'
  if (/^(?:base\s+)?damage\b/.test(metric)) return 'Damage'
  if (metric.includes('cooldown')) return 'Cooldown'
  if (metric.includes('delay')) return 'Cast Delay'
  if (metric.includes('cast range')) return 'Cast Range'
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

function normalizeSpecLabel(label) {
  if (label === 'AP Cost') return 'AP Consumed'
  if (label === 'After Cast Delay') return 'Cast Delay'
  if (/^(?:base\s+)?damage\b/i.test(label)) return 'Damage'
  return label
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
    .replace(/\s*x\s*/gi, ' x ')
    .replace(/\s*cell(s)?/gi, ' cells')
    .replace(/\s+%/g, '%')
}
