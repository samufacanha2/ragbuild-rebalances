import assert from 'node:assert/strict'
import test from 'node:test'
import {
  rebalancePinConfigKey,
  selectedComparisonSpecIds,
  updatedComparisonHiddenSpecIds,
} from './rebalancePinnedSpecSelection.js'

test('rebalance pin configuration is isolated by version for the same class and skill', () => {
  const pinKey = 'dragon-knight:5208'
  const localHidden = { [rebalancePinConfigKey('rebalance-1', pinKey)]: ['SP Cost'] }
  assert.deepEqual(localHidden[rebalancePinConfigKey('rebalance-1', pinKey)], ['SP Cost'])
  assert.equal(localHidden[rebalancePinConfigKey('rebalance-2', pinKey)], undefined)
})

test('local comparison exclusions set before async rows load keep later rows visible', () => {
  const localHiddenBeforeLoad = []
  assert.deepEqual(selectedComparisonSpecIds([], localHiddenBeforeLoad), [])
  assert.deepEqual(selectedComparisonSpecIds(['SP Cost', 'Cooldown'], localHiddenBeforeLoad), ['SP Cost', 'Cooldown'])
})

test('local comparison selection hides unchecked labels but leaves future labels visible', () => {
  const hidden = updatedComparisonHiddenSpecIds(['SP Cost', 'Cooldown'], ['Cooldown'], [])
  assert.deepEqual(hidden, ['SP Cost'])
  assert.deepEqual(selectedComparisonSpecIds(['SP Cost', 'Cooldown', 'Base Damage'], hidden), ['Cooldown', 'Base Damage'])
})

test('comparison edits preserve exclusions not present among loaded options', () => {
  assert.deepEqual(updatedComparisonHiddenSpecIds(['SP Cost', 'Cooldown'], ['Cooldown'], ['Cast Range']), ['Cast Range', 'SP Cost'])
})
