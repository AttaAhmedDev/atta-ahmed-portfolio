# Atta Ahmed — Portfolio

Personal site for **Atta Ahmed**, Software Engineer and Full-Stack Developer (Python & React).

## Run locally

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

## Edit your content

Almost everything on the site is driven by one file:

**`src/data/site.ts`**

Update these before sending the site to recruiters:

| Field | What to change |
| --- | --- |
| `profile.email` | Your real email |
| `profile.github` | Your GitHub profile URL |
| `profile.linkedin` | Your LinkedIn URL |
| `projects` | Real project names, descriptions, stacks, GitHub, and live URLs. Set `isPlaceholder: false`. |
| `experience` | Real roles, dates, and bullets. Set `isPlaceholder: false`. |
| `education` | Degree, university, year, coursework. Set `isPlaceholder: false`. |
| `profile.formEndpoint` | Optional Formspree / Web3Forms URL for the contact form |

Placeholders are wrapped in `[brackets]` on purpose so nothing fake is claimed.

## Resume

Replace this file:

```
public/resume.pdf
```

The Download Resume buttons already point to `/resume.pdf`.

## Contact form

- If `profile.formEndpoint` is set, the form POSTs JSON to that URL.
- If it is empty, the form opens a `mailto:` draft using `profile.email`.

## Stack

React, TypeScript, Tailwind CSS, Vite.
