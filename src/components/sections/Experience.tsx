import { experience } from '../../data/site'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Experience() {
  return (
    <Section id="experience" ariaLabel="Experience" className="border-y border-line bg-ink-2">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="06 / Path"
            title="Experience"
            description="Roles and projects that shaped how I design and ship software."
          />
        </Reveal>

        <ol className="relative mt-10 ml-1 border-l border-line sm:mt-14 sm:ml-2 md:ml-3">
          {experience.map((entry, index) => (
            <li key={entry.id} className="relative pb-10 pl-6 last:pb-0 sm:pb-12 sm:pl-8 md:pl-12">
              <span
                className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full border border-brass bg-ink"
                aria-hidden="true"
              />
              <Reveal delay={index * 70}>
                <article className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="font-mono text-[11px] tracking-[0.18em] text-brass uppercase">
                      {entry.category}
                    </p>
                    {entry.isPlaceholder ? (
                      <span className="border border-line px-2 py-0.5 font-mono text-[10px] text-muted uppercase">
                        Placeholder
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 font-serif text-xl text-pretty text-cream sm:text-2xl">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-pretty break-words text-muted">
                    {entry.organization}
                    <span className="mx-2 text-line-strong">·</span>
                    {entry.period}
                    {entry.location ? (
                      <>
                        <span className="mx-2 text-line-strong">·</span>
                        {entry.location}
                      </>
                    ) : null}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-pretty text-cream/85">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
