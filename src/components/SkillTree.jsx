import { useMemo, useState } from 'react'
import { assetUrl } from '../lib/dom.js'
import { allocatedTotal, skillLevel } from '../lib/pointBuy.js'
import { notesForVersion } from '../lib/specs.js'
import { translatedSkillName } from '../lib/translations.js'

export function SkillTree({
  model,
  levels,
  selectedId,
  specVersion,
  language,
  onSelectSkill,
  onIncreaseSkill,
  onDecreaseSkill,
  canDecreaseSkill,
}) {
  const [hoveredId, setHoveredId] = useState(null)
  const hoveredRequirements = useMemo(() => {
    const requirements = new Map()
    const hoveredSkill = model.skillById.get(hoveredId)
    if (hoveredSkill) collectRequirements(hoveredSkill, model, requirements)
    return requirements
  }, [hoveredId, model])

  return (
    <div className="tree-wrap">
      <div
        className="tree-board"
        style={{
          '--tree-columns': model.visibleTree.columns,
          '--tree-rows': model.visibleTree.rows,
        }}
      >
        <div className="tree-grid">
          {model.data.skills.map((skill) => (
            <SkillNode
              key={skill.id}
              model={model}
              skill={skill}
              levels={levels}
              selected={selectedId === skill.id}
              specVersion={specVersion}
              language={language}
              requiredLevel={hoveredRequirements.get(skill.id)}
              isHoverTarget={hoveredId === skill.id}
              onHoverSkill={setHoveredId}
              onSelectSkill={onSelectSkill}
              onIncreaseSkill={onIncreaseSkill}
              onDecreaseSkill={onDecreaseSkill}
              canDecreaseSkill={canDecreaseSkill}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillNode({
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
  canDecreaseSkill,
}) {
  const currentLevel = skillLevel(levels, skill.id)
  const name = translatedSkillName(skill, language)
  const notes = notesForVersion(skill, specVersion)
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

  return (
    <div
      className={className}
      style={{
        gridColumn: String((skill.tree.col ?? 0) - model.visibleTree.minCol + 1),
        gridRow: String((skill.tree.row ?? 0) + 1),
      }}
      onMouseEnter={() => onHoverSkill(skill.id)}
      onMouseLeave={() => onHoverSkill(null)}
      onFocus={() => onHoverSkill(skill.id)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) onHoverSkill(null)
      }}
    >
      <button
        className="skill-select"
        type="button"
        aria-label={`${name}, level ${currentLevel} of ${skill.maxLevel}`}
        onClick={() => onSelectSkill(skill.id)}
      >
        <span className="skill-name">{name}</span>
        <span className="skill-body">
          <span className="skill-level-text">{currentLevel}</span>
          <span className="icon-shell">
            <img src={assetUrl(skill.iconUrl)} alt="" loading="lazy" />
          </span>
          <span className="skill-level-text">{skill.maxLevel}</span>
        </span>
      </button>
      {requiredLevel ? <span className="requirement-badge">Req Lv {requiredLevel}</span> : null}
      <div className="skill-stepper" aria-label={`${skill.name} point controls`}>
        <button
          type="button"
          aria-label={`Remove one point from ${name}`}
          onClick={() => onDecreaseSkill(skill.id)}
          disabled={!canDecreaseSkill(skill.id)}
        >
          -
        </button>
        <button
          type="button"
          aria-label={`Add one point to ${name}`}
          onClick={() => onIncreaseSkill(skill.id)}
          disabled={currentLevel >= skill.maxLevel || allocatedTotal(levels) >= model.data.pointLimit}
        >
          +
        </button>
      </div>
    </div>
  )
}

function collectRequirements(skill, model, requirements) {
  for (const requirement of skill.tree.requirements) {
    if (!requirement.visible) continue

    const existingLevel = requirements.get(requirement.id) ?? 0
    requirements.set(requirement.id, Math.max(existingLevel, requirement.level))

    const requiredSkill = model.skillById.get(requirement.id)
    if (requiredSkill) collectRequirements(requiredSkill, model, requirements)
  }
}
