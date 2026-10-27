import assert from 'node:assert/strict'
import test from 'node:test'
import { classDataSets } from '../generated/classDataSets.js'
import { rebalanceCatalog } from '../generated/rebalanceCatalog.js'
import { createClassModel } from './classModel.js'
import { compareRebalanceSkill } from './rebalanceSkillComparison.js'

const dataset = classDataSets.find((entry) => entry.id === 'dragon-knight')
const model = createClassModel(await dataset.load(), dataset.id)
const meisterData = classDataSets.find((entry) => entry.id === 'meister')
const meisterModel = createClassModel(await meisterData.load(), meisterData.id)
const imperialGuardData = classDataSets.find((entry) => entry.id === 'imperial-guard')
const imperialGuardModel = createClassModel(await imperialGuardData.load(), imperialGuardData.id)

async function skillComparison(classId, skillId, versionId) {
  const data = classDataSets.find((entry) => entry.id === classId)
  const model = createClassModel(await data.load(), data.id)
  return compareRebalanceSkill(model, model.skillById.get(skillId), versionId)
}

test('pin compares every stat against the immediately preceding rebalance', () => {
  const skill = model.skillById.get(5208)
  const comparison = compareRebalanceSkill(model, skill, 'rebalance-2')
  assert.equal(comparison.previousVersionId, 'rebalance-1')
  assert.deepEqual(comparison.rows.find(({ label }) => label === 'SP Cost'), {
    label: 'SP Cost', before: '70', after: '72', changed: true,
  })
  assert.deepEqual(comparison.rows.find(({ label }) => label === 'Cooldown'), {
    label: 'Cooldown', before: '0.3 seconds', after: '0.7 seconds', changed: true,
  })
  assert.deepEqual(comparison.rows.find(({ label }) => label === 'Target'), {
    label: 'Target', before: 'Single Target', after: 'Single Target', changed: false,
  })
  assert.ok(comparison.rows.length > 10)
})

test('new skills have no fabricated previous stats, including when the generated data has future values', () => {
  const comparison = compareRebalanceSkill(model, model.skillById.get(6001), 'rebalance-2')
  assert.equal(comparison.newSkill, true)
  const row = comparison.rows.find(({ label }) => label === 'SP Cost')
  assert.equal(row.before, '')
  assert.equal(row.after, '58 + (skill level × 3)')
  assert.equal(row.afterPtBr, '58 + (Nv. da habilidade × 3)')
  assert.equal(row.changed, true)
})

test('the first rebalance compares with pre-rebalance specs', () => {
  const comparison = compareRebalanceSkill(model, model.skillById.get(5208), 'rebalance-1')
  assert.equal(comparison.previousVersionId, 'pre')
})

test('missing generated fields after a Sigma-only introduction are not reported as removed', () => {
  const comparison = compareRebalanceSkill(meisterModel, meisterModel.skillById.get(6004), 'rebalance-3')
  assert.ok(comparison.rows.length)
  assert.equal(comparison.rows.some((row) => row.after === ''), false)
})

test('Servant Weapon-Phantom removes variable cast and after-cast delay separately', () => {
  const comparison = compareRebalanceSkill(model, model.skillById.get(5204), 'rebalance-2')
  assert.deepEqual(comparison.rows.filter((row) => row.label === 'Variable Cast Time'), [
    { label: 'Variable Cast Time', before: '0.8 seconds', after: '0 seconds', changed: true },
  ])
  assert.deepEqual(comparison.rows.filter((row) => row.label === 'Cast Delay'), [
    { label: 'Cast Delay', before: '0.8 seconds', after: '0 seconds', changed: true },
  ])
  assert.equal(comparison.rows.some((row) => /0\.8 Seconds Variable Casting Time/.test(row.label)), false)
  assert.equal(comparison.rows.find((row) => row.label === 'Fixed Cast Time').changed, false)
})

test('a cast-time reduction and removal use the same canonical stat', () => {
  const comparison = compareRebalanceSkill(imperialGuardModel, imperialGuardModel.skillById.get(5260), 'rebalance-4')
  assert.deepEqual(comparison.rows.filter((row) => row.label === 'Variable Cast Time'), [
    { label: 'Variable Cast Time', before: '1 second', after: '0 seconds', changed: true },
  ])
  assert.deepEqual(comparison.rows.filter((row) => row.label === 'Fixed Cast Time'), [
    { label: 'Fixed Cast Time', before: '1 second', after: '0.5 seconds', changed: true },
  ])
})

