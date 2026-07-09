export const languageOptions = [
  { id: 'en', label: 'English' },
  { id: 'pt-BR', label: 'Portugues' },
]

export function translatedSkillName(skill, language) {
  void language
  return skill.name
}

export function translatedSkillDescription(skill, language) {
  void language
  return skill.description
}

export function translatedRequirementName(requirement, model, language) {
  void language
  const skill = model.skillById.get(requirement.id)
  return skill ? skill.name : requirement.name
}

export function translateSpecLabel(label, language) {
  if (language !== 'pt-BR') return label
  return specLabelTranslations[label] ?? label
}

export function translateUi(label, language) {
  if (language !== 'pt-BR') return label
  return uiTranslations[label] ?? label
}

const specLabelTranslations = {
  'AP': 'AP',
  'AP Consumed': 'Custo de AP',
  'AP Generated': 'AP gerado',
  'After Cast Delay': 'Pos-conjuracao',
  'All Property Damage Bonus': 'Bonus de dano de todas as propriedades',
  'Ammunition': 'Consumo',
  'Area of Effect': 'Area de efeito',
  'Base Damage (ATK)': 'Dano base (ATQ)',
  'Base Damage (ATK per Hit)': 'Dano base (ATQ por acerto)',
  'Base Damage (MATK)': 'Dano base (ATQM)',
  'Base Damage (MATK per Hit)': 'Dano base (ATQM por acerto)',
  'Bonus Damage (Soul Lv) Multiplier': 'Multiplicador de bonus (Nv. de Alma)',
  'Bonus Damage (Talisman + Soul Lv) Multiplier': 'Multiplicador de bonus (Nv. de Talismas + Alma)',
  'Bonus Damage (Talisman Lv) Multiplier': 'Multiplicador de bonus (Nv. de Talismas)',
  'Buff Duration': 'Duracao do efeito',
  'Cast Delay': 'Pos-conjuracao',
  'Cast Range': 'Alcance',
  'Cooldown': 'Recarga',
  'Damage': 'Dano',
  'Damage Bonus': 'Bonus de dano',
  'Damage Formula': 'Formula de dano',
  'Duration': 'Duracao',
  'Effect': 'Efeito',
  'Fixed Cast Time': 'Conjuracao fixa',
  'Level': 'Nivel',
  'Levels': 'Niveis',
  'Long Ranged Damage Bonus': 'Bonus de dano fisico a distancia',
  'Melee Damage Bonus': 'Bonus de dano fisico corpo a corpo',
  'Property': 'Propriedade',
  'Pulse': 'Pulso',
  'SP Cost': 'Custo de SP',
  'Skill Level Factor': 'Fator do nivel da habilidade',
  'Target': 'Alvo',
  'Type': 'Tipo',
  'Variable Cast Time': 'Conjuracao variavel',
}

const uiTranslations = {
  'Compare balance versions here.': 'Compare versoes de balanceamento aqui.',
  'Current Specs': 'Especificacoes atuais',
  'Description': 'Descricao',
  'Language': 'Idioma',
  'Level': 'Nivel',
  'Level Scaling': 'Escala por nivel',
  'No additional timing or range fields were found.': 'Nenhum campo adicional de tempo ou alcance foi encontrado.',
  'Patch Notes': 'Notas de alteracao',
  'Pre-Rebalance Specs': 'Especificacoes pre-rebalanceamento',
  'Prerequisites': 'Pre-requisitos',
  'Skill Specs': 'Especificacoes',
  'Use this dropdown to switch between pre-rebalance, each rebalance, and current specs.':
    'Use esta lista para alternar entre pre-rebalanceamento, cada rebalanceamento e as especificacoes atuais.',
}
