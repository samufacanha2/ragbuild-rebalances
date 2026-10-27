import { useEffect, useMemo, useState } from 'react'
import { classDataSets } from '../../generated/classDataSets.js'
import { createClassModel } from '../../lib/classModel.js'
import { compareRebalanceSkill } from '../../lib/rebalanceSkillComparison.js'
import { PinnedSkillPopup } from '../PinnedSkillPopup'
import './RebalancePinnedSkillStyles.css'

export function RebalancePinnedSkill({ classId, skillId, fallbackName, iconUrl, notes, language, versionId, index, globalHiddenSpecIds, localHiddenSpecIds, onGlobalSpecIdsChange, onLocalSpecIdsChange, onClose }) {
  const [model, setModel] = useState(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    let active = true
    const dataSet = classDataSets.find((entry) => entry.id === classId)
    if (!dataSet) return undefined
    dataSet.load().then((data) => {
      if (active) setModel(createClassModel(data, classId))
    }).catch(() => { if (active) setLoadError(true) })
    return () => { active = false }
  }, [classId])

  const skill = model?.skillById.get(skillId) ?? model?.data.skillTabs?.flatMap((tab) => tab.skills).find((item) => item.id === skillId)
  const comparison = useMemo(() => model && skill ? compareRebalanceSkill(model, skill, versionId) : null, [model, skill, versionId])
  return <PinnedSkillPopup
    model={model}
    skill={skill}
    specVersion={versionId}
    language={language}
    index={index}
    comparisonMode
    comparison={comparison}
    notes={notes}
    fallbackName={fallbackName}
    iconUrl={iconUrl}
    loadError={loadError}
    globalHiddenSpecIds={globalHiddenSpecIds}
    localHiddenSpecIds={localHiddenSpecIds}
    onGlobalSpecIdsChange={onGlobalSpecIdsChange}
    onLocalSpecIdsChange={onLocalSpecIdsChange}
    onClose={onClose}
  />
}
