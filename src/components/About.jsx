import { content } from '../content'
import Section from './Section'
import Reveal, { LineReveal } from './Reveal'

export default function About() {
  const { about } = content
  return (
    <Section id="about" index="01" title="About">
      {/* lead sentence */}
      <h2 className="max-w-4xl font-display text-[clamp(1.8rem,4vw,3rem)] font-light leading-[1.15]">
        <LineReveal>{about.lead}</LineReveal>
      </h2>

      <div className="mt-16 grid gap-14 md:grid-cols-[1.5fr_1fr] md:gap-20">
        {/* paragraphs */}
        <div className="space-y-6">
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="max-w-xl leading-relaxed text-muted">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* fact rows */}
        <Reveal delay={0.15}>
          <dl>
            {about.facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 border-b border-line py-4 first:border-t">
                <dt className="font-mono text-[0.68rem] tracking-[0.2em] uppercase text-muted">{f.label}</dt>
                <dd className="m-0 text-right text-[0.9rem]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* skills: typographic columns, no chips */}
      <div className="mt-20 grid gap-10 sm:grid-cols-3">
        {about.skills.map((col, i) => (
          <Reveal key={col.group} delay={i * 0.1}>
            <h3 className="eyebrow mb-5">{col.group}</h3>
            <ul className="space-y-2.5">
              {col.items.map((s) => (
                <li key={s} className="text-[0.92rem] leading-snug">{s}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
