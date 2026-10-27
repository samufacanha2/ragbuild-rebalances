import { rebalanceCatalog } from '../generated/rebalanceCatalog.js'
import { effectiveLevelTable, effectiveSpecRows, skillAvailableInVersion } from './specs.js'

export function compareRebalanceSkill(model, skill, versionId) {
  const timelineSkill = withCatalogNotes(model, skill)
  const versionIndex = model.data.rebalanceVersions.findIndex((entry) => entry.id === versionId)
  const previousVersionId = versionIndex > 0 ? model.data.rebalanceVersions[versionIndex - 1].id : 'pre'
  const newSkill = !skillAvailableInVersion(model.data, timelineSkill, previousVersionId)
  const previousRows = newSkill ? [] : effectiveSpecRows(model, timelineSkill, previousVersionId, null)
  const currentRows = effectiveSpecRows(model, timelineSkill, versionId, null)
  const previousByLabel = new Map()
  for (const row of previousRows) {
    const matches = previousByLabel.get(row.label) ?? []
    matches.push(row)
    previousByLabel.set(row.label, matches)
  }
  const rows = currentRows.map((row) => {
    const previous = previousByLabel.get(row.label)?.shift()
    return {
      label: row.label,
      before: previous?.value ?? '',
      after: row.value,
      ...(previous?.valuePtBr ? { beforePtBr: previous.valuePtBr } : {}),
      ...(row.valuePtBr ? { afterPtBr: row.valuePtBr } : {}),
      changed: !previous || previous.value !== row.value,
    }
  })
  return {
    rows,
    newSkill,
    previousVersionId,
    levelTable: effectiveLevelTable(model, timelineSkill, versionId),
    previousLevelTable: newSkill ? null : effectiveLevelTable(model, timelineSkill, previousVersionId),
  }
}

function withCatalogNotes(model, skill) {
  const classCatalog = rebalanceCatalog.classes.find((entry) => entry.id === model.dataSetId)
  if (!classCatalog) return skill
  const additions = classCatalog.versions.flatMap((version) => {
    const known = new Set((skill.balanceNotes ?? []).filter((entry) => entry.versionId === version.id).flatMap((entry) => entry.notes))
    return version.skills.flatMap((entry) => {
      if (entry.skillId !== skill.id && !entry.groupedSkills?.some((member) => member.skillId === skill.id)) return []
      const notes = entry.notes.filter((note) => !known.has(note))
      return notes.length ? [{ versionId: version.id, versionLabel: version.label, notes, specRows: [] }] : []
    })
  })
  return additions.length ? { ...skill, balanceNotes: [...(skill.balanceNotes ?? []), ...additions] } : skill
}
