import assert from 'node:assert/strict'
import test from 'node:test'
import { classDataSets } from '../generated/classDataSets.js'
import { effectiveLevelTable, effectiveSpecRows, notesForVersion, skillAvailableInVersion } from './specs.js'
import { forumUrlForNote } from './rebalanceSources.js'
import { rebalanceCatalog } from '../generated/rebalanceCatalog.js'
import { translatedRequirementName } from './translations.js'
import { sigmaDescriptionForSkill, sigmaInitialSkillFor, sigmaInitialSpecRows, skillWithSigmaInitialRequirements } from './sigmaInitialSkills.js'
import { noteSourceLabel, skillSourceLinks } from './sourceLinks.js'

const addedByClass = {
  'dragon-knight': [6001],
  meister: [6004, 6003, 6002],
  biolo: [6005, 6006],
}

test('the six ROLATAM Rebalance 2 additions enter the simulator at Rebalance 2', async () => {
  for (const entry of classDataSets.filter((candidate) => addedByClass[candidate.id])) {
    const data = await entry.load()
    for (const id of addedByClass[entry.id]) {
      const skill = data.skillTabs.flatMap((tab) => tab.skills).find((candidate) => candidate.id === id)
      assert.ok(skill, `Missing skill ${id} from ${entry.id} simulator`)
      for (const version of ['pre', 'rebalance-1']) {
        assert.equal(skillAvailableInVersion(data, skill, version), false, `${entry.id} ${skill.name} appears in ${version}`)
      }
      for (const version of ['rebalance-2', 'rebalance-3', 'rebalance-4', 'current']) {
        assert.equal(skillAvailableInVersion(data, skill, version), true, `${entry.id} ${skill.name} missing from ${version}`)
      }
      const [introduction] = notesForVersion(skill, 'rebalance-2')
      assert.equal(introduction?.versionId, 'rebalance-2', `${entry.id} ${skill.name} missing from patch notes`)
      assert.equal(introduction?.added, true)
      assert.deepEqual(introduction?.notes, [])
      for (const label of ['Base Damage', 'Cooldown', 'Fixed Cast Time', 'Variable Cast Time', 'Cast Delay', 'SP Cost', 'Hits', 'Damage Formula']) {
        assert.ok(introduction.initialSpecs.some((row) => row.label === label), `${skill.name} lacks ${label}`)
      }
      assert.equal(forumUrlForNote(introduction, data.rebalanceVersions), sigmaInitialSkillFor(id).sourceUrl, 'Source initial mechanics from Sigma, not a kRO rebalance post')
      assert.equal(notesForVersion(skill, 'pre').length, 0)
      assert.ok(notesForVersion(skill, 'current').some((note) => note.versionId === 'rebalance-2' && note.added))
      for (const later of ['rebalance-3', 'rebalance-4']) {
        assert.deepEqual(notesForVersion(skill, later), skill.balanceNotes.filter((note) => note.versionId === later))
      }
    }
  }
})

test('the Rebalance 2 overview labels all six as new without a misleading kRO source', () => {
  for (const [classId, ids] of Object.entries(addedByClass)) {
    const version = rebalanceCatalog.classes.find((entry) => entry.id === classId).versions.find((entry) => entry.id === 'rebalance-2')
    for (const id of ids) {
      const skill = version.skills.find((entry) => entry.skillId === id)
      assert.ok(skill, `${classId} skill ${id} absent from Rebalance 2 notes`)
      assert.equal(skill.added, true, `${classId} skill ${id} not marked as new`)
      assert.equal(skill.sourceUrl, sigmaInitialSkillFor(id).sourceUrl, 'Do not imply the kRO Rebalance 2 comment announced a ROLATAM addition')
      assert.deepEqual(skill.notes, [])
      assert.ok(skill.initialSpecs.some((row) => row.label === 'Cooldown'))
    }
  }
  for (const classId of Object.keys(addedByClass)) {
    const entry = rebalanceCatalog.classes.find((candidate) => candidate.id === classId)
    for (const version of entry.versions.filter((candidate) => ['rebalance-3', 'rebalance-4'].includes(candidate.id))) {
      for (const skill of version.skills.filter((candidate) => addedByClass[classId].includes(candidate.skillId))) {
        assert.equal(skill.added, false, `Do not relabel later kRO changes to ${skill.name} as new skills`)
        assert.ok(skill.notes.length)
      }
    }
  }
})

