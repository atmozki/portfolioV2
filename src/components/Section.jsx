import Reveal, { RuleReveal } from './Reveal'

/* Section shell: mono index + label row above the content. */
export default function Section({ id, index, title, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-6 py-24 md:px-10 md:py-36 ${className}`}>
      <Reveal>
        <div className="mb-4 flex items-baseline justify-between">
          <span className="eyebrow">{index} · {title}</span>
        </div>
      </Reveal>
      <RuleReveal className="mb-12 md:mb-16" />
      {children}
    </section>
  )
}
