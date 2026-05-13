# ContinuousReader Site — Content Reference

This document contains the finalized English copy for all four pages of the
ContinuousReader promotional website: `index.html`, `features.html`,
`platforms.html`, and `download.html`.

**Notation used throughout:**

- `[SCREENSHOT: ...]` — placeholder where a real screenshot will be embedded later
- `{CR}` / `{JR}` / `{CR+JR}` — feature availability badges. `CR` = ContinuousReader (paid), `JR` = JustReader (free)
- `[contact email]` — placeholder for the contact address; to be replaced with
  `hello@continuousreader.app` (or equivalent) once the domain is registered

**Tone of voice:**

- Second person ("you") for marketing content; third-person neutral for the
  About/final section on download.html
- Languages with formal address (Russian, Ukrainian, German, French): use the
  polite form ("Вы", "Sie", "vous")
- Technical details welcome on features.html and in FAQ; benefit-language on
  index.html
- No "coming soon" — the site launches when the product is ready, not before
- No "beautiful", "elegant", "seamless", "powerful" — show, don't tell

**Site tagline (appears in footer across all pages):**

> Built for readers who don't just browse.

---

## Navigation (all pages)

Header, sticky:

```
ContinuousReader [logo]    Features   Platforms   Download          [Language picker]
```

Languages supported via `data-i18n`: EN, RU, UK, ES, FR, DE.

---

# index.html

## Hero

**H1:** A book, continued.

**Subtitle:** Close it on your Mac at midnight. Open it on your iPhone on the
morning commute. Same book. Same page. Same paragraph.

**Primary CTA:** Get ContinuousReader — $19.99
**Secondary CTA:** Or try JustReader, free

**[HERO ILLUSTRATION: isometric wireframe — Mac in foreground, iPad behind it,
iPhone behind that, all on the same axis; an open book behind all devices, with
an illuminated dropcap visible as projection on each screen]**

---

## Section 2 — Continuous, across your devices

**Eyebrow:** Continuous

**H2:** Across your devices.

**Body:**

Close the book on your Mac at midnight. Open it on your iPhone on the morning
commute. Same book. Same paragraph. Down to the word you stopped at.

What syncs: your position, your bookmarks, your notes, your library. What
doesn't: the way each device is set up to read.

A Mac is a chair, two-page spread, 32 pt serif. An iPad is one page, comfortable
size, sometimes sepia. An iPhone is scroll mode, dark theme, small text, one
hand. Each screen has its own ideal setup. ContinuousReader remembers them
separately — and keeps the reading itself in sync between them.

---

## Section 3 — Continuous, across how you read

**Eyebrow:** Continuous

**H2:** Across how you read.

**Body:**

Start the chapter in the evening, eyes on the page. Step into the car in the
morning, switch to Read Aloud. The voice picks up from where you stopped
reading — not the nearest chapter, not the beginning of the file, but the
paragraph you were on.

Listen for half an hour. Arrive. Sit down with your Mac. The book is already
scrolled to the paragraph the voice just finished. Keep reading where listening
left off.

Word-by-word highlighting with a soft rounded indicator that glides with the
voice. Adjustable speed, pitch, and voice selection. Change speed mid-sentence —
playback picks up from the exact word, not the nearest paragraph.

Reading with your eyes and listening with your ears are the same session, the
same position, the same book.

---

## Section 4 — Typography

**Eyebrow:** The reading

**H2:** Typography that respects the text.

**Body:**

Most reading apps get typography wrong. Either they pretend the screen is a
book, with skeuomorphic page turns and fake paper, or they treat text as a data
dump — browser defaults, ragged columns, no hyphenation.

ContinuousReader does neither.

Forty-one reading themes. Clean light and deep dark. Sepia and pastel for long
sessions. High-contrast variants for outdoor reading. A **Typewriter** theme in
ivory and dark brown — locked to American Typewriter, dressed in quiet
steampunk: brass pocket-watch progress gauge, copper keycaps, mechanical
drum-counter read-outs in the bottom bar. A **Terminal** theme — white
monospace on deep blue. If you recognize the palette, you'll know why it's
there. Three custom slots where you define your own colors — background, text,
accent. Your palette, your theme.

Nine typefaces across serif, sans, and monospace — all system fonts, rendered
natively, no downloads. Justified text with real hyphenation in Latin, Cyrillic,
CJK, Arabic, and Greek scripts. Adjustable line height, paragraph spacing,
indentation, alignment, and page padding.

Continuous scroll, single-page, or two-page spread on Mac. Every setting
applies instantly, without losing your position.

---

## Section 5 — Translation

**Eyebrow:** The translation

**H2:** Read in one language, think in another.

**Body:**

Highlight a word. The translation appears in a panel at the bottom of the
screen — not as a popup that covers the text, not as a modal you have to
dismiss. Keep reading. The translation updates as you select.

Translate and Bookmark sit at the top of the selection menu — not buried under
five other items you don't use. Reorder them in settings, whichever you reach
for more often.

Many target languages, provided by Apple's on-device Translation framework.
Nothing leaves your Mac.

Every word you look up can be remembered. ContinuousReader tracks the languages
you translate between, the words you've seen before, and the books where you
needed help most — useful for language learners, researchers, and anyone
reading across languages. Turn tracking off, and nothing is recorded. Turn it
on, and export the full history as an HTML report.

---

## Section 6 — Your library, your files

**Eyebrow:** Your library

**H2:** Thousands of books. All yours.

**Body:**

Your entire library in three views: a detailed list for scanning, covers in a
grid for browsing, or a sortable table for the librarian in you. Group by
author, by series, or by folder. Tag with color dots. Filter by genre. Pin the
books you're actively reading.

