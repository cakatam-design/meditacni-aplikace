# Meditační aplikace — Kwan Um Zen

## Účel

PWA aplikace pro denní meditaci praktikujících zenové školy Kwan Um.

## Tech stack

- Vanilla HTML / CSS / JavaScript (žádný framework)
- PWA: manifest.json, service worker
- Playwright pro E2E testy

## Příkazy

```bash
npx http-server -p 8080          # lokální dev server
npx playwright test               # E2E testy
git push origin main              # deploy na zen.ongy.cz (vyžaduje souhlas)
```

## Architektura

Flat struktura — všechny zdrojové soubory v root:
- `index.html` — hlavní vstupní bod
- `app.js` — aplikační logika
- `style.css` — styly
- `sounds.js` — zvukové efekty
- `sw.js` — service worker
- `manifest.json` — PWA manifest
- `icon.svg`, `icon-192.png`, `icon-512.png` — ikony

## Workflow

1. Po každé změně spusť `/audit`
2. Před pushem: lokální test + Playwright screenshot
3. Deploy = git push do main → automaticky na zen.ongy.cz

## Gotchas

- Žádný build step — soubory se servírují přímo
- `manifest.json` je kritický — validuj po každé změně
- Service worker může cachovat staré verze — testuj v incognito
- `.brain/` nadřazeného projektu obsahuje systémový prompt pro kontext
