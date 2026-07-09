export function buySkillLevel(model, id, levels) {
  const skill = model.skillById.get(id)
  if (!skill) return { ok: false, levels, message: 'Skill not found.' }

  const currentLevel = skillLevel(levels, id)
  if (currentLevel >= skill.maxLevel) {
    return { ok: false, levels, message: `${skill.name} is already maxed.` }
  }

  const next = { ...levels }
  const changed = new Set()

  function ensureRequirements(target) {
    for (const requirement of target.tree.requirements) {
      if (!requirement.visible) continue
      const requiredSkill = model.skillById.get(requirement.id)
      if (!requiredSkill) continue
      ensureRequirements(requiredSkill)
      const current = skillLevel(next, requirement.id)
      if (current < requirement.level) {
        next[requirement.id] = requirement.level
        changed.add(requirement.id)
      }
    }
  }

  ensureRequirements(skill)
  next[id] = skillLevel(next, id) + 1
  changed.add(id)

  const nextTotal = allocatedTotal(next)
  if (nextTotal > model.data.pointLimit) {
    return {
      ok: false,
      levels,
      message: `Not enough points. This would use ${nextTotal} / ${model.data.pointLimit}.`,
    }
  }

  return {
    ok: true,
    levels: cleanupLevels(next),
  }
}

export function refundSkillLevel(model, id, levels) {
  const skill = model.skillById.get(id)
  if (!skill) return { ok: false, levels, message: 'Skill not found.' }

  const currentLevel = skillLevel(levels, id)
  if (currentLevel <= 0) return { ok: false, levels, message: `${skill.name} has no points to remove.` }

  const blockers = blockersForRefund(model, id, levels)
  const requiredLevel = highestRequiredLevel(model, id, levels)
  if (currentLevel - 1 < requiredLevel) {
    return {
      ok: false,
      levels,
      message: `${skill.name} must stay at Lv ${requiredLevel} for ${blockers.join(', ')}.`,
    }
  }

  return {
    ok: true,
    levels: cleanupLevels({ ...levels, [id]: currentLevel - 1 }),
  }
}

export function blockersForRefund(model, id, levels) {
  const names = []
  for (const skill of model.data.skills) {
    if (skillLevel(levels, skill.id) <= 0) continue
    const requirement = skill.tree.requirements.find((entry) => entry.id === id && entry.visible)
    if (requirement && skillLevel(levels, id) <= requirement.level) names.push(skill.name)
  }
  return names
}

export function highestRequiredLevel(model, id, levels) {
  let required = 0
  for (const skill of model.data.skills) {
    if (skillLevel(levels, skill.id) <= 0) continue
    const requirement = skill.tree.requirements.find((entry) => entry.id === id && entry.visible)
    if (requirement) required = Math.max(required, requirement.level)
  }
  return required
}

export function canRefund(model, id, levels) {
  return skillLevel(levels, id) > 0 && skillLevel(levels, id) - 1 >= highestRequiredLevel(model, id, levels)
}

export function cleanupLevels(levels) {
  return Object.fromEntries(Object.entries(levels).filter(([, value]) => value > 0))
}

export function skillLevel(levels, id) {
  return Number(levels[id] ?? 0)
}

export function allocatedTotal(levels) {
  return Object.values(levels).reduce((sum, value) => sum + Number(value), 0)
}
