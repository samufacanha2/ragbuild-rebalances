import './EffectiveSpecTableStyles.css'
import { translateChangeNote, translateSpecLabel, translateSpecValue, translateUi } from '../../lib/translations.js'

export function EffectiveSpecTable({ rows, language }) {
  if (!rows.length) return <p className="subtle">{translateUi('No additional timing or range fields were found.', language)}</p>

  return (
    <div className="effective-spec-table-wrap">
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
