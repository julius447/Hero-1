# Ampy Hero 1 — handover till Chris (startsidans section 1)

> Ägargodkänd 2026-07-18 ("PERFEKTION"). Referens-rendering: **https://julius447.github.io/Hero-1/**
> (repo `julius447/Hero-1`, commit `a20119f`). **Det som godkänts är exakt dessa bytes — konvertera
> format, ändra aldrig design** (värden, färger, brytpunkter är kanon).

## Innehåll

| Fil | Vad | Var den hamnar |
|---|---|---|
| `hero-1-bricks.json` | **Enklaste vägen** — klistra in direkt i Bricks | Bricks builder → paste |
| `hero-1.css` | Produktions-CSS, scopad `.ampy-hero1`, px | FluentSnippets CSS-snippet (eller Code-elementets CSS-pane — JSON:en bär redan samma CSS) |
| `hero-1.html` | Ren markup (hårdkodad godkänd copy + ACF-karta i kommentaren) | referens / Bricks code element |
| `hero-1.php` | `[ampy_hero1]`-shortcode med ACF-fält + fallbacks (`php -l` ren) | FluentSnippets PHP-snippet — alternativ till JSON-vägen |
| `assets/hero-1-bg.webp` | Bakgrundsbilden, 2000×1654 | Mediabiblioteket → `/wp-content/uploads/hero-1-bg.webp` |
| `preview/index.html` | Lokal parity-render som inkluderar leverans-CSS:en **by reference** | öppna i webbläsare för QA |

## Installation (JSON-vägen, rekommenderad)

1. Ladda upp `assets/hero-1-bg.webp` till mediabiblioteket (filnamn `hero-1-bg.webp` → URL:en `/wp-content/uploads/hero-1-bg.webp` som JSON/HTML pekar på; blir filnamnet annat, uppdatera `<img src>` i code-elementet).
2. Kopiera **hela innehållet** i `hero-1-bricks.json` → i Bricks builder på startsidan: klistra in (Ctrl/Cmd-V). Sektionen "Hero 1 (Evify)" med ett code-element landar.
3. **Signera koden**: code-elementet kommer osignerat (signaturer är sajt-specifika) — öppna elementet och klicka "Sign code" med ett konto som har code-execution-rättighet.
4. ACF-taggarna i elementet: `{acf_hero_heading}` · `{acf_hero_text}` · `{acf_google_rating}` · `{acf_google_business_profile_url}` — samma fält som gamla heron. Sätt fältvärdena till den godkända copyn (nedan). Vill ni köra utan ACF: byt taggarna mot de hårdkodade strängarna ur `hero-1.html`.
5. Placera sektionen som **första sektion** på startsidan, direkt under headern. Mini-menyn (block 2) ligger kvar direkt under.

## Godkänd copy (låst av ägaren)

- **H1:** `El i hemmet, gjort ordentligt.`
- **Lead:** `Våra egna behöriga elektriker hjälper dig i hela Sverige, med allt från elfel och elcentraler till laddbox och batterilagring.`
- **CTA:** `Kostnadsfri rådgivning` → `/kontakt/`
- **Trust:** `5,0 på Google` (länkad till Google-profilen) + 5 stjärnor + `|` + `Över 3 000 installationer per år`

## Konfig-knoppar (de ENDA värden som får röras)

- `--ampy-header-h` / `--ampy-header-h-m` (i `.ampy-hero1`, toppen av CSS:en): **måste matcha den
  riktiga headerns höjd** (76px desktop / 66px ≤992 i header-prototypen). Fel värde = hero-höjden
  stämmer inte mot viewporten.
- `AMPY_HERO1_IMG` i `hero-1.php` om bild-URL:en avviker.

## Det som INTE får "fixas" (medvetna beslut)

- **Trust-raden:** `<strong>5,0</strong> på Google` ligger i EN span med vanligt mellanslag — splittra
  den inte i flera flex-barn (flex-gapet skapar då ett fult hål; det var en bugg vi tog bort).
  Baslinjerna är pixel-uppmätta: G-ikon 16px, stjärnor 13,5px, separator 1×15px — behåll exakt.
- **Typografin är pinnad till Outfit** (till skillnad från mini-menyns block som ärver) — den godkända
  renderingen är Outfit 700 i H1. Sajten self-hostar redan Outfit; ingen extra font-laddning behövs.
- **Tre responsiva lägen:** desktop (>992) · mellanband 561–992 (centrerad tempererad komposition) ·
  mobil ≤560 (**textblocket vertikalt centrerat** med 7vh optisk bias, paragraf 15,5px = exakt 3 rader
  @360–414). Verifierat på 1440/1280/1024/853/768/650/540/414/390/375 — ändra inte brytpunkterna.
- **Veil-gradienterna** har tre varianter (desktop / 993–1200 / ≤560) — de är läsbarhets-kalibrerade
  mot just den här bilden.
- `fetchpriority="high"` + `loading="eager"` på bilden (LCP) och `aria-hidden` på dekorativa SVG:ar.

## QA efter implementation (5 min)

1. Öppna `preview/index.html` lokalt bredvid sajten — de ska vara identiska (desktop + 390).
2. Sajten på 1440: paragrafen = **2 rader**. På 375–414: paragrafen = **3 rader**, textblocket
   vertikalt centrerat i bilden.
3. Trust-raden: allt på EN baslinje desktop; tvåraders-stack nere till vänster på mobil.
4. Lighthouse: bilden ska vara LCP-elementet, inga CLS från heron.

## Öppna punkter (ägaren, inte Chris)

- ⚑ Header-CTA säger "Gratis rådgivning" → `/offert/`, hero-CTA "Kostnadsfri rådgivning" → `/kontakt/`
  — två namn/mål för samma handling; ägaren enhetligar.
- ⚑ Bekräfta att `5,0` är aktuellt Google-betyg vid go-live (ACF-fältet styr).
- ⚑ Äkta AI-4K-version av bilden är kredit-gated (Higgsfield) — nuvarande 2000px är uppskalad
  (Lanczos + korn) och godkänd; 4K-filen byts rakt av på samma URL när krediter finns.
