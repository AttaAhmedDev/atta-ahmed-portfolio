import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'

const styles: Record<Variant, string> = {
  primary: 'bg-brass text-ink hover:bg-brass-dim border-transparent',
  secondary:
    'bg-transparent text-cream border-line-strong hover:border-brass hover:text-brass',
  ghost: 'bg-transparent text-muted border-transparent hover:text-cream',
}

const base =
  'inline-flex max-w-full items-center justify-center gap-2 rounded-sm border px-5 py-2.5 text-sm font-medium tracking-wide transition-[color,background-color,border-color,transform] duration-200 disabled:cursor-not-allowed disabled:opacity-50 min-h-11 touch-manipulation active:translate-y-px'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

export function Button({
  children,
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cn(base, styles[variant], className)} {...props}>
      {children}
    </button>
  )
}

type LinkButtonProps = {
  href: string
  children: ReactNode
  className?: string
  variant?: Variant
  download?: string | boolean
  target?: string
  rel?: string
  onClick?: () => void
}

export function LinkButton({
  href,
  children,
  className,
  variant = 'primary',
  download,
  target,
  rel,
  onClick,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      className={cn(base, styles[variant], className)}
      download={download}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
