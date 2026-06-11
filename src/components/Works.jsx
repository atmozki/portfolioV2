import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { content } from '../content'
import Section from './Section'
import Reveal from './Reveal'
import { EASE } from './Reveal'

function WorkRow({ work, i, onHover }) {
  return (
    <Reveal delay={i * 0.06}>
      <a
        href={work.href}
        target="_blank"
        rel="noreferrer"
        onMouseEnter={() => onHover(work)}
        onMouseLeave={() => onHover(null)}
        className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-b border-line py-8 transition-colors duration-300 hover:bg-paper-deep md:grid-cols-[3.5rem_1.2fr_1fr_auto] md:gap-x-10 md:px-4 md:py-10 md:-mx-4"
      >
        {/* index */}
        <span className="font-mono text-[0.7rem] text-muted">0{i + 1}</span>

        {/* title + blurb */}
        <span className="min-w-0">
          <span className="block font-display text-[clamp(1.5rem,3vw,2.4rem)] font-light leading-tight transition-transform duration-500 ease-out group-hover:translate-x-2">
            {work.title}
          </span>
          <span className="mt-2 block max-w-md text-[0.88rem] leading-relaxed text-muted">
            {work.desc}
          </span>
        </span>

        {/* meta */}
        <span className="col-start-2 mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.68rem] tracking-[0.12em] uppercase text-muted md:col-start-3 md:mt-0 md:justify-end">
          <span className="text-ink">{work.kind}</span>
          <span aria-hidden>·</span>
          <span>{work.year}</span>
        </span>

        {/* arrow */}
        <span
          aria-hidden
          className="hidden font-display text-2xl opacity-0 transition-all duration-500 ease-out group-hover:translate-x-1 group-hover:opacity-100 md:block"
        >
          ↗
        </span>
      </a>
    </Reveal>
  )
}

export default function Works() {
  const [active, setActive] = useState(null)
  const fine = useRef(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 26, mass: 0.6 })
  const sy = useSpring(y, { stiffness: 220, damping: 26, mass: 0.6 })

  useEffect(() => {
    fine.current = window.matchMedia('(pointer: fine)').matches
  }, [])

  const onMove = (e) => {
    if (!fine.current) return
    x.set(e.clientX)
    y.set(e.clientY)
  }

  return (
    <Section id="work" index="02" title="Selected Work">
      <div className="-mt-4" onMouseMove={onMove}>
        {content.works.map((w, i) => (
          <WorkRow key={w.title} work={w} i={i} onHover={setActive} />
        ))}
      </div>

      {/* cursor-following preview, desktop only */}
      <AnimatePresence>
        {active?.img && (
          <motion.div
            key={active.title}
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="light-sheet pointer-events-none fixed left-0 top-0 z-40 hidden w-72 p-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.32)] lg:block"
            style={{ x: sx, y: sy, translateX: '-50%', translateY: '-60%' }}
          >
            {/* photo print on a thin paper mat, not a UI box */}
            <div className="aspect-[4/3] overflow-hidden">
              <img src={active.img} alt="" className="block h-full w-full object-cover" />
            </div>
            {/* archival caption */}
            <div className="flex items-baseline justify-between pt-2 font-mono text-[0.58rem] tracking-[0.18em] uppercase text-muted">
              <span>{active.kind}</span>
              <span>{active.year}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Reveal delay={0.1}>
        <p className="mt-10 text-[0.9rem] text-muted">
          <a href={content.links.github} target="_blank" rel="noreferrer" className="link-line-on link-line text-ink">
            Everything else is on GitHub
          </a>
          .
        </p>
      </Reveal>
    </Section>
  )
}
