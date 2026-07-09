import { translateChangeNote, translateSpecLabel, translateSpecValue, translateUi } from '../lib/translations.js'

export function EffectiveSpecTable({ rows, language }) {
  if (!rows.length) return <p className="subtle">{translateUi('No additional timing or range fields were found.', language)}</p>

  return (
    <div className="table-wrap">
      <table className="info-table effective-spec-table">
        <tbody>
          {rows.map((row) => (
            <tr key={row.label}>
              <th scope="row">{translateSpecLabel(row.label, language)}</th>
              <td>
                <span className={row.changed ? 'changed-spec-value' : ''}>
                  {translateSpecValue(row.value, language)}
                </span>
                {row.changeNote ? <small>{translateChangeNote(row.changeNote, language)}</small> : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function LevelScalingTable({ table, level, language }) {
  return (
    <section>
      <h3>{translateUi(table.title, language)}</h3>
      <div className="table-wrap level-scaling-wrap">
        <table className="level-scaling-table">
          <thead>
            <tr>
              <th>{translateUi('Level', language)}</th>
              {table.columns.map((column) => (
                <th key={column.id}>{translateSpecLabel(column.label, language)}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={row.level} className={row.level === level ? 'current-level-row' : ''}>
                <th scope="row">{row.level}</th>
                {table.columns.map((column) => (
                  <td key={column.id}>{translateSpecValue(row.values[column.id] || '-', language)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
