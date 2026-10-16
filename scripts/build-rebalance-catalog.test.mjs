import assert from 'node:assert/strict'
import test from 'node:test'
import { catalogFromClassData } from './build-rebalance-catalog.mjs'

const manifest = [
  { id: 'rebalance-2', sourceUrl: 'https://example.org/2' },
  { id: 'rebalance-5', sourceUrl: 'https://example.org/5', changeSourceUrl: 'https://example.org/5-added' },
]

test('catalog preserves exact per-skill notes and includes newly added skills with their own source', () => {
  const result = catalogFromClassData({
    classSlug: 'knight', className: 'Knight', tree: { jobIconUrl: 'knight.png' },
    rebalanceVersions: [
      { id: 'rebalance-2', skills: [{ name: 'Slash', notes: ['Damage from 100 to 200.'] }] },
      { id: 'rebalance-5', skills: [] },
    ],
    addedSkills: [{ versionId: 'rebalance-5', skills: ['Pierce'] }],
    skills: [{ id: 42, name: 'SLASH', iconUrl: 'slash.png', balanceNotes: [{ versionId: 'rebalance-2', skillName: 'Slash' }] }],
  }, manifest)

  assert.deepEqual(result.versions[0].skills, [
    { name: 'Slash', notes: ['Damage from 100 to 200.'], added: false, sourceUrl: 'https://example.org/2', skillId: 42, iconUrl: 'slash.png' },
  ])
  assert.deepEqual(result.versions[1].skills, [
    { name: 'Pierce', notes: [], added: true, sourceUrl: 'https://example.org/5-added' },
  ])
})

test('Rebalance 2 introductions appear before existing changes without reversing their class order', () => {
  const result = catalogFromClassData({
    classSlug: 'meister', className: 'Meister', tree: { jobIconUrl: 'meister.png' },
    rebalanceVersions: [{ id: 'rebalance-2', skills: [
      { name: 'Existing One', notes: ['First change'] },
      { name: 'Existing Two', notes: ['Second change'] },
    ] }],
    skillTabs: [{ skills: [
      { id: 6004, name: 'Mighty Smash', iconUrl: '6004.png' },
      { id: 6003, name: 'Triple Laser', iconUrl: '6003.png' },
      { id: 6002, name: 'Spark Blaster', iconUrl: '6002.png' },
      { id: 100, name: 'Existing One', iconUrl: '100.png' },
      { id: 101, name: 'Existing Two', iconUrl: '101.png' },
    ] }],
    skills: [],
  }, manifest)
  assert.deepEqual(result.versions[0].skills.map((skill) => skill.skillId), [6004, 6003, 6002, 100, 101])
  assert.deepEqual(result.versions[0].skills.map((skill) => skill.added), [true, true, true, false, false])
  assert.deepEqual(result.versions[0].skills.slice(3).map((skill) => skill.notes), [['First change'], ['Second change']])
})

test('catalog resolves localized names and icons from class skill tabs when note metadata misses aliases', () => {
  const result = catalogFromClassData({
    classSlug: 'inquisitor', className: 'Inquisitor', tree: { jobIconUrl: 'inquisitor.png' },
    rebalanceVersions: [{ id: 'rebalance-2', skills: [
      { name: 'Judge', notes: ['Changed AP cost.'] },
      { name: 'All in the Sky.', notes: ['Changed duration.'] },
      { name: 'Acidified Zone (Water)/(Fire)/(Wind)/(Ground)', notes: ['Changed damage.'] },
    ] }],
    skillTabs: [{ skills: [
      { id: 5247, name: 'Judge(Judge)', iconUrl: '5247.png' },
      { id: 5250, name: 'Second Judgement(Second Judgement)', iconUrl: '5250.png' },
      { id: 5474, name: 'All in the Sky', iconUrl: '5474.png' },
      { id: 5340, name: 'Acidified Zone (Water)', iconUrl: '5340.png' },
      { id: 5343, name: 'Acidified Zone (Fire)', iconUrl: '5343.png' },
    ] }],
    skills: [],
  }, manifest)
  assert.deepEqual(result.versions[0].skills.map(({ skillId, iconUrl }) => [skillId, iconUrl]), [
    [5247, '5247.png'], [5474, '5474.png'], [undefined, undefined],
  ])
})

test('catalog resolves verified class-scoped aliases, but not a similar skill from another class', () => {
  const base = {
    className: 'Biolo', tree: { jobIconUrl: 'biolo.png' },
    rebalanceVersions: [{ id: 'rebalance-1', skills: [{ name: 'Bionic Mastery', notes: [] }] }],
    skillTabs: [{ skills: [{ id: 5337, name: 'Bionics Mastery', iconUrl: '5337.png' }] }],
    skills: [],
  }
  assert.equal(catalogFromClassData({ ...base, classSlug: 'biolo' }, manifest).versions[0].skills[0].skillId, 5337)
  assert.equal(catalogFromClassData({ ...base, classSlug: 'other-class' }, manifest).versions[0].skills[0].skillId, undefined)
})

test('Earth Care note uses Terremotus rather than the duplicated Diluvio source heading', () => {
  const result = catalogFromClassData({
    classSlug: 'elemental-master', className: 'Elemental Master', tree: { jobIconUrl: 'elemental.png' },
    rebalanceVersions: [{ id: 'rebalance-4', skills: [
      { name: 'Summon Elemental Diluvio', notes: ['Passive mode : Cold Force, increases Cold Bolt.'] },
      { name: 'Summon Elemental Diluvio', notes: ['Passive mode : Earth Care, increases Earth Spike.'] },
    ] }],
    skillTabs: [{ skills: [
      { id: 5376, name: 'Summon Elemental: Diluvio', iconUrl: '5376.png' },
      { id: 5378, name: 'Summon Elemental: Terremotus', iconUrl: '5378.png' },
    ] }],
    skills: [],
  }, manifest)
  assert.deepEqual(result.versions[0].skills.map(({ name, skillId, iconUrl }) => [name, skillId, iconUrl]), [
    ['Summon Elemental Diluvio', 5376, '5376.png'],
    ['Summon Elemental Terremotus', 5378, '5378.png'],
  ])
})

test('a grouped note retains its single note while identifying each skill separately', () => {
  const result = catalogFromClassData({
    classSlug: 'sky-emperor', className: 'Sky Emperor', tree: { jobIconUrl: 'sky.png' },
    rebalanceVersions: [{ id: 'rebalance-2', skills: [{
      name: 'Solar Wrath, Lunar Wrath, Stellar Wrath (Star Gladiator)',
      notes: ['Changes the effect for all three skills.'],
    }] }],
    skillTabs: [{ skills: [
      { id: 435, name: 'Solar Wrath', iconUrl: '435.png' },
      { id: 436, name: 'Lunar Wrath', iconUrl: '436.png' },
      { id: 437, name: 'Stellar Wrath', iconUrl: '437.png' },
    ] }], skills: [],
  }, manifest)
  const [group] = result.versions[0].skills
  assert.equal(group.skillId, undefined)
  assert.deepEqual(group.groupedSkills, [
    { skillId: 435, name: 'Solar Wrath', iconUrl: '435.png' },
    { skillId: 436, name: 'Lunar Wrath', iconUrl: '436.png' },
    { skillId: 437, name: 'Stellar Wrath', iconUrl: '437.png' },
  ])
  assert.deepEqual(group.notes, ['Changes the effect for all three skills.'])
})
