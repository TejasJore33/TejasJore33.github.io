import { skillGroups, sectionNumber } from '../data/site'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'

export function Skills() {
  return (
    <Section
      id="skills"
      number={sectionNumber('skills')}
      eyebrow="Skills"
      title={<>Tools I use to <span className="text-gradient">ship</span></>}
      subtitle="A practical toolkit across the stack — chosen for each project, not out of habit."
      className="bg-ink-900/40"
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map(({ title, icon: Icon, items }, i) => (
          <Reveal key={title} delay={(i % 4) * 70} className="h-full">
            <div className="card card-hover h-full p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-cyan-400/10 text-cyan-300">
                  <Icon className="size-4" aria-hidden />
                </span>
                <h3 className="font-display font-semibold text-white">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s} className="chip">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
