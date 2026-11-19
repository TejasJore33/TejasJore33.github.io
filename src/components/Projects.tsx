import { ArrowUpRight, ChevronDown } from 'lucide-react'
import { useId, useState } from 'react'
import { projects, type Project, sectionNumber } from '../data/site'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const detailsId = useId()
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

  return (
    <article className="card card-hover flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} className="size-full object-cover" loading="lazy" />
        ) : (
          <div className="grid size-full place-items-center bg-gradient-to-br from-emerald-500/20 via-ink-800 to-cyan-500/20">
            <span className="font-display text-5xl font-bold text-white/20">{initials}</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-ink-950/80 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur">
          {project.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-slate-400">{project.blurb}</p>

        <div
          id={detailsId}
          className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <p className="overflow-hidden text-sm leading-relaxed text-slate-300" inert={!open}>
            <span className="block pt-3">{project.description}</span>
          </p>
        </div>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-sm">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="inline-flex items-center gap-1 font-medium text-emerald-300 hover:text-emerald-200"
          >
            {open ? 'Hide details' : 'View details'}
            <ChevronDown className={`size-4 transition ${open ? 'rotate-180' : ''}`} aria-hidden />
          </button>
          {project.links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
            >
              {l.label} <ArrowUpRight className="size-3.5" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <Section
      id="projects"
      number={sectionNumber('projects')}
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient">work</span></>}
      subtitle="A mix of client work, products and side projects."
      className="bg-ink-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 80} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
