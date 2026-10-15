import assert from 'node:assert/strict'
import test from 'node:test'
import { rebalanceCatalog } from '../generated/rebalanceCatalog.js'
import translations from '../data/rebalance-notes-pt-br.json' with { type: 'json' }
import { translateRebalanceNote } from './rebalanceNoteTranslations.js'
import { translateUi } from './translations.js'

const notes = [...new Set(rebalanceCatalog.classes.flatMap((entry) => entry.versions.flatMap((version) => version.skills.flatMap((skill) => skill.notes))))]

test('every source note has a Brazilian Portuguese translation with its mechanics preserved', () => {
  const missing = notes.filter((note) => !translations[note])
  const extra = Object.keys(translations).filter((note) => !notes.includes(note))
  assert.equal(missing.length, 0, `Missing ${missing.length} translations: ${missing.slice(0, 8).join(' | ')}`)
  assert.equal(extra.length, 0, `Unexpected ${extra.length} translations: ${extra.slice(0, 8).join(' | ')}`)
  for (const note of notes) {
    const result = translateRebalanceNote(note, 'pt-BR')
    assert.ok(result && result !== note, `Missing translation for ${note}`)
    const numbers = (text) => (text.match(/\d+(?:[.,]\d+)?%?/g) ?? []).map((value) => value.replace(',', '.')).sort()
    assert.deepEqual(numbers(result), numbers(note), `Numbers changed: ${note} => ${result}`)
    const stats = (text) => (text.match(/\b(?:AP|SP|ATK|MATK|Atk|Matk|POW|CRT|MaxHP|MaxSP|P\.Atk|S\.Matk|STA|CON|WIS|SPL|Cri)\b/gi) ?? []).map((value) => value.toLowerCase()).sort()
    assert.deepEqual(stats(result), stats(note), `Stat tokens changed: ${note} => ${result}`)
    assert.equal(translateRebalanceNote(note, 'en'), note)
  }
})

test('casting and cooldown terminology distinguishes each game mechanic', () => {
  for (const note of notes) {
    const result = translateRebalanceNote(note, 'pt-BR')
    if (/\bglobal cooldown\b|\bdelay after skill\b/i.test(note)) {
      assert.match(result, /pós-conjuração/i, `Global delay is not pós-conjuração: ${note} => ${result}`)
      assert.doesNotMatch(result, /recarga global/i, `Global delay uses skill cooldown terminology: ${note} => ${result}`)
    } else if (/\bcooldown\b/i.test(note)) {
      assert.match(result, /recarga/i, `Skill cooldown is not recarga: ${note} => ${result}`)
    }
    if (/fixed casting time/i.test(note)) assert.match(result, /conjuração fixa/i, note)
    if (/variable casting time/i.test(note)) assert.match(result, /conjuração variável/i, note)
    if (/cast range/i.test(note)) assert.match(result, /alcance da habilidade/i, note)
    assert.doesNotMatch(result, /\b(?:cooldown|casting|cast range|delay after skill)\b/i, `English timing term remains: ${note} => ${result}`)
  }
})

test('Portuguese formulas localize skill-level factors without changing numbers', () => {
  for (const note of notes) {
    const result = translateRebalanceNote(note, 'pt-BR')
    assert.doesNotMatch(result, /\bskill level x\b|\bMastery level x\b/i, `Untranslated factor: ${result}`)
  }
})

test('version labels follow the selected interface language', () => {
  assert.equal(translateUi('Rebalance 2', 'pt-BR'), 'Rebalanceamento 2')
  assert.equal(translateUi('Rebalance 2', 'en'), 'Rebalance 2')
})

test('damage logic translation retains both hit counts', () => {
  assert.equal(translateRebalanceNote('Changes damage logic from 2 split hits to 2 cumulative hits.', 'pt-BR'),
    'Altera a lógica de dano de 2 acertos separados para 2 acertos cumulativos.')
})