test('global cooldown changes cast delay without overwriting the skill cooldown', async () => {
  const rows = (await skillComparison('meister', 5295, 'rebalance-4')).rows
  assert.deepEqual(rows.filter((row) => row.label === 'Cast Delay').map(({ before, after }) => [before, after]), [['0.25 seconds', '0.7 seconds']])
  assert.deepEqual(rows.filter((row) => row.label === 'Cooldown').map(({ before, after }) => [before, after]), [['0.7 seconds', '0.7 seconds']])
})

test('added delays and cooldowns appear despite missing generated delta rows', async () => {
  for (const [classId, skillId, versionId, label, before, after] of [
    ['shadow-cross', 5287, 'rebalance-1', 'Cast Delay', '0 seconds', '0.3 seconds'],
    ['inquisitor', 5244, 'rebalance-3', 'Cast Delay', '0 seconds', '1 second'],
    ['cardinal', 5279, 'rebalance-4', 'Cast Delay', '0 seconds', '0.5 seconds'],
    ['wind-hawk', 5329, 'rebalance-2', 'Cooldown', '0 seconds', '0.15 seconds'],
    ['troubadour', 5355, 'rebalance-2', 'Cooldown', '0 seconds', '0.15 seconds'],
  ]) {
    const rows = (await skillComparison(classId, skillId, versionId)).rows
    assert.deepEqual(rows.filter((row) => row.label === label).map(({ before: actualBefore, after: actualAfter }) => [actualBefore, actualAfter]), [[before, after]], `${classId} ${skillId} ${versionId}`)
  }
})

test('reworked level-dependent cooldown ranges appear in the comparison', async () => {
  const rows = (await skillComparison('inquisitor', 5246, 'rebalance-2')).rows
  assert.deepEqual(rows.filter((row) => row.label === 'Cooldown').map(({ before, after }) => [before, after]), [['30~150 seconds (Lv 1~5)', '180~60 seconds (Lv 1~5)']])
})

test('area-of-effect bonus does not overwrite the normal area-of-effect change', async () => {
  const rows = (await skillComparison('arch-mage', 5225, 'rebalance-3')).rows
  assert.deepEqual(rows.filter((row) => row.label === 'Area of Effect').map(({ before, after }) => [before, after]), [['15 x 15 cells', '13 x 13 cells']])
  assert.deepEqual(rows.filter((row) => row.label === 'Area of Effect Bonus').map(({ before, after }) => [before, after]), [['Climax level 5 from entire screen', '15 x 15 cells']])
})

test('primary and secondary area changes do not overwrite each other', async () => {
  const rows = (await skillComparison('abyss-chaser', 5316, 'rebalance-2')).rows
  assert.deepEqual(rows.filter((row) => row.label === 'Area of Effect').map(({ before, after }) => [before, after]), [['7 x 7 cells', '9 x 9 cells']])
  assert.deepEqual(rows.filter((row) => row.label === 'Secondary Area of Effect').map(({ before, after }) => [before, after]), [['3 x 3 cells', '7 x 7 cells']])
})

test('a nested "to" in a damage qualifier does not split the before and after values', async () => {
  const rows = (await skillComparison('troubadour', 5356, 'rebalance-2')).rows.filter((row) => row.label === 'Base Damage')
  assert.equal(rows.some((row) => /number of branded target\)Matk to|damage according$/.test(row.before + row.after)), false)
  assert.ok(rows.some((row) => row.after.includes('11000%')))
  assert.ok(rows.some((row) => row.after.includes('12500~18500%')))
})

test('catalog-only grouped skill notes still produce their own pinned deltas', async () => {
  for (const [classId, skillId, version, label, before, after] of [
    ['meister', 5302, 'rebalance-1', 'Fixed Cast Time', '4 seconds', '1 second'],
    ['biolo', 5340, 'rebalance-1', 'Cooldown', '2 seconds', '1 second'],
    ['biolo', 5340, 'rebalance-2', 'Cooldown', '1 second', '0.5 seconds'],
    ['elemental-master', 5375, 'rebalance-4', 'Cooldown', '900 seconds', '60 seconds'],
    ['wind-hawk', 5331, 'rebalance-2', 'SP Cost', '62', '84'],
  ]) {
    const rows = (await skillComparison(classId, skillId, version)).rows
    assert.deepEqual(rows.filter((row) => row.label === label).map(({ before: oldValue, after: newValue }) => [oldValue, newValue]), [[before, after]], `${classId} ${skillId} ${version}`)
  }
})