EPUB, FB2, MOBI, HTML, TXT, RTF — including ZIP variants. Drag and drop a
file. Or drag a URL straight from your browser — no copy-paste, no import
dialog, the book appears in your library. Or browse OPDS catalogs — Standard
Ebooks, Project Gutenberg, Feedbooks, or your own server. Watch feeds for new
entries in a series you follow. Import in batches, assign folders and color
tags on the way in.

Book content is stored as clean HTML on disk, with readable filenames. No
cloud-locked database, no proprietary format, no vendor lock-in. Back up the
whole library to a ZIP file whenever you want. Restore it on another Mac, or
keep multiple libraries and switch between them. Point the app at any folder as
your library root.

Your library is a folder of files. Read it with `cat` if you want to.

---

## Section 7 — Native

**Eyebrow:** Native

**H2:** Not a web app. Not Electron. Not compromise.

**Body:**

ContinuousReader is built in Swift and SwiftUI — Apple's native languages. That
means instant launch, smooth scroll at any scroll speed, native keyboard
shortcuts on Mac, proper swipe gestures on iPhone, system-level text selection,
and a binary that's a fraction of the size of its Electron-wrapped competitors.

On Mac, you get an island design inspired by System Settings — rounded
floating containers on a recessed background — with keyboard shortcuts,
floating panels, a Book Card that hovers above the app, and drag-and-drop
everywhere. On iPad, native swipe actions and split-view readiness. On iPhone,
one-hand-friendly gestures and bottom sheets that feel like iOS, not like a
web form.

---

## Section 8 — The choice (Two apps)

**Eyebrow:** Two apps

**H2:** ContinuousReader or JustReader?

**Body:**

Two reading apps. One foundation. Your choice.

### Column 1 — ContinuousReader

**$19.99, once. Not monthly.**

A full reading workspace. Build a library of thousands of books. Sync your
position, bookmarks, and reading settings across Mac, iPad, and iPhone. OPDS
catalogs. Bookmarks, notes, statistics. Every feature, on every device, forever.

Available on the App Store.

→ **Get ContinuousReader**

### Column 2 — JustReader

**Free. Truly free.**

A single-book reader. Open a file, read it, move on. The same beautiful
typography, the same translation, the same Read Aloud — in a focused,
single-file app. No library, no sync, no bookmarks. Just reading.

Available on the App Store.

→ **Get JustReader**

---

## Section 9 — Final CTA

**H2:** Start reading.

**Body:** Two apps. Free or full. One download away.

- **Get ContinuousReader — $19.99**
- **Get JustReader — Free**

---

## Footer (all pages)

**Left:** ContinuousReader logo + tagline *"Built for readers who don't just
browse."*

**Middle:** Features / Platforms / Download / Privacy Policy

**Right:** Language picker / Contact: `[contact email]` / © 2026

---

# features.html

## Page header

**H1:** Features

**Subtitle:** A closer look at how ContinuousReader is built and what it can do.

**Intro paragraph:**

This page is a tour, not a spec sheet. If you're comparing reading apps on
specific capabilities — formats, sync behavior, theming, translation — you'll
find them organized below. If you want a shorter overview, start with
[the home page](/). If there's something specific you need to know that isn't
here, [get in touch](mailto:[contact email]).

**Legend:** Features marked **(ContinuousReader)** are part of the full app.
Features marked **(JustReader)** are also in the free single-book reader. Most
of the reading experience is shared; the library, sync, and OPDS browser are
ContinuousReader only.

---

## Section 1 — The reader

**Intro:** The reading experience itself. Typography, themes, navigation, and
the small things you interact with while reading a book.

### Seventeen themes, organized in seven groups {CR+JR}

Themes in ContinuousReader are more than color schemes. Each one defines
background, text color, progress bar tint, bookmark marker palette, and — for
some — the reading font itself.

- **System**: Light, Dark, Auto (follows macOS/iOS appearance)
- **Pastel**: Sepia, Celestial, Lemon — for long daytime sessions
- **Neutral**: Grey
- **Dark**: Dark Grey, Hacker, Terminal
- **Vintage**: Typewriter, Typewriter Dark — ivory and dark brown, locked to American Typewriter, with a steampunk-flavoured bottom bar (brass pocket-watch progress gauge, copper keycaps, mechanical drum-counter timer & navigation read-out)
- **Extreme**: Midday, Midnight — four contrast levels, bold text at the highest level
- **Custom**: three user-defined slots with full color picker control

The **Terminal** theme deserves a note of its own: white monospace text on
deep blue, with a dedicated monospace font picker (Menlo or American
Typewriter). If the palette looks familiar, you already know why it's there.

**[SCREENSHOT: theme picker dropdown with live "Aa" previews in current font]**

### Nine typefaces, three groups {CR+JR}

All system fonts — no downloads, no licensing, no rendering differences between
devices.

- **Serif**: Georgia, Palatino, Charter, Iowan Old Style
- **Sans-serif**: Helvetica Neue, SF Pro, Avenir Next
- **Monospace**: Menlo on Mac, Courier New on iOS; American Typewriter everywhere

The font picker groups them with labeled sections and shows live "Aa" previews
in the theme you're currently using.

### Full typography control {CR+JR}

- **Size**: 12 to 48 pixels
- **Line height**: continuously adjustable, from tight to spacious
- **Paragraph spacing**: small, default, or generous
- **Text indent**: toggle first-line indentation
- **Alignment**: left, justified, or right
- **Hyphenation**: automatic when justified, with content-based language detection for Latin, Cyrillic, CJK, Arabic, and Greek scripts
- **Page padding**: continuous slider from edge-to-edge to generous margins
- **Image display**: show, mask (reveal on hover), or hide entirely

Every setting applies instantly — no page reload, no position lost.

### Continuous scroll, page, or two-page spread {CR+JR}

The default reader renders the book as a single continuous page — no artificial
breaks, just smooth vertical scrolling.

