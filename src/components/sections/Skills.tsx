import { skillGroups } from '../../data/site'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SectionHeading } from '../ui/SectionHeading'
import { SkillIcon } from '../ui/SkillIcon'

export function Skills() {
  return (
    <Section id="skills" ariaLabel="Technical skills" className="border-y border-line bg-ink-2">
      <Container>
        <Reveal>
          <SectionHeading
            kicker="02 / Capabilities"
            title="Technical Skills"
            description="A practical stack for designing APIs, storing data, shipping interfaces, and deploying them."
          />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-x-clip border border-line bg-line sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 70} className="min-w-0 bg-ink-2 p-5 sm:p-6 md:p-7">
              <h3 className="font-mono text-[11px] tracking-[0.2em] text-brass uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="inline-flex items-center gap-2 border border-line bg-ink/60 px-2.5 py-1.5 text-sm text-cream/90">
                      <SkillIcon name={item} className="text-brass" />
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
