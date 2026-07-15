import './BuildToolbarStyles.css'
import { translatePointsUsed, translateUi } from '../../lib/translations.js'

export function BuildToolbar({
  totalPoints,
  pointLimit,
  language,
  onReset,
  presets = [],
  selectedPresetId = '',
  presetName = '',
  onPresetNameChange,
  onSelectedPresetChange,
  onSavePreset,
  onLoadPreset,
  onDeletePreset,
}) {
  const hasSelectedPreset = Boolean(selectedPresetId)

  return (
    <div className="build-toolbar">
      <div className="build-toolbar-summary">
        <strong>{translatePointsUsed(totalPoints, pointLimit, language)}</strong>
        <button type="button" onClick={onReset} disabled={totalPoints === 0}>
          {translateUi('Reset', language)}
        </button>
      </div>

      <div className="build-preset-controls" aria-label={translateUi('Build presets', language)}>
        <select
          value={selectedPresetId}
          aria-label={translateUi('Saved presets', language)}
          onChange={(event) => onSelectedPresetChange(event.target.value)}
        >
          <option value="">{translateUi('New preset', language)}</option>
          {presets.map((preset) => (
            <option key={preset.id} value={preset.id}>
              {preset.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={presetName}
          maxLength="80"
          placeholder={translateUi('Preset name', language)}
          aria-label={translateUi('Preset name', language)}
          onChange={(event) => onPresetNameChange(event.target.value)}
        />
        <button type="button" onClick={onSavePreset}>{translateUi('Save', language)}</button>
        <button type="button" onClick={onLoadPreset} disabled={!hasSelectedPreset}>{translateUi('Load', language)}</button>
        <button type="button" onClick={onDeletePreset} disabled={!hasSelectedPreset}>{translateUi('Delete', language)}</button>
      </div>
    </div>
  )
}
