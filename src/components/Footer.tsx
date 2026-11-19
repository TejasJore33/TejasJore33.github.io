import { ArrowUp } from 'lucide-react'
import { nav, profile } from '../data/site'
import { GithubIcon, LinkedinIcon } from './icons'

const year = new Date().getFullYear()

export function Footer() {
  const socials = [
    { label: 'GitHub', href: `https://github.com/${profile.githubUsername}`, Icon: GithubIcon },
    { label: 'LinkedIn', href: profile.linkedinUrl, Icon: LinkedinIcon },
  ].filter((s) => s.href)

  return (
    <footer className="relative border-t border-line bg-ink-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-400 font-display text-sm font-bold text-ink-950">
              {profile.initials}
            </span>
            <span className="font-display font-semibold text-white">{profile.name}</span>
          </a>
          <p className="mt-4 max-w-sm text-sm text-slate-400">{profile.summary}</p>
          <div className="mt-5 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-10 place-items-center rounded-full border border-line text-slate-400 transition hover:border-emerald-400/50 hover:text-white"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <h3 className="mb-4 text-sm font-semibold text-white">Navigate</h3>
          <ul className="space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-slate-400 hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
          <ul className="space-y-2 text-sm text-slate-400">
            {profile.email && (
              <li>
                <a href={`mailto:${profile.email}`} className="break-all hover:text-white">
                  {profile.email}
                </a>
              </li>
            )}
            <li>
              <a href={`https://github.com/${profile.githubUsername}`} className="hover:text-white" target="_blank" rel="noreferrer">
                github.com/{profile.githubUsername}
              </a>
            </li>
            {profile.location && <li>{profile.location}</li>}
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-slate-500 sm:px-6">
          <p>
            © {year} {profile.name}. Built with React &amp; Tailwind.
          </p>
          <a href="#home" className="inline-flex items-center gap-1.5 hover:text-white">
            Back to top <ArrowUp className="size-4" aria-hidden />
          </a>
        </div>
      </div>
      <div aria-hidden="true" className="overflow-hidden">
        <p className="-mb-[2.5vw] select-none whitespace-nowrap text-center font-display text-[16vw] font-bold uppercase leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgb(148_163_184/0.14)]">
          {profile.name}
        </p>
      </div>
    </footer>
  )
}
