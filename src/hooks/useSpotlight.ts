import { useEffect } from 'react'

/**
 * Sets --mx / --my on whichever `.card` the pointer is over, so CSS can draw
 * a soft glow that follows the cursor. One listener for the whole page.
 */
export function useSpotlight() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.('.card') as HTMLElement | null
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
}
