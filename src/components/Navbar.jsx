import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { content } from '../content'
import { EASE } from './Reveal'

const NAV = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'background', label: 'Background' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 transform-gpu [will-change:backdrop-filter] transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? 'border-b border-line bg-paper/45 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="font-mono text-[0.7rem] tracking-[0.25em] uppercase">
          <span className="hidden sm:inline">Dennis Jojo Kuriakose</span>
          <span className="sm:hidden">D.J.K</span>
        </a>

        {/* desktop */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="link-line text-[0.8rem] text-muted transition-colors hover:text-ink">
                {item.label}
              </a>
            </li>
          ))}
          {content.links.resume && (
            <li>
              <a href={content.links.resume} target="_blank" rel="noreferrer" className="link-line-on link-line text-[0.8rem]">
                Résumé
              </a>
            </li>
          )}
          <li>
            <button
              onClick={onToggleTheme}
              className="link-line cursor-pointer font-mono text-[0.68rem] tracking-[0.2em] uppercase text-muted transition-colors hover:text-ink"
            >
              {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
          </li>
        </ul>

        {/* mobile toggle */}
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 grid h-10 w-10 place-items-center md:hidden"
        >
          <div className="space-y-[5px]">
            <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-ink transition-transform duration-300 ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </div>
        </button>
      </nav>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-b border-line bg-paper md:hidden"
          >
            {NAV.map((item) => (
              <li key={item.id} className="border-t border-line/70">
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-display text-2xl"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="border-t border-line/70">
              <button
                onClick={onToggleTheme}
                className="block w-full px-6 py-4 text-left font-mono text-[0.72rem] tracking-[0.2em] uppercase text-muted"
              >
                {theme === 'dark' ? 'Light mode' : 'Dark mode'}
              </button>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
