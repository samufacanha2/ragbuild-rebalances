import { expandedClassIds } from './classModel.js'

export const ROLATAM_CURRENT_REBALANCE_ID = 'rebalance-1'

export function rebalanceReleaseStatus(versions, versionId) {
  const currentIndex = versions.findIndex((entry) => entry.id === ROLATAM_CURRENT_REBALANCE_ID)
  if (currentIndex < 0) return ''
  if (versions[currentIndex].id === versionId) return 'Current'
  return versions[currentIndex + 1]?.id === versionId ? 'Next' : ''
}

export function rebalanceAppliesToClass(version, classId) {
  return version.scope !== 'main' || !expandedClassIds.has(classId)
}

export function classesForRebalance(classes, version) {
  return classes.filter((entry) => rebalanceAppliesToClass(version, entry.id)).map((entry) => ({
    ...entry,
    skillCount: entry.versions.find((candidate) => candidate.id === version.id)?.skills.length ?? 0,
  }))
}

export function rebalanceForClass(classes, classId, versionId) {
  return classes.find((entry) => entry.id === classId)?.versions.find((version) => version.id === versionId) ?? null
}
