import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { contactChannels, profile, sectionNumber } from '../data/site'
import { GithubIcon } from './icons'
import { Magnetic } from './Magnetic'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'
import { SplitWords } from './SplitWords'

export function Contact() {
  return (
    <Section
      id="contact"
      number={sectionNumber('contact')}
      eyebrow="Contact"
      title="Let's build something" accent="together"
      subtitle="Tell me about your project, idea or role."
      className="bg-ink-900/40"
    >
      {contactChannels.length > 1 && (
        <div className={`grid gap-4 sm:grid-cols-2 ${contactChannels.length >= 4 ? 'lg:grid-cols-4' : contactChannels.length === 3 ? 'lg:grid-cols-3' : ''}`}>
          {contactChannels.map(({ label, value, href, icon: Icon }, i) => (
            <Reveal key={label} delay={i * 70} className="h-full">
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="card card-hover group flex h-full flex-col p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <ArrowUpRight className="size-4 text-slate-600 transition group-hover:text-emerald-300" aria-hidden />
                </div>
                <p className="mt-5 text-sm text-slate-500">{label}</p>
                <p className="mt-1 break-all font-medium text-white">{value}</p>
              </a>
            </Reveal>
          ))}
        </div>
      )}

      <Reveal className={contactChannels.length > 1 ? 'mt-10' : ''}>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-900 p-8 sm:p-14">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
          <div className="pointer-events-none absolute -left-24 -top-24 size-80 animate-aurora rounded-full bg-emerald-500/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 size-80 animate-aurora-slow rounded-full bg-cyan-500/20 blur-3xl" aria-hidden="true" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div>
              <h3 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                <SplitWords text="Have an idea?" />
                <br />
                <SplitWords text="Let's make it" delay={0.15} />{' '}
                <SplitWords text="real." delay={0.33} wordClassName="accent-serif text-gradient pr-[0.08em]" />
              </h3>
              <p className="mt-5 max-w-lg text-lg text-slate-300">
                Roles, freelance products or a technical second opinion — tell me what you're building.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {profile.email && (
                  <a href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Tejas')}`} className="btn-primary">
                    <Mail className="size-4" aria-hidden /> Email me
                  </a>
                )}
                {profile.whatsapp && (
                  <a href={`https://wa.me/${profile.whatsapp}`} target="_blank" rel="noreferrer" className="btn-ghost">
                    <MessageCircle className="size-4" aria-hidden /> WhatsApp
                  </a>
                )}
                <a
                  href={`https://github.com/${profile.githubUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className={profile.email ? 'btn-ghost' : 'btn-primary'}
                >
                  <GithubIcon className="size-4" /> Find me on GitHub
                </a>
              </div>
            </div>

            {/* Magnetic round button with a spinning text ring */}
            <div className="relative mx-auto grid size-48 place-items-center sm:size-56">
              <svg viewBox="0 0 200 200" className="absolute inset-0 size-full animate-spin-slow" aria-hidden="true">
                <defs>
                  <path id="ring" d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0" />
                </defs>
                <text className="fill-slate-400 font-mono text-[13px] uppercase tracking-[0.32em]">
                  <textPath href="#ring">Open to opportunities • Let's talk • </textPath>
                </text>
              </svg>
              <Magnetic strength={0.5}>
                <a
                  href={profile.email ? `mailto:${profile.email}` : `https://github.com/${profile.githubUsername}`}
                  target={profile.email ? undefined : '_blank'}
                  rel="noreferrer"
                  aria-label="Get in touch"
                  className="group grid size-28 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 text-ink-950 shadow-[0_0_60px_-10px_rgb(52_211_153/0.8)] transition-transform duration-500 hover:scale-110 sm:size-32"
                >
                  <ArrowUpRight className="size-9 transition-transform duration-500 group-hover:rotate-45" aria-hidden />
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
