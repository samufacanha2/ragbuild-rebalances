export function BuildToolbar({ totalPoints, pointLimit, onReset }) {
  return (
    <div className="build-toolbar">
      <strong>{totalPoints} / {pointLimit} points used</strong>
      <button type="button" onClick={onReset} disabled={totalPoints === 0}>
        Reset
      </button>
    </div>
  )
}
