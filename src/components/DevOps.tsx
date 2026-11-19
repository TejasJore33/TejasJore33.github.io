import { ArrowRight } from 'lucide-react'
import { Fragment } from 'react'
import { devopsFeatures, pipeline, sectionNumber } from '../data/site'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'

export function DevOps() {
  return (
    <Section
      id="devops"
      number={sectionNumber('devops')}
      eyebrow="Deployment & DevOps"
      title={<>From commit to <span className="text-gradient">production</span></>}
      subtitle="Automated builds and deploys keep releases routine — this site deploys itself on every push."
    >
      <Reveal>
        <div className="card flex flex-col items-center gap-3 p-6 sm:flex-row sm:justify-between sm:p-8">
          {pipeline.map(({ label, icon: Icon }, i) => (
            <Fragment key={label}>
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="grid size-14 place-items-center rounded-2xl border border-line bg-ink-800 text-emerald-300">
                  <Icon className="size-6" aria-hidden />
                </span>
                <span className="font-mono text-xs text-slate-300">{label}</span>
              </div>
              {i < pipeline.length - 1 && (
                <ArrowRight className="size-5 shrink-0 rotate-90 text-slate-600 sm:rotate-0" aria-hidden />
              )}
            </Fragment>
          ))}
        </div>
      </Reveal>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {devopsFeatures.map(({ title, text, icon: Icon }, i) => (
          <Reveal key={title} delay={i * 80} className="h-full">
            <div className="card card-hover h-full p-6">
              <Icon className="size-6 text-cyan-300" aria-hidden />
              <h3 className="mt-4 font-display font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-400">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
