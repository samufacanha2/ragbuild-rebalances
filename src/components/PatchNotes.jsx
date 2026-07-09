import { patchNotesTitle } from '../lib/specs.js'

export function PatchNotes({ model, notes, specVersion }) {
  return (
    <section>
      <h3>{patchNotesTitle(model, specVersion)}</h3>
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
            {specVersion === 'pre'
              ? 'No rebalance notes are applied before the first rebalance.'
              : specVersion === 'current'
                ? 'No rebalance notes for this skill.'
                : 'This skill is unchanged in the selected rebalance.'}
          </p>
        )}
      </div>
    </section>
  )
}
