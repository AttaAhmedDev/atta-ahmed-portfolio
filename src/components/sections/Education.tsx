import { education } from '../../data/site'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <Section id="education" ariaLabel="Education">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="07 / Study"
            title="Education"
            description="Formal study and certifications that support the engineering work above."
          />
        </Reveal>

        <Reveal delay={80}>
          <article className="mt-10 max-w-3xl border border-line bg-surface p-5 sm:mt-12 sm:p-6 md:p-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
              <div className="min-w-0">
                <h3 className="font-serif text-xl text-pretty text-cream sm:text-2xl">{education.degree}</h3>
                <p className="mt-1 text-muted">{education.university}</p>
              </div>
              <div className="sm:text-right">
                <p className="font-mono text-sm text-brass">{education.year}</p>
              </div>
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {education.achievements.length > 0 ? (
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                    Highlights
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {education.achievements.map((item) => (
                      <li key={item} className="text-sm text-cream/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {education.certifications.length > 0 ? (
                <div>
                  <h4 className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
                    Certifications & courses
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {education.certifications.map((item) => (
                      <li key={item} className="text-sm text-cream/90">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </article>
        </Reveal>
      </Container>
    </Section>
  )
}
