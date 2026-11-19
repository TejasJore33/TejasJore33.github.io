import type { Stat } from '../data/site'
import { useCountUp } from '../hooks/useCountUp'
import { useInView } from '../hooks/useInView'

export function StatCounter({ value, suffix = '', label }: Stat) {
  const [ref, inView] = useInView<HTMLDivElement>(0.2)
  const current = useCountUp(value, inView)
  return (
    <div ref={ref}>
      <p className="font-display text-3xl font-bold text-white sm:text-4xl">
        <span className="tabular-nums">{current}</span>
        <span className="text-gradient">{suffix}</span>
      </p>
      <p className="mt-1 text-sm text-slate-400">{label}</p>
    </div>
  )
}
