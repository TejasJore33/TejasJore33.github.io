import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { useRef, type PointerEvent as ReactPointerEvent, type ReactNode } from 'react'
import { isFinePointer, prefersReducedMotion } from '../lib/motion'

type Props = { children: ReactNode; className?: string; max?: number }

/** 3D tilt toward the cursor, with a soft spring back. */
export function Tilt({ children, className = '', max = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 180, damping: 18 })
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 180, damping: 18 })
  const active = useRef(isFinePointer() && !prefersReducedMotion())

  const onMove = (e: ReactPointerEvent) => {
    if (!active.current || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width)
    py.set((e.clientY - r.top) / r.height)
  }
  const reset = () => {
    px.set(0.5)
    py.set(0.5)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
