// ROLATAM rollout information supplied for Rebalance 2; distinct from the kRO source notes.
import { sigmaInitialSkillFor, sigmaInitialSpecRows } from './sigmaInitialSkills.js'
export const rebalance2AddedSkillIdsByClass = {
  'dragon-knight': [6001],
  meister: [6004, 6003, 6002],
  biolo: [6005, 6006],
}

const addedSkillIds = new Set(Object.values(rebalance2AddedSkillIdsByClass).flat())

export function rebalance2IntroductionForSkill(skill) {
  if (!addedSkillIds.has(skill.id)) return null
  const initial = sigmaInitialSkillFor(skill.id)
  return {
    versionId: 'rebalance-2',
    versionLabel: 'Rebalance 2',
    section: '',
    file: '',
    notes: [],
    initialSpecs: sigmaInitialSpecRows(skill.id),
    added: true,
    provenance: 'rolatam-planned',
    sourceUrl: initial?.sourceUrl ?? '',
  }
}
