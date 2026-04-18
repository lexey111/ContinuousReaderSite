# ContinuousReader — Promotional Website

## What this is

Static promotional website for ContinuousReader — a native multiplatform reading app for macOS, iPadOS, and iPhone. The site is designed to be warm, inviting, and elegant — reflecting the calm, focused experience of reading.

## Design philosophy

- **Pastel tones, airy design** — reading doesn't tolerate fuss
- **Restrained but elegant** — clean typography, generous whitespace, subtle animations
- **Blue/orange butterfly** brand colors from the app icon
- **No heavy frameworks** — pure HTML/CSS/JS, minimal dependencies
- **Responsive** — looks great on desktop, tablet, and mobile

## Color palette

From the app's butterfly wing icon:
- Primary blue: `#4A90D9` (trust, calm)
- Accent orange: `#E8834A` (warmth, creativity)
- Background: `#FAFBFD` (almost white, slight warm tint)
- Text: `#2C3E50` (deep navy, not harsh black)
- Secondary text: `#7B8A9E`
- Card backgrounds: `#FFFFFF`
- Subtle borders: `#E8ECF1`
- Sepia accent: `#F5F0E8` (reading warmth)

## Site structure

```
ContinuousReaderSite/
  index.html          — Landing page (hero, highlights, CTA)
  features.html       — Detailed feature breakdown
  platforms.html      — Platform comparison (macOS / iPad / iPhone)
  download.html       — Download links, App Store badge (placeholder for now)
  css/
    style.css         — All styles (single file, sections marked with comments)
  js/
    main.js           — Navigation, scroll effects, language switching
    i18n.js           — All translations (EN, RU, UK, ES, FR, DE)
  img/
    logo.svg          — Butterfly wing mark
    hero/             — Hero section images/illustrations
    features/         — Feature section illustrations
    screenshots/      — App screenshots (real or placeholder)
  favicon.ico         — Browser tab icon
```

## Localization approach

All translatable text uses `data-i18n="key"` attributes. The `i18n.js` file contains translations for all 6 languages. Language switching is instant via JS — no page reload. Selected language is saved to `localStorage`.

```html
<h1 data-i18n="hero.title">Your books, everywhere</h1>
```

```js
// i18n.js
const translations = {
  en: { "hero.title": "Your books, everywhere" },
  ru: { "hero.title": "Ваши книги — везде" },
  ...
};
```

## Pages overview

### index.html (Landing)
- **Hero**: Large headline + subtitle + butterfly illustration + CTA button
- **Highlights**: 3-4 key selling points with icons (multi-format, cross-platform, beautiful reading, smart features)
- **Feature previews**: Brief cards linking to features.html
- **Testimonials/quotes area**: Placeholder for future reviews
- **Footer**: Links, language picker, copyright

### features.html (Features)
Detailed breakdown organized by category:
- **Reading experience**: Themes (17!), fonts, pagination, fullscreen clock
- **Library management**: Views (list/card/table), folders, search, sort, grouping
- **Import**: File picker, URL, OPDS catalogs, supported formats
- **Smart features**: Translation, Read Aloud, bookmarks, statistics
- **Sync**: iCloud (coming soon badge)

### platforms.html (Platforms)
Side-by-side comparison showing what's available on each platform:
- macOS: Full experience (table view, keyboard shortcuts, NSPanel windows, Settings dialog)
- iPad: Mid-tier (swipe actions, side panel, split view)
- iPhone: Streamlined (compact UI, bottom sheets, gesture navigation)

### download.html (Download)
- App Store badge (placeholder URL until published)
- System requirements
- What's included in free tier vs paid (when monetization is implemented)

## Key selling points to emphasize

1. **Multi-format**: EPUB, FB2, MOBI, HTML, TXT, RTF — plus ZIP variants
2. **Native & fast**: Pure SwiftUI, no Electron, no web views (except reader itself)
3. **Beautiful reading**: 17 themes, 9 fonts with variants, hyphenation, pagination
4. **Cross-platform**: One purchase, all your Apple devices
5. **OPDS catalogs**: Browse Standard Ebooks, Gutenberg, Feedbooks, custom servers
6. **Translation**: Built-in Apple Translation, word-level lookup
7. **Read Aloud**: TTS with animated word highlighting
8. **Statistics**: Track your reading habits and streaks
9. **Privacy**: Your data stays on your devices (iCloud opt-in)
10. **No subscriptions**: Buy once, use forever

## Typography

- Headlines: System font stack (SF Pro on Apple, -apple-system fallback)
- Body: Georgia or similar serif for that "reading" feel in content sections
- UI text: System sans-serif
- Monospace: Not used on the site

## Animation guidelines

- Subtle fade-in on scroll (IntersectionObserver)
- Smooth parallax on hero section (optional, respect prefers-reduced-motion)
- Language switch: gentle crossfade
- Hover effects on cards and buttons: soft shadow lift
- NO: auto-playing videos, carousels, popups, cookie banners

## Screenshots strategy

For the initial version, use placeholder colored rectangles styled to look like app windows. Later, replace with real screenshots. Important: use fake book data to avoid copyright issues with real book covers/titles.

Fake book suggestions for screenshots:
- "The Wandering Stars" by Elena Voss
- "Gardens of Tomorrow" by Marcus Chen
- "Silver Bells" by Anna Petrova
- "The Last Lighthouse" by James O'Brien
- "Whispers in the Rain" by Sofia Garcia

## Domain considerations

Domain TBD. There's a planned free version "JustReader" that needs a paired domain. Possible patterns:
- continuousreader.app / justreader.app
- continuousreader.com / justreader.com
- getreader.app (shared domain with /continuous and /just paths)

Currently deployed without a domain — can be tested locally or via GitHub Pages.

## Build & Deploy

No build step needed — pure static files. To preview locally:
```bash
cd ContinuousReaderSite
python3 -m http.server 8000
# Open http://localhost:8000
```

Future deployment: GitHub Pages, Netlify, or Cloudflare Pages.

## Developer

Oleksii Koshkin — lexey111@gmail.com
