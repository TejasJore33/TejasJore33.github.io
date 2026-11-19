import { motion, useMotionValue, useSpring } from 'motion/react'
import { useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'
import { isFinePointer, prefersReducedMotion } from '../lib/motion'

type Props = { children: ReactNode; strength?: number; className?: string }

/** Pulls its child toward the cursor while hovered. */
export function Magnetic({ children, strength = 0.35, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 15, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 15, mass: 0.4 })
  const active = useRef(isFinePointer() && !prefersReducedMotion())

  const onMove = (e: ReactPointerEvent) => {
    if (!active.current || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * strength)
    y.set((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-flex ${className}`}
    >
      {children}
    </motion.span>
  )
}
