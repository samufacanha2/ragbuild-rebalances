import { useEffect, useMemo, useState } from 'react'
import { ClassSkillPlanner } from './components/ClassSkillPlanner.jsx'
import { ClassSelectPage } from './components/ClassSelectPage.jsx'
import { LanguageMenu } from './components/LanguageMenu.jsx'
import { classDataSets, defaultClassDataSetId } from './data/classData.js'
import { detectInitialLanguage, persistLanguage } from './lib/locale.js'
import { classRouteHref, currentRoute } from './lib/routes.js'
import { translateUi } from './lib/translations.js'

function App() {
  const [route, setRoute] = useState(currentRoute)
  const [language, setLanguage] = useState(detectInitialLanguage)
  const activeClassId = route.classId || defaultClassDataSetId
  const activeClassMeta = useMemo(
    () => (activeClassId ? classDataSets.find((dataSet) => dataSet.id === activeClassId) : null),
    [activeClassId],
  )
  const [activeDataSet, setActiveDataSet] = useState(null)
  const [loadError, setLoadError] = useState('')

  useEffect(() => {
    const handlePopState = () => setRoute(currentRoute())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    persistLanguage(language)
  }, [language])

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

  const navigateToClass = (classId, tabId = '', options = {}) => {
    const href = classRouteHref(classId, tabId)
    const currentHref = `${window.location.pathname}${window.location.search}`
    const method = options.replace ? 'replaceState' : 'pushState'

    if (href !== currentHref) window.history[method](null, '', href)
    setRoute({ classId, tabId })
  }

  const selectClass = (classId) => navigateToClass(classId)
  const selectHome = () => navigateToClass('', '', { replace: false })
  const selectTab = (tabId, options) => {
    if (activeClassId) navigateToClass(activeClassId, tabId, options)
  }

  if (!activeClassId || !activeClassMeta) {
    return (
      <>
        <ClassSelectPage dataSets={classDataSets} language={language} onSelectClass={selectClass} />
        <LanguageMenu language={language} onLanguageChange={setLanguage} />
      </>
    )
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
          routeTabId={route.tabId}
          onActiveTabChange={selectTab}
        />
      ) : (
        <main className="app-shell">
          <section className="tree-area">
            <div className="empty-state">
              {loadError || `${translateUi('Loading', language)} ${activeClassMeta.label}...`}
            </div>
          </section>
        </main>
      )}
      <LanguageMenu language={language} onLanguageChange={setLanguage} />
    </>
  )
}

export default App
