import { About } from './components/About'
import { Contact } from './components/Contact'
import { DevOps } from './components/DevOps'
import { Experience } from './components/Experience'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'
import { GitHubSection } from './components/GitHubSection'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { TechTicker } from './components/TechTicker'
import { WhyMe } from './components/WhyMe'
import { BackToTop } from './components/BackToTop'
import { ScrollProgress } from './components/ScrollProgress'
import { useSpotlight } from './hooks/useSpotlight'
import { hasExperience } from './data/site'

export default function App() {
  useSpotlight()
  return (
    <>
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
    </>
  )
}
