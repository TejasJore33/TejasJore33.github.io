import { techTicker } from '../data/site'

/** Infinite horizontal marquee of technologies. */
export function TechTicker() {
  const items = [...techTicker, ...techTicker] // duplicated for a seamless loop
  return (
    <div
      className="relative overflow-hidden border-y border-line bg-ink-900/60 py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Technologies I work with"
    >
      <ul className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <li
            key={`${t}-${i}`}
            aria-hidden={i >= techTicker.length}
            className="flex items-center gap-10 whitespace-nowrap font-mono text-sm text-slate-400"
          >
            {t}
            <span className="text-emerald-400/60">◆</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