test('source links name their destinations in both languages', () => {
  const skill = { id: 6006, name: 'Mayhemic Thorns', irowikiUrl: 'https://irowiki.org/wiki/Mayhemic_Thorns' }
  const links = skillSourceLinks(skill, 'rebalance-2', 'pt-BR')
  assert.equal(links.length, 2)
  assert.equal(links.find((link) => link.href.includes('sigmathefallen'))?.label, 'Blog do Sigma the Fallen · valores iniciais da habilidade')
  assert.ok(links.some((link) => link.label.includes('iRO Wiki · página da habilidade')))
  assert.ok(skillSourceLinks(skill, 'rebalance-3', 'pt-BR').every((link) => !link.href.includes('sigmathefallen')))
  assert.equal(noteSourceLabel('rolatam-planned', 'en'), 'Sigma the Fallen blog · initial skill values')
  assert.equal(noteSourceLabel('kro', 'pt-BR'), 'Fórum Divine Pride · alterações da habilidade')
})

test('Sigma third-version source provides the six initial skill references and localized prose', async () => {
  for (const entry of classDataSets.filter((candidate) => addedByClass[candidate.id])) {
    const data = await entry.load()
    for (const id of addedByClass[entry.id]) {
      const skill = data.skillTabs.flatMap((tab) => tab.skills).find((candidate) => candidate.id === id)
      const initial = sigmaInitialSkillFor(id)
      assert.match(initial.sourceUrl, new RegExp(`${entry.id}-3rd-version\\.html$`))
      assert.ok(initial.damageFormula.includes('POW') && initial.damageFormula.includes('base level'))
      assert.ok(sigmaDescriptionForSkill(skill, 'rebalance-2', 'en').length > 40)
      assert.ok(sigmaDescriptionForSkill(skill, 'rebalance-2', 'pt-BR').length > 40)
      assert.notEqual(sigmaDescriptionForSkill(skill, 'rebalance-2', 'en'), sigmaDescriptionForSkill(skill, 'rebalance-2', 'pt-BR'))
      assert.equal(sigmaDescriptionForSkill(skill, 'rebalance-3', 'en'), null)
      const [intro] = notesForVersion(skill, 'rebalance-2')
      assert.equal(forumUrlForNote(intro, data.rebalanceVersions), initial.sourceUrl)
      assert.deepEqual(intro.notes, [])
      assert.deepEqual(intro.initialSpecs, sigmaInitialSpecRows(id))
      const catalog = rebalanceCatalog.classes.find((item) => item.id === entry.id)
        .versions.find((version) => version.id === 'rebalance-2').skills.find((item) => item.skillId === id)
      assert.equal(catalog.sourceUrl, initial.sourceUrl)
      assert.deepEqual(catalog.notes, intro.notes)
      assert.deepEqual(catalog.initialSpecs, intro.initialSpecs)
      assert.ok(catalog.initialSpecs.some((row) => row.label === 'Base Damage' && row.valuePtBr))
    }
  }
})

