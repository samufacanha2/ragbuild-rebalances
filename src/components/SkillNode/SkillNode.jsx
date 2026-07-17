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
  const mobileName = mobileSkillName(name)
  const notes = notesForVersion(skill, specVersion)
  const treeColumn = (skill.tree.col ?? 0) - model.visibleTree.minCol + 1
  const treeRow = (skill.tree.row ?? 0) + 1
  const levelStateClass = currentLevel >= skill.maxLevel
    ? 'is-level-maxed'
    : currentLevel > 0
      ? 'is-level-partial'
      : 'is-level-empty'
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
        '--skill-mobile-column': treeRow,
        '--skill-mobile-row': treeColumn,
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
        <span className="skill-name-mobile" aria-hidden="true">
          <span>{mobileName.start}</span>
          <span>{mobileName.end}</span>
        </span>
        <span className="skill-node-content">
          <span className="skill-node-meta">
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
              <span className={`skill-level-text ${levelStateClass}`}>
                <span className="skill-level-current">{currentLevel}</span>
                <span className="skill-level-separator">/</span>
                <span className="skill-level-max">{skill.maxLevel}</span>
              </span>
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

function mobileSkillName(name) {
  const value = String(name ?? '').trim().replace(/\s+/g, ' ')
  if (!value) return { start: '', end: '' }

  const words = value.split(' ')
  if (words.length === 1) {
    return value.length <= 12
      ? { start: value, end: '' }
      : { start: `${value.slice(0, 6)}...`, end: `...${value.slice(-6)}` }
  }

  if (words.length === 2) {
    return {
      start: truncateMobileNameLine(words[0], false),
      end: truncateMobileNameLine(words[1], true),
    }
  }

  const first = words[0]
  const last = words.at(-1)

  return {
    start: truncateMobileNameLine(first, false),
    end: `...${last.slice(-6)}`,
  }
}

function truncateMobileNameLine(value, fromEnd) {
  if (value.length <= 8) return value
  return fromEnd ? `...${value.slice(-6)}` : `${value.slice(0, 6)}...`
}
