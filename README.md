# ContinuousReader site — Pack 1 (English draft)

A static, English-only draft of the ContinuousReader promo site. Designed
to be deployed to GitHub Pages or any static host with zero build step.

## What's in here

```
.
├── index.html          # Home page
├── features.html       # Detailed feature tour
├── platforms.html      # Mac / iPad / iPhone breakdown
├── download.html       # Pricing, comparison, FAQ
├── css/
│   └── style.css       # All styles, shared across pages
├── js/
│   └── main.js         # Sticky nav, scroll reveals, lightbox
├── img/
│   ├── logo.svg        # Butterfly logo (used in nav + footer)
│   └── favicon.svg     # Same as logo
├── fonts/              # Self-hosted variable fonts
│   └── *.woff2         # Source Serif 4, Inter, JetBrains Mono
├── README.md           # This file
└── TODO.md             # Punch list before going live + later
```

## How to deploy

This is a pure static site. No build step.

1. Replace the contents of your `lexey111/ContinuousReaderSite` repo with
   the files in this package (or merge — see "What this replaces" below).
2. Commit and push.
3. GitHub Pages will serve the new version within a minute or two at
   https://lexey111.github.io/ContinuousReaderSite/

## What this replaces vs preserves

**Replaces** (these are the new versions):

- `index.html`, `features.html`, `platforms.html`, `download.html`
- `css/style.css` (your previous CSS, if any)
- `js/main.js`
- `img/logo.svg`, `img/favicon.svg`
- All fonts in `fonts/`

**Preserves** (left untouched, you decide):

- `js/i18n.js` — your existing translation file. The new HTML doesn't
  use `data-i18n` attributes yet (Pack 2 will add them); your existing
  i18n file won't break anything but also won't do anything until then.
- Anything else in the repo not listed above (CNAME, README, etc.).

## How to test locally

The site uses no build tooling, so any static file server works. Three
easy options:

```sh
# Python
cd site-package && python3 -m http.server 8000

# Node
cd site-package && npx serve

# VS Code with Live Server extension — right-click index.html → "Open with Live Server"
```

Then visit http://localhost:8000.

## What still needs to happen

See `TODO.md` for the full punch list. The short version:

- Replace placeholder App Store buttons on `download.html` with real
  Apple-provided badges and real App Store URLs (after publishing apps)
- Add real screenshots in `img/screenshots/` and replace placeholder
  divs (lightbox already wired up)
- Register the email address used in the footer (or change it)
- Create a `privacy.html` page (App Store will require this anyway)

Ask Claude for Pack 2 (full localization to RU/UK/ES/FR/DE) when you're
ready.

## Browser support

Targets evergreen browsers:

- Safari 16.4+ (March 2023)
- Chrome 113+ (May 2023)
- Firefox 121+ (December 2023)
- Edge 113+ (May 2023)

Older browsers will get a slightly degraded experience (no scroll-reveal
animations, no native dialog lightbox) but everything will still be
readable and navigable.

## Performance

First paint should be quick:

- HTML: ~10–25 KB per page (uncompressed)
- CSS: ~25 KB
- JS: ~3 KB
- Fonts: ~850 KB total, but only relevant subsets load (Latin pages
  load ~250 KB, Cyrillic adds ~140 KB on top)
- No external dependencies, no CDN, no analytics

Total page weight on first load (cold cache) for an English visitor:
about 300 KB. After that, fonts are cached and pages are 30–50 KB each.

## Credits

- Fonts: [Source Serif 4](https://github.com/adobe-fonts/source-serif)
  by Adobe (OFL),
  [Inter](https://rsms.me/inter/) by Rasmus Andersson (OFL),
  [JetBrains Mono](https://www.jetbrains.com/mono/) (OFL).
- Self-hosted via [Fontsource](https://fontsource.org).
- Logo, design, and copy: by Oleksii Koshkin, with assistance from Claude.
