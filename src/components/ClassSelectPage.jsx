import { useMemo, useState } from 'react'
import { assetUrl } from '../lib/dom.js'
import { translateUi } from '../lib/translations.js'

export function ClassSelectPage({ dataSets, language, onSelectClass }) {
  const [query, setQuery] = useState('')
  const normalizedQuery = normalizeSearchText(query)
  const filteredDataSets = useMemo(
    () => dataSets.filter((dataSet) => normalizeSearchText(dataSet.label).includes(normalizedQuery)),
    [dataSets, normalizedQuery],
  )

  return (
    <main className="class-select-page">
      <header className="class-select-header">
        <h1>{translateUi('Classes', language)}</h1>
        <label className="class-search">
          <span className="sr-only">{translateUi('Search classes', language)}</span>
          <input
            type="search"
            value={query}
            placeholder={translateUi('Search classes', language)}
            onChange={(event) => setQuery(event.target.value)}
          />
          <span className="class-search-count" aria-live="polite">
            {filteredDataSets.length} / {dataSets.length}
          </span>
        </label>
      </header>

      <section className="class-grid" aria-label={translateUi('Classes', language)}>
        {filteredDataSets.length ? (
          filteredDataSets.map((dataSet) => (
            <button
              className={dataSet.mode === 'tree' ? 'class-card is-tree-ready' : 'class-card'}
              type="button"
              key={dataSet.id}
              onClick={() => onSelectClass(dataSet.id)}
            >
              <ClassMark dataSet={dataSet} />
              <strong>{dataSet.label}</strong>
            </button>
          ))
        ) : (
          <p className="empty-state class-search-empty">{translateUi('No classes match your search.', language)}</p>
        )}
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

function normalizeSearchText(value) {
  return String(value ?? '').trim().toLowerCase()
}
