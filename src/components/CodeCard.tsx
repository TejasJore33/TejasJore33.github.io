import { Fragment } from 'react'
import { codeCard, profile } from '../data/site'

const Key = ({ children }: { children: string }) => <span className="text-sky-300">{children}</span>
const Str = ({ children }: { children: string }) => <span className="text-emerald-300">"{children}"</span>
const P = ({ children }: { children: string }) => <span className="text-slate-500">{children}</span>

/** A decorative "code editor" window describing the developer. */
export function CodeCard() {
  const lines = [
    <Fragment key="l1">
      <span className="text-fuchsia-300">const</span> <span className="text-amber-200">developer</span> <P>=</P> <P>{'{'}</P>
    </Fragment>,
    <Fragment key="l2">
      {'  '}<Key>name</Key><P>:</P> <Str>{profile.name}</Str><P>,</P>
    </Fragment>,
    <Fragment key="l3">
      {'  '}<Key>role</Key><P>:</P> <Str>{profile.role}</Str><P>,</P>
    </Fragment>,
    <Fragment key="l4">
      {'  '}<Key>{profile.location ? 'location' : 'github'}</Key><P>:</P>{' '}
      <Str>{profile.location || `@${profile.githubUsername}`}</Str><P>,</P>
    </Fragment>,
    <Fragment key="l5">
      {'  '}<Key>stack</Key><P>: [</P>
      {codeCard.stack.map((s, i) => (
        <span key={s}>
          <Str>{s}</Str>
          {i < codeCard.stack.length - 1 && <P>, </P>}
        </span>
      ))}
      <P>],</P>
    </Fragment>,
    <Fragment key="l6">
      {'  '}<Key>available</Key><P>:</P> <span className="text-orange-300">{String(profile.available)}</span><P>,</P>
    </Fragment>,
    <P key="close">{'};'}</P>,
    <span key="blank" />,
    <span key="comment" className="italic text-slate-500">{`// ${codeCard.comment}`}</span>,
  ]

  return (
    <div className="relative animate-float">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-transparent to-cyan-400/20 blur-2xl" aria-hidden="true" />
      <div className="card relative min-w-0 overflow-hidden shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-line bg-ink-800/80 px-4 py-3">
          <span className="size-3 rounded-full bg-rose-400/80" />
          <span className="size-3 rounded-full bg-amber-300/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-400">{codeCard.fileName}</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 sm:text-sm" aria-label="Developer profile as code">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="code-line whitespace-pre-wrap" style={{ animationDelay: `${350 + i * 120}ms` }}>
                <span className="mr-4 inline-block w-4 select-none text-right text-slate-600">{i + 1}</span>
                {line}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  )
}
