import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { motion, useScroll, useTransform, type Variants } from 'motion/react'
import { useRef } from 'react'
import { heroStats, profile } from '../data/site'
import { EASE, useIntroDone } from '../lib/motion'
import { CodeCard } from './CodeCard'
import { HeroCanvas } from './HeroCanvas'
import { Magnetic } from './Magnetic'
import { SplitWords } from './SplitWords'
import { StatCounter } from './StatCounter'
import { Tilt } from './Tilt'
import { Typewriter } from './Typewriter'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: EASE, delay: 0.35 + i * 0.12 },
  }),
}

export function Hero() {
  const ready = useIntroDone()
  const section = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: section, offset: ['start start', 'end start'] })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 140])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const cardY = useTransform(scrollYProgress, [0, 1], [0, 70])
  const state = ready ? 'show' : 'hidden'

  return (
    <section ref={section} id="home" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-12 lg:pb-28">
      {/* background */}
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-[5%] h-[520px] w-[620px] animate-aurora rounded-full bg-emerald-500/15 blur-3xl" />
        <div className="absolute -top-24 right-[0%] h-[460px] w-[560px] animate-aurora-slow rounded-full bg-cyan-500/12 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-[340px] w-[460px] animate-aurora rounded-full bg-teal-400/[0.08] blur-3xl [animation-delay:-9s]" />
      </div>
      <HeroCanvas />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr]">
        <motion.div style={{ y: contentY, opacity: contentOpacity }} className="min-w-0">
          {profile.available && (
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={state}
              custom={0}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium text-emerald-200 backdrop-blur"
            >
              <span className="size-2 animate-pulse-dot rounded-full bg-emerald-400" />
              Open to opportunities
            </motion.p>
          )}

          <h1 className="font-display font-bold tracking-tight text-white">
            <motion.span variants={fadeUp} initial="hidden" animate={state} custom={0.5} className="mb-2 block text-lg font-medium text-slate-400 sm:text-xl">
              Hi, I'm
            </motion.span>
            <SplitWords
              text={profile.name}
              play={ready}
              delay={0.45}
              className="block text-6xl leading-[0.95] sm:text-7xl lg:text-8xl"
            />
            {profile.roles.length > 0 && (
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate={state}
                custom={2}
                className="mt-5 block min-h-[2.4em] text-3xl font-semibold leading-tight text-slate-200 sm:min-h-[1.2em] sm:text-4xl lg:min-h-[2.4em] xl:min-h-[1.2em]"
              >
                I build <Typewriter words={profile.roles} className="accent-serif text-gradient" />
              </motion.span>
            )}
          </h1>

          <motion.p variants={fadeUp} initial="hidden" animate={state} custom={3} className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
            {profile.summary}
          </motion.p>
          {profile.location && (
            <motion.p variants={fadeUp} initial="hidden" animate={state} custom={3.5} className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500">
              <MapPin className="size-4" aria-hidden /> {profile.location}
            </motion.p>
          )}

          <motion.div variants={fadeUp} initial="hidden" animate={state} custom={4} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic>
              <a href="#projects" className="btn-primary group">
                See my work
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#contact" className="btn-ghost group">
                Get in touch
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </a>
            </Magnetic>
            {profile.resumeUrl && (
              <a href={profile.resumeUrl} className="btn-ghost" target="_blank" rel="noreferrer">
                Résumé
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: cardY }}
          initial={{ opacity: 0, rotateX: 12, filter: 'blur(10px)' }}
          animate={ready ? { opacity: 1, rotateX: 0, filter: 'blur(0px)' } : undefined}
          transition={{ duration: 1.1, ease: EASE, delay: 0.7 }}
          className={`min-w-0 [perspective:1100px] ${ready ? 'is-visible' : ''}`}
        >
          <Tilt max={7}>
            <CodeCard />
          </Tilt>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={ready ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 1, ease: EASE, delay: 1.05 }}
        className="relative mx-auto mt-16 w-full max-w-6xl px-4 sm:px-6"
      >
        <div className="card grid grid-cols-2 gap-6 p-6 sm:grid-cols-4 sm:p-8">
          {heroStats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : undefined}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500 lg:flex"
      >
        <span className="relative h-9 w-5 rounded-full border border-slate-600">
          <span className="absolute left-1/2 top-1.5 h-2 w-0.5 -translate-x-1/2 animate-scroll-dot rounded-full bg-emerald-300" />
        </span>
        Scroll
      </motion.a>
    </section>
  )
}
