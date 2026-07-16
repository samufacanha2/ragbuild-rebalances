import './SkillNodeStyles.css'
import { assetUrl } from '../../lib/dom.js'
import { skillLevel } from '../../lib/pointBuy.js'
import { notesForVersion } from '../../lib/specs.js'
import { translatedSkillName, translateUi } from '../../lib/translations.js'

export function SkillNode({
  model,
  skill,
  levels,
  selected,
  specVersion,
  language,
  requiredLevel,
  isHoverTarget,
  onHoverSkill,
  onSelectSkill,
  onIncreaseSkill,
  onDecreaseSkill,
  canIncreaseSkill = () => true,
  canDecreaseSkill,
}) {
  const currentLevel = skillLevel(levels, skill.id)
  const name = translatedSkillName(skill, language)
  const notes = notesForVersion(skill, specVersion)
  const treeColumn = (skill.tree.col ?? 0) - model.visibleTree.minCol + 1
  const treeRow = (skill.tree.row ?? 0) + 1
  const className = [
    'skill-node',
    skill.balanceNotes.length ? 'has-notes' : '',
    notes.length ? 'in-filter' : '',
    currentLevel > 0 ? 'is-bought' : '',
    selected ? 'is-selected' : '',
    requiredLevel ? 'is-prerequisite' : '',
    isHoverTarget ? 'is-hover-target' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const selectSkill = () => onSelectSkill(skill.id)
  const handleSelectKeyDown = (event) => {
    if (event.currentTarget !== event.target) return
    if (event.key !== 'Enter' && event.key !== ' ') return

    event.preventDefault()
    selectSkill()
  }
  const decreaseSkill = (event) => {
    event.stopPropagation()
    onDecreaseSkill(skill.id)
  }
  const increaseSkill = (event) => {
    event.stopPropagation()
    onIncreaseSkill(skill.id)
  }

  return (
    <div
      className={className}
      style={{
        '--skill-column': treeColumn,
        '--skill-row': treeRow,
      }}
      onMouseEnter={() => onHoverSkill(skill.id)}
      onMouseLeave={() => onHoverSkill(null)}
      onFocus={() => onHoverSkill(skill.id)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onHoverSkill(null)
      }}
    >
      <div
        className="skill-select"
        role="button"
        tabIndex={0}
        aria-label={`${name}, level ${currentLevel} of ${skill.maxLevel}`}
        onClick={selectSkill}
        onKeyDown={handleSelectKeyDown}
      >
        <span className="skill-name">{name}</span>
        <span className="skill-node-content">
          <span className="skill-node-meta">
            <span className="skill-level-text">
              {currentLevel}/{skill.maxLevel}
            </span>
            <div
              className="skill-stepper"
              role="group"
              aria-label={`${skill.name} point controls`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label={`${translateUi('Remove one point from', language)} ${name}`}
                onClick={decreaseSkill}
                disabled={!canDecreaseSkill(skill.id)}
              >
                -
              </button>
              <button
                type="button"
                aria-label={`${translateUi('Add one point to', language)} ${name}`}
                onClick={increaseSkill}
                disabled={currentLevel >= skill.maxLevel || !canIncreaseSkill(skill.id)}
              >
                +
              </button>
            </div>
          </span>
          <span className="icon-shell">
            <img src={assetUrl(skill.iconUrl)} alt="" loading="lazy" />
          </span>
        </span>
      </div>
      {requiredLevel ? (
        <span className="requirement-badge">
          {translateUi('Required level', language)} {requiredLevel}
        </span>
      ) : null}
    </div>
  )
}
