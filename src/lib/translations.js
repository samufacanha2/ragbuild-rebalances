import browiki from '../data/browiki-pt-br.json' with { type: 'json' }
import manualDescriptions from '../data/skill-descriptions-pt-br.json' with { type: 'json' }

export const languageOptions = [
  { id: 'en', label: 'English' },
  { id: 'pt-BR', label: 'Portugu\u00eas' },
]

export function translatedSkillName(skill, language) {
  return (language === 'pt-BR' ? browiki.skills[skill.id]?.name : '') || localizedSkillField(skill, language, 'name') || skill.name
}

export function translatedClassName(label, language) {
  return (language === 'pt-BR' ? browiki.classes[label]?.name : '') || label
}

export function browikiSkillUrl(skill) {
  return browiki.skills[skill.id]?.url || skill.translations?.['pt-BR']?.sourceUrl || ''
}

export function translatedSkillDescription(skill, language) {
  return (language === 'pt-BR' ? manualDescriptions.skills[skill.id] || browiki.skills[skill.id]?.description : '')
    || localizedSkillField(skill, language, 'description')
    || skill.description
}

export function translatedRequirementName(requirement, model, language) {
  const skill = model.skillById.get(requirement.id) ?? requirement
  return translatedSkillName(skill, language)
}

export function translateSpecLabel(label, language) {
  if (language !== 'pt-BR') return label
  return specLabelTranslations[label] ?? translateGeneratedSpecLabel(label)
}

function translateGeneratedSpecLabel(label) {
  let match = label.match(/^Factor Weight Of (.+?) Skill Level In Skill Formula(?: Of Area Damage)?$/i)
  if (match) return `Peso do nível de ${match[1]} na fórmula ${/Of Area Damage$/i.test(label) ? 'do dano em área' : 'da habilidade'}`
  match = label.match(/^Factor Weight Of (Maxhp|Maxsp|Pow|Spl) In Skill Formula$/i)
  if (match) return `Peso de ${match[1].toUpperCase()} na fórmula da habilidade`
  match = label.match(/^Bonus Damage Of (.+)$/i)
  if (match) return `Bônus de dano de ${match[1]}`
  match = label.match(/^Damage Bonus Of (.+)$/i)
  if (match) return `Bônus de dano de ${match[1]}`
  match = label.match(/^Bonus Damage On Climax Level (\d+)$/i)
  if (match) return `Bônus de dano no nível ${match[1]} de Climax`
  match = label.match(/^Damage While (.+) Is Summoned$/i)
  if (match) return `Dano enquanto ${match[1]} está invocado`
  match = label.match(/^Duration Of (.+) Buff$/i)
  if (match) return `Duração do efeito de ${match[1]}`
  match = label.match(/^The Chance Of Inflicting (\[[^\]]+\]) On Each Hit$/i)
  if (match) return `Chance de causar ${match[1]} por acerto`
  match = label.match(/^(\d+(?:\.\d+)?) Seconds? (Fixed|Variable) Casting Time$/i)
  if (match) return `Conjuração ${match[2].toLowerCase() === 'fixed' ? 'fixa' : 'variável'} de ${formatPortugueseDecimal(match[1])} ${Number(match[1]) === 1 ? 'segundo' : 'segundos'}`
  return label
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

export function translatePointsUsed(totalPoints, pointLimit, language, pastPoints = 0) {
  const used = pastPoints > 0 ? `${totalPoints}+${pastPoints}(${totalPoints + pastPoints})` : totalPoints
  if (language !== 'pt-BR') return `${used}/${pointLimit} points used`
  return `${used}/${pointLimit} pontos usados`
}

function localizedSkillField(skill, language, field) {
  if (language === 'en') return ''
  const value = skill.translations?.[language]?.[field]
  if (!value) return ''

  const repaired = repairMojibake(String(value)).trim()
  if (field === 'description' && isMissingWikiDescription(repaired)) return ''
  return repaired
}

