import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { useEffect, useState } from 'react'
import { nav, profile } from '../data/site'
import { EASE, useIntroDone } from '../lib/motion'
import { Magnetic } from './Magnetic'

export function Navbar() {
  const ready = useIntroDone()
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [hovered, setHovered] = useState<string | null>(null)
  const { scrollY } = useScroll()

  // Hide when scrolling down, show when scrolling up.
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(y > 24)
    setHidden(y > 400 && y > prev + 4 && !open)
    if (y < prev - 4) setHidden(false)
  })

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const pill = hovered ?? active

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={ready ? { y: hidden ? -110 : 0, opacity: 1 } : undefined}
      transition={{ duration: 0.6, ease: EASE }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
    >
      <nav
        aria-label="Main"
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border pl-2 pr-2 transition-[background-color,border-color,box-shadow] duration-500 sm:pl-3 ${
          scrolled || open
            ? 'border-white/10 bg-ink-950/70 shadow-[0_8px_40px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <a href="#home" className="group flex items-center gap-2.5 rounded-full pr-3" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 font-display text-sm font-bold text-ink-950 transition-transform duration-500 group-hover:rotate-[360deg]">
            {profile.initials}
          </span>
          <span className="font-display font-semibold text-white">{profile.name}</span>
        </a>

        <ul className="hidden items-center lg:flex" onMouseLeave={() => setHovered(null)}>
          {nav.map((item) => (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                onMouseEnter={() => setHovered(item.id)}
                aria-current={active === item.id ? 'true' : undefined}
                className={`relative z-10 block rounded-full px-4 py-2 text-sm transition-colors duration-300 ${
                  active === item.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </a>
              {pill === item.id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.07]"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Magnetic className="hidden sm:inline-flex">
            <a href="#contact" className="btn-primary px-5! py-2!">
              Hire me
            </a>
          </Magnetic>
          <button
            type="button"
            className="grid size-10 place-items-center rounded-full border border-white/10 text-slate-200 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-ink-950/90 p-3 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col">
              {nav.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4, ease: EASE }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3 text-base ${
                      active === item.id ? 'bg-white/[0.07] text-white' : 'text-slate-300'
                    }`}
                  >
                    {item.label}
                    <span className="font-mono text-xs text-slate-600">0{i + 1}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full justify-center">
              Hire me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
