import assert from 'node:assert/strict'
import test from 'node:test'
import { browikiSkillUrl, translatedClassName, translatedSkillName, translatedSkillDescription } from './translations.js'

test('Brazilian names and links use the ID-verified bROWiki index', () => {
  assert.equal(translatedClassName('Dragon Knight', 'pt-BR'), 'Cavaleiros Draconianos')
  assert.equal(translatedClassName('Dragon Knight', 'en'), 'Dragon Knight')
  assert.equal(translatedSkillName({ id: 5205, name: 'Servant Weapon - Demolition' }, 'pt-BR'), 'Demolição Alada')
  assert.equal(browikiSkillUrl({ id: 5205 }), 'https://browiki.org/wiki/Demoli%C3%A7%C3%A3o_Alada')
})

test('existing localized descriptions survive the name overlay', () => {
  const skill = { id: 5205, name: 'English', translations: { 'pt-BR': { description: 'Descrição existente' } }, description: 'Original' }
  assert.equal(translatedSkillDescription(skill, 'pt-BR'), 'Descrição existente')
  assert.equal(translatedSkillName({ id: -1, name: 'Unknown' }, 'pt-BR'), 'Unknown')
})
