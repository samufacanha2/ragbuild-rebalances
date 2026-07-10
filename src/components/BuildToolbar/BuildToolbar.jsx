import './BuildToolbarStyles.css'
import { translatePointsUsed, translateUi } from '../../lib/translations.js'

export function BuildToolbar({ totalPoints, pointLimit, language, onReset }) {
  return (
    <div className="build-toolbar">
      <strong>{translatePointsUsed(totalPoints, pointLimit, language)}</strong>
      <button type="button" onClick={onReset} disabled={totalPoints === 0}>
        {translateUi('Reset', language)}
      </button>
    </div>
  )
}
