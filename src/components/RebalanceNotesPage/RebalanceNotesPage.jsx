import { useEffect, useMemo, useState } from 'react'
import './RebalanceNotesPageStyles.css'
import { rebalanceCatalog } from '../../generated/rebalanceCatalog.js'
import { assetUrl } from '../../lib/dom.js'
import { classesForRebalance, rebalanceForClass } from '../../lib/rebalanceCatalog.js'
import { translateRebalanceNote } from '../../lib/rebalanceNoteTranslations.js'
import { classRouteHref } from '../../lib/routes.js'
import { translatedClassName, translatedSkillName, translateUi } from '../../lib/translations.js'
import { LanguageMenu } from '../LanguageMenu'
import { ThemeToggle } from '../ThemeToggle'

export function RebalanceNotesPage({ language, theme, onLanguageChange, onThemeChange, versionId, classId, onVersionChange }) {
  const version = rebalanceCatalog.versions.find((entry) => entry.id === versionId) ?? rebalanceCatalog.versions[1]
  const classes = useMemo(() => classesForRebalance(rebalanceCatalog.classes, version), [version])
  const [activeClassId, setActiveClassId] = useState('')
  const affectedClasses = classes.filter((entry) => entry.skillCount > 0).length

  useEffect(() => {
    const initialClassId = classId || window.location.hash.replace(/^#class-/, '')
    if (!classes.some((entry) => entry.id === initialClassId)) return undefined
    const frame = requestAnimationFrame(() => document.getElementById(`class-${initialClassId}`)?.scrollIntoView())
    return () => cancelAnimationFrame(frame)
  }, [classId, classes])

  useEffect(() => {
    let frame = 0
    const updateActive = () => {
      frame = 0
      const threshold = Math.min(200, window.innerHeight * 0.3)
      const current = classes.filter((entry) => document.getElementById(`class-${entry.id}`)?.getBoundingClientRect().top <= threshold).at(-1)
      setActiveClassId(current?.id ?? classes[0]?.id ?? '')
    }
    const scheduleUpdate = () => { if (!frame) frame = requestAnimationFrame(updateActive) }
    updateActive()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      cancelAnimationFrame(frame)
    }
  }, [classes])

  return (
    <main className="rebalance-page">
      <header className="rebalance-header">
        <div className="rebalance-topline">
          <a className="rebalance-home-link" href={classRouteHref()}>{translateUi('All classes', language)}</a>
        </div>
        <p className="eyebrow">Ragnarok Online</p>
        <h1>{translateUi('Rebalance notes', language)}</h1>
        <p className="rebalance-intro">{translateUi('Browse skill changes by rebalance and class.', language)}</p>
        <p className="rebalance-disclaimer">{translateUi('These are KRO source notes, not a confirmed ROLATAM release schedule or final local patch notes.', language)}</p>
      </header>

      <nav className="rebalance-versions" aria-label={translateUi('Select rebalance', language)}>
        {rebalanceCatalog.versions.map((entry) => (
          <button
            type="button"
            key={entry.id}
            className={entry.id === version.id ? 'is-active' : ''}
            aria-pressed={entry.id === version.id}
            onClick={() => onVersionChange(entry.id)}
          >{translateUi(entry.label, language)}</button>
        ))}
      </nav>

      <section className="rebalance-context" aria-label={translateUi(version.label, language)}>
        <div>
          <span className="eyebrow">{translateUi('Selected update', language)}</span>
          <h2>{translateUi(version.label, language)}</h2>
          <p>{translateUi('Classes with skill changes', language)}: <strong>{affectedClasses}</strong> / {classes.length}</p>
        </div>
        <div className="rebalance-context-meta">
          <span>{translateUi('Max job level', language)}: {version.maxJobLevel}</span>
          <span>{translateUi('Scope', language)}: {translateUi(version.appliesTo, language)}</span>
          {version.sourceUrl ? <a href={version.sourceUrl} target="_blank" rel="noreferrer">{translateUi('Original announcement', language)} ↗</a> : null}
        </div>
      </section>

      <div className="rebalance-class-list">
        {classes.map((entry) => {
          const notes = rebalanceForClass(rebalanceCatalog.classes, entry.id, version.id)
          return (
            <section className="rebalance-class-section" id={`class-${entry.id}`} aria-labelledby={`heading-${entry.id}`} key={entry.id}>
              <div className="rebalance-detail-heading">
                <img src={assetUrl(entry.jobIconUrl)} alt="" width="54" height="72" />
                <div>
                  <span className="eyebrow">{translateUi(version.label, language)}</span>
                  <h2 id={`heading-${entry.id}`}>{translatedClassName(entry.label, language)}</h2>
                  <p>{notes?.skills.length ?? 0} {translateUi('skills changed or added', language)}</p>
                </div>
                <a className="rebalance-planner-link" href={classRouteHref(entry.id, '', version.id)}>{translateUi('Open skill planner', language)} ↗</a>
              </div>
              {notes?.skills.length ? (
                <div className="rebalance-skill-list">
                  {notes.skills.map((skill, index) => (
                    <article className="rebalance-skill" key={`${skill.name}-${index}`}>
                      <div className="rebalance-skill-heading">
                        {skill.groupedSkills ? (
                          <span className="rebalance-skill-icon-list" aria-hidden="true">
                            {skill.groupedSkills.map((member) => <img key={member.skillId} src={assetUrl(member.iconUrl)} alt="" width="24" height="24" />)}
                          </span>
                        ) : skill.iconUrl ? <img src={assetUrl(skill.iconUrl)} alt="" width="42" height="42" /> : <span className="rebalance-skill-placeholder" aria-hidden="true">✦</span>}
                        <h3>{skill.groupedSkills && language === 'pt-BR'
                          ? skill.groupedSkills.map((member) => translatedSkillName({ id: member.skillId, name: member.name }, language)).join(' / ')
                          : skill.skillId ? translatedSkillName({ id: skill.skillId, name: skill.name }, language) : skill.name}</h3>
                        {skill.added ? <span className="rebalance-added">{translateUi('New skill', language)}</span> : null}
                      </div>
                      {skill.notes.length ? <ul>{skill.notes.map((note, noteIndex) => <li key={`${index}-${noteIndex}`}>{translateRebalanceNote(note, language)}</li>)}</ul> : (
                        <p>{translateUi('Added in this rebalance; see the skill planner for its details.', language)}</p>
                      )}
                      {skill.sourceUrl ? <a className="rebalance-skill-source" href={skill.sourceUrl} target="_blank" rel="noreferrer">{translateUi('View source', language)} ↗</a> : null}
                    </article>
                  ))}
                </div>
              ) : (
                <p className="rebalance-no-notes">{translateUi('No skill notes are available for this class in the selected rebalance.', language)}</p>
              )}
            </section>
          )
        })}
      </div>

      <footer className="rebalance-bottom-bar">
        <div className="rebalance-bottom-inner">
          <nav className="rebalance-class-nav" aria-label={translateUi('Jump to class changes', language)}>
            <div className="rebalance-class-strip">
              {classes.map((entry) => (
                <a
                  key={entry.id}
                  className={activeClassId === entry.id ? 'rebalance-class-chip is-active' : 'rebalance-class-chip'}
                  href={`#class-${entry.id}`}
                  aria-current={activeClassId === entry.id ? 'location' : undefined}
                  onClick={() => setActiveClassId(entry.id)}
                >
                  <img src={assetUrl(entry.jobIconUrl)} alt="" width="36" height="48" />
                  <span>{translatedClassName(entry.label, language)}</span>
                </a>
              ))}
            </div>
          </nav>
          <div className="rebalance-settings">
            <ThemeToggle language={language} theme={theme} onThemeChange={onThemeChange} variant="inline" />
            <LanguageMenu language={language} onLanguageChange={onLanguageChange} variant="inline" />
          </div>
        </div>
      </footer>
    </main>
  )
}
