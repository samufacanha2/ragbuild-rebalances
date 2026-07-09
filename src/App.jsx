import { useEffect, useMemo, useState } from 'react'
import { ClassSkillPlanner } from './components/ClassSkillPlanner.jsx'
import { ClassSelectPage } from './components/ClassSelectPage.jsx'
import { classDataSets, defaultClassDataSetId } from './data/classData.js'

function App() {
  const [activeClassId, setActiveClassId] = useState(defaultClassDataSetId)
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

  if (!activeClassId || !activeClassMeta) {
    return <ClassSelectPage dataSets={classDataSets} onSelectClass={setActiveClassId} />
  }

  return (
    <>
      <div className="view-actions">
        <button type="button" onClick={() => setActiveClassId('')}>
          All classes
        </button>
      </div>
      {activeDataSet ? (
        <ClassSkillPlanner key={activeDataSet.id} dataSet={activeDataSet} />
      ) : (
        <main className="app-shell">
          <section className="tree-area">
            <div className="empty-state">{loadError || `Loading ${activeClassMeta.label}...`}</div>
          </section>
        </main>
      )}
    </>
  )
}

export default App
