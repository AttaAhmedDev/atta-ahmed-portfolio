import { profile, footer } from '../../data/site'
import { Container } from '../ui/Container'
import { SocialLinks } from '../ui/SocialLinks'

export function Footer() {
  return (
    <footer className="border-t border-line py-10 pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-pretty text-muted">{footer.note}</p>
        <div className="flex flex-col gap-3 sm:items-end">
          <SocialLinks />
          <p className="font-mono text-[11px] leading-relaxed text-pretty text-muted/80">
            {profile.role}
          </p>
        </div>
      </Container>
    </footer>
  )
}
