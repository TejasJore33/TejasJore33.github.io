import { ArrowRight, MapPin } from 'lucide-react'
import { heroStats, profile } from '../data/site'
import { CodeCard } from './CodeCard'
import { Reveal } from './Reveal'
import { StatCounter } from './StatCounter'

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* background decoration */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
        <Reveal className="min-w-0">
          {profile.available && (
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-200">
              <span className="size-2 animate-pulse-dot rounded-full bg-emerald-400" />
              Open to opportunities
            </p>
          )}
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">{profile.name}</span>.
            <span className="mt-2 block text-slate-200">{profile.headline}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400">{profile.summary}</p>
          {profile.location && (
            <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="size-4" aria-hidden /> {profile.location}
            </p>
          )}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              See my work <ArrowRight className="size-4" aria-hidden />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn-ghost" target="_blank" rel="noreferrer">
                Résumé
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={150} className="min-w-0">
          <CodeCard />
        </Reveal>
      </div>

      <div className="relative mx-auto mt-16 max-w-6xl px-4 sm:px-6">
        <div className="card grid grid-cols-2 gap-6 p-6 sm:grid-cols-4 sm:p-8">
          {heroStats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
