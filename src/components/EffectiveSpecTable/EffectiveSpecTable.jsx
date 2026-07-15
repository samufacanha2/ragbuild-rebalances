import './EffectiveSpecTableStyles.css'
import { translateChangeNote, translateSpecLabel, translateSpecValue, translateUi } from '../../lib/translations.js'

export function EffectiveSpecTable({ rows, language }) {
  if (!rows.length) return <p className="subtle">{translateUi('No additional timing or range fields were found.', language)}</p>

  return (
    <div className="effective-spec-table-wrap">
      <table className="info-table effective-spec-table">
        <tbody>
          {groupSpecRows(rows).map((group, index) => (
            <tr key={`${group.label}-${index}`}>
              <th scope="row">{translateSpecLabel(group.label, language)}</th>
              <td>
                {group.items.length > 1 ? (
                  <div className="spec-value-card-rows">
                    {group.items.map((row, itemIndex) => (
                      <SpecValue key={`${row.value}-${itemIndex}`} row={row} language={language} />
                    ))}
                  </div>
                ) : (
                  <SpecValue row={group.items[0]} language={language} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SpecValue({ row, language }) {
  return (
    <div className="spec-value-card-row">
      <span className={row.changed ? 'changed-spec-value' : ''}>
        {translateSpecValue(row.value, language)}
      </span>
      {row.changeNote ? <small>{translateChangeNote(row.changeNote, language)}</small> : null}
    </div>
  )
}

function groupSpecRows(rows) {
  const groups = []

  for (const row of rows) {
    const lastGroup = groups.at(-1)
    if (lastGroup?.label === row.label) {
      lastGroup.items.push(row)
    } else {
      groups.push({ label: row.label, items: [row] })
    }
  }

  return groups
}