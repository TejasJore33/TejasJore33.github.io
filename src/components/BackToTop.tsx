import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

/** Floating button that appears after scrolling down. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="#home"
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 grid size-12 place-items-center rounded-full border border-emerald-400/40 bg-ink-900/80 text-emerald-300 shadow-lg shadow-black/40 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-ink-800 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="size-5" aria-hidden />
    </a>
  )
}
