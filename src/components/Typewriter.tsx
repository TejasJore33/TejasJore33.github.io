import { useEffect, useState } from 'react'

type Props = { words: string[]; className?: string }

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Types and deletes each word in turn, with a blinking caret. */
export function Typewriter({ words, className = '' }: Props) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState(() => (reduceMotion() ? words[0] : ''))
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion() || words.length === 0) return
    const word = words[index % words.length]
    let delay = deleting ? 45 : 85
    if (!deleting && text === word) delay = 1800 // pause on full word
    if (deleting && text === '') delay = 350 // pause before next word

    const id = window.setTimeout(() => {
      if (!deleting && text === word) setDeleting(true)
      else if (deleting && text === '') {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      } else setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, delay)
    return () => window.clearTimeout(id)
  }, [text, deleting, index, words])

  return (
    <span className={className}>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden="true">
        {text}
        <span className="ml-0.5 inline-block w-[3px] animate-caret bg-emerald-300 align-[-0.1em]" style={{ height: '0.9em' }} />
      </span>
    </span>
  )
}
