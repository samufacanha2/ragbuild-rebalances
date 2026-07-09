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

  if (baseColumn && damage.base) row.values[baseColumn.id] = damage.base
  if (blessingColumn && damage.blessing) row.values[blessingColumn.id] = damage.blessing
}

function parseDamageDelta(value) {
  const values = String(value ?? '')
    .split('/')
    .map((part) => part.match(/([0-9][0-9,]*)(?=\s*(?:%|\+))/)?.[1])
    .filter(Boolean)
    .map(formatNumber)

  return {
    base: values[0] ?? '',
    blessing: values[1] ?? '',
  }
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
      (entry.specRows ?? []).map((row) => ({
        ...row,
        label: normalizeSpecLabel(row.label),
        versionId: entry.versionId,
        versionLabel: entry.versionLabel,
        versionIndex: model.versionOrder.get(entry.versionId) ?? Number.MAX_SAFE_INTEGER,
      })),
    )
    .sort((a, b) => a.versionIndex - b.versionIndex)
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

function formatNumber(value) {
  const digits = String(value).replace(/,/g, '')
  if (!/^\d+$/.test(digits)) return String(value)
  return Number(digits).toLocaleString('en-US')
}
