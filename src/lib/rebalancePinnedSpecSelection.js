export function rebalancePinConfigKey(versionId, pinKey) {
  return `${versionId}:${pinKey}`
}

export function selectedComparisonSpecIds(optionIds, hiddenSpecIds) {
  return optionIds.filter((id) => !hiddenSpecIds.includes(id))
}

export function updatedComparisonHiddenSpecIds(optionIds, selectedSpecIds, hiddenSpecIds) {
  return [...hiddenSpecIds.filter((id) => !optionIds.includes(id)), ...optionIds.filter((id) => !selectedSpecIds.includes(id))]
}
