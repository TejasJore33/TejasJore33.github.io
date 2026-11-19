import { useEffect, useRef } from 'react'
import { prefersReducedMotion } from '../lib/motion'

type P = { x: number; y: number; vx: number; vy: number; r: number }

/** Interactive constellation: drifting points that link up near each other and the cursor. */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return
    const reduce = prefersReducedMotion()
    let w = 0
    let h = 0
    let points: P[] = []
    let frame = 0
    let running = true
    const mouse = { x: -9999, y: -9999 }
    const LINK = 130
    const MOUSE_LINK = 180

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.round(Math.min(90, Math.max(28, (w * h) / 16000)))
      points = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.4 + 0.6,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      for (const p of points) {
        if (!reduce) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0 || p.x > w) p.vx *= -1
          if (p.y < 0 || p.y > h) p.vy *= -1
          // gentle pull toward the cursor
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const d = Math.hypot(dx, dy)
          if (d < MOUSE_LINK && d > 1) {
            p.x += (dx / d) * 0.25
            p.y += (dy / d) * 0.25
          }
        }
      }
      for (let i = 0; i < points.length; i++) {
        const a = points[i]
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j]
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < LINK) {
            ctx.strokeStyle = `rgba(94, 234, 212, ${0.14 * (1 - d / LINK)})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
        const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y)
        if (dm < MOUSE_LINK) {
          ctx.strokeStyle = `rgba(52, 211, 153, ${0.35 * (1 - dm / MOUSE_LINK)})`
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
        ctx.fillStyle = dm < MOUSE_LINK ? 'rgba(110, 231, 183, 0.95)' : 'rgba(148, 163, 184, 0.55)'
        ctx.beginPath()
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const loop = () => {
      if (running) draw()
      frame = requestAnimationFrame(loop)
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const io = new IntersectionObserver(([e]) => (running = e.isIntersecting))
    io.observe(canvas)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeave)
    if (reduce) draw()
    else frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      ro.disconnect()
      io.disconnect()
      window.removeEventListener('pointermove', onMove)
      document.documentElement.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      className="pointer-events-none absolute inset-0 size-full [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
      aria-hidden="true"
    />
  )
}
