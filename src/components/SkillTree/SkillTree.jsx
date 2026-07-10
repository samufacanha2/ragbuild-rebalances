import { useMemo, useState } from 'react'
import './SkillTreeStyles.css'
import { SkillNode } from '../SkillNode'

const COMPACT_SKILL_WIDTH = 96

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
          '--tree-compact-skill-width': `${COMPACT_SKILL_WIDTH}px`,
          '--tree-compact-min-width': `${model.visibleTree.columns * COMPACT_SKILL_WIDTH}px`,
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

function collectRequirements(skill, model, requirements) {
  for (const requirement of skill.tree.requirements) {
    if (!requirement.visible) continue

    const existingLevel = requirements.get(requirement.id) ?? 0
    requirements.set(requirement.id, Math.max(existingLevel, requirement.level))

    const requiredSkill = model.skillById.get(requirement.id)
    if (requiredSkill) collectRequirements(requiredSkill, model, requirements)
  }
}
