const BASE_PATH = normalizeBasePath(import.meta.env.BASE_URL)

export function currentRoute() {
  return routeFromLocation(window.location)
}

export function classRouteHref(classId = '', tabId = '') {
  const path = classId ? `${BASE_PATH}${encodeURIComponent(classId)}` : BASE_PATH
  const params = new URLSearchParams()
  if (tabId) params.set('tab', tabId)

  const search = params.toString()
  return search ? `${path}?${search}` : path
}

export function routeFromLocation(location) {
  const pathname = stripBasePath(location.pathname)
  const [classId = ''] = pathname
    .split('/')
    .filter(Boolean)
    .map((segment) => decodeURIComponent(segment))

  return {
    classId,
    tabId: new URLSearchParams(location.search).get('tab') ?? '',
  }
}

function normalizeBasePath(basePath) {
  if (!basePath || basePath === './') return '/'
  return basePath.endsWith('/') ? basePath : `${basePath}/`
}

function stripBasePath(pathname) {
  if (BASE_PATH === '/') return pathname

  const trimmedBase = BASE_PATH.slice(0, -1)
  if (pathname === trimmedBase) return '/'
  if (pathname.startsWith(BASE_PATH)) return pathname.slice(trimmedBase.length)
  return pathname
}
