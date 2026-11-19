import { processSteps, sectionNumber } from '../data/site'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'

export function Process() {
  return (
    <Section
      id="process"
      number={sectionNumber('process')}
      eyebrow="Process"
      title="How I" accent="work"
      subtitle="A simple, transparent process from first call to long after launch."
      className="bg-ink-900/40"
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {processSteps.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 80} className="h-full">
              <div className="card card-hover relative h-full p-6">
                <span className="font-mono text-3xl font-medium text-gradient">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-4 font-display font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{step.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
