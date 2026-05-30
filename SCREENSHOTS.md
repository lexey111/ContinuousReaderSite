# Screenshot capture checklist

Tracks every screenshot the site references. Drop captured files into
`img/screenshots/` using the **exact filename** in the "File" column, then
tell Claude — he'll resize/optimize and confirm the HTML reference works.

## Rules (from TODO.md)

- **Dimensions:** Mac 1600×1000 · iPad 1600×1200 · iPhone 800×1600 portrait.
  Shoot bigger if convenient — Claude downscales. Retina/2× is fine.
- **Format:** capture as PNG. Claude converts large ones to optimized
  JPEG/WebP where it helps, keeping PNG for crisp-UI shots.
- **Fake library content:** use plausible-but-fake titles/authors (classic
  public-domain + made-up sci-fi/fantasy). Never real reading habits.
- **Language per page:**
  - `platforms.html` — Mac=Ukrainian, iPad=English, iPhone=Russian (shows
    localization at a glance; keep this rotation).
  - `features.html` + `index.html` — all **English** (uniform).

Status legend: ⬜ missing (capture needed) · 🟡 vector-mockup placeholder PNG present (replace with a real screenshot) · ✅ done

> All references are now `.png`. The 🟡 rows currently show auto-rendered
> mockup placeholders (converted from the old SVG drafts) so nothing looks
> broken; replace them with real screenshots at the same filename.

---

## Phase 1 — high-impact inline illustrations (above-the-fold, big images)

These are the large `<img>` blocks on each page. Placeholders exist, so the
site looks fine today, but these are the first things visitors see.

### Home (index.html) — lightbox dots, English

| Status | File | Platform | Shows |
|---|---|---|---|
| 🟡 | home-mac-two-page.png | Mac | Two-page spread, reading |
| 🟡 | home-ipad-sepia.png | iPad | Ochre/sepia theme reading |
| 🟡 | home-iphone-dark-scroll.png | iPhone | Dark theme, scroll mode |

### Platforms (platforms.html) — big inline, **rotated languages**

| Status | File | Platform | Lang | Shows |
|---|---|---|---|---|
| 🟡 | platforms-mac-library-table.png | Mac | UK | Library, table view, info panel open |
| 🟡 | platforms-ipad-side-panel.png | iPad | EN | Library with side panel |
| 🟡 | platforms-iphone-fullscreen-clock.png | iPhone | RU | Fullscreen reading + pixel-art clock |

### Features (features.html) — big inline, English

| Status | File | Platform | Shows |
|---|---|---|---|
| 🟡 | features-themes-picker.png | Mac | Theme picker dropdown, live Aa previews |
| 🟡 | features-two-page-spread.png | Mac | Two-page spread + progress bar + chapter map |
| 🟡 | features-progress-drawer.png | Mac | Progress drawer: tapered slider, markers, Go To |
| 🟡 | features-translation-panel.png | Mac | Reader w/ selected word + interlinear panel |
| 🟡 | features-voice-reader.png | Mac | Read Aloud: scrolling paragraphs, word highlight |
| 🟡 | features-library-list.png | Mac | Three view modes side by side |
| 🟡 | features-opds-browser.png | Mac | OPDS browser, cover thumbnails, filter bar |
| 🟡 | features-welcome-wizard.png | Mac | Welcome wizard — Choose library view step |
| 🟡 | features-search-panel.png | Mac | Settings — Features panel with toggles |

### Home extra lightbox dots — **missing entirely**, English

| Status | File | Platform | Shows |
|---|---|---|---|
| ⬜ | theme-sepia.png | any | Ochre theme reading |
| ⬜ | theme-typewriter.png | any | Typewriter theme (brass gauge chrome) |
| ⬜ | theme-terminal.png | any | Terminal theme (Norton, mono on blue) |
| ⬜ | theme-picker-modes.png | Mac | Theme picker fixed vs day&night modes |
| ⬜ | translation-panel.png | any | Translation panel in reader |
| ⬜ | library-views.png | Mac | List/Card/Table views |
| ⬜ | voice-reader-highlight.png | any | Voice reader word highlight |

> These never had a placeholder (the old drafts only mocked up the big
> inline images, not these dots), so they show a broken-image lightbox on
> click until captured. `data-screenshot` paths already point at `.png`.

---

## Phase 2 — feature detail lightbox shots (open on dot click)

All English, mostly Mac unless noted. These only appear when a visitor clicks
a callout dot — broken today (files missing). Lower priority than Phase 1 but
many of them.

