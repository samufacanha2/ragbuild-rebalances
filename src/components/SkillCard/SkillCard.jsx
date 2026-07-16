import { Pin as PinIcon } from 'lucide-react'
import './SkillCardStyles.css'
import { assetUrl } from '../../lib/dom.js'
import { allocatedTotal } from '../../lib/pointBuy.js'
import { effectiveLevelTable, effectiveSpecRows, notesForVersion, specVersionTitle } from '../../lib/specs.js'
import {
  translatedRequirementName,
  translatedSkillDescription,
  translatedSkillName,
  translateUi,
} from '../../lib/translations.js'
import { EffectiveSpecTable } from '../EffectiveSpecTable'
import { LevelScalingTable } from '../LevelScalingTable'
import { PatchNotes } from '../PatchNotes'
import { TextBlock } from '../TextBlock'

export function SkillCard({
  model,
  skill,
  level,
  levels,
  specVersion,
  language,
  onIncreaseSkill,
  onDecreaseSkill,
  canDecreaseSkill,
  onPinSkill,
  isPinned = false,
  readOnly = false,
}) {
  const notes = notesForVersion(skill, specVersion)
  const levelTable = effectiveLevelTable(model, skill, specVersion)
  const name = translatedSkillName(skill, language)
  const sourceLinks = sourceLinksForSkill(skill)

  return (
    <article className="skill-card">
      <header className="skill-card-head">
        <img src={assetUrl(skill.iconUrl)} alt="" width="48" height="48" />
        <div className="skill-card-title">
          <p className="eyebrow">{translateUi('Skill', language)}</p>
          <h2>{name}</h2>
        </div>
        {onPinSkill ? (
          <button
            className="skill-pin-button"
            type="button"
            onClick={() => onPinSkill(skill.id)}
            disabled={isPinned}
          >
            <PinIcon size={15} aria-hidden="true" />
            <span>{translateUi(isPinned ? 'Pinned' : 'Pin', language)}</span>
          </button>
        ) : null}
      </header>

      {readOnly ? (
        <div className="card-level-readout">
          <strong>
            {level}/{skill.maxLevel}
          </strong>
        </div>
      ) : (
        <div className="card-stepper">
          <button type="button" onClick={() => onDecreaseSkill(skill.id)} disabled={!canDecreaseSkill(skill.id)}>
            -
          </button>
          <strong>
            {level}/{skill.maxLevel}
          </strong>
          <button
            type="button"
            onClick={() => onIncreaseSkill(skill.id)}
            disabled={level >= skill.maxLevel || allocatedTotal(levels) >= model.data.pointLimit}
          >
            +
          </button>
        </div>
      )}

      {sourceLinks.length ? (
        <nav className="skill-source-links" aria-label={translateUi('Wiki links', language)}>
          {sourceLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      ) : null}

      <section>
        <h3>{translateUi(specVersionTitle(model, specVersion), language)}</h3>
        <EffectiveSpecTable rows={effectiveSpecRows(model, skill, specVersion, levelTable)} language={language} />
      </section>

      {levelTable ? <LevelScalingTable table={levelTable} level={level} language={language} /> : null}

      <section>
        <h3>{translateUi('Description', language)}</h3>
        <TextBlock text={translatedSkillDescription(skill, language)} />
      </section>

      <section>
        <h3>{translateUi('Prerequisites', language)}</h3>
        <ul className="compact-list">
          {skill.tree.requirements.length ? (
            skill.tree.requirements.map((requirement) => (
              <li key={requirement.id}>
                {translatedRequirementName(requirement, model, language)} {translateUi('Lv', language)} {requirement.level}
                {requirement.visible ? '' : ` (${translateUi('previous class', language)})`}
              </li>
            ))
          ) : (
            <li>{skill.prerequisiteText}</li>
          )}
        </ul>
      </section>

      <PatchNotes model={model} notes={notes} specVersion={specVersion} language={language} />
    </article>
  )
}

function sourceLinksForSkill(skill) {
  return [
    skill.irowikiUrl ? { label: 'iRO Wiki', href: skill.irowikiUrl } : null,
    skill.translations?.['pt-BR']?.sourceUrl ? { label: 'bROWiki', href: skill.translations['pt-BR'].sourceUrl } : null,
  ].filter(Boolean)
}
