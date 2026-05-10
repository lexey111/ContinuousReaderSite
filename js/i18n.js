/**
 * ContinuousReader Website — Internationalization
 *
 * Strategy: HTML keeps the English source as default content. Each
 * translatable element carries a `data-i18n="key"` attribute. When the user
 * picks a non-English language, main.js replaces innerHTML (or attribute
 * values for `data-i18n-attr`) with the translation. Missing keys fall back
 * to English — so a language can be filled in incrementally without
 * breaking the page.
 *
 * Keys are namespaced by area:
 *   nav.*       — top navigation
 *   foot.*      — footer
 *   meta.*      — <title> + <meta description> per page
 *   index.*     — landing page sections
 *   features.*  — features page sections
 *   platforms.* — platforms page sections
 *   download.*  — download page (incl. FAQ + about)
 *   contact.*   — contact page
 *   privacy.*   — privacy policy
 *   common.*    — strings shared across pages (final CTA, etc.)
 *
 * Inside values, simple inline HTML is allowed: <strong>, <em>, <a>, <code>,
 * <span class="lang-tag">, <span class="check">, <span class="dash">.
 * Nothing is sanitized — the file is treated as trusted source.
 */

const SUPPORTED_LANGS = ['en', 'ru', 'uk', 'es', 'fr', 'de'];

const LANG_NAMES = {
  en: 'English',
  ru: 'Русский',
  uk: 'Українська',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
};

const LANG_LABELS = {
  en: 'EN',
  ru: 'RU',
  uk: 'UK',
  es: 'ES',
  fr: 'FR',
  de: 'DE',
};

