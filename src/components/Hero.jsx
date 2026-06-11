import { motion } from 'framer-motion'
import { content } from '../content'
import { EASE, LineReveal } from './Reveal'

export default function Hero() {
  const { person, links, heroIntro } = content

  return (
    <section id="top" className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-6 pb-16 pt-32 md:px-10 md:pb-20">
      {/* eyebrow row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-2"
      >
        <span className="eyebrow">{person.role} · {person.location}</span>
        {person.available && (
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            <span className="eyebrow text-ember!">Open to work</span>
          </span>
        )}
      </motion.div>

      {/* the name */}
      <h1 className="font-display font-light leading-[0.95] tracking-[-0.015em] text-[clamp(3.2rem,11.5vw,9rem)]">
        {person.nameLines.map((line, i) => (
          <LineReveal key={line} delay={0.35 + i * 0.12}>
            {line}
          </LineReveal>
        ))}
      </h1>

      {/* tagline */}
      <LineReveal delay={0.62} className="mt-6">
        <p className="font-display text-[clamp(1.4rem,3vw,2.2rem)] font-light italic text-ember">
          {person.tagline}
        </p>
      </LineReveal>

      {/* intro + links */}
      <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
          className="max-w-md text-[0.95rem] leading-relaxed text-muted"
        >
          {heroIntro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
          className="flex items-center gap-7 font-mono text-[0.72rem] tracking-[0.18em] uppercase"
        >
          <a href={links.github} target="_blank" rel="noreferrer" className="link-line">GitHub</a>
          <a href={links.linkedin} target="_blank" rel="noreferrer" className="link-line">LinkedIn</a>
          <a href={`mailto:${links.email}`} className="link-line">Email</a>
        </motion.div>
      </div>

      {/* baseline rule + scroll cue */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 1.0, ease: EASE }}
        className="mt-12 h-px w-full origin-left bg-line"
      />
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-5 self-start font-mono text-[0.7rem] tracking-[0.25em] uppercase text-muted transition-colors hover:text-ink"
      >
        Scroll ↓
      </motion.a>
    </section>
  )
}
