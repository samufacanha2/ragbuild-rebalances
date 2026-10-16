// Thai third-version class guides: reference mechanics for the planned ROLATAM additions,
// not evidence of a ROLATAM release date or confirmation of final local skill values.
const sourceBase = 'https://sigmathefallen.blogspot.com/2025/02/'

const skills = {
  6001: {
    sourceUrl: `${sourceBase}dragon-knight-3rd-version.html`,
    spBase: 58, spPerLevel: 3, areaTiers: [[5, '7x7'], [10, '9x9']],
    fixedCast: '0.5 seconds', variableCast: '2 seconds', castDelay: '0.15 seconds', cooldown: '0.5 seconds', castRange: '9 cells', apGenerated: '2',
    baseDamage: '3,550% ATK at Lv 10, before HP/SP, POW and base-level scaling',
    baseDamagePtBr: '3.550% ATK no Nv. 10, antes dos fatores de HP/SP, POW e nível de base',
    hits: '1 hit (damage displayed twice)',
    hitsPtBr: '1 acerto (dano exibido duas vezes)',
    target: 'Targeted area', targetPtBr: 'Área ao redor do alvo',
    damageFormula: '(50 + skill level × (350 + 0.05 × (MaxHP / 8 + MaxSP / 4)) + POW × 7) × (base level / 100) % ATK; with Dragonic Aura: (50 + skill level × (350 + 0.07 × (MaxHP / 8 + MaxSP / 4)) + POW × 10) × (base level / 100) % ATK',
    damageFormulaPtBr: '(50 + Nv. da habilidade × (350 + 0,05 × (MaxHP / 8 + MaxSP / 4)) + POW × 7) × (nível de base / 100) % ATQ; com Dragonic Aura: (50 + Nv. da habilidade × (350 + 0,07 × (MaxHP / 8 + MaxSP / 4)) + POW × 10) × (nível de base / 100) % ATQ',
    description: {
      en: 'Requires a dragon mount. Ranged physical area attack that ignores hard and soft physical defense. One hit is displayed as two damage numbers. Damage scales with MaxHP, MaxSP, POW and base level; Dragonic Aura strengthens the HP/SP and POW factors.',
      'pt-BR': 'Exige montaria de dragão. Ataque físico à distância em área que ignora as DEF físicas rígida e suave. Um acerto é exibido como dois números de dano. O dano escala com MaxHP, MaxSP, POW e nível de base; Dragonic Aura aumenta os fatores de HP/SP e POW.',
    },
  },
  6002: {
    sourceUrl: `${sourceBase}meister-3rd-version.html`,
    spBase: 44, spPerLevel: 4, areaTiers: [[5, '7x7'], [10, '9x9']],
    fixedCast: '0.5 seconds', variableCast: '1.5 seconds', castDelay: '0.25 seconds', cooldown: '0.7 seconds', castRange: '9 cells', apGenerated: '2',
    baseDamage: '7,750% ATK per hit at Lv 10, before POW and base-level scaling', hits: '2 hits',
    baseDamagePtBr: '7.750% ATK por acerto no Nv. 10, antes dos fatores de POW e nível de base', hitsPtBr: '2 acertos',
    target: 'Targeted area', targetPtBr: 'Área ao redor do alvo',
    damageFormula: '(250 + skill level × 750 + POW × 7) × (base level / 100) % ATK per hit',
    damageFormulaPtBr: '(250 + Nv. da habilidade × 750 + POW × 7) × (nível de base / 100) % ATQ por acerto',
    description: {
      en: 'Requires a Madogear. Two-hit ranged physical area attack that ignores hard and soft physical defense. Damage scales with POW and base level.',
      'pt-BR': 'Exige Madogear. Ataque físico à distância em área, com dois acertos, que ignora as DEF físicas rígida e suave. O dano escala com POW e nível de base.',
    },
  },
  6003: {
    sourceUrl: `${sourceBase}meister-3rd-version.html`,
    spBase: 35, spPerLevel: 5, areaTiers: [],
    fixedCast: '0.5 seconds', variableCast: '1 second', castDelay: '0 seconds', cooldown: '0.25 seconds', castRange: '11 cells',
    baseDamage: '3,300% ATK per hit at Lv 5, before POW and base-level scaling', hits: '3 hits',
    baseDamagePtBr: '3.300% ATK por acerto no Nv. 5, antes dos fatores de POW e nível de base', hitsPtBr: '3 acertos',
    target: 'Single target', targetPtBr: 'Alvo único',
    damageFormula: '(300 + skill level × 600 + POW × 10) × (base level / 100) % ATK per hit',
    damageFormulaPtBr: '(300 + Nv. da habilidade × 600 + POW × 10) × (nível de base / 100) % ATQ por acerto',
    description: {
      en: 'Requires a Madogear. Three-hit ranged physical attack with a chance to critically hit based on the caster’s CRI. Damage scales with POW and base level.',
      'pt-BR': 'Exige Madogear. Ataque físico à distância de três acertos, com chance de crítico conforme o CRI do usuário. O dano escala com POW e nível de base.',
    },
  },
  6004: {
    sourceUrl: `${sourceBase}meister-3rd-version.html`,
    spBase: 48, spPerLevel: 3, areaTiers: [[4, '3x3'], [8, '5x5'], [10, '7x7']],
    fixedCast: '0 seconds', variableCast: '0 seconds', castDelay: '0 seconds', cooldown: '0.3 seconds',
    baseDamage: '3,100% / 3,150% ATK per hit at Lv 10 (Axe Stomp), before POW and base-level scaling', hits: '3 / 5 hits',
    baseDamagePtBr: '3.100% / 3.150% ATK por acerto no Nv. 10 (Axe Stomp), antes dos fatores de POW e nível de base', hitsPtBr: '3 / 5 acertos',
    target: 'Self-centered area', targetPtBr: 'Área ao redor do usuário',
    damageFormula: '(100 + skill level × 300 + POW × 7) × (base level / 100) % ATK per hit; with Axe Stomp: (150 + skill level × 300 + POW × 7) × (base level / 100) % ATK per hit',
    damageFormulaPtBr: '(100 + Nv. da habilidade × 300 + POW × 7) × (nível de base / 100) % ATQ por acerto; com Axe Stomp: (150 + Nv. da habilidade × 300 + POW × 7) × (nível de base / 100) % ATQ por acerto',
    description: {
      en: 'Requires an axe. Melee physical area attack with three hits, increased to five hits under Axe Stomp. Damage scales with POW and base level.',
      'pt-BR': 'Exige um machado. Ataque físico corpo a corpo em área com três acertos, aumentados para cinco sob o efeito de Axe Stomp. O dano escala com POW e nível de base.',
    },
  },
  6005: {
    sourceUrl: `${sourceBase}biolo-3rd-version.html`,
    spBase: 54, spPerLevel: 4, areaTiers: [[5, '7x7']],
    fixedCast: '0 seconds', variableCast: '0 seconds', castDelay: '0.25 seconds', cooldown: '0.7 seconds', apGenerated: '2',
    baseDamage: '2,650% / 3,150% ATK per hit at Lv 5 (Research Report), before POW and base-level scaling', hits: '3 / 5 hits',
    baseDamagePtBr: '2.650% / 3.150% ATK por acerto no Nv. 5 (Research Report), antes dos fatores de POW e nível de base', hitsPtBr: '3 / 5 acertos',
    target: 'Self-centered area', targetPtBr: 'Área ao redor do usuário',
    damageFormula: '(400 + skill level × 450 + POW × 7) × (base level / 100) % ATK per hit; with Research Report: (400 + skill level × 550 + POW × 10) × (base level / 100) % ATK per hit',
    damageFormulaPtBr: '(400 + Nv. da habilidade × 450 + POW × 7) × (nível de base / 100) % ATQ por acerto; com Research Report: (400 + Nv. da habilidade × 550 + POW × 10) × (nível de base / 100) % ATQ por acerto',
    description: {
      en: 'Melee physical attack in a 7x7 area centered on the caster. Three hits, increased to five under Research Report. Damage scales with POW and base level.',
      'pt-BR': 'Ataque físico corpo a corpo em área de 7x7 ao redor do usuário. Três acertos, aumentados para cinco sob o efeito de Research Report. O dano escala com POW e nível de base.',
    },
  },
  6006: {
    sourceUrl: `${sourceBase}biolo-3rd-version.html`,
    spBase: 66, spPerLevel: 2, areaTiers: [[5, '7x7'], [10, '9x9']],
    fixedCast: '0.5 seconds', variableCast: '1.5 seconds', castDelay: '0.15 seconds', cooldown: '0.7 seconds', castRange: '9 cells', apGenerated: '2',
    baseDamage: '2,700% / 3,250% ATK per hit at Lv 10 (Research Report), before POW and base-level scaling', hits: '3 / 5 hits',
    baseDamagePtBr: '2.700% / 3.250% ATK por acerto no Nv. 10 (Research Report), antes dos fatores de POW e nível de base', hitsPtBr: '3 / 5 acertos',
    target: 'Targeted area', targetPtBr: 'Área ao redor do alvo',
    damageFormula: '(200 + skill level × 250 + POW × 7) × (base level / 100) % ATK per hit; with Research Report: (250 + skill level × 300 + POW × 10) × (base level / 100) % ATK per hit',
    damageFormulaPtBr: '(200 + Nv. da habilidade × 250 + POW × 7) × (nível de base / 100) % ATQ por acerto; com Research Report: (250 + Nv. da habilidade × 300 + POW × 10) × (nível de base / 100) % ATQ por acerto',
    description: {
      en: 'Ranged physical area attack around the target. Three hits, increased to five under Research Report. Can critically hit based on the caster’s CRI; damage scales with POW and base level.',
      'pt-BR': 'Ataque físico à distância em área ao redor do alvo. Três acertos, aumentados para cinco sob o efeito de Research Report. Pode causar crítico conforme o CRI do usuário; o dano escala com POW e nível de base.',
    },
  },
}

