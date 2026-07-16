import { Outlet, useNavigate, useParams, useSearch } from '@tanstack/react-router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ClassSkillPlanner } from './components/ClassSkillPlanner'
import { ClassSelectPage } from './components/ClassSelectPage'
import { EmptyState } from './components/EmptyState'
import { LanguageMenu } from './components/LanguageMenu'
import { classDataSets, defaultClassDataSetId } from './data/classData.js'
import { assetUrl } from './lib/dom.js'
import { jobIconUrlForLabelAndPath } from './lib/jobIcons.js'
import { detectInitialLanguage, persistLanguage } from './lib/locale.js'
import { translateUi } from './lib/translations.js'

const LanguageContext = createContext(null)
const APP_TITLE = 'RO Skills'
const APP_FULL_TITLE = 'RO Skills - Ragnarok Online Skill Planner & Rebalance Notes'
const APP_DESCRIPTION =
  'RO Skills is a Ragnarok Online skill tree planner for checking prerequisites, allocating class points, and comparing ROLATAM rebalance notes.'
const SITE_URL = normalizeSiteUrl(import.meta.env.VITE_SITE_URL ?? 'https://roskills.cc/')
const DEFAULT_FAVICON_PATH = 'Bt_skill.png'

export function RootRouteLayout() {
  const [language, setLanguage] = useState(detectInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    persistLanguage(language)
  }, [language])

  const contextValue = useMemo(() => ({ language, setLanguage }), [language])

  return (
    <LanguageContext.Provider value={contextValue}>
      <Outlet />
    </LanguageContext.Provider>
  )
}

export function HomeRoutePage() {
  const navigate = useNavigate()
  const { language, setLanguage } = useLanguage()

  const selectClass = (classId) => {
    navigate({
      to: '/$classId',
      params: { classId },
      search: {},
    })
  }

  if (defaultClassDataSetId) return <ClassRouteContent classId={defaultClassDataSetId} tabId="" />

  return (
    <ClassSelectRouteContent
      dataSets={classDataSets}
      language={language}
      onLanguageChange={setLanguage}
      onSelectClass={selectClass}
    />
  )
}

export function ClassRoutePage() {
  const params = useParams({ strict: false })
  const search = useSearch({ strict: false })

  return <ClassRouteContent classId={params.classId} tabId={search.tab ?? ''} />
}

function ClassRouteContent({ classId, tabId }) {
  const navigate = useNavigate()
  const { language, setLanguage } = useLanguage()
  const activeClassId = classId || defaultClassDataSetId
  const activeClassMeta = useMemo(
    () => (activeClassId ? classDataSets.find((dataSet) => dataSet.id === activeClassId) : null),
    [activeClassId],
  )
  const [activeDataSet, setActiveDataSet] = useState(null)
  const [loadError, setLoadError] = useState('')
  const faviconPath = firstTabFaviconPath(activeDataSet, activeClassMeta)
  const pageTitle = classPageTitle(activeDataSet, activeClassMeta)
  const pageDescription = classPageDescription(activeDataSet, activeClassMeta)
  const canonicalUrl = canonicalUrlForPath(activeClassId || '')

  usePageFavicon(faviconPath)
  usePageTitle(pageTitle)
  usePageDescription(pageDescription)
  useCanonicalUrl(canonicalUrl)

  useEffect(() => {
    if (!activeClassId || !activeClassMeta) {
      setActiveDataSet(null)
      setLoadError('')
      return undefined
    }

    let cancelled = false
    setActiveDataSet(null)
    setLoadError('')
    activeClassMeta
      .load()
      .then((data) => {
        if (!cancelled) setActiveDataSet({ ...activeClassMeta, data })
      })
      .catch((error) => {
        if (!cancelled) setLoadError(error instanceof Error ? error.message : 'Unable to load class data.')
      })

    return () => {
      cancelled = true
    }
  }, [activeClassId, activeClassMeta])

  const selectClass = (nextClassId) => {
    navigate({
      to: '/$classId',
      params: { classId: nextClassId },
      search: {},
    })
  }

  const selectHome = () => {
    navigate({ to: '/', search: {} })
  }

  const selectTab = (nextTabId, options = {}) => {
    if (!activeClassId) return

    navigate({
      to: '/$classId',
      params: { classId: activeClassId },
      search: nextTabId ? { tab: nextTabId } : {},
      replace: Boolean(options.replace),
    })
  }

  if (!activeClassId || !activeClassMeta) {
    return (
      <ClassSelectRouteContent
        dataSets={classDataSets}
        language={language}
        onLanguageChange={setLanguage}
        onSelectClass={selectClass}
      />
    )
  }

  return activeDataSet ? (
    <ClassSkillPlanner
      key={activeDataSet.id}
      dataSet={activeDataSet}
      language={language}
      routeTabId={tabId}
      onActiveTabChange={selectTab}
      onBack={selectHome}
      onLanguageChange={setLanguage}
    />
  ) : (
    <main className="app-shell">
      <section className="tree-area">
        <EmptyState eyebrow="" title="">
          <p>{loadError || `${translateUi('Loading', language)} ${activeClassMeta.label}...`}</p>
        </EmptyState>
      </section>
    </main>
  )
}

