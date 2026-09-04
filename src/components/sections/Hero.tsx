import { ArrowDown } from 'lucide-react'
import { hero, profile } from '../../data/site'
import { LinkButton } from '../ui/Button'
import { Container } from '../ui/Container'
import { SocialLinks } from '../ui/SocialLinks'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden border-b border-line"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <Container className="relative grid min-w-0 items-center gap-10 py-12 sm:gap-12 sm:py-16 md:py-24 xl:grid-cols-[minmax(0,1.15fr)_minmax(240px,0.85fr)] xl:gap-16 xl:py-28">
        <div className="min-w-0">
          <p
            className="rise font-mono text-[10px] leading-relaxed tracking-[0.14em] text-brass uppercase sm:text-[11px] sm:tracking-[0.22em]"
            style={{ animationDelay: '60ms' }}
          >
            {profile.role}
          </p>
          <p
            className="rise mt-5 text-sm text-muted sm:mt-6 sm:text-base"
            style={{ animationDelay: '140ms' }}
          >
            {hero.greeting}
          </p>
          <h1
            className="rise mt-3 max-w-3xl font-serif text-[clamp(1.7rem,7.4vw,3.35rem)] leading-[1.15] text-balance text-cream"
            style={{ animationDelay: '220ms' }}
          >
            {hero.title}
          </h1>
          <p
            className="rise mt-5 max-w-xl text-[0.95rem] leading-relaxed text-pretty text-muted sm:mt-6 sm:text-lg"
            style={{ animationDelay: '300ms' }}
          >
            {hero.body}
          </p>
          <div
            className="rise mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
            style={{ animationDelay: '380ms' }}
          >
            <LinkButton href={hero.primaryCta.href} className="w-full sm:w-auto">
              {hero.primaryCta.label}
            </LinkButton>
            <LinkButton
              href={hero.secondaryCta.href}
              variant="secondary"
              download
              className="w-full sm:w-auto"
            >
              {hero.secondaryCta.label}
            </LinkButton>
          </div>
          <div className="rise mt-7 sm:mt-8" style={{ animationDelay: '460ms' }}>
            <SocialLinks />
          </div>
        </div>

        <div className="rise mx-auto w-full max-w-sm min-w-0 xl:mx-0 xl:max-w-none" style={{ animationDelay: '320ms' }}>
          <Portrait />
        </div>
      </Container>

      <Container className="relative pb-8 sm:pb-10">
        <a
          href="#about"
          className="inline-flex min-h-11 items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-muted uppercase transition-colors hover:text-brass"
        >
          Scroll
          <ArrowDown size={12} />
        </a>
      </Container>
    </section>
  )
}

function Portrait() {
  return (
    <figure className="border border-line bg-surface/80 p-2 sm:p-3">
      <div className="overflow-hidden border border-line bg-ink">
        <img
          src={profile.photo}
          alt={`${profile.name}, ${profile.role}`}
          width={800}
          height={1000}
          className="aspect-[4/5] h-auto w-full object-cover object-[center_8%]"
        />
      </div>
      <figcaption className="flex items-end justify-between gap-3 px-1 pt-3 pb-1">
        <div>
          <p className="font-serif text-lg leading-tight text-cream sm:text-xl">{profile.name}</p>
          <p className="mt-1 font-mono text-[10px] tracking-[0.16em] text-muted uppercase">
            {profile.location}
          </p>
        </div>
        <p className="hidden font-mono text-[10px] tracking-[0.16em] text-brass uppercase sm:block">
          Portrait
        </p>
      </figcaption>
    </figure>
  )
}