function isMissingWikiDescription(value) {
  return /No momento,\s*n[aã]o h[aá] conte[uú]do nesta p[aá]gina/i.test(value)
    || /There is currently no text in this page/i.test(value)
}

function translateCommonSpecText(value) {
  return normalizeChangeSeparators(value)
    .replace(/\b(\d+)\s+Arrows?\b/gi, (_match, amount) => `${amount} ${Number(amount) === 1 ? 'flecha' : 'flechas'}`)
    .replace(/\b(\d+)\s+Bullets?\b/gi, (_match, amount) => `${amount} ${Number(amount) === 1 ? 'bala' : 'balas'}`)
    .replace(/\b(\d+)\s+split hits\b/gi, '$1 acertos separados')
    .replace(/\b(\d+)\s+cumulative hits\b/gi, '$1 acertos acumulados')
    .replace(/\b(\d+)\s+hits?\b/gi, (_match, amount) => `${amount} ${Number(amount) === 1 ? 'acerto' : 'acertos'}`)
    .replace(/\bper hit\b/gi, 'por acerto')
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
  '"cloaking" Condition Requirement': 'Requisito da condição de camuflagem',
  'A Chance To Trigger The Skill One More Time': 'Chance de ativar a habilidade mais uma vez',
  'Bonus': 'Bônus',
  'Bonus Damage Against Demihuman And Angel Race Monsters': 'Bônus de dano contra monstros das raças humanoide e anjo',
  'Damage Bonus On Standing Still': 'Bônus de dano ao ficar parado',
  'Damage To The Target Who Is Inflicted By Oleum Sanctum': 'Dano ao alvo afetado por Oleum Sanctum',
  'Damage While Under Shadow Exceed Buff': 'Dano sob o efeito de Shadow Exceed',
  'Factor Weight Of Pow In Skill Formula (without Oleum Sanctum Debuff)': 'Peso de POW na fórmula da habilidade (sem o efeito de Oleum Sanctum)',
  'Factor Weight Of Pow In Skill Formula While Under Cloaking Exceed Buff': 'Peso de POW na fórmula da habilidade sob o efeito de Cloaking Exceed',
  'Factor Weight Of Shield Refine Rate In Skill Formula': 'Peso do refino do escudo na fórmula da habilidade',
  'Factor Weight Of Spl In Skill Formula (on Targets Marked With Sound Brand)': 'Peso de SPL na fórmula da habilidade (alvos marcados com Sound Brand)',
  'Final Durability Factor Of Skill Level': 'Fator de durabilidade final por nível da habilidade',
  'Fixed Casting Time Based On Level 5': 'Conjuração fixa no nível 5',
  'The Chance To Double Skill Damage While Under Giant Growth Buff': 'Chance de dobrar o dano da habilidade sob o efeito de Giant Growth',
  'The Trigger Chance Of Abyss Sphere': 'Chance de ativação de Abyss Sphere',
  'The Trigger Chance Of Weapon': 'Chance de ativação da arma',
  'Damage Formula': 'Fórmula de dano',
  'Hits': 'Acertos',
  'AP': 'AP',
  'AP Consumed': 'Custo de AP',
  'AP Generated': 'AP gerado',
  'The Amount Of Ap Recovered On The Party Member': 'AP recuperado pelo membro do grupo',
  'Damage Interval': 'Intervalo entre danos',
  'Trap Duration': 'Duração da armadilha',
  'Area': 'Area',
  'After Cast Delay': 'Pos-conjuracao',
  'All Property Damage Bonus': 'Bonus de dano de todas as propriedades',
  'Ammunition': 'Consumo',
  'Arrow Consumption': 'Consumo de flechas',
  'Bullet Consumption': 'Consumo de balas',
  'Bullet Consumption When Equipping Gatling Gun': 'Consumo de balas com metralhadora',
  'Critical Chance': 'Chance de crítico',
  'Atk Bonus': 'Bônus de ATQ',
  'Maxhp Bonus': 'Bônus de HP máximo',
  'Hp Consumption On Each Attack': 'Consumo de HP por ataque',
  'Area of Effect': 'Area de efeito',
  'Area of Effect Bonus': 'Bônus de área de efeito',
  'Secondary Area of Effect': 'Área de efeito secundária',
  'Area of Effect (Commune)': 'Area de efeito (Comunhao)',
  'Base Damage (ATK)': 'Dano base (ATQ)',
  'Base Damage (ATK per Hit)': 'Dano base (ATQ por acerto)',
  'Base Damage (MATK)': 'Dano base (ATQM)',
  'Base Damage': 'Dano base',
  'Base Damage (MATK per Hit)': 'Dano base (ATQM por acerto)',
  'Base Recovery (HP)': 'Recuperacao base (HP)',
  'Base Recovery (SP)': 'Recuperacao base (SP)',
  'Bonus Damage (Soul Lv) Multiplier': 'Multiplicador de bonus (Nv. de Alma)',
  'Bonus Damage (Talisman + Soul Lv) Multiplier': 'Multiplicador de bonus (Nv. de Talismas + Alma)',
  'Bonus Damage (Talisman Lv) Multiplier': 'Multiplicador de bonus (Nv. de Talismas)',
  'Bonus HP Recovery (Talisman Mastery)': 'Bonus de recuperacao de HP (Pericia com Talismas)',
  'Bonus SP Recovery (Talisman Mastery)': 'Bonus de recuperacao de SP (Pericia com Talismas)',
  'Buff Duration': 'Duracao do efeito',
  'Buff Removal': 'Remocao do efeito',
  'Cast': 'Conjuracao',
  'Cast Delay': 'Pos-conjuracao',
  'Cast Range': 'Alcance',
  'Cooldown': 'Recarga',
  'Damage': 'Dano',
  'Damage Modifier': 'Modificador de dano',
  'Initial Damage': 'Dano inicial',
  'Over Time Damage': 'Dano contínuo',
  'Bonus Flat Damage': 'Bônus de dano fixo',
  'Physical Resistance Ignoring': 'Ignorar resistência física',
  'Damage Logic': 'Lógica do dano',
  'Damage Property': 'Propriedade do dano',
  'Damage Bonus': 'Bonus de dano',
  'Duration': 'Duracao',
  'Effect': 'Efeito',
  'Fixed Cast Time': 'Conjuracao fixa',
  'Fixed Casting Time': 'Conjuração fixa',
  'Factor Weight Of Pow In Skill Formula': 'Peso de POW na fórmula da habilidade',
  'Factor Weight Of Con In Skill Formula': 'Peso de CON na fórmula da habilidade',
  'Factor Weight Of Spl In Skill Formula': 'Peso de SPL na fórmula da habilidade',
  'Global Cooldown': 'Recarga global',
  'Level': 'Nivel',
  'Levels': 'Niveis',
  'Long Range Physical Damage': 'Dano fisico a distancia',
  'Long Ranged Damage Bonus': 'Bonus de dano fisico a distancia',
  'Long Ranged Physical Damage': 'Dano fisico a distancia',
  'Number Of Hit': 'Número de acertos',
  'Number Of Hit While Under Research Report Buff': 'Número de acertos sob o efeito de Research Report',
  'Knock-back Distance': 'Distância do empurrão',
  'Maximum Shooting Star Fall Per Round': 'Máximo de Shooting Star Fall por rodada',
  'Maximum Number Of Attack According To The Number Of Enemies Around The Target': 'Máximo de ataques conforme os inimigos ao redor do alvo',
  'Shooting Star Interval': 'Intervalo entre Shooting Star Fall',
  'Sphere Creation Interval': 'Intervalo de criação de esferas',
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
  'Skill Duration': 'Duração da habilidade',
  'Trigger Chance': 'Chance de ativação',
  'Variable Casting Time': 'Conjuração variável',
  'Target': 'Alvo',
  'Type': 'Tipo',
  'Use Condition': 'Condicao de uso',
  'Variable Cast Time': 'Conjuracao variavel',
}

