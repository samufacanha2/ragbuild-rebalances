import assert from 'node:assert/strict'
import test from 'node:test'
import { classesForRebalance, rebalanceForClass, rebalanceAppliesToClass, rebalanceReleaseStatus, rolatamDefaultSpecVersion, ROLATAM_CURRENT_REBALANCE_ID } from './rebalanceCatalog.js'
import { initialPlannerSpecVersion, plannerHasCustomSpecVersion } from './classModel.js'
import { rebalanceCatalog } from '../generated/rebalanceCatalog.js'
import { classDataSets } from '../generated/classDataSets.js'
import { translatedSkillName } from './translations.js'
import { existsSync } from 'node:fs'
import browiki from '../data/browiki-pt-br.json' with { type: 'json' }

const classes = [
  { id: 'knight', label: 'Knight', versions: [
    { id: 'rebalance-2', skills: [{ name: 'Slash', notes: ['Damage 100 to 200.', 'Cooldown reduced.'] }] },
  ] },
  { id: 'novice', label: 'Novice', versions: [] },
]

test('selector marks the current ROLATAM rebalance and only its immediate successor', () => {
  assert.equal(rebalanceReleaseStatus(rebalanceCatalog.versions, 'rebalance-1'), '')
  assert.equal(rebalanceReleaseStatus(rebalanceCatalog.versions, 'rebalance-2'), 'Current')
  assert.equal(rebalanceReleaseStatus(rebalanceCatalog.versions, 'rebalance-3'), 'Next')
  assert.equal(rebalanceReleaseStatus(rebalanceCatalog.versions, 'rebalance-4'), '')
})

test('current ROLATAM defaults apply to both main and expanded planners', async () => {
  for (const classId of ['dragon-knight', 'soul-ascetic']) {
    const data = await classDataSets.find((entry) => entry.id === classId).load()
    assert.equal(rolatamDefaultSpecVersion({ id: classId, data }), 'rebalance-2')
  }
  const alitea = await classDataSets.find((entry) => entry.id === 'alitea').load()
  assert.equal(rolatamDefaultSpecVersion({ id: 'alitea', data: alitea }), 'pre')
})

test('an old automatic Rebalance 1 selection follows the new LATAM default, but a chosen version persists', () => {
  assert.equal(plannerHasCustomSpecVersion({ specVersion: 'rebalance-1', hasCustomSpecVersion: false }, true), false)
  assert.equal(plannerHasCustomSpecVersion({ specVersion: 'rebalance-1', hasCustomSpecVersion: true }, true), true)
  assert.equal(plannerHasCustomSpecVersion({ specVersion: 'rebalance-1' }, true), true)
  assert.equal(plannerHasCustomSpecVersion({ specVersion: 'rebalance-1', hasCustomSpecVersion: true }, false), false)
})

test('notes keep Rebalance 2 as the current base, not the next version', () => {
  const versionId = ROLATAM_CURRENT_REBALANCE_ID
  assert.equal(versionId, 'rebalance-2')
  const current = rebalanceForClass(rebalanceCatalog.classes, 'meister', versionId)
  assert.ok(current?.skills.some((skill) => skill.skillId === 6003 && skill.added))
  const next = rebalanceForClass(rebalanceCatalog.classes, 'meister', 'rebalance-3')
  assert.ok(next?.skills.some((skill) => skill.skillId === 6003 && !skill.added))
})

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

test('all skill timelines resolve to unique rebalance-card anchors, including grouped skills', async () => {
  const targets = new Set()
  for (const entry of rebalanceCatalog.classes) {
    for (const version of entry.versions) {
      for (const skill of version.skills) {
        for (const skillId of skill.groupedSkills?.map((member) => member.skillId) ?? [skill.skillId]) {
          if (!skillId) continue
          const key = `${entry.id}:${version.id}:${skillId}`
          assert.ok(!targets.has(key), `Duplicate rebalance target ${key}`)
          targets.add(key)
        }
      }
    }
  }

  for (const dataSet of classDataSets) {
    const data = await dataSet.load()
    for (const skill of data.skills) {
      for (const note of skill.balanceNotes ?? []) {
        if (!note.notes?.length && !note.specRows?.length) continue
        const key = `${dataSet.id}:${note.versionId}:${skill.id}`
        assert.ok(targets.has(key), `Missing rebalance target ${key}`)
      }
    }
  }
})
