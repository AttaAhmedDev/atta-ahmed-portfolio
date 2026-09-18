import { spawnSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const html = path.resolve(root, 'scripts/resume.html')
const out = path.resolve(root, 'public/resume.pdf')
const chrome =
  process.env.CHROME_PATH ||
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

if (!fs.existsSync(html)) {
  throw new Error(`Missing ${html}`)
}

const fileUrl = `file:///${html.replaceAll('\\', '/')}`
const result = spawnSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    `--print-to-pdf=${out}`,
    fileUrl,
  ],
  { stdio: 'inherit' },
)

if (result.error) {
  throw result.error
}

if (result.status !== 0) {
  process.exit(result.status ?? 1)
}

console.log(`Wrote ${out}`)
