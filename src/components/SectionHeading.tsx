import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { EASE } from '../lib/motion'
import { Reveal } from './Reveal'
import { SplitWords } from './SplitWords'

type HeadingProps = {
  number: string
  eyebrow: string
  /** Main heading text */
  title: string
  /** Optional trailing words shown in the serif-italic gradient accent */
  accent?: string
  subtitle?: string
}

export function SectionHeading({ number, eyebrow, title, accent, subtitle }: HeadingProps) {
  return (
    <div className="mb-14 max-w-3xl">
      <div className="mb-5 flex items-center gap-3 font-mono text-sm">
        <span className="text-slate-500">{number}</span>
        <motion.span
          className="h-px w-12 origin-left bg-gradient-to-r from-emerald-400 to-cyan-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        />
        <span className="uppercase tracking-[0.2em] text-emerald-300">{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        <SplitWords text={title} />
        {accent && (
          <>
            {' '}
            <SplitWords text={accent} delay={title.split(' ').length * 0.06} wordClassName="accent-serif text-gradient pr-[0.08em]" />
          </>
        )}
      </h2>
      {subtitle && (
        <Reveal delay={150}>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">{subtitle}</p>
        </Reveal>
      )}
    </div>
  )
}

type SectionProps = HeadingProps & { id: string; children: ReactNode; className?: string }

/** A page section with a numbered heading. */
export function Section({ id, children, className = '', ...heading }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading {...heading} />
        {children}
      </div>
    </section>
  )
}
