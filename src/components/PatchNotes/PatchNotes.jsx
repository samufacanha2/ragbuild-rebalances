import './PatchNotesStyles.css'
import { patchNotesTitle } from '../../lib/specs.js'
import { translateUi } from '../../lib/translations.js'

export function PatchNotes({ model, notes, specVersion, language }) {
  return (
    <section>
      <h3>{translateUi(patchNotesTitle(model, specVersion), language)}</h3>
      <div className="timeline">
        {notes.length ? (
          notes.map((entry) => (
            <section className="timeline-entry" key={`${entry.versionId}-${entry.section}`}>
              <div>
                <strong>{entry.versionLabel}</strong>
                <span>
                  {entry.section} - {entry.file}
                </span>
              </div>
              <ul>
                {entry.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          ))
        ) : (
          <p className="subtle">
            {translateUi(emptyNotesMessage(specVersion), language)}
          </p>
        )}
      </div>
    </section>
  )
}

function emptyNotesMessage(specVersion) {
  if (specVersion === 'pre') return 'No rebalance notes are applied before the first rebalance.'
  if (specVersion === 'current') return 'No rebalance notes for this skill.'
  return 'This skill is unchanged in the selected rebalance.'
}
