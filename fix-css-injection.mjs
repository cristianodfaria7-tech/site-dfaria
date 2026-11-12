/**
 * fix-css-injection.mjs
 * Remove o link ao luxe-3d.css de todas as páginas EXCETO experiencia-3d.html
 * A seção de regiões usa Tailwind nativo do projeto — não precisa de CSS extra
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';

const ROOT = 'd:/site dfariagastronomia';

// Páginas que DEVEM manter o luxe-3d.css (apenas a experiência cinematográfica)
const KEEP_LUXE = new Set(['experiencia-3d.html']);

const files = readdirSync(ROOT).filter(f => f.endsWith('.html'));
let updated = 0;
let skipped = 0;
let unchanged = 0;

for (const file of files) {
  const path = join(ROOT, file);
  const name = basename(file);

  if (KEEP_LUXE.has(name)) {
    console.log(`⏭️  Mantendo luxe-3d: ${name}`);
    skipped++;
    continue;
  }

  let html = readFileSync(path, 'utf8');
  const original = html;

  // Remover QUALQUER referência ao luxe-3d.css (com ou sem aspas simples/duplas, com ou sem /)
  html = html.replace(
    /<link\s[^>]*href=["'][^"']*luxe-3d\.css["'][^>]*\/?>/gi,
    ''
  );

  if (html !== original) {
    writeFileSync(path, html, 'utf8');
    console.log(`✅ ${name} — luxe-3d.css removido`);
    updated++;
  } else {
    console.log(`➖ ${name} — sem luxe-3d.css (OK)`);
    unchanged++;
  }
}

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`✅ Corrigidas:  ${updated} páginas`);
console.log(`⏭️  Mantidas:   ${skipped} páginas`);
console.log(`➖ Sem mudança: ${unchanged} páginas`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