test('one catalog note removing both casting types marks each stat separately', async () => {
  const rows = (await skillComparison('abyss-chaser', 5315, 'rebalance-1')).rows
  for (const label of ['Fixed Cast Time', 'Variable Cast Time']) {
    assert.equal(rows.filter((row) => row.label === label && row.after === '0 seconds' && row.changed).length, 1)
  }
})

test('legacy data normalizes whole words without changing multiplication', async () => {
  const damageRows = (await skillComparison('shadow-cross', 5287, 'rebalance-2')).rows.filter((row) => row.label === 'Base Damage')
  assert.equal(damageRows.some((row) => /E x ceed/.test(row.after)), false)
  assert.equal(damageRows.some((row) => /Exceed/.test(row.after)), true)
  const targetRows = (await skillComparison('spirit-handler', 5448, 'rebalance-2')).rows.filter((row) => row.label === 'Target')
  assert.equal(targetRows.some((row) => /e x cept/.test(row.after)), false)
  assert.equal(targetRows.some((row) => /except/i.test(row.after)), true)
})

test('all timing notes keep fixed cast, variable cast, after-cast delay and cooldown separate', async () => {
  let checked = 0
  for (const dataset of classDataSets) {
    const classModel = createClassModel(await dataset.load(), dataset.id)
    for (const skill of classModel.skillById.values()) {
      for (const entry of skill.balanceNotes ?? []) {
        const notes = entry.notes?.filter((note) => /\b(?:fixed|variable)\s+cast(?:ing)?\s+time\b|\bdelay after skill\b|\bcooldown\b/i.test(note)) ?? []
        if (!notes.length) continue
        const rows = compareRebalanceSkill(classModel, skill, entry.versionId).rows
        for (const note of notes) {
          const label = /\bvariable\s+cast(?:ing)?\s+time\b/i.test(note) ? 'Variable Cast Time'
            : /\bfixed\s+cast(?:ing)?\s+time\b/i.test(note) ? 'Fixed Cast Time'
              : /\bglobal cooldown\b|\bdelay after skill\b/i.test(note) ? 'Cast Delay' : 'Cooldown'
          const matches = rows.filter((row) => row.label === label)
          assert.equal(matches.length, 1, `${dataset.id} ${skill.id} ${entry.versionId}: ${note}`)
          assert.equal(matches[0].changed, true, `${dataset.id} ${skill.id} ${entry.versionId}: ${note}`)
          if (/^Removes\b/i.test(note)) assert.equal(matches[0].after, '0 seconds')
          checked++
        }
      }
    }
  }
  assert.ok(checked >= 265)
})

test('every catalog timing note resolves for its verified skill ID, including grouped and predecessor skills', async () => {
  let checked = 0
  let cases = 0
  for (const classCatalog of rebalanceCatalog.classes) {
    const dataSet = classDataSets.find((entry) => entry.id === classCatalog.id)
    const classModel = createClassModel(await dataSet.load(), dataSet.id)
    for (const version of classCatalog.versions) {
      for (const entry of version.skills) {
        for (const id of entry.groupedSkills?.map((member) => member.skillId) ?? (entry.skillId ? [entry.skillId] : [])) {
          cases++
          const skill = classModel.skillById.get(id) ?? classModel.data.skillTabs?.flatMap((tab) => tab.skills).find((item) => item.id === id)
          assert.ok(skill, `${classCatalog.id} ${id}`)
          const rows = compareRebalanceSkill(classModel, skill, version.id).rows
          for (const note of entry.notes) {
            if (!/\b(?:fixed|variable)\s+cast(?:ing)?\s+time\b|\bdelay after skill\b|\bcooldown\b/i.test(note)) continue
            const labels = [
              ...( /\bfixed\s+cast(?:ing)?\s+time\b/i.test(note) ? ['Fixed Cast Time'] : []),
              ...( /\bvariable\s+cast(?:ing)?\s+time\b/i.test(note) ? ['Variable Cast Time'] : []),
              ...( /\bglobal cooldown\b|\bdelay after skill\b/i.test(note) ? ['Cast Delay'] : /\bcooldown\b/i.test(note) ? ['Cooldown'] : []),
            ]
            for (const label of labels) {
              const matches = rows.filter((row) => row.label === label)
              assert.equal(matches.length, 1, `${classCatalog.id} ${id} ${version.id}: ${note}`)
              assert.equal(matches[0].changed, true, `${classCatalog.id} ${id} ${version.id}: ${note}`)
            }
            checked++
          }
        }
      }
    }
  }
  assert.ok(cases >= 472)
  assert.ok(checked >= 323)
})
