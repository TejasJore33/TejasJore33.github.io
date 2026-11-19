import { ArrowRight } from 'lucide-react'
import { profile, services, sectionNumber } from '../data/site'
import { GithubIcon, LinkedinIcon } from './icons'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'

export function About() {
  return (
    <Section id="about" number={sectionNumber('about')} eyebrow="About" title={<>A bit about <span className="text-gradient">me</span></>}>
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal className="space-y-5 text-lg leading-relaxed text-slate-400">
          {profile.about.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-3 pt-3">
            <a href="#contact" className="btn-primary">
              Work with me <ArrowRight className="size-4" aria-hidden />
            </a>
            {profile.linkedinUrl ? (
              <a href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="btn-ghost">
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
            ) : (
              <a href={`https://github.com/${profile.githubUsername}`} target="_blank" rel="noreferrer" className="btn-ghost">
                <GithubIcon className="size-4" /> GitHub
              </a>
            )}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map(({ title, text, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 80} className="h-full">
              <div className="card card-hover h-full p-6">
                <span className="mb-4 grid size-11 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
