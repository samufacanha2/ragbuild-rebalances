import { ChevronDown, ChevronLeft, ChevronRight, ArrowLeft, Pin } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import './RebalanceNotesPageStyles.css'
import { rebalanceCatalog } from '../../generated/rebalanceCatalog.js'
import { assetUrl } from '../../lib/dom.js'
import { classesForRebalance, rebalanceForClass, rebalanceReleaseStatus } from '../../lib/rebalanceCatalog.js'
import { classStripScrollEdges, stepClassStrip } from '../../lib/classStripNavigation.js'
import { translateRebalanceNote } from '../../lib/rebalanceNoteTranslations.js'
import { noteSourceLabel } from '../../lib/sourceLinks.js'
import { classRouteHref, rebalanceSkillAnchorId } from '../../lib/routes.js'
import { rebalancePinConfigKey } from '../../lib/rebalancePinnedSpecSelection.js'
import { translatedClassName, translatedSkillName, translateUi } from '../../lib/translations.js'
import { LanguageMenu } from '../LanguageMenu'
import { InitialSkillValues } from '../InitialSkillValues/InitialSkillValues.jsx'
import { ThemeToggle } from '../ThemeToggle'
import { RebalancePinnedSkill } from './RebalancePinnedSkill.jsx'

export function RebalanceNotesPage({ language, theme, onLanguageChange, onThemeChange, versionId, classId, onVersionChange }) {
  const version = rebalanceCatalog.versions.find((entry) => entry.id === versionId) ?? rebalanceCatalog.versions[1]
  const classes = useMemo(() => classesForRebalance(rebalanceCatalog.classes, version), [version])
  const [activeClassId, setActiveClassId] = useState('')
  const classStripRef = useRef(null)
  const [scrollEdges, setScrollEdges] = useState({ previous: false, next: false })
  const [pinnedSkills, setPinnedSkills] = useState([])
  const [pinnedHiddenSpecIds, setPinnedHiddenSpecIds] = useState([])
  const [localPinnedHiddenSpecIds, setLocalPinnedHiddenSpecIds] = useState({})
  const activePins = pinnedSkills.filter((pin) => pin.versionId === version.id)
  const affectedClasses = classes.filter((entry) => entry.skillCount > 0).length

  const togglePin = (classId, note, member) => {
    const key = `${classId}:${member.skillId}`
    setPinnedSkills((current) => current.some((pin) => pin.key === key && pin.versionId === version.id)
      ? current.filter((pin) => pin.key !== key || pin.versionId !== version.id)
      : [...current.filter((pin) => pin.versionId === version.id), {
        key, classId, versionId: version.id, skillId: member.skillId,
        fallbackName: member.name, iconUrl: member.iconUrl, notes: note.notes,
      }])
  }

  useEffect(() => {
    const strip = classStripRef.current
    if (!strip) return undefined
    strip.scrollLeft = 0
    const update = () => setScrollEdges(classStripScrollEdges(strip))
    const frame = requestAnimationFrame(update)
    const observer = new ResizeObserver(update)
    observer.observe(strip)
    strip.addEventListener('scroll', update, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      strip.removeEventListener('scroll', update)
    }
  }, [version.id, classes])

  const moveClassStrip = (direction) => {
    const strip = classStripRef.current
    if (!strip) return
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    stepClassStrip(strip, direction, behavior)
  }


  useEffect(() => {
    const hash = window.location.hash.slice(1)
    const initialClassId = classId || (hash.startsWith('class-') ? hash.slice(6) : '')
    const skillTarget = hash.startsWith('skill-') ? document.getElementById(hash) : null
    const target = skillTarget && (!classId || skillTarget.closest('.rebalance-class-section')?.id === `class-${classId}`)
      ? skillTarget
      : classes.some((entry) => entry.id === initialClassId) ? document.getElementById(`class-${initialClassId}`) : null
    if (!target) return undefined
    const frame = requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }))
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
    <>
    <header className="rebalance-top-bar">
      <div className="rebalance-top-inner">
        <a className="rebalance-home-link" href={classRouteHref()}><ArrowLeft size={18} aria-hidden="true" />{translateUi('Go back', language)}</a>
        <label className="rebalance-version-picker">
          <span className="sr-only">{translateUi('Select rebalance', language)}</span>
          <select value={version.id} onChange={(event) => onVersionChange(event.target.value)}>
            {rebalanceCatalog.versions.map((entry) => {
              const status = rebalanceReleaseStatus(rebalanceCatalog.versions, entry.id)
              return <option key={entry.id} value={entry.id}>{translateUi(entry.label, language)}{status ? ` (${translateUi(status, language)})` : ''}</option>
            })}
          </select>
          <ChevronDown size={16} aria-hidden="true" />
        </label>
        <div className="rebalance-settings">
          <ThemeToggle language={language} theme={theme} onThemeChange={onThemeChange} variant="inline" />
          <LanguageMenu language={language} onLanguageChange={onLanguageChange} variant="inline" />
        </div>
      </div>
    </header>
    <main className="rebalance-page">
      <header className="rebalance-header">
        <h1>{translateUi('Rebalance notes', language)}</h1>
        <p className="rebalance-disclaimer">{translateUi('KRO skill-change details are not final ROLATAM patch notes.', language)}</p>
      </header>

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
                    <article className="rebalance-skill" id={!skill.groupedSkills && skill.skillId ? rebalanceSkillAnchorId(entry.id, skill.skillId) : undefined} key={`${skill.name}-${index}`}>
                      {skill.groupedSkills?.map((member) => <span className="rebalance-skill-anchor" id={rebalanceSkillAnchorId(entry.id, member.skillId)} key={member.skillId} aria-hidden="true" />)}
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
                        {!skill.groupedSkills ? <PinButton skill={skill} language={language} pinned={activePins.some((pin) => pin.key === `${entry.id}:${skill.skillId}`)} onClick={() => togglePin(entry.id, skill, skill)} /> : null}
                      </div>
                      {skill.groupedSkills ? (
                        <div className="rebalance-group-pins">
                          {skill.groupedSkills.map((member) => <PinButton key={member.skillId} skill={member} language={language} showName pinned={activePins.some((pin) => pin.key === `${entry.id}:${member.skillId}`)} onClick={() => togglePin(entry.id, skill, member)} />)}
                        </div>
                      ) : null}
                      {skill.initialSpecs?.length ? <InitialSkillValues rows={skill.initialSpecs} language={language} /> : skill.notes.length ? <ul>{skill.notes.map((note, noteIndex) => <li key={`${index}-${noteIndex}`}>{translateRebalanceNote(note, language)}</li>)}</ul> : (
                        <p>{translateUi('Added in this rebalance; see the skill planner for its details.', language)}</p>
                      )}
                      {skill.sourceUrl ? <a className="rebalance-skill-source source-pill" href={skill.sourceUrl} target="_blank" rel="noreferrer">{noteSourceLabel(skill.provenance, language)} ↗</a> : null}
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
          <button className="rebalance-class-arrow" type="button" aria-label={translateUi('Previous classes', language)} disabled={!scrollEdges.previous} onClick={() => moveClassStrip(-1)}><ChevronLeft size={22} aria-hidden="true" /></button>
          <nav className="rebalance-class-nav" aria-label={translateUi('Jump to class changes', language)}>
            <div className="rebalance-class-strip" ref={classStripRef}>
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
          <button className="rebalance-class-arrow" type="button" aria-label={translateUi('Next classes', language)} disabled={!scrollEdges.next} onClick={() => moveClassStrip(1)}><ChevronRight size={22} aria-hidden="true" /></button>
        </div>
      </footer>
    </main>
    {activePins.map((pin, index) => <RebalancePinnedSkill key={rebalancePinConfigKey(pin.versionId, pin.key)} {...pin} language={language} index={index}
      globalHiddenSpecIds={pinnedHiddenSpecIds}
      localHiddenSpecIds={localPinnedHiddenSpecIds[rebalancePinConfigKey(pin.versionId, pin.key)]}
      onGlobalSpecIdsChange={setPinnedHiddenSpecIds}
      onLocalSpecIdsChange={(ids) => setLocalPinnedHiddenSpecIds((current) => ({ ...current, [rebalancePinConfigKey(pin.versionId, pin.key)]: ids }))}
      onClose={() => setPinnedSkills((current) => current.filter((entry) => entry.key !== pin.key || entry.versionId !== pin.versionId))} />)}
    </>
  )
}

function PinButton({ skill, language, pinned, onClick, showName = false }) {
  const name = translatedSkillName({ id: skill.skillId, name: skill.name }, language)
  return (
    <button
      className="rebalance-pin-button"
      type="button"
      aria-label={`${translateUi(pinned ? 'Unpin' : 'Pin', language)} ${name}`}
      aria-pressed={pinned}
      onClick={onClick}
    >
      <Pin size={15} aria-hidden="true" />
      <span>{showName ? name : translateUi(pinned ? 'Pinned' : 'Pin', language)}</span>
    </button>
  )
}
