import { assetUrl } from '../lib/dom.js'
import { translateUi } from '../lib/translations.js'

export function ClassSelectPage({ dataSets, language, onSelectClass }) {
  return (
    <main className="class-select-page">
      <section className="class-grid" aria-label={translateUi('Classes', language)}>
        {dataSets.map((dataSet) => (
          <button
            className={dataSet.mode === 'tree' ? 'class-card is-tree-ready' : 'class-card'}
            type="button"
            key={dataSet.id}
            onClick={() => onSelectClass(dataSet.id)}
          >
            <ClassMark dataSet={dataSet} />
            <strong>{dataSet.label}</strong>
          </button>
        ))}
      </section>
    </main>
  )
}

function ClassMark({ dataSet }) {
  const jobIconUrl = dataSet.jobIconUrl ?? dataSet.data?.tree?.jobIconUrl

  if (jobIconUrl) {
    return <img className="class-card-icon" src={assetUrl(jobIconUrl)} alt="" width="96" height="128" />
  }

  return <span className="class-card-initials">{initials(dataSet.label)}</span>
}

function initials(label) {
  return label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}
