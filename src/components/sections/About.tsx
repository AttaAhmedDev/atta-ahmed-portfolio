import { about, profile } from '../../data/site'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <Section id="about" ariaLabel="About">
      <Container className="grid min-w-0 gap-8 sm:gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
        <Reveal>
          <SectionHeading kicker={`${about.kicker} / About`} title={about.title} />
          <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-pretty text-muted sm:mt-8 sm:space-y-5 sm:text-[1.05rem]">
            <p className="font-serif text-lg italic leading-snug text-pretty text-cream/90 sm:text-xl md:text-2xl">
              {profile.headline}
            </p>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="border border-line bg-surface p-5 sm:p-6 md:p-8">
            <p className="font-mono text-[11px] tracking-[0.22em] text-brass uppercase">
              Focus
            </p>
            <ul className="mt-5 space-y-4">
              {about.focus.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-cream/90 sm:text-[0.95rem]">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
