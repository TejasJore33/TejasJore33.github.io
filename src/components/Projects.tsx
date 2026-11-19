import { ArrowUpRight, ChevronDown, Lock } from 'lucide-react'
import { useId, useState } from 'react'
import { moreProjects, projects, type Project, sectionNumber } from '../data/site'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'
import { Tilt } from './Tilt'

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)
  const detailsId = useId()
  const initials = project.title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')

  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line">
        {project.image ? (
          <img src={project.image} alt={`${project.title} screenshot`} className="size-full object-cover object-top transition duration-700 group-hover:scale-105" loading="lazy" />
        ) : (
          <div className="relative grid size-full place-items-center overflow-hidden bg-gradient-to-br from-emerald-500/15 via-ink-800 to-cyan-500/15 transition duration-700 group-hover:scale-105">
            <div className="bg-grid absolute inset-0 opacity-60" aria-hidden="true" />
            <span className="absolute -right-4 -bottom-6 font-display text-8xl font-bold text-white/[0.04]" aria-hidden="true">
              {initials}
            </span>
            <span className="relative px-6 text-center font-display text-2xl font-bold text-gradient">{project.title}</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-ink-950/80 px-3 py-1 text-xs font-medium text-emerald-200 backdrop-blur">
          {project.category}
        </span>
        {project.role && (
          <span className="absolute right-3 top-3 rounded-full border border-cyan-300/30 bg-ink-950/80 px-3 py-1 text-xs font-medium text-cyan-200 backdrop-blur">
            {project.role}
          </span>
        )}
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
          {project.private && (
            <span className="inline-flex items-center gap-1 text-slate-500" title="Source code is in a private repository">
              <Lock className="size-3.5" aria-hidden /> Private code
            </span>
          )}
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
      title="Selected" accent="work"
      subtitle="SaaS platforms, marketplaces and client products. Most of this code lives in private repositories."
      className="bg-ink-900/40"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 80} className="h-full">
            <Tilt max={5} className="h-full">
              <ProjectCard project={p} />
            </Tilt>
          </Reveal>
        ))}
      </div>

      {moreProjects.length > 0 && (
        <Reveal className="mt-14">
          <h3 className="mb-5 font-display text-xl font-semibold text-white">More projects</h3>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {moreProjects.map((m) => {
              const inner = (
                <>
                  <span className="flex items-center justify-between gap-2 font-medium text-white">
                    {m.title}
                    {m.href && <ArrowUpRight className="size-4 shrink-0 text-slate-500 transition group-hover:text-emerald-300" aria-hidden />}
                  </span>
                  <span className="mt-1 block text-sm text-slate-400">{m.text}</span>
                </>
              )
              return (
                <li key={m.title}>
                  {m.href ? (
                    <a href={m.href} target="_blank" rel="noreferrer" className="card card-hover group block h-full p-5">
                      {inner}
                    </a>
                  ) : (
                    <div className="card h-full p-5">{inner}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </Reveal>
      )}
    </Section>
  )
}
