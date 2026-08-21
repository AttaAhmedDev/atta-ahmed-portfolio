import { approach } from '../../data/site'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Approach() {
  return (
    <Section id="approach" ariaLabel="Engineering approach">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="05 / Method"
            title="How I Think as an Engineer"
            description="Tools matter. The sequence matters more: understand the problem, design the system, build it cleanly, then improve it."
          />
        </Reveal>

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">
          {approach.map((stage, index) => (
            <Reveal key={stage.id} delay={index * 80} className="min-w-0">
              <li className="h-full border border-line bg-surface p-5 transition-[border-color,transform] duration-300 hover:border-line-strong motion-safe:hover:-translate-y-0.5 sm:p-6 md:p-7">
                <p className="font-mono text-sm text-brass">{stage.id}</p>
                <h3 className="mt-3 font-serif text-xl text-cream sm:mt-4 sm:text-2xl">{stage.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-pretty text-muted sm:mt-3">{stage.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
