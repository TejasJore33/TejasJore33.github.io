import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import { useEffect } from 'react'
import { prefersReducedMotion } from '../lib/motion'

/** Inertia-based smooth scrolling (skipped for reduced-motion users). */
export function useSmoothScroll(enabled = true) {
  useEffect(() => {
    if (!enabled || prefersReducedMotion()) return
    const lenis = new Lenis({ autoRaf: true, lerp: 0.1, anchors: { offset: -88 } })
    return () => lenis.destroy()
  }, [enabled])
}
