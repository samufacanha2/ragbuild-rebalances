import { languageOptions, translateUi } from '../lib/translations.js'

export function LanguageMenu({ language, onLanguageChange }) {
  return (
    <div className="locale-menu">
      <label className="sr-only" htmlFor="floating-language">
        {translateUi('Language', language)}
      </label>
      <select
        id="floating-language"
        value={language}
        aria-label={translateUi('Language', language)}
        onChange={(event) => onLanguageChange(event.target.value)}
      >
        {languageOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