Switch to **Page** mode for a paginated experience with animated or instant
page turns and page separators. On Mac, **Two pages** mode renders a classic
book spread. All three modes preserve your exact position when switching.

**[SCREENSHOT: two-page spread on Mac with progress bar and chapter map]**

### Position that survives anything {CR+JR}

Your reading position is tracked more precisely than most readers bother with —
which means it survives:

- Font changes (size, family, line height)
- Window resizes
- Device switches (Mac to iPad, iPad to iPhone) — ContinuousReader with sync enabled
- Switching between scroll and page modes
- Reopening the book weeks later with different settings

When you return to a book, the reader fades in at the exact paragraph you
left, not the nearest chapter.

### Progress drawer and markers {CR+JR}

A slim progress bar along the bottom expands on hover (Mac) or tap (iOS) to
reveal reading position. Click or double-tap to open the **progress drawer**:

- **Tapered slider**: a custom track that's thick for the part you've read and hair-thin for what's ahead, with a smooth S-curve at your current position
- **Drag-to-seek and tap-to-seek** with debounced scrolling
- **Entry marker**: a filled dot with a dashed ring showing where you started this session
- **Marker modes**: switch the track to show chapters, images, or nothing. Chapter markers show titles on hover. Image markers show thumbnail previews.
- **Go To**: jump to any page number or percentage, with a sliding pill mode switch

In ContinuousReader, an additional marker mode shows **color-coded bookmarks**
along the track, each with its preview text and page number on hover.

All marker positions are computed live from the document — not stored
estimates, always matching where things actually are.

**[SCREENSHOT: progress drawer with tapered slider, markers, and Go To input]**

### Chapter navigation {CR+JR}

Chapter structure is extracted on import from EPUB spine items, FB2 sections,
and HTML headings, with proper heading priority and scene-break separator
filtering (`* * *`, `---`, etc.).

The **Chapters** tab in the side panel lets you jump to any chapter with one
click. On Mac, you can switch between two display modes:

- **Chapter list**: a static list with the current chapter highlighted and bolded
- **Chapter map**: proportional variable-height rows — taller rows for longer chapters — with a thin left rail track, a sliding thumb, and a viewport-proportional indicator. Page numbers are hidden in map mode for a cleaner spatial view. If you've used the minimap in a code editor, you'll recognize the shape — the book as a page of structure, not just text.

On iPad and iPhone, chapter list only, with current chapter highlighted.

### Bookmarks {CR}

Add a bookmark with **Cmd+B** or via the text selection context menu. The app
captures your selected text as a preview, or — if nothing is selected — the
first visible paragraph.

- **Seven colors** to categorize bookmarks (last-used color is remembered)
- **Notes** attached to any bookmark
- **Color filter bar** when you have two or more colors in a book
- **Text highlighting** in the reader itself — per-color tints, multi-paragraph for long selections, inline for short ones
- **Live marker positions** on the progress bar, with tooltip previews
- **Nearest bookmark** highlighted in bold in the side panel as you read

Bookmarks belong to the library. JustReader, which reads one book at a time
without storage, doesn't retain them.

### In-book search {CR+JR}

Open in-book search from the **Search** tab in the reader's bottom toolbar, or
press **Cmd+F**. Match counter, previous/next navigation, case-sensitive
toggle, and yellow/orange highlights in the text. Position markers appear
along the scrollbar so you can see matches at a glance.

Search works the same way as translation, settings, and navigation — as a tab
in the reader's bottom toolbar, not a floating window that covers the text.

### Notes {CR}

Each book has a personal notes field with a **rich text editor**. The
formatting toolbar supports bold, italic, underline, strikethrough, H1–H3
headings, bullet and numbered lists, blockquotes, horizontal rules, and four
highlight colors (yellow, green, blue, pink). On iPhone, the toolbar splits
into two rows to fit everything without scrolling.

Notes are stored with full formatting and rendered the same way in the side
panel and in exported reports.

### Fullscreen (iOS) {CR+JR}

Double-tap the reading area to hide the bottom bar and enter fullscreen. The
top safe area is ignored so content extends under the Dynamic Island or camera
housing. Double-tap again to exit. The mode auto-exits when you open settings,
search, or the side panel.

Optional **pixel-art clock** shows the time as dotted numerals on the
background of the page — adjustable position and contrast, visible enough to
check at a glance, unobtrusive enough to ignore while reading. For anyone
who's ever lost track of time in a book and missed their stop.

---

## Section 2 — Translation and Read Aloud

**Intro:** Two features that shape how you engage with a book, beyond just
reading it visually. Both integrate with the reader's position tracking, so
you never lose your place when switching modes.

### Translation — inline, non-disruptive {CR+JR}

Highlight any word or phrase. The translation appears in a panel at the bottom
of the screen that stays out of the way while you keep reading. No popup, no
modal, no context switch.

Three display modes in the panel:

- **Translation only** — just the translated text, maximally compact
- **Side by side** — source and translation next to each other
- **Interlinear** — the translation directly under the original, word alignment preserved

Switch modes in the toolbar, or set your preferred default in settings.

- **Many target languages**, provided by Apple's on-device Translation framework
- **Nothing leaves your Mac** — all translation happens locally
- **Selection menu reordering**: Translate and Bookmark sit at the top of the right-click / long-press menu by default. Reorder them in settings — whichever you reach for more often goes first.

**[SCREENSHOT: reader with selected word and interlinear translation panel]**

### Translation statistics {CR}

Every word you look up can be remembered. ContinuousReader tracks:

- The languages you translate between (and their frequency)
- Words you've looked up before (with counts)
- Books where you translated the most
- Time-based activity

Tracking can be toggled any time. Turn it off and nothing is recorded. Turn it
on and export the full history as an HTML report — useful for language
learners, researchers, and translators.

