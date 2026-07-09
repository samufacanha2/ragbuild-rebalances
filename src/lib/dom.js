export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path}`.replace(/\/{2,}/g, '/')
}

export function debounce(callback, delay) {
  let timer = 0
  return (...args) => {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => callback(...args), delay)
  }
}

export function pathBetween(source, target, boardRect) {
  const a = source.getBoundingClientRect()
  const b = target.getBoundingClientRect()
  const x1 = a.left + a.width / 2 - boardRect.left
  const y1 = a.top + a.height / 2 - boardRect.top
  const x2 = b.left + b.width / 2 - boardRect.left
  const y2 = b.top + b.height / 2 - boardRect.top
  const midY = y1 + (y2 - y1) / 2
  return `M ${x1} ${y1} L ${x1} ${midY} L ${x2} ${midY} L ${x2} ${y2}`
}
