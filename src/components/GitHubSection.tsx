import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import { profile, sectionNumber } from '../data/site'
import { GithubIcon } from './icons'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'

export function GitHubSection() {
  const [chartFailed, setChartFailed] = useState(false)
  const user = profile.githubUsername
  const profileUrl = `https://github.com/${user}`

  return (
    <Section
      id="github"
      number={sectionNumber('github')}
      eyebrow="GitHub"
      title={<>Code in the <span className="text-gradient">open</span></>}
      subtitle="My contribution activity over the past year."
    >
      <Reveal>
        <div className="card p-6 sm:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-full bg-ink-800 text-white">
                <GithubIcon className="size-5" />
              </span>
              <div>
                <p className="font-display font-semibold text-white">@{user}</p>
                <p className="text-sm text-slate-400">Repositories, experiments and contributions</p>
              </div>
            </div>
            <a href={profileUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              View profile <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </div>

          <div className="overflow-x-auto rounded-xl border border-line bg-ink-950/60 p-4">
            {chartFailed ? (
              <p className="py-10 text-center text-sm text-slate-500">
                Contribution graph unavailable — set <code className="text-slate-300">githubUsername</code> in
                src/data/site.ts.
              </p>
            ) : (
              <img
                src={`https://ghchart.rshah.org/34d399/${user}`}
                alt={`GitHub contribution graph for ${user}`}
                className="min-w-[680px] w-full"
                loading="lazy"
                onError={() => setChartFailed(true)}
              />
            )}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
