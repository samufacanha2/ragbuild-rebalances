import { useMemo, useState } from 'react'
import './ClassSelectPageStyles.css'
import { assetUrl } from '../../lib/dom.js'
import { classRouteHref } from '../../lib/routes.js'
import { translateUi } from '../../lib/translations.js'
import { EmptyState } from '../EmptyState'

export function ClassSelectPage({ dataSets, language, onSelectClass }) {
  const [query, setQuery] = useState('')
  const normalizedQuery = normalizeSearchText(query)
  const filteredDataSets = useMemo(
    () => dataSets.filter((dataSet) => normalizeSearchText(dataSet.label).includes(normalizedQuery)),
    [dataSets, normalizedQuery],
  )
  const openClass = (event, classId) => {
    if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

    event.preventDefault()
    onSelectClass(classId)
  }

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
            <a
              className={dataSet.mode === 'tree' ? 'class-card is-tree-ready' : 'class-card'}
              href={classRouteHref(dataSet.id)}
              key={dataSet.id}
              onClick={(event) => openClass(event, dataSet.id)}
            >
              <ClassMark dataSet={dataSet} />
              <strong>{dataSet.label}</strong>
            </a>
          ))
        ) : (
          <EmptyState className="class-search-empty" eyebrow="" title="">
            <p>{translateUi('No classes match your search.', language)}</p>
          </EmptyState>
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
