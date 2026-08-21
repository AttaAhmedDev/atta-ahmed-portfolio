import { useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'
import { nav, profile, sectionIds } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useScrollY } from '../../hooks/useScrollY'
import { cn } from '../../lib/cn'
import { LinkButton } from '../ui/Button'
import { Container } from '../ui/Container'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const buttonRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLElement>(null)
  const active = useActiveSection(sectionIds)
  const scrollY = useScrollY()
  const condensed = scrollY > 12

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia('(min-width: 1280px)').matches) {
        setOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const close = () => setOpen(false)
  const toggle = () => setOpen((value) => !value)

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-[100] border-b transition-colors duration-300',
          condensed
            ? 'border-line bg-ink/95 backdrop-blur-md'
            : 'border-transparent bg-ink/80 backdrop-blur-sm',
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-3 sm:h-[4.25rem] sm:gap-4">
          <a
            href="#home"
            className="shrink-0 font-serif text-base tracking-wide whitespace-nowrap text-cream transition-colors hover:text-brass sm:text-lg"
            onClick={close}
          >
            {profile.name}
          </a>

          <nav className="hidden items-center xl:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={cn(
                  'relative rounded-sm px-2.5 py-2 text-[13px] tracking-wide text-muted transition-colors hover:text-cream after:absolute after:right-2.5 after:bottom-1 after:left-2.5 after:h-px after:bg-brass after:opacity-0 after:transition-opacity',
                  active === item.id && 'text-cream after:opacity-100',
                )}
                aria-current={active === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 xl:block">
            <LinkButton href="#contact" className="px-4 py-2 text-[13px]">
              Let's Talk
            </LinkButton>
          </div>

          <button
            ref={buttonRef}
            type="button"
            className="relative z-[101] inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-line text-cream touch-manipulation xl:hidden"
            aria-controls={menuId}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={toggle}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </Container>
      </header>

      {open
        ? createPortal(
            <div
              id={menuId}
              className="fixed inset-x-0 top-16 bottom-0 z-[99] flex flex-col bg-ink sm:top-[4.25rem] xl:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
            >
              <nav
                ref={panelRef}
                className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-[max(1.25rem,env(safe-area-inset-left))] pr-[max(1.25rem,env(safe-area-inset-right))] py-4 pb-[max(1.5rem,env(safe-area-inset-bottom))]"
                aria-label="Mobile"
              >
                {nav.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={close}
                    className={cn(
                      'flex min-h-12 items-center border-b border-line text-base text-muted sm:text-lg',
                      active === item.id && 'text-cream',
                    )}
                  >
                    {item.label}
                  </a>
                ))}
                <LinkButton href="#contact" className="mt-6 w-full" onClick={close}>
                  Let's Talk
                </LinkButton>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
