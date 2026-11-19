import { techTicker } from '../data/site'

function Row({ items, reverse = false, outline = false }: { items: string[]; reverse?: boolean; outline?: boolean }) {
  const doubled = [...items, ...items] // duplicated for a seamless loop
  return (
    <ul
      className={`flex w-max gap-10 hover:[animation-play-state:paused] ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}
    >
      {doubled.map((t, i) => (
        <li
          key={`${t}-${i}`}
          aria-hidden={i >= items.length}
          className={`flex items-center gap-10 whitespace-nowrap ${
            outline
              ? 'font-display text-4xl font-bold text-transparent [-webkit-text-stroke:1px_rgb(148_163_184/0.35)] transition-colors duration-300 hover:text-emerald-300/90 sm:text-5xl'
              : 'font-mono text-sm text-slate-400'
          }`}
        >
          {t}
          <span className={outline ? 'text-2xl text-emerald-400/40' : 'text-emerald-400/60'}>✦</span>
        </li>
      ))}
    </ul>
  )
}

/** Two marquee rows moving in opposite directions. */
export function TechTicker() {
  const half = Math.ceil(techTicker.length / 2)
  return (
    <div
      className="relative space-y-6 overflow-hidden border-y border-line bg-ink-900/60 py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      aria-label="Technologies I work with"
    >
      <Row items={techTicker} />
      <Row items={[...techTicker.slice(half), ...techTicker.slice(0, half)]} reverse outline />
    </div>
  )
}
