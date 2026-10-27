import assert from 'node:assert/strict'
import test from 'node:test'
import { classDataSets } from '../generated/classDataSets.js'
import { rebalanceCatalog } from '../generated/rebalanceCatalog.js'
import { createClassModel } from './classModel.js'
import { compareRebalanceSkill } from './rebalanceSkillComparison.js'
import { translateSpecLabel, translateSpecValue, translateUi } from './translations.js'

test('rebalance pin comparison labels translate into Portuguese', () => {
  assert.equal(translateSpecLabel('Damage Logic', 'pt-BR'), 'Lógica do dano')
  assert.equal(translateSpecLabel('Factor Weight Of Pow In Skill Formula', 'pt-BR'), 'Peso de POW na fórmula da habilidade')
  assert.equal(translateUi('Minimize pinned skill', 'pt-BR'), 'Minimizar habilidade fixada')
  assert.equal(translateUi('Expand pinned skill', 'pt-BR'), 'Expandir habilidade fixada')
  assert.equal(translateSpecValue('2 split hits', 'pt-BR'), '2 acertos separados')
  assert.equal(translateSpecValue('2 cumulative hits', 'pt-BR'), '2 acertos acumulados')
  assert.equal(translateSpecLabel('Arrow Consumption', 'pt-BR'), 'Consumo de flechas')
  assert.equal(translateSpecLabel('Critical Chance', 'pt-BR'), 'Chance de crítico')
  assert.equal(translateSpecValue('1 hit', 'pt-BR'), '1 acerto')
  assert.equal(translateSpecValue('5 hits', 'pt-BR'), '5 acertos')
  assert.equal(translateSpecValue('Melee', 'pt-BR'), 'Corpo a corpo')
  assert.equal(translateSpecLabel('Factor Weight Of Darkening Cannon Skill Level In Skill Formula', 'pt-BR'), 'Peso do nível de Darkening Cannon na fórmula da habilidade')
  assert.equal(translateSpecLabel('Damage While Ardor Is Summoned', 'pt-BR'), 'Dano enquanto Ardor está invocado')
  assert.equal(translateSpecLabel('Duration Of Axe Stomp Buff', 'pt-BR'), 'Duração do efeito de Axe Stomp')
  assert.equal(translateSpecValue('Active (AP) Skill', 'pt-BR'), 'Habilidade ativa (AP)')
  assert.equal(translateSpecValue('1 Arrows', 'pt-BR'), '1 flecha')
  assert.equal(translateSpecValue('5 Bullets', 'pt-BR'), '5 balas')
  assert.equal(translateSpecValue('fire property magical damage', 'pt-BR'), 'dano mágico de propriedade fogo')
})

test('every available pinned rebalance stat label has a Portuguese translation', async () => {
  const missing = new Set()
  for (const dataset of classDataSets) {
    const catalog = rebalanceCatalog.classes.find((entry) => entry.id === dataset.id)
    if (!catalog) continue
    const model = createClassModel(await dataset.load(), dataset.id)
    for (const version of catalog.versions) {
      for (const note of version.skills) {
        for (const id of note.groupedSkills?.map((member) => member.skillId) ?? (note.skillId ? [note.skillId] : [])) {
          const skill = model.skillById.get(id)
          if (!skill) continue
          for (const row of compareRebalanceSkill(model, skill, version.id).rows) {
            if (translateSpecLabel(row.label, 'pt-BR') === row.label) missing.add(row.label)
          }
        }
      }
    }
  }
  assert.deepEqual([...missing].sort(), [])
})
