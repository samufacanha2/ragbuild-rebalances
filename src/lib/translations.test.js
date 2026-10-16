import assert from 'node:assert/strict'
import test from 'node:test'
import { classDataSets } from '../generated/classDataSets.js'
import browiki from '../data/browiki-pt-br.json' with { type: 'json' }
import { browikiSkillUrl, translatedClassName, translatedSkillName, translatedSkillDescription } from './translations.js'

test('Brazilian names and links use the ID-verified bROWiki index', () => {
  assert.equal(translatedClassName('Dragon Knight', 'pt-BR'), 'Cavaleiros Draconianos')
  assert.equal(translatedClassName('Dragon Knight', 'en'), 'Dragon Knight')
  assert.equal(translatedSkillName({ id: 5205, name: 'Servant Weapon - Demolition' }, 'pt-BR'), 'Demolição Alada')
  assert.equal(browikiSkillUrl({ id: 5205 }), 'https://browiki.org/wiki/Demoli%C3%A7%C3%A3o_Alada')
})

test('Mother Net has its ID-verified Brazilian name and wiki link', () => {
  assert.equal(translatedSkillName({ id: 5304, name: 'ABR: Mother Net' }, 'pt-BR'), 'Fabricar Curandeira')
  assert.equal(browikiSkillUrl({ id: 5304 }), 'https://browiki.org/wiki/Fabricar_Curandeira')
})

test('existing localized descriptions survive the name overlay', () => {
  const skill = { id: -1, name: 'English', translations: { 'pt-BR': { description: 'Descrição existente' } }, description: 'Original' }
  assert.equal(translatedSkillDescription(skill, 'pt-BR'), 'Descrição existente')
  assert.equal(translatedSkillName({ id: -1, name: 'Unknown' }, 'pt-BR'), 'Unknown')
})

test('Brazilian skill descriptions use the ID-verified bROWiki prose', () => {
  const skill = { id: 5205, description: 'Use all of your Servant Weapon and attack all Sign targets.' }
  assert.match(translatedSkillDescription(skill, 'pt-BR'), /^Comanda suas Espadas a voarem nos inimigos/)
  assert.equal(translatedSkillDescription(skill, 'en'), skill.description)
})

test('skills absent from bROWiki use their Portuguese description translation', () => {
  const skill = { id: 6577, description: 'Can only be used while in [Werewolf] state.' }
  assert.match(translatedSkillDescription(skill, 'pt-BR'), /^Só pode ser usada no estado \[Werewolf\]/)
  assert.equal(translatedSkillDescription(skill, 'en'), skill.description)
})

test('multi-hit damage descriptions preserve the number of hits', () => {
  const skill = { id: 6004, description: 'Swing your axe wildly, dealing 5 melee physical damage.' }
  assert.match(translatedSkillDescription(skill, 'pt-BR'), /5 acertos/)
  const secondSkill = { id: 6002, description: 'Causes a self-destruct, dealing 2 ranged physical damage.' }
  assert.match(translatedSkillDescription(secondSkill, 'pt-BR'), /2 acertos/)
})

test('every listed skill has a Portuguese description rather than an English fallback', async () => {
  const classes = await Promise.all(classDataSets.map((entry) => entry.load()))
  const skills = new Map(classes.flatMap((data) => data.skillTabs.flatMap((tab) => tab.skills))
    .map((skill) => [skill.id, skill]))
  assert.ok(skills.size > 1000)
  for (const skill of skills.values()) {
    const description = translatedSkillDescription(skill, 'pt-BR')
    assert.ok(description, `Missing Portuguese description for skill ${skill.id}`)
    assert.notEqual(description, skill.description, `English fallback for skill ${skill.id}`)
  }
})

test('undead monsters are not mistaken for the Cursed property', () => {
  const text = translatedSkillDescription({ id: 5279, description: 'Deals more damage to demon/undead monsters.' }, 'pt-BR')
  assert.match(text, /monstro demônio ou morto-vivo/i)
  assert.doesNotMatch(text, /propriedade Maldito/)
})

test('the second stage label is translated without altering its formula', () => {
  const text = translatedSkillDescription({ id: 6512, description: '[Chain Reaction Shot 2nd damage]' }, 'pt-BR')
  assert.match(text, /\[Chain Reaction Shot — dano da 2ª etapa\]/)
  assert.match(text, /\+\(Chain Reaction Shot Lv x700\)%/)
  assert.doesNotMatch(text, /[\uAC00-\uD7A3]/)
})

test('wiki descriptions preserve the line breaks within weapon effects', () => {
  assert.match(browiki.skills[5406].description, /habilidade\.\nA chance/)
  assert.match(browiki.skills[5408].description, /Projéteis\.\nÉ possível/)
  assert.match(browiki.skills[5406].description, /Pontos de Foco.*consumidos/)
  assert.match(browiki.skills[5408].description, /Pontos de Foco.*consumidos/)
})

test('generated skill mechanics take precedence when wiki versions disagree', () => {
  const rapid = translatedSkillDescription({ id: 5408, description: 'Fires 10 times and consumes 10 equipped bullets.' }, 'pt-BR')
  assert.match(rapid, /10 projéteis equipados/i)
  assert.match(rapid, /CON/)
  assert.doesNotMatch(rapid, /40 Projéteis/)
  const single = translatedSkillDescription({ id: 5406, description: 'Consumes 1 equipped bullet. Damage increases with CON.' }, 'pt-BR')
  assert.match(single, /1 projétil equipado/i)
  assert.match(single, /CON/)
})
