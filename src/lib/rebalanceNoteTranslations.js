import translations from '../data/rebalance-notes-pt-br.json' with { type: 'json' }

export function translateRebalanceNote(note, language) {
  return language === 'pt-BR' ? translations[note] || note : note
}
