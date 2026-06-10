# Screenshots

**Status: complete.** Every screenshot referenced by the site exists; there are
no broken callouts or inline images. Audit: `grep` all `*.html` + `js/i18n.js`
for `img/screenshots/*.webp` → 0 missing.

## Capture + process workflow

1. **Capture** as PNG.
   - **Mac windows:** `screencapture -R x,y,w,h` (get the window rect from
     `osascript -e 'tell application "System Events" to tell process
     "ContinuousReader" to get {position, size} of window 1'`). Raise the app
     first so nothing overlaps. A floating panel/sheet → capture just its rect.
   - **iOS:** `xcrun simctl io <UDID> screenshot out.png`, then wrap in a device
     frame: `python3 tools/frame-device.py in.png out-framed.png` (phone/tablet
     picked by aspect ratio).
2. **Convert / optimize:** `cwebp -q 88 out.png -o img/screenshots/NAME.webp`.
   Downscale first if the long edge > 3000px: `sips -Z 3000 in.png --out tmp.png`.
3. **Round corners (Mac window captures only):**
   `tools/round-corners.sh img/screenshots/NAME.webp` — `-R` captures come in as
   flat rectangles with square corners + dark desktop "nubs"; this bakes a
   transparent rounded mask. (Device-framed shots already carry their own
   rounding — don't run it on those.)
4. The HTML references `.webp`; **source PNGs are gitignored** (`img/screenshots/*.png`).

## Language per page

- `platforms.html` — Mac = Ukrainian, iPad = English, iPhone = Russian (shows
  localization at a glance).
- `features.html` + `index.html` — all **English** (UI chrome; OPDS catalog
  *content* may be the server's own language, which is fine).

## Content rules

- **No third-party book covers.** The card/list/table shots use the synthetic
  demo library (`Tools/DemoLibraryGen`, run with seed 42) whose covers are
  procedurally generated — never real published covers (App Store review +
  copyright). Reader prose uses public-domain Gutenberg books.

## What's on the site

- **Home (`index.html`):** 3 inline device shots — `home-mac-two-page` (sepia),
  `home-ipad-norton` (Norton/Terminal), `home-iphone-dark-scroll` (one theme per
  device) + lightbox dots (`theme-sepia`,
  `theme-typewriter`, `theme-terminal`, `theme-picker-modes`, `translation-panel`,
  `library-views`, `voice-reader-highlight`, `library-files-finder` — the
  on-disk library in Finder, callout on the "read it with `cat`" line).
- **Platforms (`platforms.html`):** `platforms-mac-library-table`,
  `platforms-ipad-side-panel`, `platforms-iphone-fullscreen-clock`, plus
  `ipad-settings-panel` — a framed **landscape** iPad with the reading settings
  panel open, shown inline in the "Same reader, every screen" shared section.
- **Features (`features.html`):** themes-picker, palettes-grid, featured-themes,
  day-night-mode, two-page-spread, chapter-map, progress-drawer, bookmarks,
  search, fullscreen + fs-quick-settings / fs-quick-nav / fs-clock-island /
  fs-clock-bar, translation-panel, translation-stats, voice-reader, library-list,
  library-tabs, view-list / view-card / view-table, library-search, folders,
  info-panel, bulk-ops, quick-preview, book-card-mac / -ipad / -iphone,
  import-dialog, import-ways, opds-browser, opds-filter, opds-single-import,
  opds-batch-import, location, sync-insights,
  sync-wizard, welcome-wizard, feature-toggles, notes.

## Callouts intentionally removed (minor features, no good/safe shot)

s1 fonts · s1 typography · s1 position · progress drawer li-callouts (tapered /
marker modes / Go-To) · translation display modes (only / side-by-side /
interlinear) · color tags · genres · supported formats · file-size warning ·
custom location · readable storage · OPDS default catalogs / custom catalog /
breadcrumbs / server search / covers / In-Library badge / watchers.

## Known minor cosmetics (optional re-shoot)

- iPad status bar shows a Spanish date on `features-notes` and
  `features-book-card-ipad` (content is English). Switch the simulator language
  to English to re-shoot if it ever bothers.

> Note (2026-06-10): the built-in Backup/Restore feature was removed from the app
> (#170 — the library folder itself is the backup), so no `features-backup` shot is
> needed; the s5-backup section no longer has a screenshot callout.
