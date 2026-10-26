import assert from 'node:assert/strict'
import test from 'node:test'
import { classStripScrollEdges, stepClassStrip } from './classStripNavigation.js'

test('class-strip arrows step five chips including their gaps in either direction', () => {
  const calls = []
  const strip = {
    children: [{ offsetLeft: 0, offsetWidth: 154 }, { offsetLeft: 162, offsetWidth: 154 }],
    scrollBy(options) { calls.push(options) },
  }
  stepClassStrip(strip, 1)
  stepClassStrip(strip, -1, 'auto')
  assert.deepEqual(calls, [
    { left: 810, behavior: 'smooth' },
    { left: -810, behavior: 'auto' },
  ])
})

test('class-strip arrows stop at both ends and when every class fits', () => {
  const strip = { scrollLeft: 0, clientWidth: 300, scrollWidth: 700 }
  assert.deepEqual(classStripScrollEdges(strip), { previous: false, next: true })
  strip.scrollLeft = 2 // scroll snapping can rest on the strip's two-pixel padding
  assert.deepEqual(classStripScrollEdges(strip), { previous: false, next: true })
  strip.scrollLeft = 162
  assert.deepEqual(classStripScrollEdges(strip), { previous: true, next: true })
  strip.scrollLeft = 400
  assert.deepEqual(classStripScrollEdges(strip), { previous: true, next: false })
  strip.clientWidth = 700
  strip.scrollLeft = 0
  assert.deepEqual(classStripScrollEdges(strip), { previous: false, next: false })
})
