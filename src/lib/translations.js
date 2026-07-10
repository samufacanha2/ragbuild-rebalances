export const languageOptions = [
  { id: 'en', label: 'English' },
  { id: 'pt-BR', label: 'Portugues' },
]

export function translatedSkillName(skill, language) {
  return localizedSkillField(skill, language, 'name') || skill.name
}

export function translatedSkillDescription(skill, language) {
  return localizedSkillField(skill, language, 'description') || skill.description
}

export function translatedRequirementName(requirement, model, language) {
  const skill = model.skillById.get(requirement.id)
  return skill ? translatedSkillName(skill, language) : requirement.name
}

export function translateSpecLabel(label, language) {
  if (language !== 'pt-BR') return label
  return specLabelTranslations[label] ?? label
}

export function translateSpecValue(value, language) {
  if (language !== 'pt-BR') return value

  const text = String(value ?? '')
  return specValueTranslations[text] ?? translateCommonSpecText(text)
}

export function translateChangeNote(note, language) {
  if (language !== 'pt-BR') return note

  return translateCommonSpecText(String(note ?? ''))
    .replace(/^was /, 'era ')
    .replace(/^changed in /, 'alterado em ')
    .replace(/^changes in a later rebalance$/, 'muda em um rebalanceamento posterior')
    .replace(/^changes in /, 'muda em ')
}

export function translateUi(label, language) {
  if (language !== 'pt-BR') return label
  return uiTranslations[label] ?? label
}

export function translatePointsUsed(totalPoints, pointLimit, language) {
  if (language !== 'pt-BR') return `${totalPoints} / ${pointLimit} points used`
  return `${totalPoints} / ${pointLimit} pontos usados`
}

function localizedSkillField(skill, language, field) {
  if (language === 'en') return ''
  const value = skill.translations?.[language]?.[field]
  return value ? repairMojibake(String(value)).trim() : ''
}

function translateCommonSpecText(value) {
  return normalizeChangeSeparators(value)
    .replace(/\bLv\s+(\d+)/gi, 'Nv. $1')
    .replace(/\b(\d+(?:\.\d+)?)\s+seconds?\b/gi, (_match, amount) => {
      const formatted = formatPortugueseDecimal(amount)
      return `${formatted} ${Number(amount) === 1 ? 'segundo' : 'segundos'}`
    })
    .replace(/\b(\d+(?:\.\d+)?)\s+secs?\b/gi, (_match, amount) => {
      const formatted = formatPortugueseDecimal(amount)
      return `${formatted} ${Number(amount) === 1 ? 'segundo' : 'segundos'}`
    })
    .replace(/\bdelay\b/gi, 'atraso')
    .replace(/\bcells\b/gi, 'celulas')
    .replace(/\bcell\b/gi, 'celula')
    .replace(/\bself\b/g, 'proprio usuario')
    .replace(/\bUnavailable\b/gi, 'Indisponivel')
    .replace(/Can be used while under (.+?) buff(?=$|\s+-)/gi, 'Pode ser usada durante o efeito de $1')
    .replace(/Can be removed by (.+?)(?=$|\s+-)/gi, 'Pode ser removido por $1')
    .replace(/No longer removed by (.+?)(?=$|\s+-)/gi, 'Nao pode mais ser removido por $1')
    .replace(/\bor\b/gi, 'ou')
}

function formatPortugueseDecimal(value) {
  return String(value).replace('.', ',')
}

function repairMojibake(value) {
  if (!hasMojibakeMarker(value)) return value

  try {
    const bytes = Uint8Array.from([...value].map((character) => character.charCodeAt(0) & 255))
    return new TextDecoder('utf-8').decode(bytes)
  } catch {
    return value
  }
}

function normalizeChangeSeparators(value) {
  const middleDot = String.fromCharCode(183)
  const mojibakeMiddleDot = `${String.fromCharCode(194)}${middleDot}`
  const doubleMojibakeMiddleDot = `${String.fromCharCode(195)}${String.fromCharCode(130)}${mojibakeMiddleDot}`

  return [doubleMojibakeMiddleDot, mojibakeMiddleDot, middleDot].reduce(
    (text, separator) => text.split(separator).join(' - '),
    value,
  )
}

function hasMojibakeMarker(value) {
  return value.includes(String.fromCharCode(195)) || value.includes(String.fromCharCode(194))
}