const specValueTranslations = {
  'Active (AP) Skill': 'Habilidade ativa (AP)',
  'Active(AP) Skill': 'Habilidade ativa (AP)',
  'Active/Crafting Skill': 'Habilidade ativa/de criação',
  'Instant Cast': 'Conjuração instantânea',
  'Instant Casting': 'Conjuração instantânea',
  'Instant cast': 'Conjuração instantânea',
  'Self and Party Members': 'Usuário e membros do grupo',
  'You and Allies': 'Você e aliados',
  'Yourself and your party members': 'Você e os membros do seu grupo',
  'fire property magical damage': 'dano mágico de propriedade fogo',
  'holy property magical damage': 'dano mágico de propriedade sagrado',
  'neutral property magical damage': 'dano mágico de propriedade neutro',
  'wind property magical damage': 'dano mágico de propriedade vento',
  'fire': 'fogo',
  'holy': 'sagrado',
  'neutral': 'neutro',
  'cooldown': 'recarga',
  'variable casting time': 'conjuração variável',
  '2 split hits': '2 acertos separados',
  '2 cumulative hits': '2 acertos acumulados',
  'Active Skill': 'Habilidade ativa',
  'All Targets': 'Todos os alvos',
  'Buff': 'Suporte',
  'Buff Skill': 'Habilidade de suporte',
  'Buff/Special Skill': 'Habilidade de suporte/especial',
  'Debuff': 'Enfraquecimento',
  'Enemy': 'Inimigo',
  'Fixed Cast': 'Conjuracao fixa',
  'Magical Damage': 'Dano magico',
  'Magic': 'Magia',
  'Melee': 'Corpo a corpo',
  'Melee Physics': 'Dano físico corpo a corpo',
  'Ranged physical': 'Dano físico a distância',
  'Single target': 'Alvo único',
  'Support': 'Suporte',
  'Self-Buff': 'Efeito no próprio usuário',
  'Self-centered area': 'Área ao redor do usuário',
  'Targeted area': 'Área selecionada',
  'Target in range': 'Alvo no alcance',
  'Traps': 'Armadilhas',
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
  'Apply to all pinned cards': 'Aplicar a todas as cartas fixadas',
  'All classes': 'Todas as classes',
  'Go back': 'Voltar',
  'Classes': 'Classes',
  'See rebalance notes': 'Ver notas de rebalanceamento',
  'Rebalance notes': 'Notas de rebalanceamento',
  'Rebalance 1': 'Rebalanceamento 1',
  'Rebalance 2': 'Rebalanceamento 2',
  'Rebalance 3': 'Rebalanceamento 3',
  'Rebalance 4': 'Rebalanceamento 4',
  'Rebalance 5': 'Rebalanceamento 5',
  'Browse skill changes by rebalance and class.': 'Veja as mudanças nas habilidades por rebalanceamento e classe.',
  'KRO skill-change details are not final ROLATAM patch notes.':
    'As alterações de habilidades do kRO não são as notas finais do ROLATAM.',
  'Select rebalance': 'Selecionar rebalanceamento',
  'Next': 'Próximo',
  'Current': 'Atual',
  'Jump to class changes': 'Ir para as alterações da classe',
  'Previous classes': 'Classes anteriores',
  'Next classes': 'Próximas classes',
  'Selected update': 'Atualização selecionada',
  'Classes with skill changes': 'Classes com alterações nas habilidades',
  'Max job level': 'Nível de classe máximo',
  'Scope': 'Abrangência',
  'Main classes only': 'Apenas classes principais',
  'Main and expanded classes': 'Classes principais e expandidas',
  'Original announcement': 'Anúncio original',
  'Browse classes': 'Ver classes',
  'Open skill planner': 'Abrir planejador de habilidades',
  'New skill': 'Nova habilidade',
  'Added in this rebalance; see the skill planner for its details.': 'Adicionada neste rebalanceamento; veja os detalhes no planejador de habilidades.',
  'View source': 'Ver fonte',
  'No skill notes are available for this class in the selected rebalance.': 'Não há notas de habilidades para esta classe no rebalanceamento selecionado.',
  'Choose a class': 'Escolha uma classe',
  'Select a class to read its skill changes.': 'Selecione uma classe para ler as alterações nas habilidades.',
  'skills changed or added': 'habilidades alteradas ou adicionadas',
  'No skill notes': 'Sem notas de habilidades',
  'Not applicable to this rebalance': 'Não se aplica a este rebalanceamento',
  'This rebalance does not apply to this class.': 'Este rebalanceamento não se aplica a esta classe.',
  'Compare balance versions here.': 'Compare versoes de balanceamento aqui.',
  'Configure pinned specs': 'Configurar especificacoes fixadas',
  'Current Specs': 'Especificacoes atuais',
  'Current specs': 'Especificacoes atuais',
  'Build presets': 'Predefinicoes de build',
  'Close': 'Fechar',
  'Collapse skill details': 'Recolher detalhes da habilidade',
  'Dark': 'Escuro',
  'Delete': 'Excluir',
  'Divine Pride forum': 'Fórum Divine Pride',
  'Description': 'Descricao',
  'Language': 'Idioma',
  'Level': 'Nivel',
  'Level Scaling': 'Escala por nivel',
  'Light': 'Claro',
  'Load': 'Carregar',
  'Loading': 'Carregando',
  'Lv': 'Nv.',
  'New preset': 'Nova predefinicao',
  'No rebalance notes are applied before the first rebalance.':
    'Nenhuma nota de rebalanceamento e aplicada antes do primeiro rebalanceamento.',
  'No selected specs found.': 'Nenhuma especificacao selecionada encontrada.',
  'Open skill details': 'Abrir detalhes da habilidade',
  'No classes match your search.': 'Nenhuma classe corresponde a busca.',
  'No rebalance notes for this skill.': 'Nenhuma nota de rebalanceamento para esta habilidade.',
  'No additional timing or range fields were found.': 'Nenhum campo adicional de tempo ou alcance foi encontrado.',
  'Patch Notes': 'Notas de alteracao',
  'Pin': 'Fixar',
  'Unpin': 'Desafixar',
  'Before': 'Antes',
  'After': 'Depois',
  'Compared with': 'Comparado com',
  'Change notes': 'Notas da alteração',
  'Level scaling': 'Progressão por nível',
  'Skill details unavailable.': 'Detalhes da habilidade indisponíveis.',
  'Pinned': 'Fixada',
  'Pinned skill': 'Habilidade fixada',
  'Minimize pinned skill': 'Minimizar habilidade fixada',
  'Expand pinned skill': 'Expandir habilidade fixada',
  'Preset name': 'Nome da predefinicao',
  'Pre-Rebalance Specs': 'Especificacoes pre-rebalanceamento',
  'Pre-rebalances': 'Pre-rebalanceamentos',
  'Previous class prerequisites': 'Pre-requisitos de classes anteriores',
  'Prerequisites': 'Pre-requisitos',
  'Remove one point from': 'Remover um ponto de',
  'Req Lv': 'Req Nv.',
  'Required level': 'Nivel necessario',
  'Reset': 'Limpar',
  'Reset all': 'Limpar tudo',
  'Save': 'Salvar',
  'Saved presets': 'Predefinicoes salvas',
  'Search classes': 'Buscar classes',
  'Skill': 'Habilidade',
  'Skill Specs': 'Especificacoes',
  'This skill is unchanged in the selected rebalance.': 'Esta habilidade nao muda no rebalanceamento selecionado.',
  'Use this dropdown to switch between pre-rebalance, each rebalance, and current specs.':
    'Use esta lista para alternar entre pre-rebalanceamento, cada rebalanceamento e as especificacoes atuais.',
  'Use dark theme': 'Usar tema escuro',
  'Use light theme': 'Usar tema claro',
  'Wiki links': 'Links da wiki',
  'Source links': 'Links das fontes',
  'previous class': 'classe anterior',
}
