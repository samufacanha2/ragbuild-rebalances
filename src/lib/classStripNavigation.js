const CARDS_PER_STEP = 5

export function classStripScrollEdges(strip) {
  const limit = Math.max(0, strip.scrollWidth - strip.clientWidth)
  return {
    previous: strip.scrollLeft > 3,
    next: strip.scrollLeft < limit - 3,
  }
}

export function stepClassStrip(strip, direction, behavior = 'smooth') {
  const [first, second] = strip.children
  if (!first) return
  const distance = second ? second.offsetLeft - first.offsetLeft : first.offsetWidth
  strip.scrollBy({ left: direction * distance * CARDS_PER_STEP, behavior })
}
