import assert from 'node:assert/strict'
import test from 'node:test'
import { dragonKnightData } from '../generated/dragonKnightData.js'
import { createClassModel } from './classModel.js'
import { effectiveLevelTable, effectiveSpecRows } from './specs.js'

const model = createClassModel(dragonKnightData, 'dragon-knight')
const skill = dragonKnightData.skills.find((entry) => entry.name === 'Hack And Slasher')

function rowFor(version, label) {
  return effectiveSpecRows(model, skill, version, effectiveLevelTable(model, skill, version))
    .find((entry) => entry.label === label)
}

test('future change note points to the specific Divine Pride rebalance comment', () => {
  const row = rowFor('pre', 'SP Cost')
  assert.match(row.changeNote, /changes in Rebalance 2/)
  assert.equal(row.changeUrl, 'https://www.divine-pride.net/forum/index.php?/topic/3723-kro-jobs-improvement-project/&do=findComment&comment=11126')
})

test('applied damage change note points to its own rebalance comment', () => {
  const row = rowFor('current', 'Base Damage')
  assert.match(row.changeNote, /Rebalance/)
  assert.match(row.changeUrl, /&do=findComment&comment=\d+$/)
})