export function sigmaInitialSkillFor(id) {
  return skills[id] ?? null
}

export function sigmaDescriptionForSkill(skill, versionId, language) {
  if (versionId !== 'rebalance-2') return null
  return sigmaInitialSkillFor(skill.id)?.description[language] ?? null
}

export function skillWithSigmaInitialRequirements(skill, versionId) {
  if (versionId !== 'rebalance-2' || skill.id !== 6002) return skill
  // The guide requires Madogear License 5; the generated tree only has Manufacture Machine 1.
  return {
    ...skill,
    tree: {
      ...skill.tree,
      requirements: [
        ...skill.tree.requirements.filter((requirement) => requirement.id !== 2255),
        { id: 2255, name: 'Madogear License', level: 5, visible: false },
      ],
    },
  }
}

export function sigmaInitialSpecRows(skillId) {
  const initial = sigmaInitialSkillFor(skillId)
  if (!initial) return []
  let firstLevel = 1
  const areas = initial.areaTiers.map(([lastLevel, size]) => {
    const span = initial.areaTiers.length === 1 ? '' : ` (Lv ${firstLevel}-${lastLevel})`
    const spanPtBr = initial.areaTiers.length === 1 ? '' : ` (Nv. ${firstLevel}-${lastLevel})`
    firstLevel = lastLevel + 1
    return { en: `${size}${span}`, ptBr: `${size}${spanPtBr}` }
  })
  return [
    ['SP Cost', `${initial.spBase} + (skill level × ${initial.spPerLevel})`, `${initial.spBase} + (Nv. da habilidade × ${initial.spPerLevel})`],
    ['Fixed Cast Time', initial.fixedCast],
    ['Variable Cast Time', initial.variableCast],
    ['Cast Delay', initial.castDelay],
    ['Cooldown', initial.cooldown],
    ['Cast Range', initial.castRange, initial.castRange?.replace('cells', 'células')],
    ['Target', initial.target, initial.targetPtBr],
    ['Area of Effect', areas.map((area) => area.en).join(' / ') || null, areas.map((area) => area.ptBr).join(' / ') || null],
    ['AP Generated', initial.apGenerated],
    ['Base Damage', initial.baseDamage, initial.baseDamagePtBr],
    ['Hits', initial.hits, initial.hitsPtBr],
    ['Damage Formula', initial.damageFormula, initial.damageFormulaPtBr],
  ].filter(([, value]) => value != null).map(([label, value, valuePtBr]) => ({ label, value, ...(valuePtBr ? { valuePtBr } : {}), changed: false, changeNote: '', changeUrl: '' }))
}

export function sigmaInitialLevelTable(skill, table) {
  const initial = sigmaInitialSkillFor(skill.id)
  if (!initial || !table) return null
  const columns = table.columns.filter((column) => column.id !== 'sp-cost' && column.id !== 'area-of-effect')
  columns.unshift({ id: 'sp-cost', label: 'SP Cost' })
  if (initial.areaTiers.length) columns.push({ id: 'area-of-effect', label: 'Area of Effect' })
  return {
    ...table,
    columns,
    rows: table.rows.map((row) => {
      const values = { ...row.values, 'sp-cost': String(initial.spBase + row.level * initial.spPerLevel) }
      if (initial.areaTiers.length) values['area-of-effect'] = initial.areaTiers.find(([through]) => row.level <= through)?.[1] ?? ''
      else delete values['area-of-effect']
      return { ...row, values }
    }),
  }
}
