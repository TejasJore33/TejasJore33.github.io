import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { contactChannels, profile, sectionNumber } from '../data/site'
import { GithubIcon } from './icons'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'

export function Contact() {
  return (
    <Section
      id="contact"
      number={sectionNumber('contact')}
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient">together</span></>}
      subtitle="Tell me about your project, idea or role."
      className="bg-ink-900/40"
    >
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

      <Reveal className="mt-8">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-500/15 via-ink-900 to-cyan-500/15 p-8 sm:p-12">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">Have a role or project in mind?</h3>
            <p className="mt-3 text-slate-300">
              Share a few details about what you're building and I'll get back to you.
            </p>
          </div>
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
      </Reveal>
    </Section>
  )
}
