import { CheckCircle2 } from 'lucide-react'
import { whyMe, sectionNumber } from '../data/site'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'
import { StatCounter } from './StatCounter'

export function WhyMe() {
  return (
    <Section id="why-me" number={sectionNumber('why-me')} eyebrow="Why me" title={whyMe.headline} className="bg-ink-900/40">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-400">{whyMe.text}</p>
          {whyMe.stats.length > 0 && (
            <div className="mt-8 grid grid-cols-3 gap-6">
              {whyMe.stats.map((s) => (
                <StatCounter key={s.label} {...s} />
              ))}
            </div>
          )}
        </Reveal>
        <Reveal delay={120}>
          <ul className="space-y-3">
            {whyMe.points.map((p) => (
              <li key={p.title} className="card flex gap-4 p-5">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-300" aria-hidden />
                <div>
                  <p className="font-semibold text-white">{p.title}</p>
                  <p className="text-sm text-slate-400">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}
