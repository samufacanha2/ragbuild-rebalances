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
  const futureLabels = new Set()

  for (const delta of specDeltas(model, skill)) {
    const shouldApply = delta.versionIndex <= selectedIndex
    const isNextFuture = delta.versionIndex > selectedIndex && !futureLabels.has(delta.label)

    if (!shouldApply && !isNextFuture) continue
    applyLevelDelta(table, delta, shouldApply ? delta.after : delta.before)
    if (isNextFuture) futureLabels.add(delta.label)
  }

  return table
}

function applyLevelDelta(table, delta, value) {
  const targetRow = rowForDelta(table, delta)
  if (!targetRow) return

  if (delta.label === 'Damage') {
    applyDamageDelta(table, targetRow, value)
    return
  }

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

function applyDamageDelta(table, row, value) {
  const damage = parseDamageDelta(value)
  const baseColumn =
    table.columns.find((column) => column.label === 'Base Damage (ATK)') ??
    table.columns.find((column) => column.label === 'Base Damage (ATK per Hit)') ??
    table.columns.find((column) => column.label === 'Base Damage (MATK)') ??
    table.columns.find((column) => column.label === 'Base Damage (MATK per Hit)') ??
    table.columns.find((column) => column.label === 'Cursed Target Factor')
  const blessingColumn = table.columns.find((column) => column.label === 'Under Blessing of Four Directions')

  if (baseColumn && damage.base) applyDamageColumnDelta(table, baseColumn, row, damage.base)
  if (blessingColumn && damage.blessing) applyDamageColumnDelta(table, blessingColumn, row, damage.blessing)
}

function applyDamageColumnDelta(table, column, targetRow, damage) {
  const inferredValues = inferDamageColumnValues(table, column, targetRow.level, damage)

  if (inferredValues) {
    for (const row of table.rows) row.values[column.id] = inferredValues.get(row.level)
    return
  }

  for (const row of table.rows) {
    if (row.level === targetRow.level) {
      row.values[column.id] = formatDamageAmount(damage.amount, damage.percent)
    } else {
      delete row.values[column.id]
    }
  }
}

function parseDamageDelta(value) {
  const values = String(value ?? '')
    .split('/')
    .map(parseDamageValue)
    .filter(Boolean)

  return {
    base: values[0] ?? '',
    blessing: values[1] ?? '',
  }
}

function parseDamageValue(value) {
  const text = String(value ?? '')
  const match = text.match(/([0-9][0-9,]*)(?=\s*(?:%|\+))/)
  if (!match) return null

  return {
    amount: Number(match[1].replace(/,/g, '')),
    percent: text.slice(match.index + match[1].length).trimStart().startsWith('%'),
  }
}

function inferDamageColumnValues(table, column, targetLevel, damage) {
  const maxLevel = Math.max(...table.rows.map((row) => row.level))
  if (targetLevel !== maxLevel) return null

  const parsedRows = table.rows.map((row) => ({
    level: row.level,
    value: parseSimpleDamageValue(row.values[column.id]),
  }))
  if (parsedRows.some((row) => !row.value)) return null
  if (!hasLinearLevelScaling(parsedRows)) return null

  const percent = damage.percent || parsedRows.some((row) => row.value.percent)
  return new Map(
    parsedRows.map((row) => [
      row.level,
      formatDamageAmount((damage.amount * row.level) / targetLevel, percent),
    ]),
  )
}

function parseSimpleDamageValue(value) {
  const match = String(value ?? '').trim().match(/^([0-9][0-9,]*)(%)?$/)
  if (!match) return null

  return {
    amount: Number(match[1].replace(/,/g, '')),
    percent: Boolean(match[2]),
  }
}

function hasLinearLevelScaling(rows) {
  const [first] = rows
  if (!first?.level || !first.value) return false

  const base = first.value.amount / first.level
  return rows.every((row) => row.level && Math.abs(row.value.amount / row.level - base) < 0.0001)
}

function formatDamageAmount(amount, percent) {
  const rounded = Math.round(amount * 100) / 100
  const value = Number.isInteger(rounded)
    ? formatNumber(String(rounded))
    : rounded.toLocaleString('en-US', { maximumFractionDigits: 2 })
  return `${value}${percent ? '%' : ''}`
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
  if (
    columnLabels.has('Base Damage (ATK)') ||
    columnLabels.has('Base Damage (ATK per Hit)') ||
    columnLabels.has('Base Damage (MATK)') ||
    columnLabels.has('Base Damage (MATK per Hit)') ||
    columnLabels.has('Under Blessing of Four Directions') ||
    columnLabels.has('Cursed Target Factor')
  ) {
    covered.add('Damage')
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
  const rows = [...(entry.specRows ?? [])]
  const seen = new Set(rows.map(specRowKey))

  for (const note of entry.notes ?? []) {
    for (const row of parseSpecRowsFromNote(note)) {
      const key = specRowKey(row)
      if (seen.has(key)) continue

      rows.push(row)
      seen.add(key)
    }
  }

  return rows
}

function parseSpecRowsFromNote(note) {
  const changeMatch = String(note ?? '').match(
    /^(Increases|Reduces|Decreases|Changes)\s+(.+?)\s+from\s+(.+?)\s+to\s+(.+?)(?:\s+based on level\s+(\d+))?\.?$/i,
  )
  if (!changeMatch) return []

  return [
    {
      label: noteSpecLabel(changeMatch[2]),
      before: normalizeSkillValue(changeMatch[3]),
      after: normalizeSkillValue(changeMatch[4]),
      scope: changeMatch[5] ? `Lv ${changeMatch[5]}` : '',
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
  if (metric.includes('base damage') || metric === 'damage') return 'Damage'
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
  return label
}

function normalizeSkillValue(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s*x\s*/gi, ' x ')
    .replace(/\s*cell(s)?/gi, ' cells')
    .replace(/\s+%/g, '%')
}

function formatNumber(value) {
  const digits = String(value).replace(/,/g, '')
  if (!/^\d+$/.test(digits)) return String(value)
  return Number(digits).toLocaleString('en-US')
}
