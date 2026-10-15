import { expandedClassIds } from './classModel.js'

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
