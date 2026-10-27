import assert from 'node:assert/strict'
import test from 'node:test'
import { dragonKnightData } from '../generated/dragonKnightData.js'
import { createClassModel } from './classModel.js'
import { rebalanceNotesHref, rebalanceSkillAnchorId } from './routes.js'
import { effectiveLevelTable, effectiveSpecRows } from './specs.js'

const model = createClassModel(dragonKnightData, 'dragon-knight')
const skill = dragonKnightData.skills.find((entry) => entry.name === 'Hack And Slasher')

function rowFor(version, label) {
  return effectiveSpecRows(model, skill, version, effectiveLevelTable(model, skill, version))
    .find((entry) => entry.label === label)
}

test('future change note links to its exact skill in our rebalance page', () => {
  const row = rowFor('pre', 'SP Cost')
  assert.match(row.changeNote, /changes in Rebalance 2/)
  assert.equal(row.changeUrl, '/rebalances?version=rebalance-2&classId=dragon-knight#skill-dragon-knight-5208')
})

test('applied damage change note links to its own version and skill', () => {
  const row = rowFor('current', 'Base Damage')
  assert.match(row.changeNote, /Rebalance 4/)
  assert.equal(row.changeUrl, '/rebalances?version=rebalance-4&classId=dragon-knight#skill-dragon-knight-5208')
})

test('grouped skills get their own deep link, with a class fallback for unknown skill IDs', () => {
  assert.equal(rebalanceSkillAnchorId('meister', 5303), 'skill-meister-5303')
  assert.equal(rebalanceNotesHref('meister', 'rebalance-1', 5303), '/rebalances?version=rebalance-1&classId=meister#skill-meister-5303')
  assert.equal(rebalanceNotesHref('meister', 'rebalance-1'), '/rebalances?version=rebalance-1&classId=meister#class-meister')
})
