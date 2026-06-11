import { content } from './content'

/* PDF-style resume page. Static markup on purpose: no scroll animations,
   so Ctrl+P / the Download button always prints the full sheet. */

function SectionLabel({ children }) {
  return (
    <h2 className="mb-3 border-b border-line pb-2 font-mono text-[0.62rem] font-medium tracking-[0.25em] uppercase text-muted">
      {children}
    </h2>
  )
}

export default function Resume() {
  const { person, links, resume, education, certifications, about, works } = content
  const site = links.site

  return (
    <div className="resume-wrap min-h-svh bg-paper-deep px-4 py-8 font-sans text-ink sm:py-12">
      {/* controls */}
      <div className="no-print mx-auto mb-6 flex w-full max-w-[53rem] items-center justify-between">
        <a href="./" className="link-line font-mono text-[0.7rem] tracking-[0.2em] uppercase text-muted hover:text-ink">
          ← Back to the site
        </a>
        <button
          onClick={() => window.print()}
          className="cursor-pointer border border-line bg-paper px-5 py-2.5 font-mono text-[0.7rem] tracking-[0.2em] uppercase text-ink transition-colors hover:border-ember hover:text-ember"
        >
          Download PDF
        </button>
      </div>

      {/* the sheet */}
      <div className="light-sheet resume-sheet mx-auto w-full max-w-[53rem] px-8 py-10 shadow-[0_30px_80px_rgba(23,20,16,0.16)] sm:px-12 sm:py-14">
        {/* header */}
        <header className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-light leading-none sm:text-5xl">{person.name}</h1>
            <p className="mt-2 font-display text-lg font-light italic text-ember">
              Data Science · {person.location}
            </p>
          </div>
          <div className="text-right font-mono text-[0.66rem] leading-relaxed text-muted">
            <a href={`mailto:${links.email}`} className="block hover:text-ink">{links.email}</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="block hover:text-ink">linkedin.com/in/dennisjk</a>
            <a href={links.github} target="_blank" rel="noreferrer" className="block hover:text-ink">github.com/atmozki</a>
          </div>
        </header>

        <div className="mt-6 h-px w-full bg-line" />

        {/* body */}
        <div className="mt-8 grid gap-10 md:grid-cols-[1.9fr_1fr]">
          {/* main column */}
          <div className="space-y-8">
            <section>
              <SectionLabel>Profile</SectionLabel>
              <p className="text-[0.86rem] leading-relaxed">{resume.summary}</p>
            </section>

            <section>
              <SectionLabel>Projects &amp; Research</SectionLabel>
              <div className="space-y-5">
                {works.map((w) => (
                  <div key={w.title}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="font-display text-[1.05rem] font-normal">{w.title}</h3>
                      <span className="font-mono text-[0.62rem] tracking-[0.12em] uppercase text-muted">
                        {w.kind} · {w.year}
                      </span>
                    </div>
                    <p className="mt-1 text-[0.82rem] leading-relaxed text-muted">{w.desc}</p>
                    <a href={w.href} target="_blank" rel="noreferrer" className="font-mono text-[0.64rem] text-ember hover:underline">
                      {w.href.replace('https://', '').replace('www.', '')}
                    </a>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionLabel>Work Experience</SectionLabel>
              <div className="space-y-4">
                {resume.experience.map((e) => (
                  <div key={e.role}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-[0.9rem] font-medium">{e.role}</h3>
                      <span className="font-mono text-[0.62rem] text-muted">{e.period}</span>
                    </div>
                    <p className="text-[0.8rem] text-muted">{e.org} · {e.place}</p>
                    <ul className="mt-1 space-y-0.5">
                      {e.points.map((pt) => (
                        <li key={pt} className="text-[0.8rem] leading-relaxed text-muted">{pt}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* side column */}
          <div className="space-y-8">
            <section>
              <SectionLabel>Education</SectionLabel>
              <div className="space-y-4">
                {education.map((ed) => (
                  <div key={ed.degree}>
                    <h3 className="text-[0.86rem] font-medium leading-snug">{ed.degree}</h3>
                    <p className="mt-0.5 text-[0.78rem] leading-snug text-muted">
                      {ed.school}
                      <span className="block">{ed.place} · {ed.period}</span>
                      {ed.note && <span className="block">{ed.note}</span>}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionLabel>Skills</SectionLabel>
              <div className="space-y-3">
                {about.skills.map((g) => (
                  <div key={g.group}>
                    <h3 className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-muted">{g.group}</h3>
                    <p className="mt-0.5 text-[0.8rem] leading-relaxed">{g.items.join(', ')}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionLabel>Certifications</SectionLabel>
              <ul className="space-y-1.5">
                {certifications.map((c) => (
                  <li key={c.name} className="text-[0.78rem] leading-snug">
                    {c.name}
                    <span className="block text-muted">{c.org} · {c.year}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionLabel>Languages</SectionLabel>
              <p className="text-[0.8rem] leading-relaxed">{resume.languages.join(' · ')}</p>
            </section>
          </div>
        </div>

        {/* sheet footer */}
        <div className="mt-10 border-t border-line pt-4">
          <p className="font-mono text-[0.62rem] tracking-[0.15em] text-muted">
            Full portfolio with live project links at {site}
          </p>
        </div>
      </div>

    </div>
  )
}
