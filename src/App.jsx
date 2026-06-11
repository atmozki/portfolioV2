import { useEffect } from 'react'
import Lenis from 'lenis'
import useTheme from './useTheme'
import ScrollProgress from './components/ScrollProgress'
import GlowTrail from './components/GlowTrail'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Works from './components/Works'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  const [theme, toggleTheme] = useTheme()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      anchors: { offset: -72 }, // clear the fixed navbar on #anchor jumps
    })
    return () => lenis.destroy()
  }, [])

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-20 bg-ink px-4 py-2 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-paper transition-transform focus-visible:translate-y-0"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <GlowTrail theme={theme} />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Works />
        <Education />
        <Contact />
      </main>
      {/* print-stock texture over everything, barely there */}
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[90] opacity-25 mix-blend-soft-light" />
    </>
  )
}
