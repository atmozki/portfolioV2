import { useEffect, useState } from 'react'
import { content } from '../content'
import Reveal, { LineReveal, RuleReveal } from './Reveal'

function useMelbourneTime() {
  const fmt = () =>
    new Intl.DateTimeFormat('en-AU', {
      timeZone: 'Australia/Melbourne',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    }).format(new Date())
  const [time, setTime] = useState(fmt)
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 30_000)
    return () => clearInterval(id)
  }, [])
  return time
}

export default function Contact() {
  const { contact, links, person } = content
  const time = useMelbourneTime()

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-24 md:px-10 md:pt-36">
        <Reveal>
          <span className="eyebrow eyebrow-dark">04 · Contact</span>
        </Reveal>
        <RuleReveal dark className="mb-14 mt-4 md:mb-20" />

        <h2 className="max-w-4xl font-display text-[clamp(2.4rem,7vw,5.5rem)] font-light leading-[1.02]">
          <LineReveal>Let’s make data</LineReveal>
          <LineReveal delay={0.1}>
            <span className="italic text-ember">make sense.</span>
          </LineReveal>
        </h2>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-md leading-relaxed text-muted-dark">{contact.blurb}</p>
        </Reveal>

        <Reveal delay={0.3}>
          <a
            href={`mailto:${links.email}`}
            className="link-line mt-12 inline-block font-display text-[clamp(1.3rem,3.5vw,2.6rem)] font-light"
          >
            {links.email}
          </a>
        </Reveal>

        {/* socials + locale */}
        <Reveal delay={0.35}>
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 md:mt-24">
            <div className="flex items-center gap-7 font-mono text-[0.72rem] tracking-[0.18em] uppercase">
              <a href={links.github} target="_blank" rel="noreferrer" className="link-line">GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="link-line">LinkedIn</a>
              {links.resume && (
                <a href={links.resume} target="_blank" rel="noreferrer" className="link-line">Résumé</a>
              )}
            </div>
            <p className="font-mono text-[0.72rem] tracking-[0.18em] uppercase text-muted-dark">
              Melbourne, AU · {time}
            </p>
          </div>
        </Reveal>

        {/* footer */}
        <div className="mt-14 border-t border-line-dark pt-7">
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="font-mono text-[0.68rem] tracking-[0.15em] text-muted-dark">
              © {new Date().getFullYear()} {person.name}
            </p>
            <p className="font-mono text-[0.68rem] tracking-[0.15em] text-muted-dark">
              Set in Fraunces &amp; Inter · Built in Melbourne
            </p>
            <a href="#top" className="link-line font-mono text-[0.68rem] tracking-[0.15em] uppercase text-muted-dark transition-colors hover:text-paper">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