const translations = {
  // ============================================================
  // ENGLISH — source of truth
  // ============================================================
  en: {
    // ---------- Navigation ----------
    'nav.features':  'Features',
    'nav.platforms': 'Platforms',
    'nav.download':  'Download',

    // ---------- Footer ----------
    'foot.tagline':       'Built for readers who don’t just browse.',
    'foot.col.product':   'Product',
    'foot.col.info':      'Info',
    'foot.col.language':  'Language',
    'foot.link.privacy':  'Privacy',
    'foot.link.contact':  'Contact',
    'foot.copy':          '© 2026 ContinuousReader. Developed by Oleksii Koshkin.',
    'foot.signoff':       'A reader’s reader.',

    // ---------- Common (shared across pages) ----------
    'common.finalCta.title':    'Start <em>reading.</em>',
    'common.finalCta.subtitle': 'Two apps. Read a book, or grow a library.',
    'common.cta.getCR':         'Get ContinuousReader',
    'common.cta.getJR':         'Get JustReader, free',
    'common.cta.tryJR':         'Or try JustReader, free',

    // ============================================================
    // INDEX (landing)
    // ============================================================
    'meta.index.title':    'ContinuousReader — A book, continued.',
    'meta.index.desc':     'A native reader for Mac, iPad, and iPhone. Close it on your Mac at midnight, open it on your iPhone in the morning. Same book. Same paragraph. Built for readers who don’t just browse.',
    'meta.index.ogTitle':  'ContinuousReader — A book, continued.',
    'meta.index.ogDesc':   'A native reader for Mac, iPad, and iPhone. Close it on your Mac at midnight, open it on your iPhone in the morning. Same book. Same paragraph.',

    'index.hero.eyebrow':  'A native reader for Mac, iPad, and iPhone',
    'index.hero.headline': '<span class="dropcap">A</span> book<span class="punct">,</span> <em>continued.</em>',
    'index.hero.sub':      'Close it on your Mac at midnight. Open it on your iPhone on the morning commute. <strong>Same book. Same page. Same paragraph.</strong>',

    'index.strip.label':    'Continuous',
    'index.strip.caption':  'one library, synced',

    'index.s2.eyebrow': 'Continuous',
    'index.s2.h2':      'Across your <em>devices.</em>',
    'index.s2.p1':      'Your reading position travels with you — down to the exact paragraph you were reading, not the nearest chapter or the beginning of the page.',
    'index.s2.p2':      '<strong>What syncs:</strong> your position, your bookmarks, your notes, your library. <strong>What doesn’t:</strong> the way each device is set up to read.',
    'index.s2.mac.h':   'Mac',
    'index.s2.mac.p':   'A chair. <em>Two-page spread,</em> 32 pt serif.',
    'index.s2.ipad.h':  'iPad',
    'index.s2.ipad.p':  'One page, comfortable size, <em>sometimes sepia.</em>',
    'index.s2.iph.h':   'iPhone',
    'index.s2.iph.p':   '<em>Scroll mode,</em> dark theme, small text, one hand.',
    'index.s2.outro':   'Each screen has its own ideal setup. ContinuousReader remembers them separately — and keeps the reading itself in sync between them.',

    'index.s3.eyebrow':   'Continuous',
    'index.s3.h2':        'Across <em>how</em> you read.',
    'index.s3.p1':        'Start the chapter in the evening, eyes on the page. Step into the car in the morning, switch to Read Aloud. The voice picks up from where you stopped reading — not the nearest chapter, not the beginning of the file, but the paragraph you were on.',
    'index.s3.callout':   'Reading with your eyes and listening with your ears are the same session, the same position, the same book.',
    'index.s3.p2':        'Listen for half an hour. Arrive. Sit down with your Mac. The book is already scrolled to the paragraph the voice just finished. Keep reading where listening left off.',
    'index.s3.p3':        'Word-by-word highlighting with a soft rounded indicator that glides with the voice. Adjustable speed, pitch, and voice. Change speed mid-sentence — playback picks up from the exact word, not the nearest paragraph.',

    'index.s4.eyebrow': 'The reading',
    'index.s4.h2':      'Typography that <em>respects</em> the text.',
    'index.s4.p1':      'Most reading apps get typography wrong. Either they pretend the screen is a book, with skeuomorphic page turns and fake paper, or they treat text as a data dump — browser defaults, ragged columns, no hyphenation.',
    'index.s4.p2':      '<strong>ContinuousReader does neither.</strong>',
    'index.s4.p3':      'Five core palettes — Neutral, Sepia, Celestial, Lime, Rose — each with five tonal variations from light to dark. Plus two featured themes for the old-school crowd: <em>Typewriter</em> in ivory and dark brown, and <em>Terminal</em> in white monospace on deep blue (if you recognize the palette — <em>you already know why it’s there</em>). Two more for extreme contrast. Three custom slots where the colors are yours. <strong>Thirty-three variants in total.</strong>',
    'index.s4.p4':      '<em>Midday</em> and <em>Midnight</em> — pure black-on-white and white-on-black with four contrast levels and adjustable font weight, built for reading <strong>in full sun on a beach</strong> or <strong>in bed with the lights off</strong>, without burning your eyes either way.',
    'index.s4.picker':  'Three picker modes. <strong>Fixed</strong> — one theme, always. <strong>Day &amp; Night</strong> — pair a light theme with a dark one and the app switches when your system does. <strong>Manual override</strong> — force any theme regardless of schedule, for a session that doesn’t fit the rhythm. On any dark theme, a smooth brightness slider tunes the text down from 100% to 50% — for nights when even the dark themes feel too bright.',
    'index.s4.dt1':     'Typefaces',
    'index.s4.dd1':     'Nine system fonts across <em>serif, sans, and monospace.</em> Georgia, Palatino, Charter, Iowan Old Style, Helvetica Neue, SF Pro, Avenir Next, Menlo, American Typewriter.',
    'index.s4.dt2':     'Hyphenation',
    'index.s4.dd2':     'Real hyphenation in <em>Latin, Cyrillic, CJK, Arabic, and Greek</em> scripts. Detected from content, not user setting.',
    'index.s4.dt3':     'Layout',
    'index.s4.dd3':     'Continuous scroll, single-page, or <em>two-page spread</em> on Mac. Adjustable size, line height, paragraph spacing, alignment, indent, padding, and image display.',
    'index.s4.dt4':     'Instant',
    'index.s4.dd4':     'Every setting applies immediately — <em>no page reload, no position lost.</em>',

    'index.s5.eyebrow': 'The translation',
    'index.s5.h2':      'Read in one language, <em>think</em> in another.',
    'index.s5.p1':      'Highlight a word. The translation appears in a panel at the bottom of the screen — not as a popup that covers the text, not as a modal you have to dismiss. Keep reading. Another unfamiliar word or phrase? Just highlight it — no extra clicks, no focus lost.',
    'index.s5.p2':      'Translate and Bookmark sit at the top of the selection menu — not buried under five other items you don’t use. Reorder them in settings, whichever you reach for more often.',
    'index.s5.p3':      'Many target languages, provided by Apple’s on-device Translation framework. <strong>Nothing leaves your Mac.</strong>',
    'index.s5.p4':      'Every word you look up can be remembered. ContinuousReader tracks the languages you translate between, the words you’ve seen before, and the books where you needed help most — useful for language learners, researchers, and anyone reading across languages. Turn tracking off, and nothing is recorded. Turn it on, and export the full history as an HTML report.',

    'index.s6.eyebrow': 'Your library',
    'index.s6.h2':      'Your library. <em>All yours.</em>',
    'index.s6.p1':      'Your entire library in three views: a detailed list for scanning, covers in a grid for browsing, or a sortable table for the librarian in you. Group by author, by series, or by folder. Tag with color dots. Filter by genre. Pinned favorites. Recently opened and recently added.',
    'index.s6.p2':      '<strong>EPUB, FB2, MOBI, HTML, TXT, RTF</strong> — including ZIP variants. Click a button, drag a file, or drag a URL straight from your browser — the book is fetched and the import dialog opens with metadata, cover, and author already filled in. Or browse OPDS catalogs — Standard Ebooks, Project Gutenberg, Feedbooks, or your own server. Watch feeds for new entries in a series you follow.',
    'index.s6.p3':      'Track your reading time per book, see streaks and patterns, export an HTML report. Bookmarks in seven colors with notes and text highlights. Rich text notes per book. Everything searchable, everything exportable.',
    'index.s6.p4':      'Book content is stored as clean HTML on disk, with readable filenames. No cloud-locked database, no proprietary format, no DRM, no vendor lock-in. Back up the whole library to a ZIP file whenever you want. Point the app at any folder as your library root. Everything lives in your own iCloud — or just locally, if you don’t need sync.',
    'index.s6.callout': 'Your library is a folder of files. Read it with <code>cat</code> if you want to.',

    'index.s7.eyebrow': 'Native',
    'index.s7.h2':      'Part of the <em>system.</em>',
    'index.s7.p1':      'ContinuousReader is built in Swift and SwiftUI — Apple’s native languages. That means instant launch, smooth scroll at any scroll speed, native keyboard shortcuts on Mac, proper swipe gestures on iPhone, system-level text selection, and a binary that’s a fraction of the size of an Electron build.',
    'index.s7.p2':      'On Mac, an <em>island design</em> inspired by System Settings — rounded floating containers on a recessed background — with keyboard shortcuts, floating panels, a Book Card that hovers above the app, and drag-and-drop everywhere. On iPad, native swipe actions and split-view readiness. On iPhone, one-hand-friendly gestures and bottom sheets that feel like iOS, <strong>not like a web form.</strong>',
    'index.s7.p3':      'The heavy lifting comes from the system itself. <strong>iCloud</strong> stores and syncs your books — your account, not ours. <strong>Apple Translation</strong> handles in-text translation — on-device, private. <strong>The system’s voice engine</strong> drives Read Aloud, with the voices your Mac and iPhone already speak. Nothing reinvented — only integrated.',

    'index.s8.eyebrow':  'Two apps',
    'index.s8.h2':       'ContinuousReader <em>or</em> JustReader?',
    'index.s8.intro':    'Two reading apps. One foundation. <strong>Your choice.</strong>',
    'index.s8.cr.name':  'ContinuousReader',
    'index.s8.cr.price': '<strong>$9.99</strong> launch · $19.99 regular. Once, not monthly.',
    'index.s8.cr.desc':  'A full reading workspace. Build your library. Sync your position, bookmarks, and reading settings across Mac, iPad, and iPhone. OPDS catalogs. Bookmarks, notes, statistics. Every feature, on every device, forever.',
    'index.s8.cr.cta':   'Get ContinuousReader',
    'index.s8.jr.name':  'JustReader',
    'index.s8.jr.price': '<strong>Free.</strong> Truly free.',
    'index.s8.jr.desc':  'A single-book reader. Open a file, read it, move on. The same typography, the same translation, the same Read Aloud — in a focused, single-file app. No library, no sync, no bookmarks — just reading.',
    'index.s8.jr.cta':   'Get JustReader',

    // ============================================================
    // FEATURES
    // ============================================================
    'meta.features.title':   'Features — ContinuousReader',
    'meta.features.desc':    'A closer look at how ContinuousReader is built and what it can do. Themes, typography, translation, library, sync, and more.',
    'meta.features.ogTitle': 'Features — ContinuousReader',
    'meta.features.ogDesc':  'Themes, typography, translation, library, sync, and more. A closer look at how ContinuousReader is built.',

    'features.header.eyebrow':  'A closer look',
    'features.header.title':    'Features',
    'features.header.subtitle': 'A closer look at how ContinuousReader is built and what it can do.',
    'features.header.intro':    'This page is a tour, not a spec sheet. If you’re comparing reading apps on specific capabilities — formats, sync behavior, theming, translation — you’ll find them organized below. If you want a shorter overview, start with <a href="index.html">the home page</a>. If there’s something specific you need to know that isn’t here, <a href="mailto:hello@continuousreader.app">get in touch</a>.',
    'features.header.legend':   'Features marked <span class="badge-inline cr">ContinuousReader</span> are part of the full app. Features marked <span class="badge-inline jr">JustReader</span> are also in the free single-book reader. <strong>Most of the reading experience is shared</strong>; the library, sync, and OPDS browser are ContinuousReader only.',

    // Section 1 — The reader
    'features.s1.label':   'Section one',
    'features.s1.h2':      'The <em>reader</em>.',
    'features.s1.intro':   'The reading experience itself. Typography, themes, navigation, and the small things you interact with while reading a book.',

    'features.s1.themes.h':       'Thirty-four themes, organized in palette families',
    'features.s1.themes.p1':      'Themes are more than color schemes. Each defines background, text color, progress bar tint, bookmark marker palette, and — for some — the reading font itself.',
    'features.s1.themes.li1':     '<strong>Palettes</strong>Five families — Neutral, Sepia, Celestial, Lime, Rose — each with five tonal variations from light to dark. Pick a palette, then dial the tone.',
    'features.s1.themes.li2':     '<strong>Featured</strong>Typewriter (ivory + dark brown, forced American Typewriter font), Terminal (white monospace on deep blue, Norton Commander homage)',
    'features.s1.themes.li3':     '<strong>Extreme</strong>Midday, Midnight — pure black-on-white and white-on-black, four contrast levels, adjustable font weight and text brightness. Built for full sun on a beach or pitch-dark bedrooms.',
    'features.s1.themes.li4':     '<strong>Custom</strong>Three user-defined slots with full color picker control',
    'features.s1.themes.li5':     '<strong>Day &amp; Night mode</strong>Assign separate themes for light and dark system appearance — automatic or manually overridden',
    'features.s1.themes.p2':      'The <em>Terminal</em> theme deserves a note of its own: white monospace text on deep blue, with a dedicated monospace font picker (Menlo or American Typewriter). If the palette looks familiar, you already know why it’s there.',

    'features.s1.fonts.h':        'Nine typefaces, three groups',
    'features.s1.fonts.p1':       'All system fonts — no downloads, no licensing, no rendering differences between devices.',
    'features.s1.fonts.li1':      '<strong>Serif</strong>Georgia, Palatino, Charter, Iowan Old Style',
    'features.s1.fonts.li2':      '<strong>Sans-serif</strong>Helvetica Neue, SF Pro, Avenir Next',
    'features.s1.fonts.li3':      '<strong>Monospace</strong>Menlo on Mac, Courier New on iOS; American Typewriter everywhere',
    'features.s1.fonts.p2':       'The font picker groups them with labeled sections and shows live "Aa" previews in the theme you’re currently using.',

    'features.s1.typo.h':         'Full typography control',
    'features.s1.typo.li1':       '<strong>Size</strong>12 to 48 pixels',
    'features.s1.typo.li2':       '<strong>Line height</strong>Continuously adjustable, from tight to spacious',
    'features.s1.typo.li3':       '<strong>Paragraph spacing</strong>Continuously adjustable from 0.3 to 2.4 em',
    'features.s1.typo.li4':       '<strong>Text indent</strong>Toggle first-line indentation',
    'features.s1.typo.li5':       '<strong>Alignment</strong>Left, justified, or right',
    'features.s1.typo.li6':       '<strong>Hyphenation</strong>Automatic when justified, with content-based language detection for Latin, Cyrillic, CJK, Arabic, and Greek scripts',
    'features.s1.typo.li7':       '<strong>Page padding</strong>Continuous slider from edge-to-edge to generous margins',
    'features.s1.typo.li8':       '<strong>Image display</strong>Show, mask (reveal on hover), or hide entirely',
    'features.s1.typo.p':         'Every setting applies instantly — <em>no page reload, no position lost.</em>',

    'features.s1.modes.h':        'Continuous scroll, page, or two-page spread',
    'features.s1.modes.p1':       'The default reader renders the book as a single continuous page — no artificial breaks, just smooth vertical scrolling.',
    'features.s1.modes.p2':       'Switch to <strong>Page</strong> mode for a paginated experience with animated or instant page turns and page separators. On Mac, <strong>Two pages</strong> mode renders a classic book spread. All three modes preserve your exact position when switching.',

    'features.s1.position.h':     'Position that survives anything',
    'features.s1.position.p1':    'Your reading position is tracked more precisely than most readers bother with — which means it survives:',
    'features.s1.position.li1':   '<strong>Font changes</strong>Size, family, line height',
    'features.s1.position.li2':   '<strong>Window resizes</strong>Full layout reflow',
    'features.s1.position.li3':   '<strong>Device switches</strong>Mac to iPad, iPad to iPhone — ContinuousReader with sync enabled',
    'features.s1.position.li4':   '<strong>Mode switches</strong>Scroll to page, page to spread',
    'features.s1.position.li5':   '<strong>Long absences</strong>Reopening the book weeks later with different settings',
    'features.s1.position.p2':    'When you return to a book, the reader fades in at the <em>exact paragraph</em> you left, not the nearest chapter.',

    'features.s1.progress.h':     'Progress drawer and markers',
    'features.s1.progress.p1':    'A slim progress bar along the bottom expands on hover (Mac) or tap (iOS) to reveal reading position. Click or double-tap to open the progress drawer:',
    'features.s1.progress.li1':   '<strong>Tapered slider</strong>A custom track that’s thick for the part you’ve read and hair-thin for what’s ahead, with a smooth S-curve at your current position',
    'features.s1.progress.li2':   '<strong>Drag-to-seek</strong>And tap-to-seek with debounced scrolling',
    'features.s1.progress.li3':   '<strong>Entry marker</strong>A filled dot with a dashed ring showing where you started this session',
    'features.s1.progress.li4':   '<strong>Marker modes</strong>Switch the track to show chapters, images, or nothing. Chapter markers show titles on hover. Image markers show thumbnail previews.',
    'features.s1.progress.li5':   '<strong>Go To</strong>Jump to any page number or percentage, with a sliding pill mode switch',
    'features.s1.progress.p2':    'In ContinuousReader, an additional marker mode shows <strong>color-coded bookmarks</strong> along the track, each with its preview text and page number on hover.',
    'features.s1.progress.p3':    'All marker positions are computed live from the document — not stored estimates, always matching where things actually are.',

    'features.s1.chapters.h':     'Chapter navigation',
    'features.s1.chapters.p1':    'Chapter structure is extracted on import from EPUB spine items, FB2 sections, and HTML headings, with proper heading priority and scene-break separator filtering (<code>* * *</code>, <code>---</code>, etc.).',
    'features.s1.chapters.p2':    'The <strong>Chapters</strong> tab in the side panel lets you jump to any chapter with one click. On Mac, you can switch between two display modes:',
    'features.s1.chapters.li1':   '<strong>Chapter list</strong>A static list with the current chapter highlighted and bolded',
    'features.s1.chapters.li2':   '<strong>Chapter map</strong>Proportional variable-height rows — taller rows for longer chapters — with a thin left rail track, a sliding thumb, and a viewport-proportional indicator. Page numbers are hidden in map mode for a cleaner spatial view.',
    'features.s1.chapters.p3':    'If you’ve used the minimap in a code editor, you’ll recognize the shape — <em>the book as a page of structure, not just text.</em>',

    'features.s1.bookmarks.h':    'Bookmarks',
    'features.s1.bookmarks.p1':   'Add a bookmark with <code>Cmd+B</code> or via the text selection context menu. The app captures your selected text as a preview, or — if nothing is selected — the first visible paragraph.',
    'features.s1.bookmarks.li1':  '<strong>Seven colors</strong>To categorize bookmarks (last-used color is remembered)',
    'features.s1.bookmarks.li2':  '<strong>Notes</strong>Attached to any bookmark',
    'features.s1.bookmarks.li3':  '<strong>Color filter bar</strong>When you have two or more colors in a book',
    'features.s1.bookmarks.li4':  '<strong>Text highlighting</strong>Per-color tints, multi-paragraph for long selections, inline for short ones',
    'features.s1.bookmarks.li5':  '<strong>Live markers</strong>On the progress bar, with tooltip previews',
    'features.s1.bookmarks.li6':  '<strong>Nearest bookmark</strong>Highlighted in bold in the side panel as you read',
    'features.s1.bookmarks.p2':   'Bookmarks belong to the library. JustReader, which reads one book at a time without storage, doesn’t retain them.',

    'features.s1.search.h':       'In-book search',
    'features.s1.search.p1':      'Open in-book search from the <strong>Search</strong> tab in the reader’s bottom toolbar, or press <code>Cmd+F</code>. Match counter, previous/next navigation, case-sensitive toggle, and yellow/orange highlights in the text. Position markers appear along the scrollbar so you can see matches at a glance.',
    'features.s1.search.p2':      'Search works the same way as translation, settings, and navigation — as a tab in the reader’s bottom toolbar, <em>not a floating window that covers the text.</em>',

    'features.s1.notes.h':        'Notes',
    'features.s1.notes.p1':       'Each book has a personal notes field with a <strong>rich text editor</strong>. The formatting toolbar supports bold, italic, underline, strikethrough, H1–H3 headings, bullet and numbered lists, blockquotes, horizontal rules, and four highlight colors (yellow, green, blue, pink). On iPhone, the toolbar splits into two rows to fit everything without scrolling.',
    'features.s1.notes.p2':       'Notes are stored with full formatting and rendered the same way in the side panel and in exported reports.',

    'features.s1.fullscreen.h':   'Fullscreen <em>(iOS)</em>',
    'features.s1.fullscreen.p1':  'Double-tap the reading area to hide the bottom bar and enter fullscreen. The top safe area is ignored so content extends under the Dynamic Island or camera housing. Double-tap again to exit. The mode auto-exits when you open settings, search, or the side panel.',
    'features.s1.fullscreen.p2':  'Optional <strong>pixel-art clock</strong> shows the time as dotted numerals on the background of the page — adjustable position and contrast, visible enough to check at a glance, unobtrusive enough to ignore while reading. <em>For anyone who’s ever lost track of time in a book and missed their stop.</em>',

    // Section 2 — Translation & Read Aloud
    'features.s2.label':          'Section two',
    'features.s2.h2':             'Translation and <em>Read Aloud</em>.',
    'features.s2.intro':          'Two features that shape how you engage with a book, beyond just reading it visually. Both integrate with the reader’s position tracking, so you never lose your place when switching modes.',

    'features.s2.translate.h':       'Translation — inline, non-disruptive',
    'features.s2.translate.p1':      'Highlight any word or phrase. The translation appears in a panel at the bottom of the screen that stays out of the way while you keep reading. <strong>No popup, no modal, no context switch.</strong>',
    'features.s2.translate.p2':      'Three display modes in the panel:',
    'features.s2.translate.li1':     '<strong>Translation only</strong>Just the translated text, maximally compact',
    'features.s2.translate.li2':     '<strong>Side by side</strong>Source and translation next to each other',
    'features.s2.translate.li3':     '<strong>Interlinear</strong>The translation directly under the original, word alignment preserved',
    'features.s2.translate.p3':      'Switch modes in the toolbar, or set your preferred default in settings.',
    'features.s2.translate.li4':     '<strong>Many target languages</strong>Provided by Apple’s on-device Translation framework',
    'features.s2.translate.li5':     '<strong>Nothing leaves your Mac</strong>All translation happens locally',
    'features.s2.translate.li6':     '<strong>Selection menu reordering</strong>Translate and Bookmark sit at the top of the right-click / long-press menu by default. Reorder them in settings — whichever you reach for more often goes first.',

    'features.s2.stats.h':           'Translation statistics',
    'features.s2.stats.p1':          'Every word you look up can be remembered. ContinuousReader tracks:',
    'features.s2.stats.li1':         '<strong>Languages</strong>The languages you translate between, with frequencies',
    'features.s2.stats.li2':         '<strong>Words seen before</strong>With counts',
    'features.s2.stats.li3':         '<strong>Books</strong>Where you translated the most',
    'features.s2.stats.li4':         '<strong>Time-based activity</strong>When and how often you reach for translation',
    'features.s2.stats.p2':          'Tracking can be toggled any time. Turn it off and nothing is recorded. Turn it on and export the full history as an HTML report — useful for language learners, researchers, and translators.',
    'features.s2.stats.p3':          'Future: export to Anki or other flash-card formats, if there’s demand.',

    'features.s2.readaloud.h':       'Read Aloud',
    'features.s2.readaloud.p1':      'Built-in text-to-speech that reads from your current position. Not a separate mode — <em>an extension of the same reading session.</em>',
    'features.s2.readaloud.li1':     '<strong>Position sync on open</strong>The voice reader matches the paragraph you were visually on',
    'features.s2.readaloud.li2':     '<strong>Position sync on close</strong>The visual reader scrolls to the paragraph the voice finished',
    'features.s2.readaloud.li3':     '<strong>Word-by-word highlighting</strong>A soft rounded indicator glides from word to word, automatically keeping the current paragraph scrolled into view',
    'features.s2.readaloud.li4':     '<strong>Transport controls</strong>Play/pause, skip forward/back, elapsed time (monospaced digital timer), paragraph counter',
    'features.s2.readaloud.li5':     '<strong>Adjustable speed</strong>Continuous slider with real-time effect — change speed mid-sentence and playback picks up from the exact word, not the nearest paragraph',
    'features.s2.readaloud.li6':     '<strong>Pitch and voice</strong>Inline pitch slider, voice picker with Auto language detection or manual selection. Disabled during playback to prevent disruption — pause, adjust, resume.',
    'features.s2.readaloud.li7':     '<strong>Theme integration</strong>All controls, progress bar, and word highlight use your current reader theme colors',

    // Section 3 — The library
    'features.s3.label':          'Section three',
    'features.s3.h2':             'The <em>library</em>.',
    'features.s3.intro':          'How ContinuousReader organizes, displays, and manages your collection. The library is where you spend time between books — it should be fast, flexible, and stay out of your way.',
    'features.s3.banner':         'JustReader reads one book at a time and skips library management entirely. Everything below is ContinuousReader territory.',

    'features.s3.tabs.h':         'Three tabs',
    'features.s3.tabs.p1':        'The library is organized into three tabs, each with its own purpose:',
    'features.s3.tabs.li1':       '<strong>Library</strong>The complete collection, with all filtering, sorting, and folder scoping applied',
    'features.s3.tabs.li2':       '<strong>Latest</strong>Recently opened or recently imported books (switchable), ignoring folder filters',
    'features.s3.tabs.li3':       '<strong>Pinned</strong>Your favorites, also ignoring folder filters',
    'features.s3.tabs.p2':        'Latest and Pinned work as shortcuts — the books you want fast access to, without fiddling with filters.',

    'features.s3.views.h':        'Three view modes',
    'features.s3.views.li1':      '<strong>List view</strong>Adaptive row layout with five detail levels (full, compact, minimal, essential, mobile). Shows cover, title, author, series, progress, genre chips, and a context menu.',
    'features.s3.views.li2':      '<strong>Card view</strong>Responsive grid with cover images, 4-directional keyboard navigation, cover zoom animation, double-click to open, frosted glass selection checkboxes. On iPhone, fixed 2-column grid.',
    'features.s3.views.li3':      '<strong>Table view</strong>(Mac only) Sortable columns, column customization, two-level hierarchy, inline color dots in the title column, annotation sheet, and a full-width actions toolbar above the table.',
    'features.s3.views.p':        'All three support <strong>multi-mode grouping</strong>: none, author, series, or author &amp; series — with collapsible sections and shared section headers.',

    'features.s3.search.h':       'Search, sort, filter',
    'features.s3.search.li1':     '<strong>Scoped search</strong>Filter by title, author, series, comment, annotation, or genre. Instant debounced results.',
    'features.s3.search.li2':     '<strong>Eight sort options</strong>Title, author, series, date added, date opened, date published, reading progress, and file size. Each cycles through ascending, descending, and cleared states.',
    'features.s3.search.li3':     '<strong>Unified filter popover</strong>Color and genre filters combined in one place. Active filters show inline badges — up to 3 color dots then a count, genre name with ellipsis then a count.',

    'features.s3.colors.h':       'Color tags',
    'features.s3.colors.p':       'Seven Finder-style colored dots that can be assigned to any book via context menu, edit dialog, import dialog, or info panel. Optional color highlighting shows faint background tints in list and card views, and colored titles in table view.',

    'features.s3.genres.h':       'Genres and tags',
    'features.s3.genres.p1':      'Genre tags are auto-extracted from FB2 genre codes (around 170 mapped) and EPUB <code>dc:subject</code> metadata. A <strong>genre chip picker</strong> allows manual editing per book, and a full <strong>genre management sheet</strong> handles bulk operations across the library.',
    'features.s3.genres.p2':      'When a book has more genres than fit on a row, a <strong>+N badge</strong> shows the remainder with a hover popover showing the full list.',

    'features.s3.folders.h':      'Virtual folders',
    'features.s3.folders.p1':     'Flat user-created categories that work across all your books.',
    'features.s3.folders.li1':    '<strong>Collapsible sidebar</strong>On Mac and iPad (F4 to toggle)',
    'features.s3.folders.li2':    '<strong>Folder bottom sheet</strong>On iPhone with create, rename, delete, and swipe actions',
    'features.s3.folders.li3':    '<strong>Drag and drop</strong>Books onto folders to assign them',
    'features.s3.folders.li4':    '<strong>Bulk folder assignment</strong>In selection mode',
    'features.s3.folders.li5':    '<strong>Default folder</strong>For new imports — set via context menu, indicated with a star',
    'features.s3.folders.p2':     'Folders are flat (not hierarchical) by design — most users don’t need tree depth, and flat folders are faster to navigate.',

    'features.s3.info.h':         'Info panel',
    'features.s3.info.p1':        'A resizable detail panel (<code>F2</code> to toggle) organized in a <strong>three-island layout</strong> inspired by Apple’s System Settings:',
    'features.s3.info.li1':       '<strong>Island 1 — Editable metadata</strong>Title, author, series, action toolbar (Read / Book Card / Quick Look / Pin / Delete), color tag, genre chips, folder picker',
    'features.s3.info.li2':       '<strong>Island 2 — Preview content</strong>Annotation, notes, and bookmarks with links back to the Book Card',
    'features.s3.info.li3':       '<strong>Island 3 — Cover image</strong>Displayed when available',
    'features.s3.info.p2':        'The last visible island stretches to fill remaining vertical space. The panel remembers its width between sessions.',

    'features.s3.bulk.h':         'Selection mode and bulk operations',
    'features.s3.bulk.p1':        'Select multiple books and apply operations to all of them at once: color tag, genre assignment, author / series bulk edit, move to folder, delete.',
    'features.s3.bulk.p2':        'Available in all view modes on all platforms. Swipe actions and the Read button are disabled during selection mode to prevent accidents.',

    'features.s3.preview.h':      'Quick preview',
    'features.s3.preview.p1':     'Press <code>Space</code> in any view to see 2–3 paragraphs from your current reading position in a sheet, with async loading. Skips title-page content. Dismiss with Space or Esc.',
    'features.s3.preview.p2':     'Useful when scrolling through the library and wondering <em>"where was I in this one"</em> without opening the book.',

    'features.s3.bookcard.h':     'Unified Book Card',
    'features.s3.bookcard.p1':    'A tab-based modal that consolidates every piece of data about a book.',
    'features.s3.bookcard.li1':   '<strong>Cover</strong>Display, replace, or delete. Drag-and-drop on Mac.',
    'features.s3.bookcard.li2':   '<strong>Info</strong>All editable metadata in one place, 600ms debounced auto-save',
    'features.s3.bookcard.li3':   '<strong>Notes</strong>Rich text editor with full formatting toolbar',
    'features.s3.bookcard.li4':   '<strong>Marks</strong>All bookmarks with color filter, swipe-to-edit on iOS, inline editor on Mac',
    'features.s3.bookcard.li5':   '<strong>Stats</strong>Reading progress, pages, opens, dates, file size, translation insights. Exportable as an HTML report.',
    'features.s3.bookcard.p2':    'On Mac, the Book Card floats above the app window as a separate panel. On iPad, it’s a page-sized sheet. On iPhone, it’s a full sheet with native segmented control — swipe down to dismiss.',

    // Section 4 — Import
    'features.s4.label':          'Section four',
    'features.s4.h2':             '<em>Import</em>.',
    'features.s4.intro':          'Ways to add books, the formats supported, and the controls you have when a new book enters the library.',

    'features.s4.formats.h':      'Supported formats',
    'features.s4.formats.li1':    '<strong>EPUB</strong>With chapter extraction and embedded image handling',
    'features.s4.formats.li2':    '<strong>FB2 / FB2.ZIP</strong>With automatic genre code mapping (~170 codes)',
    'features.s4.formats.li3':    '<strong>MOBI</strong>Via a native decompressor',
    'features.s4.formats.li4':    '<strong>HTML / HTML.ZIP</strong>With HTML sanitization and encoding detection',
    'features.s4.formats.li5':    '<strong>TXT / TXT.ZIP</strong>With encoding detection',
    'features.s4.formats.li6':    '<strong>RTF / RTF.ZIP</strong>Streaming parser',
    'features.s4.formats.p':      'Embedded images are extracted, compressed to JPEG under 500KB at max 1200px, and stored alongside the content. Importing images is your choice, per book — on by default, off if the author overdoes it or you want to save space (the choice is remembered). Once imported, images in the reader can be <em>shown, masked (revealed on hover), or hidden entirely.</em>',

    'features.s4.ways.h':         'Three ways to import',
    'features.s4.ways.li1':       '<strong>Browse</strong>Native file picker with filter for all supported extensions',
    'features.s4.ways.li2':       '<strong>URL</strong>Paste a download link and the app fetches, validates, and imports the file',
    'features.s4.ways.li3':       '<strong>Drag and drop</strong>Drop a file onto the library. Or drag a URL straight from your browser’s address bar — the book is fetched and the import dialog opens with metadata, cover, and author already filled in. You skip the copy-paste-open-import-paste-fetch dance, but you still see the book before it joins the library.',
    'features.s4.ways.p1':        'On Mac, the import dialog has a persistent tab switcher (This Mac / URL / Drop) remembered between sessions.',
    'features.s4.ways.p2':        'In JustReader, importing replaces the current book. In ContinuousReader, books join the library.',

    'features.s4.dialog.h':       'Import dialog',
    'features.s4.dialog.p1':      'When you import a book into ContinuousReader, you can set its metadata before it enters the library:',
    'features.s4.dialog.li1':     '<strong>Duplicate detection</strong>Against existing library',
    'features.s4.dialog.li2':     '<strong>Cover preview</strong>Shown from the book’s own metadata — replaceable later from the Book Card',
    'features.s4.dialog.li3':     '<strong>Metadata preview</strong>Detected title, author, series, publication date, language',
    'features.s4.dialog.li4':     '<strong>Color tag</strong>Assignment',
    'features.s4.dialog.li5':     '<strong>Genre chip picker</strong>Manual genre editing',
    'features.s4.dialog.li6':     '<strong>Folder assignment</strong>Context-aware — uses the current folder when browsing a folder, falls back to your default setting',
    'features.s4.dialog.li7':     '<strong>Origin URL</strong>Stored for later "In Library" detection in OPDS',
    'features.s4.dialog.li8':     '<strong>Image inclusion toggle</strong>For FB2/EPUB/MOBI (strip images if you prefer text-only)',
    'features.s4.dialog.li9':     '<strong>Open after import</strong>Checkbox',
    'features.s4.dialog.p2':      'JustReader skips this dialog — pick a file, start reading.',

    'features.s4.size.h':         'File size protection',
    'features.s4.size.li1':       '<strong>5 MB</strong>Warning banner, import proceeds',
    'features.s4.size.li2':       '<strong>50 MB</strong>Hard limit, import rejected',
    'features.s4.size.li3':       '<strong>100 MB</strong>Hard limit on decompressed size for ZIP/EPUB archives',

    'features.s4.opds.h':         'OPDS browser',
    'features.s4.opds.p':         'Browse online book catalogs with a native interface.',
    'features.s4.opds.li1':       '<strong>Default catalogs</strong>Standard Ebooks, Project Gutenberg, Feedbooks — ready to use',
    'features.s4.opds.li2':       '<strong>Custom catalogs</strong>Add your own OPDS server with Basic Auth support',
    'features.s4.opds.li3':       '<strong>Feed navigation</strong>With breadcrumb trail and middle truncation for long paths',
    'features.s4.opds.li4':       '<strong>Server-side search</strong>Using the catalog’s OpenSearch template when available',
    'features.s4.opds.li5':       '<strong>Local filter</strong>At the bottom of every feed — instantly filters visible items by title, author, or summary as you type',
    'features.s4.opds.li6':       '<strong>Cover thumbnails</strong>With native caching',
    'features.s4.opds.li7':       '<strong>"In Library" badge</strong>For books already imported',
    'features.s4.opds.li8':       '<strong>Batch import queue</strong>With folder assignment, color tags, and format selection',
    'features.s4.opds.li9':       '<strong>Single import</strong>With post-import options',

    'features.s4.watch.h':        'OPDS shortcuts and watchers',
    'features.s4.watch.p':        'Two features that make OPDS browsing more than a one-time lookup.',
    'features.s4.watch.li1':      '<strong>Shortcuts</strong>Bookmark any feed for one-click navigation. Useful for favorite author pages, series, or collections.',
    'features.s4.watch.li2':      '<strong>Watchers</strong>Track series or author feeds for new entries. Toggle an eye icon on any acquisition feed to start watching. "Check" detects new additions manually. Color-coded status: green when all entries are in your library, orange when new ones appear. Delete a catalog, and all its shortcuts and watchers are cleaned up.',

    // Section 5 — Sync and data
    'features.s5.label':          'Section five',
    'features.s5.h2':             'Sync and <em>data</em>.',
    'features.s5.intro':          'How your library travels between devices, how it’s stored, and what happens when you want to move it, back it up, or walk away.',
    'features.s5.banner':         'Sync, backup, and library management require ContinuousReader. JustReader has no library to sync.',

    'features.s5.icloud.h':       'iCloud sync',
    'features.s5.icloud.p1':      'Included in ContinuousReader, works across <strong>every Apple device signed into the same Apple ID</strong> — home Mac, work Mac, travel laptop, iPad, iPhone.',
    'features.s5.icloud.li1':     '<strong>Reading positions</strong>Down to the exact paragraph',
    'features.s5.icloud.li2':     '<strong>Bookmarks</strong>With colors, notes, and text highlights',
    'features.s5.icloud.li3':     '<strong>Notes</strong>The full rich-text content per book',
    'features.s5.icloud.li4':     '<strong>Library metadata</strong>Titles, authors, folders, color tags, genres',
    'features.s5.icloud.p2':      '<strong>What doesn’t sync:</strong> your per-device reading settings. Each device keeps its own font, size, theme, and padding — because a comfortable setup on a 27-inch Mac is rarely a comfortable setup on an iPhone held in one hand at midnight.',
    'features.s5.icloud.p3':      'If you want, per-device settings can also be synced — it’s an opt-in switch in preferences.',

    'features.s5.storage.h':      'Readable book storage',
    'features.s5.storage.p':      'Book content is stored as clean HTML on disk. Files are named with readable slugs — <code>strugatskie-trudno-byt-bogom.html</code> rather than UUIDs or hashes. You can navigate your library folder in Finder, open any book with a text editor, and the content is just there.',
    'features.s5.storage.callout':'Your library is a folder of files. Read it with <code>cat</code> if you want to.',

    'features.s5.backup.h':       'Backup and restore',
    'features.s5.backup.li1':     '<strong>Backup</strong>Export the entire library (books, metadata, bookmarks, notes) to a single ZIP file. Size and filename shown in status.',
    'features.s5.backup.li2':     '<strong>Restore</strong>Import from backup with validation — book count check, version compatibility, and a confirmation dialog before overwriting.',
    'features.s5.backup.p':       'Use this to move to a new Mac, keep a second library on an external drive, or just archive a point-in-time snapshot before reorganizing.',

    'features.s5.location.h':     'Custom library location <em>(Mac)</em>',
    'features.s5.location.p1':    'By default, your library lives inside the app’s sandbox. You can move it anywhere:',
    'features.s5.location.li1':   '<strong>Any folder</strong>On your Mac, including external drives',
    'features.s5.location.li2':   '<strong>When moving</strong>Choose to move existing data or use the new folder as-is (for multiple libraries)',
    'features.s5.location.li3':   '<strong>Reset</strong>Any time to return to the default location',
    'features.s5.location.p2':    'Multiple libraries work through this mechanism — point at different folders for different purposes (work books / novels / research / whatever).',

    // Section 6 — Platform details
    'features.s6.label':          'Section six',
    'features.s6.h2':             'Platform <em>details</em>.',
    'features.s6.intro':          'For a full platform-by-platform comparison — what’s available on Mac, iPad, and iPhone, and how each platform adapts the interface to its conventions — see the platforms page.',
    'features.s6.mac.h':          'Mac',
    'features.s6.mac.p':          'The most feature-rich. <strong>Table view</strong>, keyboard shortcuts, floating panels, island design, drag-and-drop everywhere.',
    'features.s6.ipad.h':         'iPad',
    'features.s6.ipad.p':         'Touch-optimized. <strong>Native swipe actions</strong>, side panel, split view, two-column settings layout.',
    'features.s6.iphone.h':       'iPhone',
    'features.s6.iphone.p':       'Streamlined for one-hand use. <strong>Compact UI</strong>, gesture navigation, bottom sheets, half-sheet folders.',
    'features.s6.outro':          'All three share the same reader, same themes, same typography controls, same translation and Read Aloud.',
    'features.s6.link':           'See the full platforms page',

    // Section 7 — Interface that fits
    'features.s7.label':          'Closing',
    'features.s7.h2':             'Interface that <em>fits</em>.',
    'features.s7.intro':          'Not every reader needs every feature. ContinuousReader is built to adapt — <em>twice</em>.',
    'features.s7.wizard.h':       'On first launch — the <em>Welcome wizard</em>.',
    'features.s7.wizard.p':       'Before you import your first book, a short setup walks you through the choices that matter: language, interface theme, library view (list, cards, or table), and which features you want visible. Four or five screens, all skippable, all changeable later. <strong>You start with an app that already looks the way you want.</strong>',
    'features.s7.toggles.h':      'Any time after — the <em>Features panel</em>.',
    'features.s7.toggles.p':      'If you never use Read Aloud, turn it off and the button disappears from the bottom toolbar. Same for OPDS, Translation, and Statistics. Found in Settings → Features. Each toggle removes the feature from the UI cleanly — <strong>no dimmed buttons, no empty placeholders, no orphan shortcuts, no menu items that never apply to you.</strong>',
    'features.s7.outro':          'Change your mind, relaunch the wizard from Settings. Your app should reflect how you read, not how we expect everyone to read.',

    // ============================================================
    // PLATFORMS
    // ============================================================
    'meta.platforms.title':   'Platforms — ContinuousReader',
    'meta.platforms.desc':    'One app, one library, one purchase. Adapted to Mac, iPad, and iPhone — not a compromise that ignores all three.',
    'meta.platforms.ogTitle': 'Platforms — ContinuousReader',
    'meta.platforms.ogDesc':  'One app, one library, one purchase. Adapted to Mac, iPad, and iPhone — not a compromise that ignores all three.',

    'platforms.header.eyebrow':  'Mac · iPad · iPhone',
    'platforms.header.title':    'Three platforms, three <em>experiences</em>.',
    'platforms.header.subtitle': 'One app, one library, one purchase. Adapted to each device’s way of working — not a compromise that ignores all three.',
    'platforms.header.intro1':   'Cross-platform apps usually land in one of two places. Either they look the same everywhere — which means they look wrong somewhere. Or they’re three separate apps held together by the same name and a cloud icon.',
    'platforms.header.intro2':   'ContinuousReader is neither. <strong>The reader engine, the library model, the typography controls, the themes, the translation, the Read Aloud — all shared, all identical in behavior.</strong> What changes is how you interact with them: with a keyboard and trackpad on a Mac, with taps and swipes on an iPad, with one thumb on an iPhone.',

    'platforms.mac.eyebrow':    'macOS',
    'platforms.mac.title':      'The full <em>workspace</em>.',
    'platforms.mac.intro':      'The Mac version gets everything the platform invites: keyboard shortcuts for every frequent action, resizable panels, drag-and-drop everywhere, floating Book Card windows that hover above the app, and an <em>island design</em> inspired by Apple’s System Settings — rounded floating containers on a recessed window background.',
    'platforms.mac.label':      'What Mac gets uniquely',
    'platforms.mac.li1':        '<strong>Table view</strong>Sortable columns, column customization, two-level hierarchy, full-width actions toolbar above the table',
    'platforms.mac.li2':        '<strong>Chapter map</strong>A proportional track where taller chapters are literally taller, with a sliding viewport indicator. If you’ve used the minimap in a code editor, you already know the idea — applied to a book instead of a source file.',
    'platforms.mac.li3':        '<strong>Two-page spread</strong>For a classic book layout when reading long-form',
    'platforms.mac.li4':        '<strong>Keyboard shortcuts</strong>For everything: Cmd+B to bookmark, Cmd+F to search, Cmd+G for the progress drawer, F2/F3/F4 for panels, Space for quick preview',
    'platforms.mac.li5':        '<strong>Resizable info panel</strong>Three-island layout that remembers its width between sessions',
    'platforms.mac.li6':        '<strong>Custom library location</strong>Point the app at any folder on your Mac or external drive',
    'platforms.mac.li7':        '<strong>Backup and restore</strong>Export the full library to ZIP, restore from any snapshot',
    'platforms.mac.closing':    'The version to use when you have a keyboard, a chair, and time.',
    'platforms.mac.shotCap':    'UI in <span class="lang-tag">Українська</span>',

    'platforms.ipad.eyebrow':   'iPadOS',
    'platforms.ipad.title':     'The reading <em>surface</em>.',
    'platforms.ipad.intro':     'iPad sits between Mac and iPhone — more room than a phone, more touch than a laptop. ContinuousReader takes advantage of both.',
    'platforms.ipad.label':     'What iPad does uniquely well',
    'platforms.ipad.li1':       '<strong>Native swipe actions</strong>On books for quick actions (pin, color, delete)',
    'platforms.ipad.li2':       '<strong>Side panel</strong>With bookmarks, chapters, and comments — same data as Mac, adapted to touch',
    'platforms.ipad.li3':       '<strong>Split view ready</strong>Read alongside any other iPad app',
    'platforms.ipad.li4':       '<strong>Two-column settings</strong>Layout that uses the wider screen instead of pretending to be an iPhone',
    'platforms.ipad.li5':       '<strong>Card view with column picker</strong>In quick settings — choose 2, 3, or 4 columns depending on how dense you want the grid',
    'platforms.ipad.li6':       '<strong>Page-sized OPDS browser</strong>Not a narrow sheet, not a separate window, but a focused dialog the size of the page',
    'platforms.ipad.closing':   'Same island design as Mac, same fonts, same themes. The library looks like it belongs to the same app — because it does.',
    'platforms.ipad.shotCap':   'UI in <span class="lang-tag">English</span>',

    'platforms.iph.eyebrow':    'iOS',
    'platforms.iph.title':      'The pocket <em>reader</em>.',
    'platforms.iph.intro':      'The iPhone version is <strong>streamlined, not stripped</strong>. Every feature that makes sense on a small screen is there. The ones that don’t — the table view, the floating panels, the two-page spread — are quietly absent, because forcing them would make the app worse.',
    'platforms.iph.label':      'What iPhone does differently',
    'platforms.iph.li1':        '<strong>One-hand friendly</strong>Touch targets, swipe zones, and reachable controls within thumb’s reach',
    'platforms.iph.li2':        '<strong>Bottom sheets</strong>Instead of popovers — half-sheet folders, settings, filters. Natural iOS interaction.',
    'platforms.iph.li3':        '<strong>Double-tap fullscreen</strong>The reading area expands under the Dynamic Island, bottom bar hides, text fills the screen. Double-tap again to exit.',
    'platforms.iph.li4':        '<strong>Pixel-art clock</strong>Optional dotted clock shows the time as part of the page background during fullscreen reading. For anyone who’s ever lost track of time and missed their stop.',
    'platforms.iph.li5':        '<strong>Compact library</strong>5-level adaptive row layout that trims information as space shrinks',
    'platforms.iph.li6':        '<strong>Fixed 2-column card grid</strong>Not responsive, always 2. Because on a phone, 3 is too many and 1 is too few.',
    'platforms.iph.li7':        '<strong>Gesture navigation</strong>Edge swipes, pull-to-refresh, swipe-to-dismiss sheets. iOS the way iOS should work.',
    'platforms.iph.shotCap':    'UI in <span class="lang-tag">Русский</span>',

    'platforms.table.eyebrow':  'Side by side',
    'platforms.table.title':    'Feature availability by <em>platform</em>.',
    'platforms.table.intro':    'Not every feature is on every platform. Here’s what’s where.',
    'platforms.table.cells':    'Mac·iPad·iPhone', // unused — see notes
    'platforms.table.footer':   '<strong>All platforms share:</strong> the reader engine, position tracking, bookmarks, notes, translation, Read Aloud, sync, all 34 themes, all 9 fonts, all file format support.',

    // Platform comparison table rows — header + data
    'platforms.table.col.feature':  '',
    'platforms.table.col.mac':      'Mac',
    'platforms.table.col.ipad':     'iPad',
    'platforms.table.col.iphone':   'iPhone',
    'platforms.table.r1.f':         'Library layout',
    'platforms.table.r1.mac':       'Island design, resizable, hover effects',
    'platforms.table.r1.ipad':      'Island design, swipe actions',
    'platforms.table.r1.iph':       'Compact list, swipe actions',
    'platforms.table.r2.f':         'View modes',
    'platforms.table.r2.mac':       'List, Card, Table',
    'platforms.table.r2.ipad':      'List, Card',
    'platforms.table.r2.iph':       'List, Card',
    'platforms.table.r3.f':         'Folders',
    'platforms.table.r3.mac':       'Collapsible sidebar (F4)',
    'platforms.table.r3.ipad':      'Collapsible sidebar',
    'platforms.table.r3.iph':       'Bottom sheet',
    'platforms.table.r4.f':         'Info panel',
    'platforms.table.r4.mac':       'Resizable side panel',
    'platforms.table.r4.ipad':      'Resizable side panel',
    'platforms.table.r4.iph':       'Push detail view',
    'platforms.table.r5.f':         'Reader side panel',
    'platforms.table.r5.mac':       'Integrated left panel',
    'platforms.table.r5.ipad':      'Integrated left panel',
    'platforms.table.r5.iph':       'Overlay drawer',
    'platforms.table.r6.f':         'Themes',
    'platforms.table.r6.mac':       'All 34',
    'platforms.table.r6.ipad':      'All 34',
    'platforms.table.r6.iph':       'All 34',
    'platforms.table.r7.f':         'Fonts',
    'platforms.table.r7.mac':       'All 9',
    'platforms.table.r7.ipad':      'All 9',
    'platforms.table.r7.iph':       'All 9',
    'platforms.table.r8.f':         'Typography controls',
    'platforms.table.r8.mac':       'Full',
    'platforms.table.r8.ipad':      'Full',
    'platforms.table.r8.iph':       'Full',
    'platforms.table.r9.f':         'Settings',
    'platforms.table.r9.mac':       'Popover + Cmd+, dialog',
    'platforms.table.r9.ipad':      'Popover, two-column',
    'platforms.table.r9.iph':       'Sheet with detents',
    'platforms.table.r10.f':        'Page modes',
    'platforms.table.r10.mac':      'Scroll, Page, Two pages',
    'platforms.table.r10.ipad':     'Scroll, Page',
    'platforms.table.r10.iph':      'Scroll, Page',
    'platforms.table.r11.f':        'Chapter map',
    'platforms.table.r12.f':        'Fullscreen reading',
    'platforms.table.r12.mac':      'Native macOS fullscreen',
    'platforms.table.r12.ipad':     'Double-tap',
    'platforms.table.r12.iph':      'Double-tap',
    'platforms.table.r13.f':        'Pixel-art clock',
    'platforms.table.r14.f':        'Navigation',
    'platforms.table.r14.mac':      'Keyboard + trackpad',
    'platforms.table.r14.ipad':     'Touch + swipes + keyboard',
    'platforms.table.r14.iph':      'Edge swipes + tap zones',
    'platforms.table.r15.f':        'OPDS',
    'platforms.table.r15.mac':      'Floating window',
    'platforms.table.r15.ipad':     'Page-sized dialog',
    'platforms.table.r15.iph':      'Sheet',
    'platforms.table.r16.f':        'Filters',
    'platforms.table.r16.mac':      'Unified popover',
    'platforms.table.r16.ipad':     'Unified popover',
    'platforms.table.r16.iph':      'Unified half-sheet',
    'platforms.table.r17.f':        'Backup / Restore',
    'platforms.table.r18.f':        'Custom library location',
    'platforms.table.r19.f':        'Drag URL from browser',
    'platforms.table.r20.f':        'Keyboard shortcuts',
    'platforms.table.r20.mac':      'Full set',
    'platforms.table.r20.ipad':     'Most',
    'platforms.table.r20.iph':      'Some',

    'platforms.purchase.eyebrow':  'One purchase',
    'platforms.purchase.title':    'Buy once. <em>Use everywhere.</em>',
    'platforms.purchase.body1':    'Everything above is included in ContinuousReader for <strong>$9.99</strong> at launch (regularly $19.99). Universal Purchase — buy once on any platform, install on all three, sync turned on.',
    'platforms.purchase.body2':    'Or try <a href="download.html">JustReader</a> for free — a single-book version of the reader with the same engine, the same themes, the same translation. Available on all three platforms too.',

    // ============================================================
    // DOWNLOAD
    // ============================================================
    'meta.download.title':   'Download — ContinuousReader',
    'meta.download.desc':    'ContinuousReader and JustReader for Mac, iPad, and iPhone. One-time purchase or free. Universal Purchase, iCloud sync, no subscription.',
    'meta.download.ogTitle': 'Download — ContinuousReader',
    'meta.download.ogDesc':  'ContinuousReader for Mac, iPad, iPhone. JustReader free. Universal Purchase, iCloud sync, no subscription.',

    'download.header.eyebrow':  'Available on the App Store',
    'download.header.title':    'Get <em>ContinuousReader</em>.',
    'download.header.subtitle': 'One-time purchase. Three platforms. Free updates for the lifetime of the current major version.',

    'download.cr.name':       'ContinuousReader',
    'download.cr.price':      '$9.99',
    'download.cr.priceSub':   'launch price · regularly $19.99 · once, not monthly',
    'download.cr.desc':       'Full reading workspace. Your full reading library. iCloud sync across <strong>every Apple device you own</strong>. Bookmarks, notes, translation statistics, reading stats. OPDS catalogs with watchers. Backup and restore. Every feature, on every device.',
    'download.cr.button':     'Download on the App Store',
    'download.cr.note':       'App Store badge placeholder',
    'download.jr.name':       'JustReader',
    'download.jr.price':      'Free',
    'download.jr.priceSub':   'truly free, no tricks',
    'download.jr.desc':       'Single-book reader. Same engine, same typography, same 34 themes, same translation, same Read Aloud. <strong>No library, no sync, no bookmarks</strong> — you open a file, you read it, you move on. Available on Mac, iPad, and iPhone.',
    'download.jr.button':     'Download on the App Store',
    'download.jr.note':       'App Store badge placeholder',

    'download.included.eyebrow':  'In the box',
    'download.included.title':    'What’s <em>included</em>.',
    'download.included.intro':    'ContinuousReader is one purchase, no extras, no hidden costs.',
    'download.included.li1':      '<strong>Universal Purchase</strong> — buy on any platform, use on all three (Mac, iPad, iPhone).',
    'download.included.li2':      '<strong>iCloud sync across every Apple device you own</strong> — reading positions, bookmarks, notes, and library metadata synchronize between all devices signed into the same Apple ID. Home Mac mini, work MacBook Pro, travel Air, iPad, iPhone — they all share the same library and the same reading position. Book files sync through iCloud Drive when you have space; if not, you can keep files local and still sync your reading state.',
    'download.included.li3':      '<strong>Free updates for the lifetime of the current major version</strong> — bug fixes, new themes, new features.',
    'download.included.li4':      '<strong>No subscription</strong>, no recurring charges, no tier lockouts.',
    'download.included.li5':      '<strong>No ads, no telemetry, no analytics</strong> sold to anyone.',
    'download.included.note':     'When a major version requires a paid upgrade (<em>not planned for a long time</em>), <strong>you’ll know well in advance</strong> and it will be optional — your current version keeps working.',

    'download.req.eyebrow':       'Compatibility',
    'download.req.title':         'System <em>requirements</em>.',
    'download.req.row1.os':       'macOS',
    'download.req.row1.v':        '14.0 Sonoma or later',
    'download.req.row2.os':       'iPadOS',
    'download.req.row2.v':        '17.0 or later',
    'download.req.row3.os':       'iOS',
    'download.req.row3.v':        '17.0 or later',
    'download.req.note':          'Universal Purchase works with any Apple ID that owns either app. iCloud sync requires iCloud Drive enabled on all devices you want to sync (free tier is sufficient for reading state; see the <a href="#faq">FAQ below</a> for storage guidance).',

    'download.cmp.eyebrow':       'Side by side',
    'download.cmp.title':         'ContinuousReader <em>or</em> JustReader?',
    'download.cmp.col.feature':   'Feature',
    'download.cmp.col.jr':        'JustReader',
    'download.cmp.col.cr':        'ContinuousReader',
    'download.cmp.r.price':       'Price',
    'download.cmp.r.price.jr':    '<strong>Free</strong>',
    'download.cmp.r.price.cr':    '<strong>$9.99</strong> launch · $19.99 regular',
    'download.cmp.r.platforms':   'Platforms',
    'download.cmp.r.platforms.v': 'Mac, iPad, iPhone',
    'download.cmp.r.themes':      'All 34 themes',
    'download.cmp.r.fonts':       'All 9 typefaces',
    'download.cmp.r.typo':        'Full typography control',
    'download.cmp.r.modes':       'Scroll / Page / Two-page modes',
    'download.cmp.r.translate':   'Translation (inline, non-disruptive)',
    'download.cmp.r.tts':         'Read Aloud with word highlighting',
    'download.cmp.r.chapters':    'Chapter navigation',
    'download.cmp.r.search':      'In-book search',
    'download.cmp.r.full':        'Fullscreen with pixel-art clock',
    'download.cmp.r.gallery':     'Image gallery with save/export',
    'download.cmp.r.wizard':      'Welcome wizard + Features toggle',
    'download.cmp.r.formats':     'All supported formats (EPUB, FB2, MOBI, HTML, TXT, RTF)',
    'download.cmp.divider':       'Only in ContinuousReader',
    'download.cmp.r.lib':         'Book library (multiple books)',
    'download.cmp.r.icloud':      'iCloud sync across devices',
    'download.cmp.r.bm':          'Bookmarks with colors and notes',
    'download.cmp.r.notes':       'Per-book notes (rich text editor)',
    'download.cmp.r.tstats':      'Translation statistics and reports',
    'download.cmp.r.rstats':      'Reading time tracking and statistics',
    'download.cmp.r.export':      'Settings export/import (.crsettings)',
    'download.cmp.r.opds':        'OPDS browser with shortcuts and watchers',
    'download.cmp.r.org':         'Folders, color tags, genre management',
    'download.cmp.r.backup':      'Backup and restore to ZIP',
    'download.cmp.r.loc':         'Custom library location (Mac)',
    'download.cmp.r.url':         'Drag URL from browser to library',
    'download.cmp.footer':        '<strong>Both apps receive bug fixes and compatibility updates.</strong> Feature updates go to ContinuousReader.',

    'download.faq.eyebrow':       'FAQ',
    'download.faq.title':         '<em>Questions</em>.',
    'download.faq.q1':            'Is JustReader a <em>trial</em>?',
    'download.faq.a1.p1':         'No. It’s a separate, standalone app — free, fully functional for its scope, no time limits, no feature teasers. It reads one book at a time and does that well.',
    'download.faq.a1.p2':         'If you want a library, sync, bookmarks, or OPDS — upgrade to ContinuousReader. Otherwise, use JustReader forever without paying.',
    'download.faq.q2':            'Can I try ContinuousReader before <em>buying</em>?',
    'download.faq.a2.p1':         'JustReader is the closest thing to a trial — same reader engine, same typography, same translation and Read Aloud. If you like how JustReader handles reading, ContinuousReader will feel identical, just with a library and sync added.',
    'download.faq.a2.p2':         'For library-specific features (OPDS, folders, bookmarks), there’s no trial — but Apple’s standard App Store refund policy applies within 14 days.',
    'download.faq.q3':            'Why is the price <em>$9.99</em>?',
    'download.faq.a3.p1':         'It’s a launch price. For the first 60 days after release, ContinuousReader is $9.99 — a thank-you to early adopters who buy in before there are reviews, screenshots from real users, or word of mouth. After that, the price returns to its regular $19.99.',
    'download.faq.a3.p2':         'If you buy at the launch price, you keep it forever, including all updates within the current major version. There’s no "you should have bought now" trick later — what you paid is what you paid.',
    'download.faq.q4':            'Do I have to pay again for <em>each device</em>?',
    'download.faq.a4':            'No. Universal Purchase means one payment unlocks Mac, iPad, and iPhone versions under the same Apple ID. Install on as many of your devices as you want.',
    'download.faq.q5':            'How many devices can I <em>sync</em>?',
    'download.faq.a5':            'As many as you own — <em>all of them</em>. Sync runs across every Apple device signed into your Apple ID. Home Mac, work Mac, travel laptop, iPad, iPhone — if it runs ContinuousReader and your iCloud account is there, it’s in sync.',
    'download.faq.q6':            'How much iCloud storage do I <em>need</em>?',
    'download.faq.a6.p1':         'iCloud sync has two parts, and they use different storage.',
    'download.faq.a6.p2':         '<strong>Reading state</strong> — your position, bookmarks, notes, library metadata — syncs through iCloud’s Key-Value Store. This is separate from your iCloud storage quota and works the same on any tier, including the free 5 GB.',
    'download.faq.a6.p3':         '<strong>Book files</strong> — the actual content of your books — sync through iCloud Drive. These count against your iCloud storage like any other files. Books with embedded images typically run around 2–4 MB each; plain text books are under 1 MB.',
    'download.faq.a6.p4':         'On the free 5 GB tier (shared with iCloud backups, photos, and other files), a modest library of a few hundred books fits comfortably. For very large libraries — especially illustrated ones — an iCloud+ plan (50 GB for about $1 a month, or 200 GB for around $3) is worth considering.',
    'download.faq.a6.p5':         'If you prefer to keep book files off iCloud entirely, you can turn off file sync and keep only reading state synced — your positions and bookmarks still travel between devices, but book files live only on each device’s local storage. Alternatively, the Mac app’s built-in backup feature can export your entire library to a ZIP file, which you can store on any cloud service or external drive.',
    'download.faq.q7':            'What about <em>family sharing</em>?',
    'download.faq.a7':            'Family Sharing is supported — up to six members in your family group can install ContinuousReader under their own Apple IDs without paying again.',
    'download.faq.q8':            'Will there be a <em>subscription</em>?',
    'download.faq.a8':            'No. Subscription doesn’t fit this class of app, and selling the same software every month isn’t the right model here. Future major versions may be paid upgrades, but your current version keeps working as long as Apple supports the OS it runs on.',
    'download.faq.q9':            'Where is my data <em>stored</em>?',
    'download.faq.a9.p1':         'Locally on your device. If iCloud sync is enabled, also in your own iCloud — under your Apple ID, not on any server controlled by the developer.',
    'download.faq.a9.p2':         'Book content is readable as plain HTML files if you browse your library folder in Finder. <strong>Nothing leaves your devices unless you explicitly export it.</strong>',
    'download.faq.q10':           'What happens if I stop using <em>iCloud</em>?',
    'download.faq.a10':           'Your library keeps working locally. Without iCloud, devices just don’t sync — each one maintains its own state. You can use ContinuousReader entirely offline.',
    'download.faq.q11':           'What about <em>privacy</em>?',
    'download.faq.a11':           'No analytics, no telemetry, no tracking. Translation runs on-device through Apple’s framework. No network access during reading. <em>Your reading habits are your own.</em>',
    'download.faq.q12':           '<em>Support</em>?',
    'download.faq.a12':           'Email: <a href="mailto:hello@continuousreader.app">hello@continuousreader.app</a>. One developer handles everything, so response time runs in days rather than hours — but every message gets a real reply.',

    'download.about.eyebrow':     'About',
    'download.about.title':       'A note <em>before you download</em>.',
    'download.about.p1':          'ContinuousReader is independently developed — not a product of a studio, a startup, or an investor deck. <strong>Every feature exists because someone</strong> (usually the developer, occasionally a reader) <strong>actually needed it while reading a book.</strong>',
    'download.about.p2':          'Buying ContinuousReader supports that approach: careful software built slowly, for a small audience of people who take reading seriously. JustReader is the same philosophy given away — because a reading app should help people read, even if they never pay.',
    'download.about.p3':          'For questions, suggestions, or bug reports: <a href="mailto:hello@continuousreader.app">hello@continuousreader.app</a>.',

    // ============================================================
    // CONTACT
    // ============================================================
    'meta.contact.title':   'Contact — ContinuousReader',
    'meta.contact.desc':    'Get in touch with the developer of ContinuousReader. Bug reports, feature requests, or just say hello.',
    'meta.contact.ogTitle': 'Contact — ContinuousReader',
    'meta.contact.ogDesc':  'Bug reports, feature requests, or just say hello.',

    'contact.header.eyebrow':  'One developer, real replies',
    'contact.header.title':    'Get in <em>touch</em>.',
    'contact.header.subtitle': 'Bug report, feature request, or just a note about a book you’re reading.',

    'contact.form.name':       'Name',
    'contact.form.email':      'Email',
    'contact.form.subject':    'Subject',
    'contact.form.subj.bug':     'Bug report',
    'contact.form.subj.feature': 'Feature request',
    'contact.form.subj.question':'Question',
    'contact.form.subj.other':   'Other',
    'contact.form.message':    'Message',
    'contact.form.submit':     'Send message',
    'contact.note':            'You can also write directly to <a href="mailto:hello@continuousreader.app">hello@continuousreader.app</a>. One developer handles everything, so replies usually take a day or two — but every message gets a real answer.',

    // ============================================================
    // PRIVACY
    // ============================================================
    'meta.privacy.title':   'Privacy Policy — ContinuousReader',
    'meta.privacy.desc':    'ContinuousReader privacy policy. No analytics, no tracking, no telemetry. Your reading habits are your own.',
    'meta.privacy.ogTitle': 'Privacy Policy — ContinuousReader',
    'meta.privacy.ogDesc':  'No analytics, no tracking, no telemetry. Your reading habits are your own.',

    'privacy.header.eyebrow':  'Your data, your devices',
    'privacy.header.title':    'Privacy <em>Policy</em>',
    'privacy.header.subtitle': 'Last updated: May 2026',

    'privacy.short.h':         'The short version',
    'privacy.short.p':         'ContinuousReader and JustReader do not collect, transmit, or store any personal data on external servers. <strong>No analytics, no telemetry, no tracking, no advertising.</strong> Your reading habits are your own.',
    'privacy.local.h':         'Data stored on your device',
    'privacy.local.p':         'All app data is stored locally on your device:',
    'privacy.local.li1':       '<strong>Books</strong> — converted to HTML and stored in your app’s Documents directory. You can browse these files in Finder.',
    'privacy.local.li2':       '<strong>Reading positions, bookmarks, notes</strong> — stored in a local SwiftData database within the app sandbox.',
    'privacy.local.li3':       '<strong>Reader settings</strong> — font, theme, layout preferences, stored in UserDefaults on each device.',
    'privacy.local.li4':       '<strong>Translation history</strong> — if translation statistics tracking is enabled, looked-up words are stored locally. You can disable tracking or clear the history at any time.',
    'privacy.cloud.h':         'iCloud sync (optional)',
    'privacy.cloud.p1':        'When you enable iCloud sync in ContinuousReader, the following data is synchronized through your personal iCloud account:',
    'privacy.cloud.li1':       '<strong>Reading state</strong> — positions, bookmarks, notes, library metadata (via iCloud Key-Value Store)',
    'privacy.cloud.li2':       '<strong>Book files</strong> — converted HTML, cover images, and metadata (via iCloud Drive)',
    'privacy.cloud.li3':       '<strong>Translation records</strong> — if tracking is enabled (via iCloud Drive)',
    'privacy.cloud.p2':        'This data travels between your devices through Apple’s iCloud infrastructure, under your Apple ID. <strong>The developer has no access to your iCloud data.</strong> You can disable iCloud sync at any time; your library continues to work locally.',
    'privacy.net.h':           'Network access',
    'privacy.net.p1':          'The apps access the network only when:',
    'privacy.net.li1':         '<strong>iCloud sync</strong> is enabled (Apple’s iCloud servers)',
    'privacy.net.li2':         '<strong>OPDS catalog browsing</strong> — you connect to third-party book catalogs you configure yourself (ContinuousReader only)',
    'privacy.net.li3':         '<strong>URL import</strong> — when you drag a URL into the import dialog to download a book file',
    'privacy.net.p2':          'No network access occurs during reading. Translation uses Apple’s on-device Translation framework — <strong>nothing leaves your device</strong>.',
    'privacy.third.h':         'Third-party services',
    'privacy.third.p':         'The apps do not integrate any third-party analytics, crash reporting, advertising, or tracking services. The only external dependency is Apple’s own frameworks (iCloud, Translation).',
    'privacy.kids.h':          'Children’s privacy',
    'privacy.kids.p':          'The apps do not collect personal information from anyone, including children under 13.',
    'privacy.changes.h':       'Changes to this policy',
    'privacy.changes.p':       'If this policy changes, the updated version will be posted here with a new "Last updated" date. The apps themselves do not collect data, so changes would only reflect new features (like optional cloud services).',
    'privacy.contact.h':       'Contact',
    'privacy.contact.p':       'Questions about privacy: <a href="mailto:hello@continuousreader.app">hello@continuousreader.app</a>',
  },

  // ============================================================
  // RUSSIAN — index.html complete; other pages fall back to EN
  //
  // Register: formal «вы» throughout, matching the app's existing
  // RU localization (Localizable.xcstrings).
  // Glossary:
  //   ContinuousReader / JustReader — kept as-is (brand)
  //   Read Aloud → «Чтение вслух»
  //   Bookmark → «Закладка»
  //   Side panel → «Боковая панель»
  //   Cover → «Обложка»
  //   Theme → «Тема»
  //   Library → «Библиотека»
  //   Sync → «Синхронизация»
  //   Family Sharing → «Семейный доступ» (Apple-canonical)
  //   Universal Purchase → «Универсальная покупка» (Apple-canonical)
  // ============================================================
  ru: {
    // ---------- Navigation ----------
    'nav.features':  'Возможности',
    'nav.platforms': 'Платформы',
    'nav.download':  'Загрузка',

    // ---------- Footer ----------
    'foot.tagline':       'Для тех, кто не пролистывает.',
    'foot.col.product':   'Продукт',
    'foot.col.info':      'Информация',
    'foot.col.language':  'Язык',
    'foot.link.privacy':  'Приватность',
    'foot.link.contact':  'Связаться',
    'foot.copy':          '© 2026 ContinuousReader. Разработка — Алексей Кошкин.',
    'foot.signoff':       'Читалка для читателей.',

    // ---------- Common ----------
    'common.finalCta.title':    'Начните <em>читать.</em>',
    'common.finalCta.subtitle': 'Два приложения. Прочесть книгу — или собрать библиотеку.',
    'common.cta.getCR':         'Загрузить ContinuousReader',
    'common.cta.getJR':         'Загрузить JustReader, бесплатно',
    'common.cta.tryJR':         'Или попробуйте JustReader, бесплатно',

    // ---------- Meta (index) ----------
    'meta.index.title':    'ContinuousReader — Книга — продолжается.',
    'meta.index.desc':     'Нативная читалка для Mac, iPad и iPhone. Закройте на Mac в полночь, откройте на iPhone утром. Та же книга. Тот же абзац. Сделано для тех, кто читает, а не пролистывает.',
    'meta.index.ogTitle':  'ContinuousReader — Книга — продолжается.',
    'meta.index.ogDesc':   'Нативная читалка для Mac, iPad и iPhone. Закройте на Mac в полночь, откройте на iPhone утром. Та же книга. Тот же абзац.',

    // ---------- Hero ----------
    'index.hero.eyebrow':  'Нативная читалка для Mac, iPad и iPhone',
    'index.hero.headline': '<span class="dropcap">К</span>нига <span class="punct">—</span> <em>продолжается.</em>',
    'index.hero.sub':      'Закройте на Mac в полночь. Откройте на iPhone утром по дороге на работу. <strong>Та же книга. Та же страница. Тот же абзац.</strong>',

    // ---------- Reading strip ----------
    'index.strip.label':    'Непрерывно',
    'index.strip.caption':  'сквозное чтение',

    // ---------- Section 2 — Across your devices ----------
    'index.s2.eyebrow': 'Непрерывно',
    'index.s2.h2':      'На всех ваших <em>устройствах.</em>',
    'index.s2.p1':      'Позиция чтения едет с вами — до того самого абзаца, на котором вы остановились, а не до ближайшей главы или начала страницы.',
    'index.s2.p2':      '<strong>Что синхронизируется:</strong> позиция, закладки, заметки, библиотека. <strong>Что нет:</strong> то, как каждое устройство настроено для чтения.',
    'index.s2.mac.h':   'Mac',
    'index.s2.mac.p':   'Кресло. <em>Разворот в две страницы,</em> 32 pt с засечками.',
    'index.s2.ipad.h':  'iPad',
    'index.s2.ipad.p':  'Одна страница, удобный размер, <em>иногда сепия.</em>',
    'index.s2.iph.h':   'iPhone',
    'index.s2.iph.p':   '<em>Режим скролла,</em> тёмная тема, мелкий шрифт, одна рука.',
    'index.s2.outro':   'У каждого экрана — своя идеальная настройка. ContinuousReader помнит их по отдельности — а позиция чтения у них общая.',

    // ---------- Section 3 — Across how you read ----------
    'index.s3.eyebrow':   'Непрерывно',
    'index.s3.h2':        'Как бы вы ни <em>читали.</em>',
    'index.s3.p1':        'Начните главу вечером, глазами по странице. Сядьте в машину утром, переключитесь на «Чтение вслух». Голос подхватит с того самого абзаца, на котором вы остановились глазами, — а не с ближайшей главы или начала файла.',
    'index.s3.callout':   'Чтение глазами и слушание ушами — одна сессия, одна позиция, одна книга.',
    'index.s3.p2':        'Послушайте полчаса. Приехав, сядьте за Mac. Книга уже прокручена к тому абзацу, на котором голос только что закончил. Продолжайте читать с того места, где остановилось слушание.',
    'index.s3.p3':        'Подсветка слово за словом — мягкий округлый указатель, скользящий вместе с голосом. Регулируемые скорость, высота тона и голос. Меняйте скорость посреди фразы — воспроизведение подхватит с конкретного слова, а не с ближайшего абзаца.',

    // ---------- Section 4 — Typography ----------
    'index.s4.eyebrow': 'Чтение',
    'index.s4.h2':      'Типографика, <em>уважающая</em> текст.',
    'index.s4.p1':      'Большинство читалок промахивается с типографикой. Либо они притворяются книгой — с неуклюжими перелистываниями и псевдобумагой с поддельной текстурой, либо относятся к тексту как к свалке данных — браузерные дефолты, рваные колонки, без переносов.',
    'index.s4.p2':      '<strong>ContinuousReader не делает ни того, ни другого.</strong>',
    'index.s4.p3':      'Пять основных палитр — Neutral, Sepia, Celestial, Lime, Rose — каждая с пятью тональными вариациями от светлой до тёмной. Плюс две особые темы для любителей олдскула: <em>Typewriter</em> в цвете слоновой кости и тёмно-коричневом и <em>Terminal</em> — белый моноширинный на глубоком синем (если палитра кажется знакомой — <em>да, вы не ошиблись</em>). Ещё две — для экстремального контраста. Три кастомных слота под ваши цвета. <strong>Всего тридцать три варианта.</strong>',
    'index.s4.p4':      '<em>Midday</em> и <em>Midnight</em> — чистый чёрный по белому и белый по чёрному, с четырьмя уровнями контраста и регулируемой жирностью шрифта. Сделано для чтения <strong>под полным солнцем на пляже</strong> или <strong>в постели с выключенным светом</strong>, без ущерба для глаз ни в одном из режимов.',
    'index.s4.picker':  'Три способа выбора схемы. <strong>Фиксированно</strong> — одна тема всегда. <strong>День и ночь</strong> — связка светлой и тёмной, переключаются вслед за системой. <strong>Ручной оверрайд</strong> — любая тема поверх расписания, когда сессия выбивается из ритма. На любой тёмной теме — плавный слайдер яркости текста от 100% до 50%, для ночей, когда даже тёмная схема кажется слишком яркой.',
    'index.s4.dt1':     'Шрифты',
    'index.s4.dd1':     'Девять системных шрифтов: <em>с засечками, без засечек и моноширинные.</em> Georgia, Palatino, Charter, Iowan Old Style, Helvetica Neue, SF Pro, Avenir Next, Menlo, American Typewriter.',
    'index.s4.dt2':     'Переносы',
    'index.s4.dd2':     'Настоящие переносы для <em>латиницы, кириллицы, CJK, арабского и греческого</em>. Определяются по содержимому, а не по настройкам.',
    'index.s4.dt3':     'Раскладка',
    'index.s4.dd3':     'Непрерывный скролл, одна страница или <em>разворот в две страницы</em> на Mac. Регулируются размер, межстрочный интервал, отступы между абзацами, выравнивание, красная строка, поля и отображение картинок.',
    'index.s4.dt4':     'Мгновенно',
    'index.s4.dd4':     'Любая настройка применяется сразу — <em>без перезагрузки страницы, без потери позиции.</em>',

    // ---------- Section 5 — Translation ----------
    'index.s5.eyebrow': 'Перевод',
    'index.s5.h2':      'Читайте на одном языке, <em>думайте</em> на другом.',
    'index.s5.p1':      'Выделите слово. Перевод появляется в панели внизу — не во всплывающем окне поверх текста и не в модалке, которую надо закрывать. Продолжайте читать. Другое непонятное слово или фраза? Просто выделите — без лишних кликов и потери фокуса.',
    'index.s5.p2':      '«Перевод» и «Закладка» стоят в самом верху меню выделения — а не похоронены под пятью другими пунктами, которыми вы не пользуетесь. Поменяйте их местами в настройках, в зависимости от того, что чаще нужно.',
    'index.s5.p3':      'Множество целевых языков, обеспечиваются движком Apple Translation, работающим прямо на устройстве. <strong>Ничего не уходит за пределы Mac.</strong>',
    'index.s5.p4':      'Каждое слово, которое вы перевели, можно запомнить. ContinuousReader отслеживает: между какими языками вы переводите, какие слова уже встречали, и в каких книгах помощь нужна была чаще всего — пригодится тем, кто учит язык, исследователям и всем, кто читает на разных языках. Выключите отслеживание — и ничего не записывается. Включите — и выгрузите полную историю в HTML-отчёт.',

    // ---------- Section 6 — Library ----------
    'index.s6.eyebrow': 'Библиотека',
    'index.s6.h2':      'Ваша библиотека. <em>Вся ваша.</em>',
    'index.s6.p1':      'Вся библиотека в трёх режимах: подробный список — для просмотра, обложки в сетке — для перелистывания, сортируемая таблица — для библиотекаря в вас. Группировка по автору, циклу или папке. Цветные метки. Фильтр по жанру. Избранные книги. Недавно открытые и недавно добавленные.',
    'index.s6.p2':      '<strong>EPUB, FB2, MOBI, HTML, TXT, RTF</strong> — включая ZIP-варианты. Нажмите кнопку, или перетащите файл, или перетащите URL прямо из браузера — книга скачается, а диалог импорта откроется уже с заполненными метаданными, обложкой и автором. Или откройте каталоги OPDS — Standard Ebooks, Project Gutenberg, Feedbooks или собственный сервер. Следите за фидами на новые поступления в цикле, который читаете.',
    'index.s6.p3':      'Считайте время чтения по каждой книге, смотрите серии дней и закономерности, выгружайте HTML-отчёт. Закладки в семи цветах с заметками и подсветкой текста. Заметки с форматированием — на каждую книгу. Всё ищется, всё экспортируется.',
    'index.s6.p4':      'Содержимое книги хранится на диске как чистый HTML, с читаемыми именами файлов. Никакой облачно-залоченной БД, никакого проприетарного формата, никакого DRM, никакого vendor lock-in. Резервная копия всей библиотеки в один ZIP-файл — когда захотите. Укажите приложению любую папку как корень библиотеки. Всё хранится в вашем iCloud — или локально, если синхронизация не нужна.',
    'index.s6.callout': 'Ваша библиотека — это папка с файлами. Прочитайте её хоть через <code>cat</code>, если захочется.',

    // ---------- Section 7 — Native ----------
    'index.s7.eyebrow': 'Нативно',
    'index.s7.h2':      'Часть <em>системы.</em>',
    'index.s7.p1':      'ContinuousReader написан на Swift и SwiftUI — родных языках Apple. Это значит мгновенный запуск, плавный скролл при любой скорости, нативные горячие клавиши на Mac, правильные свайпы на iPhone, системное выделение текста и бинарник в разы меньше, чем у Electron-сборки.',
    'index.s7.p2':      'На Mac — <em>островной дизайн</em> в духе системных Настроек: округлые плавающие контейнеры на утопленном фоне, горячие клавиши, плавающие панели, Карточка книги поверх приложения, drag-and-drop повсюду. На iPad — нативные свайпы и готовность к Split View. На iPhone — жесты, удобные для одной руки, и нижние шторки, ощущающиеся как iOS, <strong>а не как веб-форма.</strong>',
    'index.s7.p3':      'Тяжёлую работу делает сама система. <strong>iCloud</strong> хранит и синхронизирует ваши книги — ваш аккаунт, не наш. <strong>Apple Translation</strong> переводит прямо в тексте — на устройстве, приватно. <strong>Системный голосовой движок</strong> ведёт «Чтение вслух» — теми же голосами, которыми уже говорит ваш Mac и iPhone. Ничего не переизобретено — только интегрировано.',

    // ---------- Section 8 — Two apps ----------
    'index.s8.eyebrow':  'Два приложения',
    'index.s8.h2':       'ContinuousReader <em>или</em> JustReader?',
    'index.s8.intro':    'Две читалки. Одна основа. <strong>Ваш выбор.</strong>',
    'index.s8.cr.name':  'ContinuousReader',
    'index.s8.cr.price': '<strong>$9.99</strong> на старте · $19.99 потом. Один раз, не ежемесячно.',
    'index.s8.cr.desc':  'Полноценное рабочее место для чтения. Соберите свою библиотеку. Синхронизируйте позицию, закладки и настройки чтения между Mac, iPad и iPhone. Каталоги OPDS. Закладки, заметки, статистика. Все возможности, на всех устройствах, навсегда.',
    'index.s8.cr.cta':   'Загрузить ContinuousReader',
    'index.s8.jr.name':  'JustReader',
    'index.s8.jr.price': '<strong>Бесплатно.</strong> По-настоящему бесплатно.',
    'index.s8.jr.desc':  'Читалка для одной книги. Открыли файл, прочитали, пошли дальше. Та же типографика, тот же перевод, то же чтение вслух — в сфокусированном приложении на одну книгу. Без библиотеки, без синхронизации, без закладок — только чтение.',
    'index.s8.jr.cta':   'Загрузить JustReader',
  },

  uk: {},
  es: {},
  fr: {},
  de: {},
};

// Expose globals for main.js (no module system on this static site)
window.CR_I18N = {
  translations,
  supported: SUPPORTED_LANGS,
  names: LANG_NAMES,
  labels: LANG_LABELS,
};
