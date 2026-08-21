import { Mail } from 'lucide-react'
import { profile, whatsappUrl } from '../../data/site'
import { cn } from '../../lib/cn'
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './SocialIcons'

const links = [
  { label: 'GitHub', href: profile.github, icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.linkedin, icon: LinkedInIcon },
  { label: 'WhatsApp', href: whatsappUrl('Hi Atta, I found your portfolio.'), icon: WhatsAppIcon },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
] as const

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string
  iconClassName?: string
}) {
  return (
    <ul className={cn('flex items-center gap-3', className)}>
      {links.map((link) => {
        const Icon = link.icon
        return (
          <li key={link.label}>
            <a
              href={link.href}
              aria-label={link.label}
              title={link.label}
              className={cn(
                'inline-flex h-11 w-11 items-center justify-center rounded-sm border border-line text-muted transition-colors hover:border-brass hover:text-brass',
                iconClassName,
              )}
              {...(link.href.startsWith('http')
                ? { target: '_blank', rel: 'noreferrer noopener' }
                : {})}
            >
              <Icon size={16} />
            </a>
          </li>
        )
      })}
    </ul>
  )
}
