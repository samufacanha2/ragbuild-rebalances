import { sigmaInitialSkillFor } from './sigmaInitialSkills.js'
import { browikiSkillUrl } from './translations.js'

export function noteSourceLabel(provenance, language) {
  if (provenance === 'rolatam-planned') {
    return language === 'pt-BR' ? 'Blog do Sigma the Fallen · valores iniciais da habilidade' : 'Sigma the Fallen blog · initial skill values'
  }
  return language === 'pt-BR' ? 'Fórum Divine Pride · alterações da habilidade' : 'Divine Pride forum · skill changes'
}

export function skillSourceLinks(skill, specVersion, language) {
  const sigmaUrl = specVersion === 'rebalance-2' ? sigmaInitialSkillFor(skill.id)?.sourceUrl : ''
  const browikiUrl = browikiSkillUrl(skill)
  return [
    sigmaUrl ? { label: noteSourceLabel('rolatam-planned', language), href: sigmaUrl } : null,
    skill.irowikiUrl ? { label: language === 'pt-BR' ? 'iRO Wiki · página da habilidade' : 'iRO Wiki · skill page', href: skill.irowikiUrl } : null,
    browikiUrl ? { label: language === 'pt-BR' ? 'bROWiki · página da habilidade' : 'bROWiki · skill page', href: browikiUrl } : null,
  ].filter(Boolean)
}