function ClassSelectRouteContent({ dataSets, language, onLanguageChange, onSelectClass }) {
  usePageFavicon(DEFAULT_FAVICON_PATH)
  usePageTitle(APP_FULL_TITLE)
  usePageDescription(APP_DESCRIPTION)
  useCanonicalUrl(canonicalUrlForPath(''))

  return (
    <>
      <ClassSelectPage dataSets={dataSets} language={language} onSelectClass={onSelectClass} />
      <LanguageMenu language={language} onLanguageChange={onLanguageChange} />
    </>
  )
}

function classPageTitle(dataSet, classMeta) {
  const className = dataSet?.data?.className ?? classMeta?.label

  return className ? `${className} Skill Tree | ${APP_TITLE}` : APP_FULL_TITLE
}

function classPageDescription(dataSet, classMeta) {
  const className = dataSet?.data?.className ?? classMeta?.label

  return className
    ? `${className} Ragnarok Online skill tree planner with prerequisites, point allocation, ROLATAM defaults, and rebalance notes.`
    : APP_DESCRIPTION
}

function firstTabFaviconPath(dataSet, classMeta) {
  if (!dataSet) return classMetaFaviconPath(classMeta)

  const firstTab = dataSet.data.skillTabs?.[0] ?? {
    id: 'current',
    label: dataSet.data.className,
    jobIconUrl: dataSet.data.tree.jobIconUrl,
  }
  const source = firstTab.id === 'current'
    ? (dataSet.jobIconUrl ?? dataSet.data.tree.jobIconUrl ?? firstTab.jobIconUrl)
    : firstTab.jobIconUrl

  return jobIconUrlForLabelAndPath(firstTab.label, source) || DEFAULT_FAVICON_PATH
}

function classMetaFaviconPath(classMeta) {
  if (!classMeta) return DEFAULT_FAVICON_PATH

  return jobIconUrlForLabelAndPath(classMeta.label, classMeta.jobIconUrl) || DEFAULT_FAVICON_PATH
}

function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside RootRouteLayout.')
  return context
}

function usePageFavicon(path) {
  useEffect(() => {
    updateFavicon(path)
  }, [path])
}

function usePageTitle(title) {
  useEffect(() => {
    document.title = title || APP_FULL_TITLE
  }, [title])
}

function usePageDescription(description) {
  useEffect(() => {
    updateMetaTag('description', description || APP_DESCRIPTION)
  }, [description])
}

function useCanonicalUrl(url) {
  useEffect(() => {
    const link = document.querySelector('link[rel="canonical"]') ?? createCanonicalLink()
    link.href = url || canonicalUrlForPath('')
  }, [url])
}

function canonicalUrlForPath(path) {
  return new URL(String(path ?? '').replace(/^\/+/, ''), SITE_URL).href
}

function normalizeSiteUrl(url) {
  const value = String(url || 'https://roskills.cc/').trim()

  return value.endsWith('/') ? value : `${value}/`
}

function updateMetaTag(name, content) {
  const meta = document.querySelector(`meta[name="${name}"]`) ?? createMetaTag(name)
  meta.content = content
}

function createMetaTag(name) {
  const meta = document.createElement('meta')
  meta.name = name
  document.head.append(meta)
  return meta
}

function createCanonicalLink() {
  const link = document.createElement('link')
  link.rel = 'canonical'
  document.head.append(link)
  return link
}

function updateFavicon(path) {
  const href = assetUrl(path || DEFAULT_FAVICON_PATH)
  const link = document.querySelector('link[rel="icon"]') ?? createFaviconLink()

  link.type = href.toLowerCase().endsWith('.svg') ? 'image/svg+xml' : 'image/png'
  link.href = href
}

function createFaviconLink() {
  const link = document.createElement('link')
  link.rel = 'icon'
  document.head.append(link)
  return link
}
