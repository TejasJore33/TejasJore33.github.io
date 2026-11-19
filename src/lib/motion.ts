import { createContext, useContext } from 'react'

/** Shared easing curve used across the site ("expo out"). */
export const EASE = [0.22, 1, 0.36, 1] as const

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const isFinePointer = () =>
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

/** True once the intro preloader has finished (hero animations wait for it). */
export const IntroContext = createContext(true)
export const useIntroDone = () => useContext(IntroContext)
