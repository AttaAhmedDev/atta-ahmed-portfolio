import { useState, type FormEvent } from 'react'
import { contact, isPlaceholderHref, profile, whatsappUrl } from '../../data/site'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'
import { SocialLinks } from '../ui/SocialLinks'
import { cn } from '../../lib/cn'

type Status = 'idle' | 'submitting' | 'success' | 'error'

type Errors = {
  name?: string
  email?: string
  message?: string
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(name: string, email: string, message: string): Errors {
  const errors: Errors = {}
  if (name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!emailPattern.test(email.trim())) errors.email = 'Please enter a valid email address.'
  if (message.trim().length < 12) errors.message = 'Please write a message of at least 12 characters.'
  return errors
}

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(name, email, message)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setStatusMessage('Please fix the highlighted fields.')
      return
    }

    setStatus('submitting')
    setStatusMessage('')

    try {
      if (profile.formEndpoint) {
        const response = await fetch(profile.formEndpoint, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: name.trim(), email: email.trim(), message: message.trim() }),
        })
        if (!response.ok) throw new Error('Request failed')
      } else {
        const chat = whatsappUrl(
          `Hello Atta, I'm ${name.trim()}.\nEmail: ${email.trim()}\n\n${message.trim()}`,
        )
        if (isPlaceholderHref(chat)) {
          throw new Error('placeholder-whatsapp')
        }
        window.open(chat, '_blank', 'noopener,noreferrer')
      }

      setStatus('success')
      setStatusMessage(
        profile.formEndpoint
          ? 'Message sent. Thank you — I will get back to you.'
          : 'Opening WhatsApp. Send the message there and I will get back to you.',
      )
      setName('')
      setEmail('')
      setMessage('')
      setErrors({})
    } catch (error) {
      setStatus('error')
      if (error instanceof Error && error.message === 'placeholder-whatsapp') {
        setStatusMessage('Update profile.phone in src/data/site.ts before sending WhatsApp messages.')
      } else {
        setStatusMessage('Something went wrong. Please message me on WhatsApp or email.')
      }
    }
  }

  return (
    <Section id="contact" ariaLabel="Contact">
      <Container className="grid min-w-0 gap-10 sm:gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <Reveal>
          <p className="font-mono text-[10px] tracking-[0.18em] text-brass uppercase sm:text-[11px] sm:tracking-[0.22em]">
            09 / Contact
          </p>
          <h2 className="mt-3 max-w-md font-serif text-[1.75rem] leading-tight text-pretty text-cream sm:text-4xl md:text-[2.6rem]">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-pretty text-muted sm:text-base">
            {contact.body}
          </p>
          <div className="mt-8">
            <p className="mb-3 font-mono text-[11px] tracking-wide text-muted uppercase">Elsewhere</p>
            <SocialLinks />
            <p className="mt-4 text-sm break-words text-muted">
              Email:{' '}
              <a href={`mailto:${profile.email}`} className="text-cream underline-offset-4 hover:text-brass hover:underline">
                {profile.email}
              </a>
            </p>
            <p className="mt-2 text-sm text-muted">
              WhatsApp:{' '}
              <a
                href={whatsappUrl('Hi Atta, I found your portfolio.')}
                className="text-cream underline-offset-4 hover:text-brass hover:underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                {profile.phone}
              </a>
            </p>
            <p className="mt-2 text-sm text-muted">Location: {profile.location}</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <form
            onSubmit={onSubmit}
            noValidate
            className="border border-line bg-surface p-5 sm:p-6 md:p-8"
            aria-describedby="form-status"
          >
            <Field
              id="name"
              label="Name"
              value={name}
              error={errors.name}
              autoComplete="name"
              onChange={setName}
            />
            <Field
              id="email"
              label="Email"
              type="email"
              value={email}
              error={errors.email}
              autoComplete="email"
              onChange={setEmail}
            />
            <Field
              id="message"
              label="Message"
              value={message}
              error={errors.message}
              textarea
              onChange={setMessage}
            />

            <Button type="submit" className="mt-2 w-full sm:w-auto" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send Message'}
            </Button>

            <p
              id="form-status"
              role="status"
              aria-live="polite"
              className={cn(
                'mt-4 min-h-6 text-sm',
                status === 'success' && 'text-ok',
                status === 'error' && 'text-danger',
                status === 'idle' && 'text-muted',
              )}
            >
              {statusMessage}
            </p>
          </form>
        </Reveal>
      </Container>
    </Section>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = 'text',
  textarea = false,
  autoComplete,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  textarea?: boolean
  autoComplete?: string
}) {
  const describedBy = error ? `${id}-error` : undefined
  const fieldClass = cn(
    'mt-2 w-full max-w-full rounded-sm border bg-ink px-3 py-3 text-base text-cream outline-none transition-colors placeholder:text-muted/50 focus:border-brass md:py-2.5 md:text-sm',
    error ? 'border-danger' : 'border-line',
    textarea && 'min-h-32 resize-y',
  )

  return (
    <div className="mb-5">
      <label htmlFor={id} className="font-mono text-[11px] tracking-[0.16em] text-muted uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={fieldClass}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(event) => onChange(event.target.value)}
          className={fieldClass}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-xs text-danger">
          {error}
        </p>
      ) : null}
    </div>
  )
}
