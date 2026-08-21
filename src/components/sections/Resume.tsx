import { Download } from 'lucide-react'
import { profile } from '../../data/site'
import { LinkButton } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

export function Resume() {
  return (
    <Section id="resume" ariaLabel="Resume" className="border-y border-line bg-ink-2">
      <Container>
        <Reveal>
          <div className="flex flex-col items-stretch justify-between gap-6 border border-line bg-ink px-5 py-8 sm:gap-8 sm:px-6 sm:py-10 md:flex-row md:items-center md:px-10 md:py-14">
            <div className="min-w-0">
              <p className="font-mono text-[11px] tracking-[0.22em] text-brass uppercase">
                08 / Resume
              </p>
              <h2 className="mt-3 max-w-xl font-serif text-[1.75rem] leading-tight text-pretty text-cream sm:text-3xl md:text-4xl">
                Want to see my full background?
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-pretty text-muted">
                A concise overview of my background as a software engineer — experience,
                education, and the Python and React work I do across the stack.
              </p>
            </div>
            <LinkButton href={profile.resumeUrl} download className="w-full shrink-0 sm:w-auto">
              <Download size={16} />
              Download Resume
            </LinkButton>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
