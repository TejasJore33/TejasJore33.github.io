import type { ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

type Props = { children: ReactNode; className?: string; delay?: number }

/** Fades and slides its children in when they scroll into view. */
export function Reveal({ children, className = '', delay = 0 }: Props) {
  const [ref, inView] = useInView<HTMLDivElement>()
  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
