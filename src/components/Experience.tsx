import { Award, Briefcase, GraduationCap } from 'lucide-react'
import { certifications, education, experience, sectionNumber } from '../data/site'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'

export function Experience() {
  return (
    <Section id="experience" number={sectionNumber('experience')} eyebrow="Experience" title="Where I've" accent="worked">
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        {/* Work timeline */}
        <ol className="relative space-y-8 border-l border-line pl-8">
          {experience.map((job, i) => (
            <li key={`${job.company}-${job.period}`} className="relative">
              <span className="absolute -left-[45px] top-1 grid size-7 place-items-center rounded-full border border-emerald-400/40 bg-ink-950 text-emerald-300">
                <Briefcase className="size-3.5" aria-hidden />
              </span>
              <Reveal delay={i * 80}>
                <div className="card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-white">{job.role}</h3>
                    <span className="font-mono text-xs text-emerald-300">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    {job.company} · {job.location}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* Education + certifications */}
        <div className="space-y-8">
          <Reveal>
            <h3 className="mb-4 flex items-center gap-2 font-display font-semibold text-white">
              <GraduationCap className="size-5 text-cyan-300" aria-hidden /> Education
            </h3>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.degree} className="card p-5">
                  <p className="font-medium text-white">{e.degree}</p>
                  <p className="text-sm text-slate-400">{e.school}</p>
                  <p className="mt-1 font-mono text-xs text-slate-500">{e.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mb-4 flex items-center gap-2 font-display font-semibold text-white">
              <Award className="size-5 text-cyan-300" aria-hidden /> Certifications
            </h3>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="card p-5">
                  <p className="font-medium text-white">{c.name}</p>
                  <p className="text-sm text-slate-400">
                    {c.issuer} · {c.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}
