import { FolderOpen, RotateCcw, Save, Trash2 } from 'lucide-react'
import './BuildToolbarStyles.css'
import { translatePointsUsed, translateUi } from '../../lib/translations.js'

export function BuildToolbar({
  variant = 'all',
  totalPoints = 0,
  pastPoints = 0,
  pointLimit = 0,
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
  const showPresets = variant !== 'summary'
  const showSummary = variant !== 'presets'
  const usedPoints = totalPoints + pastPoints
  const isOverPointLimit = usedPoints > pointLimit

  return (
    <div className={`build-toolbar is-${variant}`}>
      {showPresets ? (
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
          <button className="toolbar-button" type="button" onClick={onSavePreset}>
            <Save size={16} aria-hidden="true" />
            <span>{translateUi('Save', language)}</span>
          </button>
          <button className="toolbar-button" type="button" onClick={onLoadPreset} disabled={!hasSelectedPreset}>
            <FolderOpen size={16} aria-hidden="true" />
            <span>{translateUi('Load', language)}</span>
          </button>
          <button className="toolbar-button" type="button" onClick={onDeletePreset} disabled={!hasSelectedPreset}>
            <Trash2 size={16} aria-hidden="true" />
            <span>{translateUi('Delete', language)}</span>
          </button>
        </div>
      ) : null}

      {showSummary ? (
        <div className="build-points-controls">
          <strong className={isOverPointLimit ? 'build-points-used is-over-limit' : 'build-points-used'}>
            {translatePointsUsed(totalPoints, pointLimit, language, pastPoints)}
          </strong>
          <button className="toolbar-button" type="button" onClick={onReset} disabled={usedPoints === 0}>
            <RotateCcw size={16} aria-hidden="true" />
            <span>{translateUi('Reset', language)}</span>
          </button>
        </div>
      ) : null}
    </div>
  )
}
