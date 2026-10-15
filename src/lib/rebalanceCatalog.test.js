import assert from 'node:assert/strict'
import test from 'node:test'
import { classesForRebalance, rebalanceForClass, rebalanceAppliesToClass } from './rebalanceCatalog.js'
import { initialPlannerSpecVersion } from './classModel.js'

const classes = [
  { id: 'knight', label: 'Knight', versions: [
    { id: 'rebalance-2', skills: [{ name: 'Slash', notes: ['Damage 100 to 200.', 'Cooldown reduced.'] }] },
  ] },
  { id: 'novice', label: 'Novice', versions: [] },
]

test('catalog keeps classes without notes visible but counts only affected skills', () => {
  assert.deepEqual(classesForRebalance(classes, { id: 'rebalance-2', scope: 'main-and-expanded' }).map(({ id, skillCount }) => [id, skillCount]), [
    ['knight', 1], ['novice', 0],
  ])
})

test('main-only rebalance excludes expanded classes but keeps main classes without notes', () => {
  const entries = [...classes, { id: 'soul-ascetic', label: 'Soul Ascetic', versions: [] }]
  const version = { id: 'rebalance-1', scope: 'main' }
  assert.deepEqual(classesForRebalance(entries, version).map(({ id }) => id), ['knight', 'novice'])
  assert.equal(rebalanceAppliesToClass(version, 'soul-ascetic'), false)
  assert.equal(rebalanceAppliesToClass({ id: 'rebalance-2', scope: 'main-and-expanded' }, 'soul-ascetic'), true)
})

test('explicit planner version takes precedence over saved settings only when valid', () => {
  const data = { rebalanceVersions: [{ id: 'rebalance-1' }, { id: 'rebalance-5' }] }
  assert.equal(initialPlannerSpecVersion(data, 'rebalance-5', 'rebalance-1'), 'rebalance-5')
  assert.equal(initialPlannerSpecVersion(data, 'unknown', 'rebalance-1'), 'rebalance-1')
})

test('class view returns only the chosen version and its original skill notes', () => {
  const selected = rebalanceForClass(classes, 'knight', 'rebalance-2')
  assert.equal(selected.skills[0].notes[0], 'Damage 100 to 200.')
  assert.equal(rebalanceForClass(classes, 'knight', 'rebalance-1'), null)
  assert.equal(rebalanceForClass(classes, 'missing', 'rebalance-2'), null)
})
