import fs from 'node:fs'
import path from 'node:path'

const lines = [
  'BT',
  '/F1 22 Tf',
  '72 720 Td',
  '(Atta Ahmed) Tj',
  '/F1 12 Tf',
  '0 -28 Td',
  '(Software Engineer  |  Full-Stack Python & React Developer) Tj',
  '0 -36 Td',
  '(This is a placeholder resume file.) Tj',
  '0 -18 Td',
  '(Replace public/resume.pdf with your actual CV.) Tj',
  '0 -32 Td',
  '(The portfolio already links to /resume.pdf.) Tj',
  'ET',
]

const stream = lines.join('\n')
const objects = [
  '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
  '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
  '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n',
  `4 0 obj\n<< /Length ${stream.length} >>\nstream\n${stream}\nendstream\nendobj\n`,
  '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
]

let offset = 9
const offsets = [0]
let body = '%PDF-1.4\n'

for (const obj of objects) {
  offsets.push(offset)
  body += obj
  offset += Buffer.byteLength(obj)
}

let xref = `xref\n0 6\n0000000000 65535 f \n`
for (let i = 1; i <= 5; i++) {
  xref += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`
}

const startxref = Buffer.byteLength(body)
const pdf = `${body}${xref}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF\n`

const out = path.join('public', 'resume.pdf')
fs.writeFileSync(out, pdf)
console.log(`Wrote ${out}`)
