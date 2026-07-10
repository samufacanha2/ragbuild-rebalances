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
}) {
  const notes = notesForVersion(skill, specVersion)
  const levelTable = effectiveLevelTable(model, skill, specVersion)
  const name = translatedSkillName(skill, language)

  return (
    <article className="skill-card">
      <header className="skill-card-head">
        <img src={assetUrl(skill.iconUrl)} alt="" width="48" height="48" />
        <div>
          <p className="eyebrow">{translateUi('Skill', language)} {skill.id}</p>
          <h2>{name}</h2>
        </div>
      </header>

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
