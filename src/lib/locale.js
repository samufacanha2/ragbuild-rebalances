const LANGUAGE_STORAGE_KEY = 'ragbuild-rebalances-language'
const LANGUAGE_COOKIE_KEY = 'ragbuild_locale'
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365

export function detectInitialLanguage() {
  return (
    normalizeLanguage(readLocalStorageLanguage(LANGUAGE_STORAGE_KEY)) ??
    normalizeLanguage(readCookieLanguage()) ??
    normalizeLanguage(readLegacyPlannerLanguage()) ??
    normalizeLanguage(document.documentElement.lang) ??
    normalizeLanguage(navigator.languages?.find(Boolean)) ??
    normalizeLanguage(navigator.language) ??
    'en'
  )
}

export function persistLanguage(language) {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  } catch {
    // Ignore storage failures; the selected language still works for this session.
  }

  try {
    document.cookie = `${LANGUAGE_COOKIE_KEY}=${encodeURIComponent(language)}; path=/; max-age=${ONE_YEAR_SECONDS}; SameSite=Lax`
  } catch {
    // Ignore cookie failures for locked-down browser contexts.
  }
}

export function normalizeLanguage(value) {
  if (!value) return null

  const language = String(value).trim().toLowerCase()
  if (language === 'pt-br' || language.startsWith('pt')) return 'pt-BR'
  if (language === 'en' || language.startsWith('en-')) return 'en'
  return null
}

function readLocalStorageLanguage(key) {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

function readCookieLanguage() {
  try {
    const cookies = document.cookie.split(';').map((cookie) => cookie.trim())
    const match = cookies.find((cookie) => cookie.startsWith(`${LANGUAGE_COOKIE_KEY}=`))
    return match ? decodeURIComponent(match.slice(LANGUAGE_COOKIE_KEY.length + 1)) : null
  } catch {
    return null
  }
}

function readLegacyPlannerLanguage() {
  try {
    for (let index = 0; index < window.localStorage.length; index += 1) {
      const key = window.localStorage.key(index)
      if (!key?.startsWith('skill-planner-settings:')) continue

      const settings = JSON.parse(window.localStorage.getItem(key) ?? 'null')
      if (settings?.language) return settings.language
    }
  } catch {
    return null
  }

  return null
}
