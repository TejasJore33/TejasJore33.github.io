import { Plus } from 'lucide-react'
import { useId, useState } from 'react'
import { faqs, sectionNumber } from '../data/site'
import { Reveal } from './Reveal'
import { Section } from './SectionHeading'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const baseId = useId()

  return (
    <Section id="faq" number={sectionNumber('faq')} eyebrow="FAQ" title={<>Common <span className="text-gradient">questions</span></>}>
      <Reveal className="mx-auto max-w-3xl">
        <ul className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i
            const panelId = `${baseId}-panel-${i}`
            const buttonId = `${baseId}-button-${i}`
            return (
              <li key={f.q} className={`card transition ${open ? 'border-emerald-400/40' : ''}`}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-medium text-white"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : i)}
                  >
                    {f.q}
                    <Plus
                      className={`size-5 shrink-0 text-emerald-300 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden" inert={!open}>
                    <p className="px-6 pb-5 text-slate-400">{f.a}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Reveal>
    </Section>
  )
}
