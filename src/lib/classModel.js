export const coreSpecLabels = [
  'Type',
  'Levels',
  'SP Cost',
  'Fixed Cast Time',
  'Variable Cast Time',
  'Cast Delay',
  'Cooldown',
  'Cast Range',
  'Target',
  'Area of Effect',
  'Duration',
  'Ammunition',
  'AP Generated',
  'AP Consumed',
  'Pulse',
  'Property',
]

export function createClassModel(data, dataSetId) {
  const columns = data.skills.map((skill) => Number(skill.tree.col ?? 0))
  const maxCol = columns.length ? Math.max(...columns) : 0
  const columnsCount = Number(data.tree.columns ?? maxCol + 1) || 1

  return {
    data,
    dataSetId,
    skillById: new Map(data.skills.map((skill) => [skill.id, skill])),
    versionById: new Map(data.rebalanceVersions.map((version) => [version.id, version])),
    versionOrder: new Map(data.rebalanceVersions.map((version, index) => [version.id, index])),
    initialSkillId: data.skills.find((skill) => skill.balanceNotes.length)?.id ?? data.skills[0]?.id ?? null,
    versionTourStorageKey: `skill-version-tour-complete:${dataSetId}`,
    visibleTree: {
      minCol: 0,
      columns: Math.max(columnsCount, maxCol + 1),
      rows: data.tree.rows,
    },
  }
}

export function pointLimitForSpecVersion(data, specVersion) {
  const timeline = data.pointLimitTimeline ?? []
  const entry = timeline.find((candidate) => candidate.versionId === specVersion)
  return Number(entry?.pointLimit ?? data.pointLimit ?? 49)
}