Future: export to Anki or other flash-card formats, if there's demand.

### Read Aloud {CR+JR}

Built-in text-to-speech that reads from your current position. Not a separate
mode — an extension of the same reading session.

- **Position sync on open**: the voice reader matches the paragraph you were visually on
- **Position sync on close**: the visual reader scrolls to the paragraph the voice finished
- **Word-by-word highlighting**: a soft rounded indicator glides from word to word as the voice reads, automatically keeping the current paragraph scrolled into view
- **Transport controls**: play/pause, skip forward/back, elapsed time (monospaced digital timer), paragraph counter
- **Adjustable speed**: continuous slider with real-time effect — change speed mid-sentence and playback picks up from the exact word, not the nearest paragraph
- **Pitch and voice**: inline pitch slider, voice picker with Auto language detection or manual selection. Disabled during playback to prevent disruption — pause, adjust, resume.
- **Theme integration**: all controls, progress bar, and word highlight use your current reader theme colors

**[SCREENSHOT: Read Aloud view with scrolling paragraphs, current word highlighted, transport controls]**

---

## Section 3 — The library

**Section badge:** ContinuousReader only

**Intro:** How ContinuousReader organizes, displays, and manages your
collection. The library is where you spend time between books — it should be
fast, flexible, and stay out of your way.

JustReader reads one book at a time and skips library management entirely.
Everything below is ContinuousReader territory.

### Three tabs

The library is organized into three tabs, each with its own purpose:

- **Library**: the complete collection, with all filtering, sorting, and folder scoping applied
- **Latest**: recently opened or recently imported books (switchable), ignoring folder filters
- **Pinned**: your favorites, also ignoring folder filters

Latest and Pinned work as shortcuts — the books you want fast access to,
without fiddling with filters.

### Three view modes

- **List view**: adaptive row layout with five detail levels (full, compact, minimal, essential, mobile). Shows cover, title, author, series, progress, genre chips, and a context menu.
- **Card view**: responsive grid with cover images, 4-directional keyboard navigation, cover zoom animation, double-click to open, frosted glass selection checkboxes. On iPhone, fixed 2-column grid.
- **Table view** (Mac only): sortable columns, column customization, two-level hierarchy, inline color dots in the title column, annotation sheet, and a full-width actions toolbar above the table.

All three support **multi-mode grouping**: none, author, series, or author &
series — with collapsible sections and shared section headers.

**[SCREENSHOT: three view modes side by side on Mac]**

### Search, sort, filter

- **Scoped search**: filter by title, author, series, comment, annotation, or genre. Instant debounced results.
- **Eight sort options**: title, author, series, date added, date opened, date published, reading progress, and file size. Each cycles through ascending, descending, and cleared states.
- **Unified filter popover**: color and genre filters combined in one place. Checkmark selection, "All" reset buttons, "Manage Genres..." access. Active filters show inline badges — up to 3 color dots then a count, genre name with ellipsis then a count.

### Color tags

Seven Finder-style colored dots that can be assigned to any book via context
menu, edit dialog, import dialog, or info panel. Optional color highlighting
shows faint background tints in list and card views, and colored titles in
table view.

### Genres and tags

Genre tags are auto-extracted from FB2 genre codes (around 170 mapped) and
EPUB `dc:subject` metadata. A **genre chip picker** allows manual editing per
book, and a full **genre management sheet** handles bulk operations across the
library.

When a book has more genres than fit on a row, a **+N badge** shows the
remainder with a hover popover showing the full list.

### Virtual folders

Flat user-created categories that work across all your books.

- **Collapsible sidebar** on Mac and iPad (F4 to toggle)
- **Folder bottom sheet** on iPhone with create, rename, delete, and swipe actions
- **Drag and drop** books onto folders to assign them
- **Bulk folder assignment** in selection mode
- **Default folder** for new imports — set via context menu, indicated with a star

Folders are flat (not hierarchical) by design — most users don't need tree
depth, and flat folders are faster to navigate.

### Info panel

A resizable detail panel (**F2** to toggle) organized in a **three-island
layout** inspired by Apple's System Settings:

- **Island 1 — Editable metadata**: title, author, series, action toolbar (Read / Book Card / Quick Look / Pin / Delete), color tag, genre chips, folder picker
- **Island 2 — Preview content**: annotation, notes, and bookmarks with links back to the Book Card
- **Island 3 — Cover image**: displayed when available

The last visible island stretches to fill remaining vertical space. The panel
remembers its width between sessions.

### Selection mode and bulk operations

Select multiple books and apply operations to all of them at once: color tag,
genre assignment, author / series bulk edit, move to folder, delete.

Available in all view modes on all platforms. Swipe actions and the Read
button are disabled during selection mode to prevent accidents.

### Quick preview

Press **Space** in any view to see 2–3 paragraphs from your current reading
position in a sheet, with async loading. Skips title-page content. Dismiss
with Space or Esc.

Useful when scrolling through the library and wondering "where was I in this
one" without opening the book.

### Unified Book Card

A tab-based modal that consolidates every piece of data about a book.

- **Cover**: display, replace, or delete. Drag-and-drop on Mac.
- **Info**: all editable metadata in one place, 600ms debounced auto-save
- **Notes**: rich text editor with full formatting toolbar
- **Marks**: all bookmarks with color filter, swipe-to-edit on iOS, inline editor on Mac
- **Stats**: reading progress, pages, opens, dates, file size, translation insights. Exportable as an HTML report.

On Mac, the Book Card floats above the app window as a separate panel. On
iPad, it's a page-sized sheet. On iPhone, it's a full sheet with native
segmented control — swipe down to dismiss.

**[SCREENSHOT: Book Card open on Mac showing the Stats tab with inline translation insights]**

---

## Section 4 — Import

**Intro:** Ways to add books, the formats supported, and the controls you have
when a new book enters the library.

