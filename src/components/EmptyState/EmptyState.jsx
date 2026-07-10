import './EmptyStateStyles.css'

export function EmptyState({ eyebrow = 'Skill Details', title = 'Select a skill', children, className = '' }) {
  const classes = ['empty-state', className].filter(Boolean).join(' ')

  return (
    <div className={classes}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      {title ? <h2>{title}</h2> : null}
      {children ?? <p>Click a skill name in the tree to view current values and rebalance notes.</p>}
    </div>
  )
}
