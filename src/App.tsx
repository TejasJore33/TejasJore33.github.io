import { MotionConfig } from 'motion/react'
import { useCallback, useState } from 'react'
import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { DevOps } from './components/DevOps'
import { Experience } from './components/Experience'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { GitHubSection } from './components/GitHubSection'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'
import { TechTicker } from './components/TechTicker'
import { WhyMe } from './components/WhyMe'
import { hasExperience } from './data/site'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { useSpotlight } from './hooks/useSpotlight'
import { IntroContext } from './lib/motion'

export default function App() {
  const [introDone, setIntroDone] = useState(false)
  const finishIntro = useCallback(() => setIntroDone(true), [])
  useSpotlight()
  useSmoothScroll()

  return (
    <MotionConfig reducedMotion="user">
      <IntroContext.Provider value={introDone}>
        <Preloader onDone={finishIntro} />
        <Cursor />
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <TechTicker />
          <About />
          <Skills />
          {hasExperience && <Experience />}
          <Projects />
          <GitHubSection />
          <Process />
          <DevOps />
          <WhyMe />
          <Faq />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </IntroContext.Provider>
    </MotionConfig>
  )
}
