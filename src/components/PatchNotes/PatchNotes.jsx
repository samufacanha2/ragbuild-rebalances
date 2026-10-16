import './PatchNotesStyles.css'
import { forumUrlForNote } from '../../lib/rebalanceSources.js'
import { translateRebalanceNote } from '../../lib/rebalanceNoteTranslations.js'
import { noteSourceLabel } from '../../lib/sourceLinks.js'
import { patchNotesTitle } from '../../lib/specs.js'
import { translateUi } from '../../lib/translations.js'
import { InitialSkillValues } from '../InitialSkillValues/InitialSkillValues.jsx'

export function PatchNotes({ model, notes, specVersion, language }) {
  return (
    <section>
      <h3>{translateUi(patchNotesTitle(model, specVersion), language)}</h3>
      <div className="timeline">
        {notes.length ? (
          notes.map((entry) => {
            const sourceUrl = forumUrlForNote(entry, model.data.rebalanceVersions)
            return (
              <section className="timeline-entry" key={`${entry.versionId}-${entry.section}`}>
                <div>
                  <strong>{translateUi(entry.versionLabel, language)}</strong>
                  {sourceUrl ? (
                    <a className="timeline-source source-pill" href={sourceUrl} target="_blank" rel="noreferrer">
                      {noteSourceLabel(entry.provenance, language)} ↗
                    </a>
                  ) : null}
                  {entry.section || entry.file ? <span>{[entry.section, entry.file].filter(Boolean).join(' - ')}</span> : null}
                </div>
                {entry.initialSpecs?.length ? <InitialSkillValues rows={entry.initialSpecs} language={language} /> : null}
                {entry.notes.length ? (
                  <ul>
                    {entry.notes.map((note) => <li key={note}>{translateRebalanceNote(note, language)}</li>)}
                  </ul>
                ) : null}
              </section>
            )
          })
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
