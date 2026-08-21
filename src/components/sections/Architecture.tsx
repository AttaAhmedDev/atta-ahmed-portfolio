import { architectureLayers } from '../../data/site'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'

export function Architecture() {
  return (
    <Section id="architecture" ariaLabel="Full-stack architecture">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="03 / System"
            title="From Frontend to Backend"
            description="How I think about a complete application — each layer has a job, and the contracts between them should stay explicit."
          />
        </Reveal>

        <ol className="mt-10 sm:mt-14">
          {architectureLayers.map((layer, index) => (
            <li key={layer.id}>
              <Reveal delay={index * 60}>
                <article className="grid gap-3 border-t border-line py-6 sm:py-8 lg:grid-cols-[minmax(0,13rem)_minmax(5.5rem,9rem)_minmax(0,1fr)] lg:items-start lg:gap-10">
                  <div className="flex min-w-0 items-baseline gap-3 sm:gap-4">
                    <span className="shrink-0 font-mono text-[11px] text-brass">0{index + 1}</span>
                    <h3 className="font-serif text-xl text-pretty text-cream sm:text-2xl md:text-[1.7rem]">
                      {layer.name}
                    </h3>
                  </div>
                  <p className="font-mono text-[11px] tracking-[0.16em] break-words text-muted uppercase lg:pt-2">
                    {layer.layer}
                  </p>
                  <p className="max-w-2xl text-sm leading-relaxed text-pretty text-muted md:text-[0.95rem]">
                    {layer.summary}
                  </p>
                </article>
              </Reveal>
              {index < architectureLayers.length - 1 ? (
                <p className="font-mono text-[11px] tracking-[0.3em] text-brass/70" aria-hidden="true">
                  ↓
                </p>
              ) : (
                <div className="border-t border-line" />
              )}
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
