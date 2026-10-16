import assert from 'node:assert/strict'
import test from 'node:test'
import { classesForRebalance, rebalanceForClass, rebalanceAppliesToClass } from './rebalanceCatalog.js'
import { initialPlannerSpecVersion } from './classModel.js'
import { rebalanceCatalog } from '../generated/rebalanceCatalog.js'
import { translatedSkillName } from './translations.js'
import { existsSync } from 'node:fs'
import browiki from '../data/browiki-pt-br.json' with { type: 'json' }

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

test('Inquisitor notes resolve the verified Judge ID, localized name, and available icon', () => {
  for (const versionId of ['rebalance-1', 'rebalance-2']) {
    const judge = rebalanceForClass(rebalanceCatalog.classes, 'inquisitor', versionId).skills.find((skill) => skill.name === 'Judge')
    assert.equal(judge.skillId, 5247)
    assert.equal(judge.iconUrl, 'assets/divine-pride/skills/5247.png')
    assert.equal(translatedSkillName({ id: judge.skillId, name: judge.name }, 'pt-BR'), 'Auréola do Juiz')
    assert.equal(translatedSkillName({ id: judge.skillId, name: judge.name }, 'en'), 'Judge')
  }
})

test('all resolved rebalance skill icons exist locally', () => {
  for (const entry of rebalanceCatalog.classes) {
    for (const version of entry.versions) {
      for (const skill of version.skills) {
        if (skill.groupedSkills) {
          assert.ok(skill.groupedSkills.length > 1, `Expected multiple skills in ${entry.id}: ${skill.name}`)
          assert.equal(skill.skillId, undefined, `Group cannot have one skill ID: ${skill.name}`)
          for (const member of skill.groupedSkills) {
            assert.ok(existsSync(new URL(`../../public/${member.iconUrl}`, import.meta.url)), `Missing group icon: ${member.iconUrl}`)
            assert.ok(browiki.skills[member.skillId]?.name, `Missing Brazilian name for grouped skill ${member.skillId}`)
          }
          continue
        }
        if (!skill.skillId) continue
        assert.ok(skill.iconUrl, `Missing icon URL for ${entry.id} ${version.id} ${skill.name}`)
        assert.ok(existsSync(new URL(`../../public/${skill.iconUrl}`, import.meta.url)), `Missing icon file: ${skill.iconUrl}`)
      }
    }
  }
})

test('Earth Care note has the verified Terremotus identity, not Diluvio', () => {
  const skills = rebalanceForClass(rebalanceCatalog.classes, 'elemental-master', 'rebalance-4').skills
  const cold = skills.find((skill) => skill.notes.some((note) => note.includes('Cold Force')))
  const earth = skills.find((skill) => skill.notes.some((note) => note.includes('Earth Care')))
  assert.equal(cold.skillId, 5376)
  assert.equal(earth.skillId, 5378)
  assert.equal(translatedSkillName({ id: earth.skillId, name: earth.name }, 'pt-BR'), 'Invocar Terremotus')
})