### Supported formats {CR+JR}

- **EPUB** — with chapter extraction and embedded image handling
- **FB2** and **FB2.ZIP** — with automatic genre code mapping (~170 codes)
- **MOBI** — via a native decompressor
- **HTML** and **HTML.ZIP** — with HTML sanitization and encoding detection
- **TXT** and **TXT.ZIP** — with encoding detection
- **RTF** and **RTF.ZIP**

Embedded images are extracted, compressed to JPEG under 500KB at max 1200px,
and stored alongside the content.

### Three ways to import {CR+JR}

- **Browse**: native file picker with filter for all supported extensions
- **URL**: paste a download link and the app fetches, validates, and imports the file
- **Drag and drop**: drop a file onto the library. Or drag a URL straight from your browser's address bar — the book is fetched and imported without copy-paste, without opening a dialog

On Mac, the import dialog has a persistent tab switcher (This Mac / URL /
Drop) remembered between sessions.

In JustReader, importing replaces the current book. In ContinuousReader, books
join the library.

### Import dialog {CR}

When you import a book into ContinuousReader, you can set its metadata before
it enters the library:

- **Duplicate detection** against existing library
- **Cover preview** (shown from the book's own metadata — replaceable later from the Book Card)
- **Metadata preview**: detected title, author, series, publication date, language
- **Color tag** assignment
- **Genre chip picker**
- **Folder assignment** (context-aware — uses the current folder when browsing a folder, falls back to your default setting)
- **Origin URL** stored for later "In Library" detection in OPDS
- **Image inclusion toggle** for FB2/EPUB/MOBI (strip images if you prefer text-only)
- **Open after import** checkbox

JustReader skips this dialog — pick a file, start reading.

### File size protection {CR+JR}

- **5 MB**: warning banner, import proceeds
- **50 MB**: hard limit, import rejected
- **100 MB**: hard limit on decompressed size for ZIP/EPUB archives

### OPDS browser {CR}

Browse online book catalogs with a native interface.

- **Default catalogs**: Standard Ebooks, Project Gutenberg, Feedbooks — ready to use
- **Custom catalogs**: add your own OPDS server with Basic Auth support
- **Feed navigation** with breadcrumb trail and middle truncation for long paths
- **Server-side search** using the catalog's OpenSearch template when available
- **Local filter** at the bottom of every feed — instantly filters visible items by title, author, or summary as you type, with match count and clear button
- **Cover thumbnails** with native caching
- **"In Library" badge** for books already imported (matched by origin URL, with title/author fallback)
- **Batch import queue** with folder assignment, color tags, and format selection
- **Single import** with post-import options

**[SCREENSHOT: OPDS browser showing Standard Ebooks root with cover thumbnails and filter bar]**

### OPDS shortcuts and watchers {CR}

Two features that make OPDS browsing more than a one-time lookup.

- **Shortcuts**: bookmark any feed for one-click navigation. Useful for favorite author pages, series, or collections.
- **Watchers**: track series or author feeds for new entries. Toggle an eye icon on any acquisition feed to start watching. "Check" detects new additions manually. Color-coded status: green when all entries are in your library, orange when new ones appear. "Check All" runs through every watcher sequentially. Delete a catalog, and all its shortcuts and watchers are cleaned up.

---

## Section 5 — Sync and data

**Section badge:** ContinuousReader only

**Intro:** How your library travels between devices, how it's stored, and what
happens when you want to move it, back it up, or walk away.

### iCloud sync

Included in ContinuousReader, works across every Apple device signed into the
same Apple ID — home Mac, work Mac, travel laptop, iPad, iPhone.

- **Reading positions** — down to the exact paragraph
- **Bookmarks** — with colors, notes, and text highlights
- **Notes** — the full rich-text content per book
- **Library metadata** — titles, authors, folders, color tags, genres

**What doesn't sync**: your per-device reading settings. Each device keeps its
own font, size, theme, and padding — because a comfortable setup on a 27-inch
Mac is rarely a comfortable setup on an iPhone held in one hand at midnight.

If you want, per-device settings can also be synced — it's an opt-in switch in
preferences.

### Readable book storage

Book content is stored as clean HTML on disk. Files are named with readable
slugs — `strugatskie-trudno-byt-bogom.html` rather than UUIDs or hashes. You
can navigate your library folder in Finder, open any book with a text editor,
and the content is just there.

Your library is a folder of files. Read it with `cat` if you want to.

### Backup and restore

- **Backup**: export the entire library (books, metadata, bookmarks, notes) to a single ZIP file. Size and filename shown in status.
- **Restore**: import from backup with validation — book count check, version compatibility, and a confirmation dialog before overwriting.

Use this to move to a new Mac, keep a second library on an external drive, or
just archive a point-in-time snapshot before reorganizing.

### Custom library location (Mac)

By default, your library lives inside the app's sandbox. You can move it
anywhere:

- Any folder on your Mac, including external drives
- When moving, choose to **move existing data** or **use the new folder as-is** (for multiple libraries)
- Reset any time to return to the default location

Multiple libraries work through this mechanism — point at different folders
for different purposes (work books / novels / research / whatever).

---

## Section 6 — Platform details

For a full platform-by-platform comparison — what's available on Mac, iPad,
and iPhone, and how each platform adapts the interface to its conventions —
see the [Platforms page](platforms.html).

A short summary:

- **Mac**: the most feature-rich. Table view, keyboard shortcuts, floating panels, island design, drag-and-drop everywhere.
- **iPad**: touch-optimized. Native swipe actions, side panel, split view, two-column settings layout.
- **iPhone**: streamlined for one-hand use. Compact UI, gesture navigation, bottom sheets, half-sheet folders.

All three share the same reader, same themes, same typography controls, same
translation and Read Aloud.

---

## Section 7 — Interface that fits {CR+JR}

Not every reader needs every feature. ContinuousReader is built to adapt —
twice.

**On first launch — the Welcome wizard.** Before you import your first book,
a short setup walks you through the choices that matter: language, interface
theme, library view (list, cards, or table), and which features you want
visible. Four or five screens, all skippable, all changeable later. You start
with an app that already looks the way you want.

**[SCREENSHOT: Welcome wizard "Choose library view" step with List / Cards / Table options]**

**Any time after — the Features panel.** If you never use Read Aloud, turn it
off and the button disappears from the bottom toolbar. Same for OPDS,
Translation, and Statistics. Found in Settings → Features. Each toggle removes
the feature from the UI cleanly — no dimmed buttons, no empty placeholders,
no menu items that never apply to you.

**[SCREENSHOT: Settings → Features panel with toggle switches for Translation, Read Aloud, OPDS, Statistics]**

Change your mind, relaunch the wizard from Settings. Your app should reflect
how you read, not how we expect everyone to read.

---

## Final CTA

**H2:** Start reading.

**Body:** Two apps. Free or full. One download away.

- **Get ContinuousReader — $19.99**
- **Get JustReader — Free**

---

# platforms.html

## Page header

**H1:** Three platforms, three experiences.

**Subtitle:** One app, one library, one purchase. Adapted to each device's way
of working — not a compromise that ignores all three.

**Intro paragraph:**

Cross-platform apps usually land in one of two places. Either they look the
same everywhere — which means they look wrong somewhere. Or they're three
separate apps held together by the same name and a cloud icon.

ContinuousReader is neither. The reader engine, the library model, the
typography controls, the themes, the translation, the Read Aloud — all shared,
all identical in behavior. What changes is how you interact with them: with a
keyboard and trackpad on a Mac, with taps and swipes on an iPad, with one
thumb on an iPhone.

---

## Mac

**Eyebrow:** macOS

**H2:** The full workspace.

**[SCREENSHOT: Mac library with info panel open, table view, localized UI —
Ukrainian recommended for visual contrast]**

The Mac version gets everything the platform invites: keyboard shortcuts for
every frequent action, resizable panels, drag-and-drop everywhere, floating
Book Card windows that hover above the app, and an **island design** inspired
by Apple's System Settings — rounded floating containers on a recessed window
background.

**What Mac gets uniquely:**

- **Table view** with sortable columns, column customization, two-level hierarchy, and a full-width actions toolbar above the table
- **Chapter map** — a proportional track where taller chapters are literally taller, with a sliding viewport indicator showing where you are. If you've used the minimap in a code editor, you already know the idea — applied to a book instead of a source file.
- **Two-page spread** for a classic book layout when reading long-form
- **Keyboard shortcuts** for everything: Cmd+B to bookmark, Cmd+F to search, Cmd+G for the progress drawer, F2/F3/F4 for panels, Space for quick preview
- **Resizable info panel** with a three-island layout that remembers its width between sessions
- **Custom library location** — point the app at any folder on your Mac or external drive
- **Backup and restore** — export the full library to ZIP, restore from any snapshot

It's the version to use when you have a keyboard, a chair, and time.

---

## iPad

**Eyebrow:** iPadOS

**H2:** The reading surface.

**[SCREENSHOT: iPad library with side panel, localized UI — English recommended]**

iPad sits between Mac and iPhone — more room than a phone, more touch than a
laptop. ContinuousReader takes advantage of both.

**What iPad does uniquely well:**

- **Native swipe actions** on books for quick actions (pin, color, delete)
- **Side panel** with bookmarks, chapters, and comments — same data as Mac, adapted to touch
- **Split view ready** — read alongside any other iPad app
- **Two-column settings** layout that uses the wider screen instead of pretending to be an iPhone
- **Card view with column picker** in quick settings — choose 2, 3, or 4 columns depending on how dense you want the grid
- **Page-sized OPDS browser** — not a narrow sheet, not a separate window, but a focused dialog the size of the page

Same island design as Mac, same fonts, same themes. The library looks like it
belongs to the same app — because it does.

---

## iPhone

**Eyebrow:** iOS

**H2:** The pocket reader.

**[SCREENSHOT: iPhone in device frame, fullscreen reading mode with pixel-art
clock visible — Russian recommended]**

The iPhone version is streamlined, not stripped. Every feature that makes
sense on a small screen is there. The ones that don't — the table view, the
floating panels, the two-page spread — are quietly absent, because forcing
them would make the app worse.

**What iPhone does differently:**

- **One-hand friendly** — touch targets, swipe zones, and reachable controls within thumb's reach
- **Bottom sheets** instead of popovers — half-sheet folders, settings, filters. Natural iOS interaction.
- **Double-tap fullscreen** — the reading area expands under the Dynamic Island, bottom bar hides, text fills the screen. Double-tap again to exit.
- **Pixel-art clock** — optional dotted clock shows the time as part of the page background during fullscreen reading. For anyone who's ever lost track of time and missed their stop.
- **Compact library** with 5-level adaptive row layout that trims information as space shrinks
- **Fixed 2-column card grid** — not responsive, always 2. Because on a phone, 3 is too many and 1 is too few.
- **Gesture navigation** — edge swipes, pull-to-refresh, swipe-to-dismiss sheets. iOS the way iOS should work.

---

## Feature availability by platform

Not every feature is on every platform. Here's what's where.

| | Mac | iPad | iPhone |
|---|---|---|---|
| **Library layout** | Island design, resizable columns, hover effects | Island design, swipe actions, compact fonts | Compact list, swipe actions, bottom bar |
| **View modes** | List, Card, Table | List, Card | List, Card |
| **Folders** | Collapsible sidebar (F4) | Collapsible sidebar | Bottom sheet |
| **Info panel** | Resizable right-side panel | Resizable right-side panel | Push detail view |
| **Reader side panel** | Integrated left panel | Integrated left panel | Overlay drawer with swipe gestures |
| **Themes** | All 17 | All 17 | All 17 |
| **Fonts** | All 9 | All 9 | All 9 |
| **Typography controls** | Full | Full | Full |
| **Settings** | Popover + Cmd+, dialog | Popover, two-column | Sheet with detents |
| **Page modes** | Scroll, Page, Two pages | Scroll, Page | Scroll, Page |
| **Chapter map** | ✓ | — | — |
| **Fullscreen reading** | — | Double-tap | Double-tap |
| **Pixel-art clock** | — | ✓ | ✓ |
| **Navigation** | Keyboard + trackpad | Keyboard + touch | Edge swipes + touch |
| **OPDS** | Separate floating window | Page-sized dialog | Sheet |
| **Filters** | Unified popover | Unified popover | Unified half-sheet |
| **Backup / Restore** | ✓ | — | — |
| **Custom library location** | ✓ | — | — |
| **Drag and drop from browser** | ✓ | ✓ | — |
| **Keyboard shortcuts** | Full set | Most | Some |

All platforms share: reader engine, position tracking, bookmarks, notes,
translation, Read Aloud, sync, all 17 themes, all 9 fonts, all file format
support.

---

## One purchase

Everything above is included in ContinuousReader for $19.99. Universal
Purchase — buy once on any platform, install on all three, sync turned on.

Or try [JustReader](download.html) for free — a single-book version of the
reader with the same engine, the same themes, the same translation. Available
on all three platforms too.

---

## Final CTA

**H2:** Start reading.

- **Get ContinuousReader — $19.99**
- **Get JustReader — Free**

---

# download.html

## Page header

**H1:** Get ContinuousReader.

**Subtitle:** One-time purchase. Three platforms. Free updates for the
lifetime of the current major version.

---

## Two paths block

### Column 1 — ContinuousReader

**Price (large):** $19.99

**Sub:** once, not monthly

**Description:**

Full reading workspace. Library with thousands of books. iCloud sync across
Mac, iPad, and iPhone. Bookmarks, notes, translation statistics, reading
stats. OPDS catalogs with watchers. Backup and restore. Every feature, on
every device.

**[App Store badge — ContinuousReader]**

### Column 2 — JustReader

**Price (large):** Free

**Sub:** truly free, no tricks

**Description:**

Single-book reader. Same engine, same typography, same 17 themes, same
translation, same Read Aloud. No library, no sync, no bookmarks — you open a
file, you read it, you move on. Available on Mac, iPad, and iPhone.

**[App Store badge — JustReader]**

---

## What's included

**H2:** What's included

**Intro:** ContinuousReader is one purchase, no extras, no hidden costs.

- **Universal Purchase** — buy on any platform, use on all three (Mac, iPad, iPhone)
- **iCloud sync across every Apple device you own** — reading positions, bookmarks, notes, and library metadata synchronize between all devices signed into the same Apple ID. Home Mac mini, work MacBook Pro, travel Air, iPad, iPhone — they all share the same library and the same reading position. Book files sync through iCloud Drive when you have space; if not, you can keep files local and still sync your reading state.
- **Free updates** for the lifetime of the current major version — bug fixes, new themes, new features
- **No subscription**, no recurring charges, no tier lockouts
- **No ads**, no telemetry, no analytics sold to anyone

When a major version requires a paid upgrade (not planned for a long time),
you'll know well in advance and it will be optional — your current version
keeps working.

---

## System requirements

**H2:** System requirements

| | Version |
|---|---|
| **macOS** | 15.0 Sequoia or later |
| **iPadOS** | 18.0 or later |
| **iOS** | 18.0 or later |

Universal Purchase works with any Apple ID that owns either app. iCloud sync
requires iCloud Drive enabled on all devices you want to sync (free tier is
sufficient for reading state; see the FAQ below for storage guidance).

---

## Feature comparison

**H2:** ContinuousReader or JustReader?

| Feature | JustReader | ContinuousReader |
|---|---|---|
| Price | Free | $19.99 once |
| Platforms | Mac, iPad, iPhone | Mac, iPad, iPhone |
| All 17 themes | ✓ | ✓ |
| All 9 typefaces | ✓ | ✓ |
| Full typography control | ✓ | ✓ |
| Scroll / Page / Two-page modes | ✓ | ✓ |
| Translation (inline, non-disruptive) | ✓ | ✓ |
| Read Aloud with word highlighting | ✓ | ✓ |
| Chapter navigation | ✓ | ✓ |
| In-book search | ✓ | ✓ |
| Fullscreen with pixel-art clock | ✓ | ✓ |
| Welcome wizard + Features toggle | ✓ | ✓ |
| All supported formats (EPUB, FB2, MOBI, HTML, TXT, RTF) | ✓ | ✓ |

**Only in ContinuousReader:**

| Feature | | |
|---|---|---|
| Book library (multiple books) | — | ✓ |
| iCloud sync across devices | — | ✓ |
| Bookmarks with colors and notes | — | ✓ |
| Per-book notes (rich text editor) | — | ✓ |
| Translation statistics and reports | — | ✓ |
| Reading statistics per book | — | ✓ |
| OPDS browser with shortcuts and watchers | — | ✓ |
| Folders, color tags, genre management | — | ✓ |
| Backup and restore to ZIP | — | ✓ |
| Custom library location (Mac) | — | ✓ |
| Drag URL from browser to library | — | ✓ |

Both apps receive bug fixes and compatibility updates. Feature updates go to
ContinuousReader.

---

## FAQ

**H2:** Questions

### Is JustReader a trial?

No. It's a separate, standalone app — free, fully functional for its scope,
no time limits, no feature teasers. It reads one book at a time and does that
well. If you want a library, sync, bookmarks, or OPDS — upgrade to
ContinuousReader. Otherwise, use JustReader forever without paying.

### Can I try ContinuousReader before buying?

JustReader is the closest thing to a trial — same reader engine, same
typography, same translation and Read Aloud. If you like how JustReader
handles reading, ContinuousReader will feel identical, just with a library
and sync added. For library-specific features (OPDS, folders, bookmarks),
there's no trial — but Apple's standard App Store refund policy applies
within 14 days.

### Do I have to pay again for each device?

No. Universal Purchase means one payment unlocks Mac, iPad, and iPhone
versions under the same Apple ID. Install on as many of your devices as you
want.

### How many devices can I sync?

As many as you own — all of them. Sync runs across every Apple device signed
into your Apple ID. Home Mac, work Mac, travel laptop, iPad, iPhone — if it
runs ContinuousReader and your iCloud account is there, it's in sync.

### How much iCloud storage do I need?

iCloud sync has two parts, and they use different storage.

**Reading state** — your position, bookmarks, notes, library metadata — syncs
through iCloud's Key-Value Store. This is separate from your iCloud storage
quota and works the same on any tier, including the free 5 GB.

**Book files** — the actual content of your books — sync through iCloud
Drive. These count against your iCloud storage like any other files. Books
with embedded images typically run around 2–4 MB each; plain text books are
under 1 MB.

On the free 5 GB tier (shared with iCloud backups, photos, and other files),
a modest library of a few hundred books fits comfortably. For thousands of
books — especially illustrated ones — an iCloud+ plan (50 GB for about $1 a
month, or 200 GB for around $3) is worth considering.

If you prefer to keep book files off iCloud entirely, you can turn off file
sync and keep only reading state synced — your positions and bookmarks still
travel between devices, but book files live only on each device's local
storage. Alternatively, the Mac app's built-in backup feature can export your
entire library to a ZIP file, which you can store on any cloud service or
external drive.

### What about family sharing?

Family Sharing is supported — up to six members in your family group can
install ContinuousReader under their own Apple IDs without paying again.

### Will there be a subscription?

No. Subscription doesn't fit this class of app, and selling the same software
every month isn't the right model here. Future major versions may be paid
upgrades, but your current version keeps working as long as Apple supports
the OS it runs on.

### Where is my data stored?

Locally on your device. If iCloud sync is enabled, also in your own iCloud —
under your Apple ID, not on any server controlled by the developer. Book
content is readable as plain HTML files if you browse your library folder in
Finder. Nothing leaves your devices unless you explicitly export it.

### What happens if I stop using iCloud?

Your library keeps working locally. Without iCloud, devices just don't sync —
each one maintains its own state. You can use ContinuousReader entirely
offline.

### What about privacy?

No analytics, no telemetry, no tracking. Translation runs on-device through
Apple's framework. No network access during reading. Your reading habits are
your own.

### Support?

Email: [contact email]. One developer handles everything, so response time
runs in days rather than hours — but every message gets a real reply.

---

## About

**H2:** About

**Body:**

ContinuousReader is independently developed — not a product of a studio, a
startup, or an investor deck. Every feature exists because someone (usually
the developer, occasionally a reader) actually needed it while reading a
book.

Buying ContinuousReader supports that approach: careful software built
slowly, for a small audience of people who take reading seriously. JustReader
is the same philosophy given away — because a reading app should help people
read, even if they never pay.

For questions, suggestions, or bug reports: [contact email].

---

# Localization notes

All text above is English. The site supports 6 languages via `data-i18n`
attributes. When preparing translations:

- **Russian, Ukrainian, German, French**: use formal/polite address
  ("Вы", "Sie", "vous"). Keep the literary-respectful tone.
- **Spanish**: "usted" is usually too formal for app marketing; "tú" is more
  appropriate, unless targeting Spain-specific formal conventions.
- Culture-specific references: "Norton Commander", the minimap metaphor, and
  `cat` may not translate literally. The minimap reference should keep its
  form in most technical audiences. Norton Commander can stay in Latin
  characters ("Norton Commander") everywhere. `cat` stays as `cat` (it's a
  command name, not a word).
- Filename example in readable book storage section
  (`strugatskie-trudno-byt-bogom.html`) works internationally — keep as-is.

---

# Screenshot strategy

Language assignments for screenshots across the site:

- **index.html** — optional hero illustration (isometric, not a screenshot)
- **features.html** — all 10 screenshots in **English UI**, to keep focus on
  feature content rather than localization
- **platforms.html** — deliberately different languages across the three
  platform screenshots, to visually demonstrate multiplatform + multilingual
  in one image:
  - Mac: Ukrainian UI
  - iPad: English UI
  - iPhone: Russian UI
- **download.html** — no screenshots needed

Fake book data: generate via Claude Code using made-up titles and authors.
Match the language of the UI in each screenshot to the language of the books
shown. Avoid real copyrighted titles in any screenshot intended for the
public site.

---

# Badges styling (for reference during implementation)

The `{CR}` / `{JR}` / `{CR+JR}` markers throughout features.html represent
visual badges that should be styled as small capsules:

- **(ContinuousReader)** — deep blue fill (`#4A90D9`), white text, small caps,
  compact
- **(JustReader)** — warm ivory fill, darker brown text, same size and shape
- Placed near the H3 heading, right-aligned or following the heading text
- Both badges for `{CR+JR}` — shown side by side

Section-level badges ("ContinuousReader only" at the top of sections 3 and 5)
should be visually larger than individual feature badges, displayed as a
banner under the section intro.

---

# Tagline reference

Primary site tagline (footer, meta description, hero secondary area):
**"Built for readers who don't just browse."**

Not used as a hero H1 — it's a positioning statement, not a headline. The
hero H1 is always **"A book, continued."**
