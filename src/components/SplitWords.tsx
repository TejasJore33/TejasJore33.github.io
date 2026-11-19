import { motion } from 'motion/react'
import { EASE } from '../lib/motion'

type Props = {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  /** When given, animates on this flag instead of on scroll into view. */
  play?: boolean
}

/** Reveals each word by sliding it up from behind a mask. */
export function SplitWords({ text, className = '', wordClassName = '', delay = 0, play }: Props) {
  const words = text.split(' ')
  const controlled = play !== undefined
  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      {words.map((w, i) => (
        <span key={`${w}-${i}`} aria-hidden="true" className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className={`inline-block will-change-transform ${wordClassName}`}
            initial={{ y: '110%', rotate: 4 }}
            {...(controlled
              ? { animate: play ? { y: 0, rotate: 0 } : { y: '110%', rotate: 4 } }
              : { whileInView: { y: 0, rotate: 0 }, viewport: { once: true, margin: '0px 0px -10% 0px' } })}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.06 }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  )
}
