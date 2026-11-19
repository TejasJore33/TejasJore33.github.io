import { motion, useMotionValue, useSpring } from 'motion/react'
import { useEffect, useState } from 'react'
import { isFinePointer, prefersReducedMotion } from '../lib/motion'

/** Dot + trailing ring cursor that grows over interactive elements. Mouse only. */
export function Cursor() {
  const [enabled] = useState(() => isFinePointer() && !prefersReducedMotion())
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)
  const [visible, setVisible] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const rx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.6 })
  const ry = useSpring(y, { stiffness: 350, damping: 30, mass: 0.6 })

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-custom-cursor')
    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      const t = e.target as Element | null
      setHovering(!!t?.closest?.('a, button, [role="button"], summary, [data-cursor="hover"]'))
    }
    const down = () => setPressed(true)
    const up = () => setPressed(false)
    const leave = () => setVisible(false)
    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[90]" aria-hidden="true" style={{ opacity: visible ? 1 : 0 }}>
      <motion.div
        className="absolute left-0 top-0 rounded-full border border-emerald-300/60"
        style={{ x: rx, y: ry, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          backgroundColor: hovering ? 'rgba(52,211,153,0.12)' : 'rgba(52,211,153,0)',
          scale: pressed ? 0.85 : 1,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />
      <motion.div
        className="absolute left-0 top-0 size-1.5 rounded-full bg-emerald-300"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: hovering ? 0 : 1 }}
      />
    </div>
  )
}
