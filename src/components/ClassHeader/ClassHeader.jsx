import { useCallback, useEffect, useRef, useState } from 'react'
import './ClassHeaderStyles.css'
import { assetUrl } from '../../lib/dom.js'
import { translateUi } from '../../lib/translations.js'

export function ClassHeader({ model, specVersion, language, onSpecVersionChange, onBack }) {
  const [showVersionTour, setShowVersionTour] = useState(() => {
    try {
      return window.localStorage.getItem(model.versionTourStorageKey) !== 'true'
    } catch {
      return true
    }
  })
  const controlsRef = useRef(null)

  const completeVersionTour = useCallback(() => {
    setShowVersionTour(false)
    try {
      window.localStorage.setItem(model.versionTourStorageKey, 'true')
    } catch {
      // Ignore storage failures; the tour can still close for this session.
    }
  }, [model.versionTourStorageKey])

  useEffect(() => {
    if (!showVersionTour) return undefined

    const handlePointerDown = (event) => {
      if (!controlsRef.current?.contains(event.target)) completeVersionTour()
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [completeVersionTour, showVersionTour])

  return (
    <header className={showVersionTour ? 'topbar has-version-tour' : 'topbar'}>
      {showVersionTour ? <button className="tour-backdrop" type="button" aria-label="Close tour" onClick={completeVersionTour} /> : null}
      <div className="identity">
        {onBack ? (
          <button
            className="class-back-button"
            type="button"
            aria-label={translateUi('All classes', language)}
            title={translateUi('All classes', language)}
            onClick={onBack}
          >
            <span aria-hidden="true">&larr;</span>
          </button>
        ) : null}
        <img className="job-icon" src={assetUrl(model.data.tree.jobIconUrl)} alt="" width="66" height="92" />
        <div>
          <h1>{model.data.className}</h1>
        </div>
      </div>
      <div className="controls" ref={controlsRef} aria-label="Skill spec version">
        <span className="control-field">
          <label htmlFor="specVersion">{translateUi('Skill Specs', language)}</label>
          <select
            id="specVersion"
            value={specVersion}
            onPointerDown={completeVersionTour}
            onChange={(event) => onSpecVersionChange(event.target.value)}
          >
            <option value="pre">{translateUi('Pre-rebalances', language)}</option>
            {model.data.rebalanceVersions.map((version) => (
              <option key={version.id} value={version.id}>
                {version.label}
              </option>
            ))}
            <option value="current">{translateUi('Current specs', language)}</option>
          </select>
        </span>
        {showVersionTour ? (
          <div className="version-tour" role="dialog" aria-label="Skill version tour">
            <button type="button" aria-label="Close tour" onClick={completeVersionTour}>
              x
            </button>
            <strong>{translateUi('Compare balance versions here.', language)}</strong>
            <p>{translateUi('Use this dropdown to switch between pre-rebalance, each rebalance, and current specs.', language)}</p>
          </div>
        ) : null}
      </div>
    </header>
  )
}