### Themes & typography
| Status | File | Shows |
|---|---|---|
| ⬜ | features-palettes-grid.png | Palette family grid (5 families × 7 tones) |
| ⬜ | features-featured-themes.png | Typewriter + Terminal side by side |
| ⬜ | features-day-night-mode.png | Light vs dark theme assignment |
| ⬜ | features-fonts.png | Font picker, grouped, live Aa previews |
| ⬜ | features-typo.png | Typography controls: size, line height, align, spacing |

### Reading / position / progress
| Status | File | Shows |
|---|---|---|
| ⬜ | features-position.png | Position restored to exact paragraph |
| ⬜ | features-progress-tapered.png | Tapered slider thick→thin with S-curve |
| ⬜ | features-progress-marker-modes.png | Progress drawer marker modes |
| ⬜ | features-progress-go-to.png | Go To dialog, page/percent pill switch |
| ⬜ | features-chapter-map.png | Mac chapter map, proportional rows |
| ⬜ | features-bookmarks.png | Bookmarks panel, 7-color, notes |
| ⬜ | features-iphone-go-to.png | iPhone fullscreen Go To sheet (segmented) |
| ⬜ | features-notes.png | Rich-text notes editor + toolbar |

### Fullscreen
| Status | File | Shows |
|---|---|---|
| ⬜ | features-fs-quick-settings.png | Fullscreen quick-settings (iPhone L zone / iPad menu) |
| ⬜ | features-fs-quick-nav.png | Fullscreen precise-nav (iPhone R zone / iPad menu) |
| ⬜ | features-fullscreen.png | iPhone fullscreen + optional pixel-art clock |
| ⬜ | features-fs-clock-island.png | Bottom island: clock + progress |
| ⬜ | features-fs-clock-bar.png | Thin bottom bar: clock + progress full width |

### Translation
| Status | File | Shows |
|---|---|---|
| ⬜ | features-translate-only.png | Translation-only mode (compact) |
| ⬜ | features-translate-side-by-side.png | Side-by-side source + translation |
| ⬜ | features-translate-interlinear.png | Interlinear: translation under original |
| ⬜ | features-translation-stats.png | Translation statistics dashboard |

### Library
| Status | File | Shows |
|---|---|---|
| ⬜ | features-library-tabs.png | Library / Latest / Pinned tabs |
| ⬜ | features-view-list.png | List view, adaptive rows |
| ⬜ | features-view-card.png | Card view, responsive grid |
| ⬜ | features-view-table.png | Table view (Mac), sortable columns |
| ⬜ | features-library-search.png | Search, sort, filter popover |
| ⬜ | features-color-tags.png | Color tag chips on rows |
| ⬜ | features-genres.png | Genre chip picker |
| ⬜ | features-folders.png | Nested folder sidebar + Trash |
| ⬜ | features-info-panel.png | Three-island info panel |
| ⬜ | features-bulk-ops.png | Selection mode, bulk toolbar |
| ⬜ | features-quick-preview.png | Quick preview sheet (first paragraphs) |

### Book Card
| Status | File | Shows |
|---|---|---|
| ⬜ | features-book-card-mac.png | Book Card on Mac (floating window) |
| ⬜ | features-book-card-ipad.png | Book Card on iPad (page-sized sheet) |
| ⬜ | features-book-card-iphone.png | Book Card on iPhone (full-screen, segmented) |

### Formats & import
| Status | File | Shows |
|---|---|---|
| ⬜ | features-formats.png | Supported file formats grid |
| ⬜ | features-import-ways.png | Browse / drag-drop / share sheet |
| ⬜ | features-import-dialog.png | Import dialog, metadata fields |
| ⬜ | features-file-size.png | File size warning dialog |

### OPDS
| Status | File | Shows |
|---|---|---|
| ⬜ | features-opds-default-catalogs.png | Default catalogs (Std Ebooks, Gutenberg, Feedbooks) |
| ⬜ | features-opds-custom-catalog.png | Add custom catalog + Basic Auth |
| ⬜ | features-opds-breadcrumbs.png | Breadcrumb trail, middle truncation |
| ⬜ | features-opds-search.png | Server-side search |
| ⬜ | features-opds-filter.png | Local filter bar |
| ⬜ | features-opds-covers.png | Cover thumbnails |
| ⬜ | features-opds-library-badge.png | "In Library" badge |
| ⬜ | features-opds-batch-import.png | Batch import queue |
| ⬜ | features-opds-single-import.png | Single import + post-import options |
| ⬜ | features-opds-watchers.png | OPDS watchers list |

### Storage & backup
| Status | File | Shows |
|---|---|---|
| ⬜ | features-storage.png | Books folder in Finder, readable filenames |
| ⬜ | features-backup.png | Backup creation dialog (ZIP export) |
| ⬜ | features-location.png | Custom library location settings |
