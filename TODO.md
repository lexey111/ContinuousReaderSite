# TODO — ContinuousReader site

This is the punch list of everything that needs to be done before / shortly
after going live. Items are grouped by when they need to happen.

## Before going live

These are the things that should happen before the site is shared with anyone
publicly. Most are placeholder replacements.

### Replace App Store buttons

The two "Download on the App Store" buttons on `download.html` are placeholder
text-style buttons with `href="#"`. Apple provides official SVG App Store
badges with download / branding guidelines:

- Get the badges: https://tools.applemediaservices.com/app-store/
- Replace `<a href="#" class="path-store-button">Download on the App Store</a>`
  with the official badge SVG (or `<img>` of the PNG).
- Update `href` to your actual App Store URL once apps are published. Until
  then, link to a "coming soon" page or leave as `#`.
- Same applies to all `cta-primary` buttons that link to `download.html` —
  these are fine to leave as page links, but the actual final purchase link
  on `download.html` is the one that matters.

### Register email and (optionally) domain

Several places use `hello@continuousreader.app` as a contact email:

- Footer "Contact" link
- "Get in touch" link in features.html intro
- Support FAQ on download.html
- About section on download.html

If you want to use this email, register the `continuousreader.app` domain
(or alternative — `.app` is Google-owned, requires HTTPS, costs ~$15/year).
Alternatives: `continuousreader.com`, `continuousreader.io`, or use a
personal domain. If you'd rather skip a domain for now, replace these
links with your existing contact email.

### Add the privacy page

The footer links to `privacy.html` which doesn't exist yet. Either:

- Create a simple privacy page (you have plenty of source material — the
  About section on `download.html` and the Privacy FAQ are already strong
  starting points)
- Or remove the link from the footer until you have one

App Store submission will require a public privacy policy URL anyway, so
this needs to happen before submission.

### Smoke test

- Open each page in a browser locally to verify they render correctly
- Check responsive layout at 900px and 600px breakpoints
- Verify all internal navigation works (Features ↔ Platforms ↔ Download
  ↔ Home)
- Verify that `index.html` is the file GitHub Pages serves at the root

## When you have screenshots

Currently every screenshot location uses a placeholder div with a label and
description. To replace with real images:

1. Place screenshots in `img/screenshots/` (create the folder).
2. Recommended dimensions:
   - Mac screenshots: 1600×1000 (1.6 MP, ~250–400 KB as JPEG)
   - iPad screenshots: 1600×1200 (1.92 MP)
   - iPhone screenshots: 800×1600 portrait
3. Keep filenames descriptive: `mac-library-with-info-panel.jpg`,
   `ipad-side-panel.jpg`, `iphone-fullscreen-clock.jpg`, etc.
4. Replace each placeholder block with:

   ```html
   <div class="screenshot-frame">
     <img src="img/screenshots/mac-library-with-info-panel.jpg"
          alt="Mac library with info panel open"
          data-full="img/screenshots/mac-library-with-info-panel.jpg">
     <div class="screenshot-caption">
       UI in <span class="lang-tag">Українська</span>
     </div>
   </div>
   ```

   The `data-full` attribute is optional. If not set, the lightbox uses the
   regular `src`. Use `data-full` if you want the inline image to be a smaller
   version and the lightbox to load a higher-resolution one.

5. Lightbox is already implemented in `js/main.js` — clicking any
   `.screenshot` or `.screenshot-frame` containing an `<img>` opens it in a
   full-screen overlay. ESC or click-on-backdrop closes.

### Screenshot language plan

The platforms page deliberately uses **three different UI languages** in the
three platform screenshots, to demonstrate localization at a glance:

- Mac block — Ukrainian UI
- iPad block — English UI
- iPhone block — Russian UI

Keep this rotation when you take real screenshots — adjust the language tags
in HTML if you change the assignment.

For features.html, all screenshots should be in **English** for a uniform
look (it's a denser page, mixing languages would feel chaotic there).

### About fake book content

For all screenshots, your library should contain books with **fake but
plausible** titles and authors so you don't accidentally promote / leak
real-world reading habits. Some categories that look natural:

- Classic public-domain titles (Tolstoy, Twain, Verne, etc.)
- Made-up but realistic-sounding sci-fi and fantasy
- A couple of technical / non-fiction titles

If you want help generating a fake library, ask Claude — it can produce
20–30 plausible book metadata records (title, author, year, genre, file
size) in a few seconds.

## When you're ready for localization

Pack 2 of this site delivery will include:

- Full translations for all 4 pages into Russian, Ukrainian, Spanish,
  French, German
- `data-i18n` attribute markup added throughout HTML
- A new `js/i18n.js` with all translation strings (your existing one in
  the repo will be replaced)
- Language picker logic wired up so the EN button at the top right actually
  cycles languages

Tell Claude when you want this and it'll be done in one delivery.

## Future / nice to have

These are not blocking anything and can wait until you have user feedback
or specific need.

### Performance polish

- Add `<link rel="preload">` for the most common font subset (Latin Source
  Serif 4) — improves first paint by ~100ms on slow connections
- Convert `body::before` decorative gradient to a single static SVG/PNG if
  the radial gradients ever cause performance issues (unlikely but possible
  on low-end devices)

### SEO

- Add Open Graph meta tags (`og:title`, `og:description`, `og:image`)
  to each page for nicer link previews when shared on social media or
  in messengers
- Add a `sitemap.xml` once you have a domain
- Add a `robots.txt`

### Analytics

You said you're going organic-first with no analytics. If/when you want
data on visitor behavior:

- **Plausible** or **Fathom** — privacy-respecting, no cookies, no GDPR
  paperwork required, ~$10/month each
- Avoid Google Analytics — your audience cares about privacy and you've
  built a brand around it; tracking them would be off-brand

### Things to consider but not now

- Newsletter signup (only when you have something worth telling people about)
- Blog / changelog page (only when you have material)
- Social media accounts (only when you have time to actually use them)
- A `/press` page with logo downloads, screenshots, and a short pitch
  (only when journalists actually start asking)

Keep the surface area small until there's a real reason to expand it.
