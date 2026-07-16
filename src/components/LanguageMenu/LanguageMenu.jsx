import { useCallback, useEffect, useRef, useState } from 'react'
import './LanguageMenuStyles.css'
import { assetUrl } from '../../lib/dom.js'
import { languageOptions, translateUi } from '../../lib/translations.js'

const FLAG_BY_LANGUAGE = {
  en: { alt: 'United States flag', path: 'assets/flags/us.svg' },
  'pt-BR': { alt: 'Brazil flag', path: 'assets/flags/br.svg' },
}
const DRAG_THRESHOLD = 4
const VIEWPORT_MARGIN = 8

export function LanguageMenu({ language, onLanguageChange, variant = 'floating' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState(null)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const dragRef = useRef(null)
  const suppressClickRef = useRef(false)
  const activeOption = languageOptions.find((option) => option.id === language) ?? languageOptions[0]
  const activeFlag = FLAG_BY_LANGUAGE[language] ?? FLAG_BY_LANGUAGE.en
  const isInline = variant === 'inline'
  const className = [
    'locale-menu',
    isInline ? 'is-inline' : '',
    !isInline && position ? 'is-positioned' : '',
    !isInline && position?.x < 150 ? 'is-near-left' : '',
    !isInline && position?.y < 150 ? 'is-near-top' : '',
  ].filter(Boolean).join(' ')

  useEffect(() => {
    if (!isOpen) return undefined

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) setIsOpen(false)
    }
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const startDrag = useCallback((event) => {
    if (event.button !== 0) return

    const bounds = event.currentTarget.getBoundingClientRect()
    event.currentTarget.setPointerCapture(event.pointerId)
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: bounds.left,
      originY: bounds.top,
      width: bounds.width,
      height: bounds.height,
      dragged: false,
    }
  }, [])

  const moveDrag = useCallback((event) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    const deltaX = event.clientX - drag.startX
    const deltaY = event.clientY - drag.startY
    const hasDragged = Math.abs(deltaX) > DRAG_THRESHOLD || Math.abs(deltaY) > DRAG_THRESHOLD
    if (!hasDragged && !drag.dragged) return

    drag.dragged = true
    setIsOpen(false)
    setPosition({
      x: clamp(drag.originX + deltaX, VIEWPORT_MARGIN, window.innerWidth - drag.width - VIEWPORT_MARGIN),
      y: clamp(drag.originY + deltaY, VIEWPORT_MARGIN, window.innerHeight - drag.height - VIEWPORT_MARGIN),
    })
  }, [])

  const stopDrag = useCallback((event) => {
    const drag = dragRef.current
    if (!drag || drag.pointerId !== event.pointerId) return

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    suppressClickRef.current = drag.dragged
    dragRef.current = null
  }, [])

  const toggleMenu = useCallback((event) => {
    if (suppressClickRef.current) {
      suppressClickRef.current = false
      event.preventDefault()
      return
    }

    setIsOpen((current) => !current)
  }, [])

  const selectLanguage = useCallback(
    (nextLanguage) => {
      onLanguageChange(nextLanguage)
      setIsOpen(false)
    },
    [onLanguageChange],
  )

  return (
    <div
      className={className}
      ref={menuRef}
      style={!isInline && position ? { left: position.x, top: position.y } : undefined}
    >
      <button
        className="locale-toggle"
        type="button"
        aria-label={`${translateUi('Language', language)}: ${activeOption.label}`}
        aria-expanded={isOpen}
        aria-controls="floating-language-selector"
        title={translateUi('Language', language)}
        ref={buttonRef}
        onClick={toggleMenu}
        onPointerDown={isInline ? undefined : startDrag}
        onPointerMove={isInline ? undefined : moveDrag}
        onPointerUp={isInline ? undefined : stopDrag}
        onPointerCancel={isInline ? undefined : stopDrag}
      >
        <LanguageFlag flag={activeFlag} />
        <span className="locale-toggle-label">{activeOption.label}</span>
      </button>

      {isOpen ? (
        <div className="locale-popover" id="floating-language-selector" role="menu" aria-label={translateUi('Language', language)}>
          {languageOptions.map((option) => (
            <button
              key={option.id}
              className={option.id === language ? 'locale-option is-active' : 'locale-option'}
              type="button"
              role="menuitemradio"
              aria-checked={option.id === language}
              onClick={() => selectLanguage(option.id)}
            >
              <LanguageFlag flag={FLAG_BY_LANGUAGE[option.id] ?? FLAG_BY_LANGUAGE.en} />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function LanguageFlag({ flag }) {
  return (
    <img
      className="locale-flag"
      src={assetUrl(flag.path)}
      alt={flag.alt}
      width="24"
      height="16"
      draggable="false"
    />
  )
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
