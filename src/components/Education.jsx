import { content } from '../content'
import Section from './Section'
import Reveal from './Reveal'

export default function Education() {
  return (
    <Section id="background" index="03" title="Background">
      {/* education rows */}
      <div>
        {content.education.map((ed, i) => (
          <Reveal key={ed.degree} delay={i * 0.08}>
            <div className="grid gap-2 border-b border-line py-8 md:grid-cols-[1.4fr_1fr_auto] md:items-baseline md:gap-x-10">
              <div>
                <h3 className="font-display text-[clamp(1.4rem,2.6vw,2rem)] font-light leading-tight">{ed.degree}</h3>
                {ed.note && <p className="mt-1.5 text-[0.85rem] text-muted">{ed.note}</p>}
              </div>
              <p className="text-[0.9rem] leading-snug text-muted">
                {ed.school}
                <span className="block">{ed.place}</span>
              </p>
              <span className="font-mono text-[0.7rem] text-muted">{ed.period}</span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* certifications */}
      <Reveal delay={0.15}>
        <h3 className="eyebrow mb-6 mt-16">Courses & Certifications</h3>
      </Reveal>
      <div className="grid gap-x-12 sm:grid-cols-2">
        {content.certifications.map((c, i) => (
          <Reveal key={c.name} delay={0.15 + i * 0.05}>
            <div className="flex items-baseline justify-between gap-6 border-b border-line py-4">
              <div className="min-w-0">
                <p className="text-[0.92rem] leading-snug">{c.name}</p>
                <p className="mt-0.5 text-[0.8rem] text-muted">{c.org}</p>
              </div>
              <span className="shrink-0 font-mono text-[0.7rem] text-muted">{c.year}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
