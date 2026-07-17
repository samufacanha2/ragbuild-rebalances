import { Moon, Sun } from 'lucide-react'
import './ThemeToggleStyles.css'
import { translateUi } from '../../lib/translations.js'

export function ThemeToggle({ language, theme, onThemeChange, variant = 'floating' }) {
  const isDark = theme === 'dark'
  const nextTheme = isDark ? 'light' : 'dark'
  const label = translateUi(isDark ? 'Use light theme' : 'Use dark theme', language)

  return (
    <button
      className={variant === 'inline' ? 'theme-toggle is-inline' : 'theme-toggle'}
      type="button"
      aria-label={label}
      title={label}
      onClick={() => onThemeChange(nextTheme)}
    >
      {isDark ? <Sun size={17} aria-hidden="true" /> : <Moon size={17} aria-hidden="true" />}
      <span>{translateUi(isDark ? 'Light' : 'Dark', language)}</span>
    </button>
  )
}
