import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type HeadingProps = { number: string; eyebrow: string; title: ReactNode; subtitle?: string }

export function SectionHeading({ number, eyebrow, title, subtitle }: HeadingProps) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-sm text-emerald-300">
        <span className="text-slate-500">{number} /</span> {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
    </Reveal>
  )
}

type SectionProps = HeadingProps & { id: string; children: ReactNode; className?: string }

/** A page section with a numbered heading. */
export function Section({ id, children, className = '', ...heading }: SectionProps) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...heading} />
        {children}
      </div>
    </section>
  )
}
