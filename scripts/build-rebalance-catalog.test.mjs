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