const specLabelTranslations = {
  'AP': 'AP',
  'AP Consumed': 'Custo de AP',
  'AP Generated': 'AP gerado',
  'After Cast Delay': 'Pos-conjuracao',
  'All Property Damage Bonus': 'Bonus de dano de todas as propriedades',
  'Ammunition': 'Consumo',
  'Area of Effect': 'Area de efeito',
  'Area of Effect (Commune)': 'Area de efeito (Comunhao)',
  'Base Damage (ATK)': 'Dano base (ATQ)',
  'Base Damage (ATK per Hit)': 'Dano base (ATQ por acerto)',
  'Base Damage (MATK)': 'Dano base (ATQM)',
  'Base Damage (MATK per Hit)': 'Dano base (ATQM por acerto)',
  'Bonus Damage (Soul Lv) Multiplier': 'Multiplicador de bonus (Nv. de Alma)',
  'Bonus Damage (Talisman + Soul Lv) Multiplier': 'Multiplicador de bonus (Nv. de Talismas + Alma)',
  'Bonus Damage (Talisman Lv) Multiplier': 'Multiplicador de bonus (Nv. de Talismas)',
  'Buff Duration': 'Duracao do efeito',
  'Buff Removal': 'Remocao do efeito',
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
  'Long Range Physical Damage': 'Dano fisico a distancia',
  'Long Ranged Damage Bonus': 'Bonus de dano fisico a distancia',
  'Long Ranged Physical Damage': 'Dano fisico a distancia',
  'Melee Damage Bonus': 'Bonus de dano fisico corpo a corpo',
  'P.Atk': 'P.Atk',
  'Property': 'Propriedade',
  'Pulse': 'Pulso',
  'HP Recovery': 'Recuperacao de HP',
  'Recovery Amount': 'Quantidade recuperada',
  'Recovery Amount (Commune)': 'Quantidade recuperada (Comunhao)',
  'S.Matk': 'S.Matk',
  'SP Cost': 'Custo de SP',
  'SP Recovery': 'Recuperacao de SP',
  'Spl': 'Spl',
  'SPL': 'SPL',
  'Skill Level Factor': 'Fator do nivel da habilidade',
  'Target': 'Alvo',
  'Type': 'Tipo',
  'Use Condition': 'Condicao de uso',
  'Variable Cast Time': 'Conjuracao variavel',
}

const specValueTranslations = {
  'Active Skill': 'Habilidade ativa',
  'All Targets': 'Todos os alvos',
  'Buff': 'Suporte',
  'Buff Skill': 'Habilidade de suporte',
  'Buff/Special Skill': 'Habilidade de suporte/especial',
  'Debuff': 'Enfraquecimento',
  'Enemy': 'Inimigo',
  'Fixed Cast': 'Conjuracao fixa',
  'Magical Damage': 'Dano magico',
  'Melee Physical Damage': 'Dano fisico corpo a corpo',
  'None': 'Nenhum',
  'Offensive Skill': 'Habilidade ofensiva',
  'Passive Skill': 'Habilidade passiva',
  'Party Member': 'Membro do grupo',
  'Physical Damage': 'Dano fisico',
  'Recovery': 'Recuperacao',
  'Removed': 'Removido',
  'Ranged Physical Damage': 'Dano fisico a distancia',
  'Self': 'Proprio usuario',
  'Single Target': 'Alvo unico',
  'Special': 'Especial',
  'Supportive Skill': 'Habilidade de suporte',
  'Target Enemy': 'Inimigo alvo',
  'Variable Cast': 'Conjuracao variavel',
  'self': 'proprio usuario',
}

const uiTranslations = {
  'Add one point to': 'Adicionar um ponto em',
  'All classes': 'Todas as classes',
  'Classes': 'Classes',
  'Compare balance versions here.': 'Compare versoes de balanceamento aqui.',
  'Current Specs': 'Especificacoes atuais',
  'Current specs': 'Especificacoes atuais',
  'Description': 'Descricao',
  'Language': 'Idioma',
  'Level': 'Nivel',
  'Level Scaling': 'Escala por nivel',
  'Loading': 'Carregando',
  'Lv': 'Nv.',
  'No rebalance notes are applied before the first rebalance.':
    'Nenhuma nota de rebalanceamento e aplicada antes do primeiro rebalanceamento.',
  'No classes match your search.': 'Nenhuma classe corresponde a busca.',
  'No rebalance notes for this skill.': 'Nenhuma nota de rebalanceamento para esta habilidade.',
  'No additional timing or range fields were found.': 'Nenhum campo adicional de tempo ou alcance foi encontrado.',
  'Patch Notes': 'Notas de alteracao',
  'Pre-Rebalance Specs': 'Especificacoes pre-rebalanceamento',
  'Pre-rebalances': 'Pre-rebalanceamentos',
  'Prerequisites': 'Pre-requisitos',
  'Remove one point from': 'Remover um ponto de',
  'Req Lv': 'Req Nv.',
  'Reset': 'Limpar',
  'Search classes': 'Buscar classes',
  'Skill': 'Habilidade',
  'Skill Specs': 'Especificacoes',
  'This skill is unchanged in the selected rebalance.': 'Esta habilidade nao muda no rebalanceamento selecionado.',
  'Use this dropdown to switch between pre-rebalance, each rebalance, and current specs.':
    'Use esta lista para alternar entre pre-rebalanceamento, cada rebalanceamento e as especificacoes atuais.',
  'previous class': 'classe anterior',
}
