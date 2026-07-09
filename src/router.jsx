import { createRootRoute, createRoute, createRouter } from '@tanstack/react-router'
import { ClassRoutePage, HomeRoutePage, RootRouteLayout } from './App.jsx'

const rootRoute = createRootRoute({
  component: RootRouteLayout,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomeRoutePage,
})

const classRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/$classId',
  validateSearch: (search) => ({
    tab: typeof search.tab === 'string' ? search.tab : '',
  }),
  component: ClassRoutePage,
})

const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: HomeRoutePage,
})

const routeTree = rootRoute.addChildren([indexRoute, classRoute, notFoundRoute])

export const router = createRouter({
  routeTree,
  basepath: normalizeRouterBasePath(import.meta.env.BASE_URL),
})

function normalizeRouterBasePath(basePath) {
  if (!basePath || basePath === './' || basePath === '/') return '/'
  return basePath.endsWith('/') ? basePath.slice(0, -1) : basePath
}
