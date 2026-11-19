import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { profile } from '../data/site'
import { EASE, prefersReducedMotion } from '../lib/motion'

const SEEN_KEY = 'intro-seen'

const alreadySeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1'
  } catch {
    return false
  }
}

/** Branded intro: counter + name, then a curtain wipe. Once per browser session. */
export function Preloader({ onDone }: { onDone: () => void }) {
  const [skip] = useState(() => alreadySeen() || prefersReducedMotion())
  const [visible, setVisible] = useState(!skip)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (skip) {
      onDone()
      return
    }
    document.documentElement.style.overflow = 'hidden'
    const start = performance.now()
    const duration = 1300
    let frame = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration)
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 3))))
      if (p < 1) frame = requestAnimationFrame(tick)
      else
        window.setTimeout(() => {
          setVisible(false)
          try {
            sessionStorage.setItem(SEEN_KEY, '1')
          } catch {
            /* storage unavailable */
          }
        }, 250)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [skip, onDone])

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.documentElement.style.overflow = ''
        onDone()
      }}
    >
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink-950"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="grid size-20 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 font-display text-3xl font-bold text-ink-950 shadow-[0_0_80px_-10px_rgb(52_211_153/0.7)]"
          >
            {profile.initials}
          </motion.div>
          <div className="mt-8 overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="font-display text-2xl font-semibold tracking-tight text-white"
            >
              {profile.name}
            </motion.p>
          </div>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-6 pb-6 sm:px-10 sm:pb-10">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-slate-500">{profile.role}</span>
            <span className="font-display text-6xl font-bold tabular-nums text-white/90 sm:text-8xl">
              {count}
              <span className="text-gradient">%</span>
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-0.5 bg-line">
            <div
              className="h-full origin-left bg-gradient-to-r from-emerald-400 to-cyan-400"
              style={{ transform: `scaleX(${count / 100})` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
