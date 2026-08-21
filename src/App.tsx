import { About } from './components/sections/About'
import { Approach } from './components/sections/Approach'
import { Architecture } from './components/sections/Architecture'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Experience } from './components/sections/Experience'
import { Hero } from './components/sections/Hero'
import { Projects } from './components/sections/Projects'
import { Resume } from './components/sections/Resume'
import { Skills } from './components/sections/Skills'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { SkipLink } from './components/layout/SkipLink'

export default function App() {
  return (
    <div className="min-h-svh min-w-0 overflow-x-clip bg-ink text-cream">
      <SkipLink />
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Architecture />
        <Projects />
        <Approach />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
