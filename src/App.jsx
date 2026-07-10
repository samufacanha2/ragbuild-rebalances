import { Outlet, useNavigate, useParams, useSearch } from '@tanstack/react-router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { ClassSkillPlanner } from './components/ClassSkillPlanner'
import { ClassSelectPage } from './components/ClassSelectPage'
import { EmptyState } from './components/EmptyState'
import { LanguageMenu } from './components/LanguageMenu'
import { classDataSets, defaultClassDataSetId } from './data/classData.js'
import { detectInitialLanguage, persistLanguage } from './lib/locale.js'
import { translateUi } from './lib/translations.js'

const LanguageContext = createContext(null)

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
      <LanguageMenu language={language} onLanguageChange={setLanguage} />
    </LanguageContext.Provider>
  )
}

export function HomeRoutePage() {
  const navigate = useNavigate()
  const { language } = useLanguage()

  const selectClass = (classId) => {
    navigate({
      to: '/$classId',
      params: { classId },
      search: {},
    })
  }

  if (defaultClassDataSetId) return <ClassRouteContent classId={defaultClassDataSetId} tabId="" />

  return <ClassSelectPage dataSets={classDataSets} language={language} onSelectClass={selectClass} />
}

export function ClassRoutePage() {
  const params = useParams({ strict: false })
  const search = useSearch({ strict: false })

  return <ClassRouteContent classId={params.classId} tabId={search.tab ?? ''} />
}

function ClassRouteContent({ classId, tabId }) {
  const navigate = useNavigate()
  const { language } = useLanguage()
  const activeClassId = classId || defaultClassDataSetId
  const activeClassMeta = useMemo(
    () => (activeClassId ? classDataSets.find((dataSet) => dataSet.id === activeClassId) : null),
    [activeClassId],
  )
  const [activeDataSet, setActiveDataSet] = useState(null)
  const [loadError, setLoadError] = useState('')

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
    return <ClassSelectPage dataSets={classDataSets} language={language} onSelectClass={selectClass} />
  }

  return (
    <>
      <div className="view-actions">
        <button type="button" onClick={selectHome}>
          {translateUi('All classes', language)}
        </button>
      </div>
      {activeDataSet ? (
        <ClassSkillPlanner
          key={activeDataSet.id}
          dataSet={activeDataSet}
          language={language}
          routeTabId={tabId}
          onActiveTabChange={selectTab}
        />
      ) : (
        <main className="app-shell">
          <section className="tree-area">
            <EmptyState eyebrow="" title="">
              <p>{loadError || `${translateUi('Loading', language)} ${activeClassMeta.label}...`}</p>
            </EmptyState>
          </section>
        </main>
      )}
    </>
  )
}

function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside RootRouteLayout.')
  return context
}