test('initial simulator specs use the Sigma values rather than later generated values', async () => {
  const expected = {
    6001: { sp: 88, damage: '3,550%', hits: '1 hit (damage displayed twice)', area: '9x9', cooldown: '0.5 seconds', delay: '0.15 seconds', range: '9 cells' },
    6002: { sp: 84, damage: '7,750%', hits: '2 hits', area: '9x9', cooldown: '0.7 seconds', delay: '0.25 seconds', range: '9 cells' },
    6003: { sp: 60, damage: '3,300%', hits: '3 hits', cooldown: '0.25 seconds', delay: '0 seconds', range: '11 cells' },
    6004: { sp: 78, damage: '3,100%', hits: '3 / 5 hits', area: '7x7', cooldown: '0.3 seconds', delay: '0 seconds' },
    6005: { sp: 74, damage: '2,650%', hits: '3 / 5 hits', area: '7x7', cooldown: '0.7 seconds', delay: '0.25 seconds' },
    6006: { sp: 86, damage: '2,700%', hits: '3 / 5 hits', area: '9x9', cooldown: '0.7 seconds', delay: '0.15 seconds', range: '9 cells' },
  }
  for (const entry of classDataSets.filter((candidate) => addedByClass[candidate.id])) {
    const data = await entry.load()
    const model = { data, versionOrder: new Map(data.rebalanceVersions.map((version, index) => [version.id, index])) }
    for (const id of addedByClass[entry.id]) {
      const skill = data.skillTabs.flatMap((tab) => tab.skills).find((candidate) => candidate.id === id)
      const rows = effectiveSpecRows(model, skill, 'rebalance-2', null)
      const value = (label) => rows.find((row) => row.label === label)?.value
      assert.deepEqual(rows.map((row) => row.label), ['Type', 'Levels', ...sigmaInitialSpecRows(id).map((row) => row.label)], `${skill.name} must not inherit unrelated generated mechanics`)
      assert.equal(value('Duration'), undefined, `${skill.name} has no Sigma-sourced duration`)
      const baseDamagePtBr = rows.find((row) => row.label === 'Base Damage')?.valuePtBr
      assert.doesNotMatch(baseDamagePtBr, /\d,\d{3}%/, `${skill.name} must not use English thousands separators in Portuguese`)
      for (const [, integer, thousands] of value('Base Damage').matchAll(/(\d{1,3}),(\d{3})%/g)) {
        assert.ok(baseDamagePtBr.includes(`${integer}.${thousands}%`), `${skill.name} must preserve the damage number in Portuguese`)
      }
      assert.match(value('Base Damage'), new RegExp(expected[id].damage), `${skill.name} damage`)
      assert.equal(value('Hits'), expected[id].hits)
      assert.equal(value('Damage Formula'), sigmaInitialSkillFor(id).damageFormula)
      assert.ok(rows.find((row) => row.label === 'Damage Formula')?.valuePtBr?.includes('nível de base'))
      assert.ok(rows.find((row) => row.label === 'Hits')?.valuePtBr?.includes('acerto'))
      assert.match(rows.find((row) => row.label === 'SP Cost')?.valuePtBr ?? '', /Nv\. da habilidade/)
      assert.notEqual(value('Target'), 'Instant Cast')
      assert.equal(value('Cooldown'), expected[id].cooldown)
      assert.equal(value('Cast Delay'), expected[id].delay)
      if (expected[id].range) assert.equal(value('Cast Range'), expected[id].range)
      const table = effectiveLevelTable(model, skill, 'rebalance-2')
      const last = table.rows.at(-1)
      assert.equal(last.values['sp-cost'], String(expected[id].sp))
      if (expected[id].area) assert.equal(last.values['area-of-effect'], expected[id].area)
      assert.equal(table.rows[0].values['sp-cost'], String(sigmaInitialSkillFor(id).spBase + sigmaInitialSkillFor(id).spPerLevel))
      for (const row of table.rows) {
        const tiers = sigmaInitialSkillFor(id).areaTiers
        if (tiers.length) assert.equal(row.values['area-of-effect'], tiers.find(([through]) => row.level <= through)[1])
      }
    }
  }
})

test('Spark Blaster uses the Sigma Madogear License 5 prerequisite only for the initial version', async () => {
  const data = await classDataSets.find((entry) => entry.id === 'meister').load()
  const spark = data.skillTabs.flatMap((tab) => tab.skills).find((skill) => skill.id === 6002)
  const initial = skillWithSigmaInitialRequirements(spark, 'rebalance-2')
  assert.ok(initial.tree.requirements.some((requirement) => requirement.id === 2255 && requirement.level === 5 && !requirement.visible))
  const license = initial.tree.requirements.find((requirement) => requirement.id === 2255)
  assert.equal(translatedRequirementName(license, { skillById: new Map() }, 'pt-BR'), 'Licença de Pilotagem')
  assert.equal(skillWithSigmaInitialRequirements(spark, 'rebalance-3'), spark)
  assert.equal(spark.tree.requirements.some((requirement) => requirement.id === 2255), false)
})
