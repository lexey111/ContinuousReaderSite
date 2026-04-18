/**
 * ContinuousReader Website — Internationalization
 *
 * 6 languages: en, ru, uk, es, fr, de
 * 4 pages: index (landing), features, platforms, download
 */

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.platforms': 'Platforms',
    'nav.download': 'Download',
    'nav.language': 'Language',

    // Hero (landing)
    'hero.title': 'Your books, everywhere',
    'hero.subtitle': 'A beautiful native reading app for macOS, iPad, and iPhone. EPUB, FB2, MOBI, and more \u2014 in one elegant library.',
    'hero.cta': 'Download on the App Store',
    'hero.secondary': 'Learn more',

    // Highlights (landing, 4 cards)
    'highlights.title': 'Why ContinuousReader?',
    'highlights.formats.title': 'All your formats',
    'highlights.formats.desc': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 plain and zipped. Import from files, URLs, or OPDS catalogs.',
    'highlights.reading.title': 'Beautiful reading',
    'highlights.reading.desc': '17 handcrafted themes, 9 font families with style variants, pagination, hyphenation, and a fullscreen clock.',
    'highlights.smart.title': 'Smart features',
    'highlights.smart.desc': 'Built-in translation, Read Aloud with word highlighting, bookmarks with color coding, reading statistics.',
    'highlights.platform.title': 'All your devices',
    'highlights.platform.desc': 'Native performance on Mac, iPad, and iPhone. Your library syncs seamlessly via iCloud.',

    // Features preview (landing)
    'features.title': 'Everything you need',
    'features.library.title': 'Powerful library',
    'features.library.desc': 'List, card, or table view. Folders, genres, color tags, smart search. Organize thousands of books your way.',
    'features.reader.title': 'Immersive reader',
    'features.reader.desc': 'Customizable fonts and themes. Smooth scroll or page-turn mode. Side panel with bookmarks and chapters.',
    'features.import.title': 'Easy import',
    'features.import.desc': 'Drag & drop files. Download from URL. Browse OPDS catalogs like Standard Ebooks and Project Gutenberg.',

    // CTA section
    'cta.title': 'Start reading today',
    'cta.subtitle': 'Free to try. No subscription required.',
    'cta.button': 'Get ContinuousReader',

    // Footer
    'footer.tagline': 'Read without limits',
    'footer.developer': 'Developed by Oleksii Koshkin',
    'footer.privacy': 'Privacy Policy',
    'footer.contact': 'Contact',
    'footer.copyright': '\u00a9 2026 ContinuousReader. All rights reserved.',

    // Features page
    'featuresPage.title': 'Features',
    'featuresPage.subtitle': 'Everything for a perfect reading experience',
    'featuresPage.reading.title': 'Reading experience',
    'featuresPage.reading.themes': '17 themes in 7 groups \u2014 from pastel to dark, vintage to custom',
    'featuresPage.reading.fonts': '9 font families with weight and width variants',
    'featuresPage.reading.modes': 'Smooth scroll, page turn, or two-page spread (macOS)',
    'featuresPage.reading.hyphenation': 'Smart hyphenation with content language detection',
    'featuresPage.reading.fullscreen': 'Fullscreen with optional pixel-art clock',
    'featuresPage.library.title': 'Library management',
    'featuresPage.library.views': 'Three view modes: detailed list, cover cards, sortable table',
    'featuresPage.library.organize': 'Folders, genres, color tags, pinning, smart search with 6 scopes',
    'featuresPage.library.sort': '8 sort options including published date and reading progress',
    'featuresPage.library.bulk': 'Bulk operations on multiple books at once',
    'featuresPage.import.title': 'Import & catalogs',
    'featuresPage.import.formats': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 and their ZIP variants',
    'featuresPage.import.opds': 'Browse OPDS catalogs: Standard Ebooks, Gutenberg, Feedbooks, custom servers',
    'featuresPage.import.url': 'Import directly from URL with automatic format detection',
    'featuresPage.smart.title': 'Smart features',
    'featuresPage.smart.translate': 'Built-in translation powered by Apple Translation \u2014 17 languages',
    'featuresPage.smart.tts': 'Read Aloud with animated word-by-word highlighting',
    'featuresPage.smart.bookmarks': 'Color-coded bookmarks with notes and text highlighting',
    'featuresPage.smart.stats': 'Reading statistics: streaks, monthly activity, top authors, HTML reports',

    // Platforms page
    'platformsPage.title': 'One app, three platforms',
    'platformsPage.subtitle': 'Native experience tailored for each device',
    'platformsPage.mac.title': 'macOS',
    'platformsPage.mac.desc': 'The full experience. Table view, keyboard shortcuts, floating panels, multi-window support.',
    'platformsPage.ipad.title': 'iPad',
    'platformsPage.ipad.desc': 'Touch-optimized with swipe actions, side panel, and split view. Perfect for focused reading.',
    'platformsPage.iphone.title': 'iPhone',
    'platformsPage.iphone.desc': 'Streamlined for one-hand use. Compact UI, gesture navigation, quick access to your library.',

    // Download page
    'downloadPage.title': 'Get ContinuousReader',
    'downloadPage.subtitle': 'Available on the App Store',
    'downloadPage.requirements': 'System requirements',
    'downloadPage.req.mac': 'macOS 15.0 Sequoia or later',
    'downloadPage.req.ipad': 'iPadOS 18.0 or later',
    'downloadPage.req.iphone': 'iOS 18.0 or later',
    'downloadPage.free': 'Free to try',
    'downloadPage.freeDesc': 'Up to 5 books in your library. Upgrade anytime for unlimited access.',

    // Common
    'common.learnMore': 'Learn more',
    'common.comingSoon': 'Coming soon',
    'common.new': 'New',
  },

  ru: {
    // Navigation
    'nav.features': '\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438',
    'nav.platforms': '\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b',
    'nav.download': '\u0421\u043a\u0430\u0447\u0430\u0442\u044c',
    'nav.language': '\u042f\u0437\u044b\u043a',

    // Hero
    'hero.title': '\u0412\u0430\u0448\u0438 \u043a\u043d\u0438\u0433\u0438 \u2014 \u0432\u0441\u0435\u0433\u0434\u0430 \u0441 \u0432\u0430\u043c\u0438',
    'hero.subtitle': '\u041a\u0440\u0430\u0441\u0438\u0432\u043e\u0435 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u0430 macOS, iPad \u0438 iPhone. EPUB, FB2, MOBI \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435 \u2014 \u0432 \u043e\u0434\u043d\u043e\u0439 \u044d\u043b\u0435\u0433\u0430\u043d\u0442\u043d\u043e\u0439 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435.',
    'hero.cta': '\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432 App Store',
    'hero.secondary': '\u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435',

    // Highlights
    'highlights.title': '\u041f\u043e\u0447\u0435\u043c\u0443 ContinuousReader?',
    'highlights.formats.title': '\u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u0444\u043e\u0440\u043c\u0430\u0442\u044b',
    'highlights.formats.desc': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 \u043e\u0431\u044b\u0447\u043d\u044b\u0435 \u0438 \u0432 ZIP-\u0430\u0440\u0445\u0438\u0432\u0430\u0445. \u0418\u043c\u043f\u043e\u0440\u0442 \u0438\u0437 \u0444\u0430\u0439\u043b\u043e\u0432, \u043f\u043e URL \u0438\u043b\u0438 \u0438\u0437 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u043e\u0432 OPDS.',
    'highlights.reading.title': '\u0423\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u0435 \u043e\u0442 \u0447\u0442\u0435\u043d\u0438\u044f',
    'highlights.reading.desc': '17 \u0442\u0435\u043c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044f, 9 \u0448\u0440\u0438\u0444\u0442\u043e\u0432\u044b\u0445 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432 \u0441 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u0447\u0435\u0440\u0442\u0430\u043d\u0438\u0439, \u043f\u0430\u0433\u0438\u043d\u0430\u0446\u0438\u044f, \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u044b \u0438 \u0447\u0430\u0441\u044b \u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435.',
    'highlights.smart.title': '\u0423\u043c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438',
    'highlights.smart.desc': '\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434, \u0447\u0442\u0435\u043d\u0438\u0435 \u0432\u0441\u043b\u0443\u0445 \u0441 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u043e\u0439 \u0441\u043b\u043e\u0432, \u0446\u0432\u0435\u0442\u043d\u044b\u0435 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0447\u0442\u0435\u043d\u0438\u044f.',
    'highlights.platform.title': '\u0412\u0441\u0435 \u0432\u0430\u0448\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430',
    'highlights.platform.desc': '\u041d\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043d\u0430 Mac, iPad \u0438 iPhone. \u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 iCloud.',

    // Features preview
    'features.title': '\u0412\u0441\u0451, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e',
    'features.library.title': '\u041c\u043e\u0449\u043d\u0430\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430',
    'features.library.desc': '\u0421\u043f\u0438\u0441\u043e\u043a, \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0438\u043b\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0430. \u041f\u0430\u043f\u043a\u0438, \u0436\u0430\u043d\u0440\u044b, \u0446\u0432\u0435\u0442\u043d\u044b\u0435 \u043c\u0435\u0442\u043a\u0438, \u0443\u043c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a. \u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0439\u0442\u0435 \u0442\u044b\u0441\u044f\u0447\u0438 \u043a\u043d\u0438\u0433 \u043a\u0430\u043a \u0432\u0430\u043c \u0443\u0434\u043e\u0431\u043d\u043e.',
    'features.reader.title': '\u041f\u043e\u0433\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0432 \u0447\u0442\u0435\u043d\u0438\u0435',
    'features.reader.desc': '\u041d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u044b\u0435 \u0448\u0440\u0438\u0444\u0442\u044b \u0438 \u0442\u0435\u043c\u044b. \u041f\u043b\u0430\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0430 \u0438\u043b\u0438 \u043f\u043e\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c. \u0411\u043e\u043a\u043e\u0432\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c \u0441 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438 \u0438 \u0433\u043b\u0430\u0432\u0430\u043c\u0438.',
    'features.import.title': '\u041f\u0440\u043e\u0441\u0442\u043e\u0439 \u0438\u043c\u043f\u043e\u0440\u0442',
    'features.import.desc': '\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0444\u0430\u0439\u043b\u044b. \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043f\u043e URL. \u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 OPDS \u2014 Standard Ebooks, Project Gutenberg \u0438 \u0434\u0440\u0443\u0433\u0438\u0435.',

    // CTA
    'cta.title': '\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0447\u0438\u0442\u0430\u0442\u044c \u0441\u0435\u0433\u043e\u0434\u043d\u044f',
    'cta.subtitle': '\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e. \u0411\u0435\u0437 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a.',
    'cta.button': '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c ContinuousReader',

    // Footer
    'footer.tagline': '\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439',
    'footer.developer': '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e \u0410\u043b\u0435\u043a\u0441\u0435\u0435\u043c \u041a\u043e\u0448\u043a\u0438\u043d\u044b\u043c',
    'footer.privacy': '\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438',
    'footer.contact': '\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f',
    'footer.copyright': '\u00a9 2026 ContinuousReader. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.',

    // Features page
    'featuresPage.title': '\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438',
    'featuresPage.subtitle': '\u0412\u0441\u0451 \u0434\u043b\u044f \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0442\u0435\u043d\u0438\u044f',
    'featuresPage.reading.title': '\u041f\u0440\u043e\u0446\u0435\u0441\u0441 \u0447\u0442\u0435\u043d\u0438\u044f',
    'featuresPage.reading.themes': '17 \u0442\u0435\u043c \u0432 7 \u0433\u0440\u0443\u043f\u043f\u0430\u0445 \u2014 \u043e\u0442 \u043f\u0430\u0441\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u043e \u0442\u0451\u043c\u043d\u044b\u0445, \u043e\u0442 \u0432\u0438\u043d\u0442\u0430\u0436\u043d\u044b\u0445 \u0434\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445',
    'featuresPage.reading.fonts': '9 \u0448\u0440\u0438\u0444\u0442\u043e\u0432\u044b\u0445 \u0441\u0435\u043c\u0435\u0439\u0441\u0442\u0432 \u0441 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u0441\u044b\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u0448\u0438\u0440\u0438\u043d\u044b',
    'featuresPage.reading.modes': '\u041f\u043b\u0430\u0432\u043d\u0430\u044f \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0430, \u043f\u0435\u0440\u0435\u043b\u0438\u0441\u0442\u044b\u0432\u0430\u043d\u0438\u0435 \u0438\u043b\u0438 \u0434\u0432\u0443\u0445\u0441\u0442\u0440\u0430\u043d\u0438\u0447\u043d\u044b\u0439 \u0440\u0430\u0437\u0432\u043e\u0440\u043e\u0442 (macOS)',
    'featuresPage.reading.hyphenation': '\u0423\u043c\u043d\u044b\u0435 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u044b \u0441 \u0430\u0432\u0442\u043e\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c \u044f\u0437\u044b\u043a\u0430',
    'featuresPage.reading.fullscreen': '\u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c \u0441 \u043f\u0438\u043a\u0441\u0435\u043b\u044c\u043d\u044b\u043c\u0438 \u0447\u0430\u0441\u0430\u043c\u0438',
    'featuresPage.library.title': '\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439',
    'featuresPage.library.views': '\u0422\u0440\u0438 \u0440\u0435\u0436\u0438\u043c\u0430 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f: \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a, \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u0441 \u043e\u0431\u043b\u043e\u0436\u043a\u0430\u043c\u0438, \u0441\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u043c\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430',
    'featuresPage.library.organize': '\u041f\u0430\u043f\u043a\u0438, \u0436\u0430\u043d\u0440\u044b, \u0446\u0432\u0435\u0442\u043d\u044b\u0435 \u043c\u0435\u0442\u043a\u0438, \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435, \u0443\u043c\u043d\u044b\u0439 \u043f\u043e\u0438\u0441\u043a \u043f\u043e 6 \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c',
    'featuresPage.library.sort': '8 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u0434\u0430\u0442\u0443 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0438 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441 \u0447\u0442\u0435\u043d\u0438\u044f',
    'featuresPage.library.bulk': '\u041c\u0430\u0441\u0441\u043e\u0432\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u043a\u043d\u0438\u0433\u0430\u043c\u0438 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e',
    'featuresPage.import.title': '\u0418\u043c\u043f\u043e\u0440\u0442 \u0438 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438',
    'featuresPage.import.formats': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 \u0438 \u0438\u0445 ZIP-\u0432\u0430\u0440\u0438\u0430\u043d\u0442\u044b',
    'featuresPage.import.opds': '\u041a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 OPDS: Standard Ebooks, Gutenberg, Feedbooks \u0438 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0435\u0440\u044b',
    'featuresPage.import.url': '\u0418\u043c\u043f\u043e\u0440\u0442 \u043f\u043e URL \u0441 \u0430\u0432\u0442\u043e\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0430',
    'featuresPage.smart.title': '\u0423\u043c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438',
    'featuresPage.smart.translate': '\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0435\u0432\u043e\u0434 \u043d\u0430 \u0431\u0430\u0437\u0435 Apple Translation \u2014 17 \u044f\u0437\u044b\u043a\u043e\u0432',
    'featuresPage.smart.tts': '\u0427\u0442\u0435\u043d\u0438\u0435 \u0432\u0441\u043b\u0443\u0445 \u0441 \u043f\u043e\u0441\u043b\u043e\u0432\u043d\u043e\u0439 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u043e\u0439',
    'featuresPage.smart.bookmarks': '\u0426\u0432\u0435\u0442\u043d\u044b\u0435 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438 \u0441 \u0437\u0430\u043c\u0435\u0442\u043a\u0430\u043c\u0438 \u0438 \u043f\u043e\u0434\u0441\u0432\u0435\u0442\u043a\u043e\u0439 \u0442\u0435\u043a\u0441\u0442\u0430',
    'featuresPage.smart.stats': '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0447\u0442\u0435\u043d\u0438\u044f: \u0441\u0435\u0440\u0438\u0438, \u043c\u0435\u0441\u044f\u0447\u043d\u0430\u044f \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c, \u0442\u043e\u043f \u0430\u0432\u0442\u043e\u0440\u043e\u0432, HTML-\u043e\u0442\u0447\u0451\u0442\u044b',

    // Platforms page
    'platformsPage.title': '\u041e\u0434\u043d\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0442\u0440\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b',
    'platformsPage.subtitle': '\u041d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430',
    'platformsPage.mac.title': 'macOS',
    'platformsPage.mac.desc': '\u041f\u043e\u043b\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439. \u0422\u0430\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c, \u0433\u043e\u0440\u044f\u0447\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438, \u043f\u043b\u0430\u0432\u0430\u044e\u0449\u0438\u0435 \u043f\u0430\u043d\u0435\u043b\u0438, \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u043e\u043a\u043e\u043d.',
    'platformsPage.ipad.title': 'iPad',
    'platformsPage.ipad.desc': '\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0441\u0435\u043d\u0441\u043e\u0440\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f: \u0436\u0435\u0441\u0442\u044b \u0441\u043c\u0430\u0445\u0438\u0432\u0430\u043d\u0438\u044f, \u0431\u043e\u043a\u043e\u0432\u0430\u044f \u043f\u0430\u043d\u0435\u043b\u044c, \u0440\u0430\u0437\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d. \u0418\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0441\u043e\u0441\u0440\u0435\u0434\u043e\u0442\u043e\u0447\u0435\u043d\u043d\u043e\u0433\u043e \u0447\u0442\u0435\u043d\u0438\u044f.',
    'platformsPage.iphone.title': 'iPhone',
    'platformsPage.iphone.desc': '\u0423\u043f\u0440\u043e\u0449\u0451\u043d\u043d\u044b\u0439 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0439 \u0440\u0443\u043a\u0438. \u041a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u044b\u0439 UI, \u0436\u0435\u0441\u0442\u043e\u0432\u0430\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f, \u0431\u044b\u0441\u0442\u0440\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435.',

    // Download page
    'downloadPage.title': '\u0421\u043a\u0430\u0447\u0430\u0442\u044c ContinuousReader',
    'downloadPage.subtitle': '\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432 App Store',
    'downloadPage.requirements': '\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f',
    'downloadPage.req.mac': 'macOS 15.0 Sequoia \u0438\u043b\u0438 \u043d\u043e\u0432\u0435\u0435',
    'downloadPage.req.ipad': 'iPadOS 18.0 \u0438\u043b\u0438 \u043d\u043e\u0432\u0435\u0435',
    'downloadPage.req.iphone': 'iOS 18.0 \u0438\u043b\u0438 \u043d\u043e\u0432\u0435\u0435',
    'downloadPage.free': '\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e',
    'downloadPage.freeDesc': '\u0414\u043e 5 \u043a\u043d\u0438\u0433 \u0432 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0435. \u041f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043d\u0430 \u043f\u043e\u043b\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0432 \u043b\u044e\u0431\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442.',

    // Common
    'common.learnMore': '\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435',
    'common.comingSoon': '\u0421\u043a\u043e\u0440\u043e',
    'common.new': '\u041d\u043e\u0432\u043e\u0435',
  },

  uk: {
    // Navigation
    'nav.features': '\u041c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456',
    'nav.platforms': '\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0438',
    'nav.download': '\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438',
    'nav.language': '\u041c\u043e\u0432\u0430',

    // Hero
    'hero.title': '\u0412\u0430\u0448\u0456 \u043a\u043d\u0438\u0436\u043a\u0438 \u2014 \u0437\u0430\u0432\u0436\u0434\u0438 \u043f\u043e\u0440\u0443\u0447',
    'hero.subtitle': '\u0413\u0430\u0440\u043d\u0438\u0439 \u043d\u0430\u0442\u0438\u0432\u043d\u0438\u0439 \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a \u0434\u043b\u044f \u0447\u0438\u0442\u0430\u043d\u043d\u044f \u043d\u0430 macOS, iPad \u0442\u0430 iPhone. EPUB, FB2, MOBI \u0442\u0430 \u0431\u0430\u0433\u0430\u0442\u043e \u0456\u043d\u0448\u043e\u0433\u043e \u2014 \u0432 \u043e\u0434\u043d\u0456\u0439 \u0435\u043b\u0435\u0433\u0430\u043d\u0442\u043d\u0456\u0439 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u0446\u0456.',
    'hero.cta': '\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 \u0437 App Store',
    'hero.secondary': '\u0414\u0456\u0437\u043d\u0430\u0442\u0438\u0441\u044f \u0431\u0456\u043b\u044c\u0448\u0435',

    // Highlights
    'highlights.title': '\u0427\u043e\u043c\u0443 ContinuousReader?',
    'highlights.formats.title': '\u0423\u0441\u0456 \u0432\u0430\u0448\u0456 \u0444\u043e\u0440\u043c\u0430\u0442\u0438',
    'highlights.formats.desc': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0456 \u0442\u0430 \u0432 ZIP-\u0430\u0440\u0445\u0456\u0432\u0430\u0445. \u0406\u043c\u043f\u043e\u0440\u0442 \u0437 \u0444\u0430\u0439\u043b\u0456\u0432, \u0437\u0430 URL \u0430\u0431\u043e \u0437 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0456\u0432 OPDS.',
    'highlights.reading.title': '\u041d\u0430\u0441\u043e\u043b\u043e\u0434\u0430 \u0432\u0456\u0434 \u0447\u0438\u0442\u0430\u043d\u043d\u044f',
    'highlights.reading.desc': '17 \u0442\u0435\u043c \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u043d\u044f, 9 \u0448\u0440\u0438\u0444\u0442\u043e\u0432\u0438\u0445 \u0440\u043e\u0434\u0438\u043d \u0437 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u043a\u0440\u0435\u0441\u043b\u0435\u043d\u044c, \u043f\u0430\u0433\u0456\u043d\u0430\u0446\u0456\u044f, \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438 \u0442\u0430 \u0433\u043e\u0434\u0438\u043d\u043d\u0438\u043a \u043d\u0430 \u043f\u043e\u0432\u043d\u043e\u043c\u0443 \u0435\u043a\u0440\u0430\u043d\u0456.',
    'highlights.smart.title': '\u0420\u043e\u0437\u0443\u043c\u043d\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457',
    'highlights.smart.desc': '\u0412\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434, \u0447\u0438\u0442\u0430\u043d\u043d\u044f \u0432\u0433\u043e\u043b\u043e\u0441 \u0437 \u043f\u0456\u0434\u0441\u0432\u0456\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0441\u043b\u0456\u0432, \u043a\u043e\u043b\u044c\u043e\u0440\u043e\u0432\u0456 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438, \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0447\u0438\u0442\u0430\u043d\u043d\u044f.',
    'highlights.platform.title': '\u0423\u0441\u0456 \u0432\u0430\u0448\u0456 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457',
    'highlights.platform.desc': '\u041d\u0430\u0442\u0438\u0432\u043d\u0430 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u0456\u0441\u0442\u044c \u043d\u0430 Mac, iPad \u0442\u0430 iPhone. \u0411\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0430 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0456\u0437\u0443\u0454\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 iCloud.',

    // Features preview
    'features.title': '\u0412\u0441\u0435, \u0449\u043e \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e',
    'features.library.title': '\u041f\u043e\u0442\u0443\u0436\u043d\u0430 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0430',
    'features.library.desc': '\u0421\u043f\u0438\u0441\u043e\u043a, \u043a\u0430\u0440\u0442\u043a\u0438 \u0430\u0431\u043e \u0442\u0430\u0431\u043b\u0438\u0446\u044f. \u0422\u0435\u043a\u0438, \u0436\u0430\u043d\u0440\u0438, \u043a\u043e\u043b\u044c\u043e\u0440\u043e\u0432\u0456 \u043c\u0456\u0442\u043a\u0438, \u0440\u043e\u0437\u0443\u043c\u043d\u0438\u0439 \u043f\u043e\u0448\u0443\u043a. \u041e\u0440\u0433\u0430\u043d\u0456\u0437\u0443\u0439\u0442\u0435 \u0442\u0438\u0441\u044f\u0447\u0456 \u043a\u043d\u0438\u0436\u043e\u043a \u044f\u043a \u0432\u0430\u043c \u0437\u0440\u0443\u0447\u043d\u043e.',
    'features.reader.title': '\u0417\u0430\u043d\u0443\u0440\u0435\u043d\u043d\u044f \u0443 \u0447\u0438\u0442\u0430\u043d\u043d\u044f',
    'features.reader.desc': '\u041d\u0430\u043b\u0430\u0448\u0442\u043e\u0432\u0443\u0432\u0430\u043d\u0456 \u0448\u0440\u0438\u0444\u0442\u0438 \u0442\u0430 \u0442\u0435\u043c\u0438. \u041f\u043b\u0430\u0432\u043d\u0435 \u043f\u0440\u043e\u043a\u0440\u0443\u0447\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u0431\u043e \u043f\u043e\u0441\u0442\u043e\u0440\u0456\u043d\u043a\u043e\u0432\u0438\u0439 \u0440\u0435\u0436\u0438\u043c. \u0411\u0456\u0447\u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u044c \u0456\u0437 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0430\u043c\u0438 \u0442\u0430 \u0440\u043e\u0437\u0434\u0456\u043b\u0430\u043c\u0438.',
    'features.import.title': '\u041f\u0440\u043e\u0441\u0442\u0438\u0439 \u0456\u043c\u043f\u043e\u0440\u0442',
    'features.import.desc': '\u041f\u0435\u0440\u0435\u0442\u044f\u0433\u043d\u0456\u0442\u044c \u0444\u0430\u0439\u043b\u0438. \u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0442\u0435 \u0437\u0430 URL. \u0412\u0456\u0434\u043a\u0440\u0438\u0439\u0442\u0435 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 OPDS \u2014 Standard Ebooks, Project Gutenberg \u0442\u0430 \u0456\u043d\u0448\u0456.',

    // CTA
    'cta.title': '\u041f\u043e\u0447\u043d\u0456\u0442\u044c \u0447\u0438\u0442\u0430\u0442\u0438 \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456',
    'cta.subtitle': '\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u043e. \u0411\u0435\u0437 \u043f\u0456\u0434\u043f\u0438\u0441\u043e\u043a.',
    'cta.button': '\u0412\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0438 ContinuousReader',

    // Footer
    'footer.tagline': '\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u0435\u0437 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u044c',
    'footer.developer': '\u0420\u043e\u0437\u0440\u043e\u0431\u043b\u0435\u043d\u043e \u041e\u043b\u0435\u043a\u0441\u0456\u0454\u043c \u041a\u043e\u0448\u043a\u0456\u043d\u0438\u043c',
    'footer.privacy': '\u041f\u043e\u043b\u0456\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0456\u0434\u0435\u043d\u0446\u0456\u0439\u043d\u043e\u0441\u0442\u0456',
    'footer.contact': '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438',
    'footer.copyright': '\u00a9 2026 ContinuousReader. \u0423\u0441\u0456 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0445\u0438\u0449\u0435\u043d\u0456.',

    // Features page
    'featuresPage.title': '\u041c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456',
    'featuresPage.subtitle': '\u0412\u0441\u0435 \u0434\u043b\u044f \u0456\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0447\u0438\u0442\u0430\u043d\u043d\u044f',
    'featuresPage.reading.title': '\u041f\u0440\u043e\u0446\u0435\u0441 \u0447\u0438\u0442\u0430\u043d\u043d\u044f',
    'featuresPage.reading.themes': '17 \u0442\u0435\u043c \u0443 7 \u0433\u0440\u0443\u043f\u0430\u0445 \u2014 \u0432\u0456\u0434 \u043f\u0430\u0441\u0442\u0435\u043b\u044c\u043d\u0438\u0445 \u0434\u043e \u0442\u0435\u043c\u043d\u0438\u0445, \u0432\u0456\u0434 \u0432\u0456\u043d\u0442\u0430\u0436\u043d\u0438\u0445 \u0434\u043e \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044c\u043a\u0438\u0445',
    'featuresPage.reading.fonts': '9 \u0448\u0440\u0438\u0444\u0442\u043e\u0432\u0438\u0445 \u0440\u043e\u0434\u0438\u043d \u0437 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u0441\u0438\u0447\u0435\u043d\u043e\u0441\u0442\u0456 \u0442\u0430 \u0448\u0438\u0440\u0438\u043d\u0438',
    'featuresPage.reading.modes': '\u041f\u043b\u0430\u0432\u043d\u0435 \u043f\u0440\u043e\u043a\u0440\u0443\u0447\u0443\u0432\u0430\u043d\u043d\u044f, \u043f\u0435\u0440\u0435\u0433\u043e\u0440\u0442\u0430\u043d\u043d\u044f \u0430\u0431\u043e \u0434\u0432\u043e\u0441\u0442\u043e\u0440\u0456\u043d\u043a\u043e\u0432\u0438\u0439 \u0440\u043e\u0437\u0432\u043e\u0440\u043e\u0442 (macOS)',
    'featuresPage.reading.hyphenation': '\u0420\u043e\u0437\u0443\u043c\u043d\u0456 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438 \u0437 \u0430\u0432\u0442\u043e\u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f\u043c \u043c\u043e\u0432\u0438',
    'featuresPage.reading.fullscreen': '\u041f\u043e\u0432\u043d\u043e\u0435\u043a\u0440\u0430\u043d\u043d\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u0437 \u043f\u0456\u043a\u0441\u0435\u043b\u044c\u043d\u0438\u043c \u0433\u043e\u0434\u0438\u043d\u043d\u0438\u043a\u043e\u043c',
    'featuresPage.library.title': '\u041a\u0435\u0440\u0443\u0432\u0430\u043d\u043d\u044f \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u043e\u044e',
    'featuresPage.library.views': '\u0422\u0440\u0438 \u0440\u0435\u0436\u0438\u043c\u0438 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f: \u0434\u043e\u043a\u043b\u0430\u0434\u043d\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a, \u043a\u0430\u0440\u0442\u043a\u0438 \u0437 \u043e\u0431\u043a\u043b\u0430\u0434\u0438\u043d\u043a\u0430\u043c\u0438, \u0442\u0430\u0431\u043b\u0438\u0446\u044f \u0437 \u0441\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f\u043c',
    'featuresPage.library.organize': '\u0422\u0435\u043a\u0438, \u0436\u0430\u043d\u0440\u0438, \u043a\u043e\u043b\u044c\u043e\u0440\u043e\u0432\u0456 \u043c\u0456\u0442\u043a\u0438, \u0437\u0430\u043a\u0440\u0456\u043f\u043b\u0435\u043d\u043d\u044f, \u0440\u043e\u0437\u0443\u043c\u043d\u0438\u0439 \u043f\u043e\u0448\u0443\u043a \u0437\u0430 6 \u043a\u0440\u0438\u0442\u0435\u0440\u0456\u044f\u043c\u0438',
    'featuresPage.library.sort': '8 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0456\u0432 \u0441\u043e\u0440\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u0432\u043a\u043b\u044e\u0447\u0430\u044e\u0447\u0438 \u0434\u0430\u0442\u0443 \u043f\u0443\u0431\u043b\u0456\u043a\u0430\u0446\u0456\u0457 \u0442\u0430 \u043f\u0440\u043e\u0433\u0440\u0435\u0441 \u0447\u0438\u0442\u0430\u043d\u043d\u044f',
    'featuresPage.library.bulk': '\u041c\u0430\u0441\u043e\u0432\u0456 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457 \u0437 \u043a\u0456\u043b\u044c\u043a\u043e\u043c\u0430 \u043a\u043d\u0438\u0436\u043a\u0430\u043c\u0438 \u043e\u0434\u043d\u043e\u0447\u0430\u0441\u043d\u043e',
    'featuresPage.import.title': '\u0406\u043c\u043f\u043e\u0440\u0442 \u0442\u0430 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0438',
    'featuresPage.import.formats': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 \u0442\u0430 \u0457\u0445\u043d\u0456 ZIP-\u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0438',
    'featuresPage.import.opds': '\u041a\u0430\u0442\u0430\u043b\u043e\u0433\u0438 OPDS: Standard Ebooks, Gutenberg, Feedbooks \u0442\u0430 \u0432\u043b\u0430\u0441\u043d\u0456 \u0441\u0435\u0440\u0432\u0435\u0440\u0438',
    'featuresPage.import.url': '\u0406\u043c\u043f\u043e\u0440\u0442 \u0437\u0430 URL \u0437 \u0430\u0432\u0442\u043e\u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0443',
    'featuresPage.smart.title': '\u0420\u043e\u0437\u0443\u043c\u043d\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457',
    'featuresPage.smart.translate': '\u0412\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434 \u043d\u0430 \u0431\u0430\u0437\u0456 Apple Translation \u2014 17 \u043c\u043e\u0432',
    'featuresPage.smart.tts': '\u0427\u0438\u0442\u0430\u043d\u043d\u044f \u0432\u0433\u043e\u043b\u043e\u0441 \u0437 \u043f\u043e\u0441\u043b\u0456\u0432\u043d\u0438\u043c \u043f\u0456\u0434\u0441\u0432\u0456\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c',
    'featuresPage.smart.bookmarks': '\u041a\u043e\u043b\u044c\u043e\u0440\u043e\u0432\u0456 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438 \u0437 \u043d\u043e\u0442\u0430\u0442\u043a\u0430\u043c\u0438 \u0442\u0430 \u043f\u0456\u0434\u0441\u0432\u0456\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0442\u0435\u043a\u0441\u0442\u0443',
    'featuresPage.smart.stats': '\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0447\u0438\u0442\u0430\u043d\u043d\u044f: \u0441\u0435\u0440\u0456\u0457, \u043c\u0456\u0441\u044f\u0447\u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u0456\u0441\u0442\u044c, \u0442\u043e\u043f \u0430\u0432\u0442\u043e\u0440\u0456\u0432, HTML-\u0437\u0432\u0456\u0442\u0438',

    // Platforms page
    'platformsPage.title': '\u041e\u0434\u0438\u043d \u0437\u0430\u0441\u0442\u043e\u0441\u0443\u043d\u043e\u043a, \u0442\u0440\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0438',
    'platformsPage.subtitle': '\u041d\u0430\u0442\u0438\u0432\u043d\u0438\u0439 \u0434\u043e\u0441\u0432\u0456\u0434 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u044e',
    'platformsPage.mac.title': 'macOS',
    'platformsPage.mac.desc': '\u041f\u043e\u0432\u043d\u0438\u0439 \u043d\u0430\u0431\u0456\u0440 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0435\u0439. \u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0438\u0439 \u0440\u0435\u0436\u0438\u043c, \u0433\u0430\u0440\u044f\u0447\u0456 \u043a\u043b\u0430\u0432\u0456\u0448\u0456, \u043f\u043b\u0430\u0432\u0430\u044e\u0447\u0456 \u043f\u0430\u043d\u0435\u043b\u0456, \u0431\u0430\u0433\u0430\u0442\u043e\u0432\u0456\u043a\u043e\u043d\u043d\u0456\u0441\u0442\u044c.',
    'platformsPage.ipad.title': 'iPad',
    'platformsPage.ipad.desc': '\u041e\u043f\u0442\u0438\u043c\u0456\u0437\u043e\u0432\u0430\u043d\u043e \u0434\u043b\u044f \u0434\u043e\u0442\u0438\u043a\u0443: \u0436\u0435\u0441\u0442\u0438 \u0437\u043c\u0430\u0445\u0443\u0432\u0430\u043d\u043d\u044f, \u0431\u0456\u0447\u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u044c, \u0440\u043e\u0437\u0434\u0456\u043b\u0435\u043d\u0438\u0439 \u0435\u043a\u0440\u0430\u043d. \u0406\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u0434\u043b\u044f \u0437\u043e\u0441\u0435\u0440\u0435\u0434\u0436\u0435\u043d\u043e\u0433\u043e \u0447\u0438\u0442\u0430\u043d\u043d\u044f.',
    'platformsPage.iphone.title': 'iPhone',
    'platformsPage.iphone.desc': '\u0417\u0440\u0443\u0447\u043d\u0438\u0439 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0434\u043b\u044f \u043e\u0434\u043d\u0456\u0454\u0457 \u0440\u0443\u043a\u0438. \u041a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u0438\u0439 UI, \u0436\u0435\u0441\u0442\u043e\u0432\u0430 \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u044f, \u0448\u0432\u0438\u0434\u043a\u0438\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u0434\u043e \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u043a\u0438.',

    // Download page
    'downloadPage.title': '\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0438\u0442\u0438 ContinuousReader',
    'downloadPage.subtitle': '\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432 App Store',
    'downloadPage.requirements': '\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0456 \u0432\u0438\u043c\u043e\u0433\u0438',
    'downloadPage.req.mac': 'macOS 15.0 Sequoia \u0430\u0431\u043e \u043d\u043e\u0432\u0456\u0448\u0435',
    'downloadPage.req.ipad': 'iPadOS 18.0 \u0430\u0431\u043e \u043d\u043e\u0432\u0456\u0448\u0435',
    'downloadPage.req.iphone': 'iOS 18.0 \u0430\u0431\u043e \u043d\u043e\u0432\u0456\u0448\u0435',
    'downloadPage.free': '\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u043e',
    'downloadPage.freeDesc': '\u0414\u043e 5 \u043a\u043d\u0438\u0436\u043e\u043a \u0443 \u0431\u0456\u0431\u043b\u0456\u043e\u0442\u0435\u0446\u0456. \u041f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u043d\u0430 \u043f\u043e\u0432\u043d\u0443 \u0432\u0435\u0440\u0441\u0456\u044e \u0431\u0443\u0434\u044c-\u043a\u043e\u043b\u0438.',

    // Common
    'common.learnMore': '\u0414\u043e\u043a\u043b\u0430\u0434\u043d\u0456\u0448\u0435',
    'common.comingSoon': '\u041d\u0435\u0437\u0430\u0431\u0430\u0440\u043e\u043c',
    'common.new': '\u041d\u043e\u0432\u0435',
  },

  es: {
    // Navigation
    'nav.features': 'Funciones',
    'nav.platforms': 'Plataformas',
    'nav.download': 'Descargar',
    'nav.language': 'Idioma',

    // Hero
    'hero.title': 'Tus libros, en todas partes',
    'hero.subtitle': 'Una hermosa app nativa de lectura para macOS, iPad y iPhone. EPUB, FB2, MOBI y mucho m\u00e1s, en una sola biblioteca elegante.',
    'hero.cta': 'Descargar en el App Store',
    'hero.secondary': 'Conoce m\u00e1s',

    // Highlights
    'highlights.title': '\u00bfPor qu\u00e9 ContinuousReader?',
    'highlights.formats.title': 'Todos tus formatos',
    'highlights.formats.desc': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 normales y comprimidos. Importa desde archivos, URLs o cat\u00e1logos OPDS.',
    'highlights.reading.title': 'Lectura hermosa',
    'highlights.reading.desc': '17 temas dise\u00f1ados a mano, 9 familias tipogr\u00e1ficas con variantes de estilo, paginaci\u00f3n, separaci\u00f3n sil\u00e1bica y reloj en pantalla completa.',
    'highlights.smart.title': 'Funciones inteligentes',
    'highlights.smart.desc': 'Traducci\u00f3n integrada, lectura en voz alta con resaltado de palabras, marcadores con c\u00f3digos de color, estad\u00edsticas de lectura.',
    'highlights.platform.title': 'Todos tus dispositivos',
    'highlights.platform.desc': 'Rendimiento nativo en Mac, iPad y iPhone. Tu biblioteca se sincroniza autom\u00e1ticamente con iCloud.',

    // Features preview
    'features.title': 'Todo lo que necesitas',
    'features.library.title': 'Biblioteca poderosa',
    'features.library.desc': 'Vista de lista, tarjetas o tabla. Carpetas, g\u00e9neros, etiquetas de color, b\u00fasqueda inteligente. Organiza miles de libros a tu manera.',
    'features.reader.title': 'Lectura inmersiva',
    'features.reader.desc': 'Fuentes y temas personalizables. Desplazamiento fluido o modo de p\u00e1ginas. Panel lateral con marcadores y cap\u00edtulos.',
    'features.import.title': 'Importaci\u00f3n f\u00e1cil',
    'features.import.desc': 'Arrastra y suelta archivos. Descarga desde URL. Explora cat\u00e1logos OPDS como Standard Ebooks y Project Gutenberg.',

    // CTA
    'cta.title': 'Empieza a leer hoy',
    'cta.subtitle': 'Prueba gratis. Sin suscripci\u00f3n.',
    'cta.button': 'Obtener ContinuousReader',

    // Footer
    'footer.tagline': 'Lee sin l\u00edmites',
    'footer.developer': 'Desarrollado por Oleksii Koshkin',
    'footer.privacy': 'Pol\u00edtica de privacidad',
    'footer.contact': 'Contacto',
    'footer.copyright': '\u00a9 2026 ContinuousReader. Todos los derechos reservados.',

    // Features page
    'featuresPage.title': 'Funciones',
    'featuresPage.subtitle': 'Todo para una experiencia de lectura perfecta',
    'featuresPage.reading.title': 'Experiencia de lectura',
    'featuresPage.reading.themes': '17 temas en 7 grupos \u2014 desde pastel hasta oscuro, vintage y personalizados',
    'featuresPage.reading.fonts': '9 familias tipogr\u00e1ficas con variantes de grosor y ancho',
    'featuresPage.reading.modes': 'Desplazamiento fluido, paginaci\u00f3n o doble p\u00e1gina (macOS)',
    'featuresPage.reading.hyphenation': 'Separaci\u00f3n sil\u00e1bica inteligente con detecci\u00f3n de idioma',
    'featuresPage.reading.fullscreen': 'Pantalla completa con reloj pixelado opcional',
    'featuresPage.library.title': 'Gesti\u00f3n de biblioteca',
    'featuresPage.library.views': 'Tres modos de vista: lista detallada, tarjetas con portada, tabla ordenable',
    'featuresPage.library.organize': 'Carpetas, g\u00e9neros, etiquetas de color, fijados, b\u00fasqueda inteligente con 6 criterios',
    'featuresPage.library.sort': '8 opciones de ordenamiento, incluyendo fecha de publicaci\u00f3n y progreso de lectura',
    'featuresPage.library.bulk': 'Operaciones masivas con m\u00faltiples libros a la vez',
    'featuresPage.import.title': 'Importaci\u00f3n y cat\u00e1logos',
    'featuresPage.import.formats': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 y sus variantes ZIP',
    'featuresPage.import.opds': 'Cat\u00e1logos OPDS: Standard Ebooks, Gutenberg, Feedbooks y servidores propios',
    'featuresPage.import.url': 'Importa directamente desde URL con detecci\u00f3n autom\u00e1tica de formato',
    'featuresPage.smart.title': 'Funciones inteligentes',
    'featuresPage.smart.translate': 'Traducci\u00f3n integrada con Apple Translation \u2014 17 idiomas',
    'featuresPage.smart.tts': 'Lectura en voz alta con resaltado animado palabra por palabra',
    'featuresPage.smart.bookmarks': 'Marcadores con c\u00f3digos de color, notas y resaltado de texto',
    'featuresPage.smart.stats': 'Estad\u00edsticas de lectura: rachas, actividad mensual, autores favoritos, informes HTML',

    // Platforms page
    'platformsPage.title': 'Una app, tres plataformas',
    'platformsPage.subtitle': 'Experiencia nativa adaptada a cada dispositivo',
    'platformsPage.mac.title': 'macOS',
    'platformsPage.mac.desc': 'La experiencia completa. Vista de tabla, atajos de teclado, paneles flotantes, soporte multiventana.',
    'platformsPage.ipad.title': 'iPad',
    'platformsPage.ipad.desc': 'Optimizado para el tacto con gestos de deslizamiento, panel lateral y vista dividida. Perfecto para leer con concentraci\u00f3n.',
    'platformsPage.iphone.title': 'iPhone',
    'platformsPage.iphone.desc': 'Dise\u00f1ado para usar con una mano. Interfaz compacta, navegaci\u00f3n por gestos, acceso r\u00e1pido a tu biblioteca.',

    // Download page
    'downloadPage.title': 'Obt\u00e9n ContinuousReader',
    'downloadPage.subtitle': 'Disponible en el App Store',
    'downloadPage.requirements': 'Requisitos del sistema',
    'downloadPage.req.mac': 'macOS 15.0 Sequoia o posterior',
    'downloadPage.req.ipad': 'iPadOS 18.0 o posterior',
    'downloadPage.req.iphone': 'iOS 18.0 o posterior',
    'downloadPage.free': 'Prueba gratis',
    'downloadPage.freeDesc': 'Hasta 5 libros en tu biblioteca. Actualiza en cualquier momento para acceso ilimitado.',

    // Common
    'common.learnMore': 'Conoce m\u00e1s',
    'common.comingSoon': 'Pr\u00f3ximamente',
    'common.new': 'Nuevo',
  },

  fr: {
    // Navigation
    'nav.features': 'Fonctionnalit\u00e9s',
    'nav.platforms': 'Plateformes',
    'nav.download': 'T\u00e9l\u00e9charger',
    'nav.language': 'Langue',

    // Hero
    'hero.title': 'Vos livres, partout',
    'hero.subtitle': 'Une magnifique application native de lecture pour macOS, iPad et iPhone. EPUB, FB2, MOBI et bien plus \u2014 dans une seule biblioth\u00e8que \u00e9l\u00e9gante.',
    'hero.cta': 'T\u00e9l\u00e9charger sur l\u2019App Store',
    'hero.secondary': 'En savoir plus',

    // Highlights
    'highlights.title': 'Pourquoi ContinuousReader\u00a0?',
    'highlights.formats.title': 'Tous vos formats',
    'highlights.formats.desc': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 simples ou compress\u00e9s. Importez depuis des fichiers, des URL ou des catalogues OPDS.',
    'highlights.reading.title': 'Une lecture magnifique',
    'highlights.reading.desc': '17 th\u00e8mes soign\u00e9s, 9 familles de polices avec variantes de style, pagination, c\u00e9sure et horloge en plein \u00e9cran.',
    'highlights.smart.title': 'Fonctions intelligentes',
    'highlights.smart.desc': 'Traduction int\u00e9gr\u00e9e, lecture \u00e0 voix haute avec surlignage des mots, signets color\u00e9s, statistiques de lecture.',
    'highlights.platform.title': 'Tous vos appareils',
    'highlights.platform.desc': 'Performance native sur Mac, iPad et iPhone. Votre biblioth\u00e8que se synchronise via iCloud.',

    // Features preview
    'features.title': 'Tout ce qu\u2019il vous faut',
    'features.library.title': 'Biblioth\u00e8que puissante',
    'features.library.desc': 'Vue en liste, en vignettes ou en tableau. Dossiers, genres, \u00e9tiquettes de couleur, recherche intelligente. Organisez des milliers de livres \u00e0 votre fa\u00e7on.',
    'features.reader.title': 'Lecture immersive',
    'features.reader.desc': 'Polices et th\u00e8mes personnalisables. D\u00e9filement fluide ou mode pagin\u00e9. Panneau lat\u00e9ral avec signets et chapitres.',
    'features.import.title': 'Importation facile',
    'features.import.desc': 'Glissez-d\u00e9posez vos fichiers. T\u00e9l\u00e9chargez depuis une URL. Parcourez les catalogues OPDS comme Standard Ebooks et Project Gutenberg.',

    // CTA
    'cta.title': 'Commencez \u00e0 lire d\u00e8s aujourd\u2019hui',
    'cta.subtitle': 'Essai gratuit. Sans abonnement.',
    'cta.button': 'Obtenir ContinuousReader',

    // Footer
    'footer.tagline': 'Lisez sans limites',
    'footer.developer': 'D\u00e9velopp\u00e9 par Oleksii Koshkin',
    'footer.privacy': 'Politique de confidentialit\u00e9',
    'footer.contact': 'Contact',
    'footer.copyright': '\u00a9 2026 ContinuousReader. Tous droits r\u00e9serv\u00e9s.',

    // Features page
    'featuresPage.title': 'Fonctionnalit\u00e9s',
    'featuresPage.subtitle': 'Tout pour une exp\u00e9rience de lecture parfaite',
    'featuresPage.reading.title': 'Exp\u00e9rience de lecture',
    'featuresPage.reading.themes': '17 th\u00e8mes en 7 groupes \u2014 du pastel au sombre, du vintage au personnalis\u00e9',
    'featuresPage.reading.fonts': '9 familles de polices avec variantes de graisse et de largeur',
    'featuresPage.reading.modes': 'D\u00e9filement fluide, pagination ou double page (macOS)',
    'featuresPage.reading.hyphenation': 'C\u00e9sure intelligente avec d\u00e9tection de la langue du contenu',
    'featuresPage.reading.fullscreen': 'Plein \u00e9cran avec horloge pixelis\u00e9e en option',
    'featuresPage.library.title': 'Gestion de biblioth\u00e8que',
    'featuresPage.library.views': 'Trois modes d\u2019affichage\u00a0: liste d\u00e9taill\u00e9e, vignettes de couverture, tableau triable',
    'featuresPage.library.organize': 'Dossiers, genres, \u00e9tiquettes de couleur, \u00e9pinglage, recherche intelligente avec 6 crit\u00e8res',
    'featuresPage.library.sort': '8 options de tri, dont la date de publication et la progression de lecture',
    'featuresPage.library.bulk': 'Op\u00e9rations group\u00e9es sur plusieurs livres \u00e0 la fois',
    'featuresPage.import.title': 'Importation et catalogues',
    'featuresPage.import.formats': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 et leurs variantes ZIP',
    'featuresPage.import.opds': 'Catalogues OPDS\u00a0: Standard Ebooks, Gutenberg, Feedbooks et serveurs personnalis\u00e9s',
    'featuresPage.import.url': 'Importation directe par URL avec d\u00e9tection automatique du format',
    'featuresPage.smart.title': 'Fonctions intelligentes',
    'featuresPage.smart.translate': 'Traduction int\u00e9gr\u00e9e via Apple Translation \u2014 17 langues',
    'featuresPage.smart.tts': 'Lecture \u00e0 voix haute avec surlignage anim\u00e9 mot par mot',
    'featuresPage.smart.bookmarks': 'Signets color\u00e9s avec notes et surlignage du texte',
    'featuresPage.smart.stats': 'Statistiques de lecture\u00a0: s\u00e9ries, activit\u00e9 mensuelle, auteurs pr\u00e9f\u00e9r\u00e9s, rapports HTML',

    // Platforms page
    'platformsPage.title': 'Une app, trois plateformes',
    'platformsPage.subtitle': 'Une exp\u00e9rience native adapt\u00e9e \u00e0 chaque appareil',
    'platformsPage.mac.title': 'macOS',
    'platformsPage.mac.desc': 'L\u2019exp\u00e9rience compl\u00e8te. Vue tableau, raccourcis clavier, panneaux flottants, multifin\u00eatrage.',
    'platformsPage.ipad.title': 'iPad',
    'platformsPage.ipad.desc': 'Optimis\u00e9 pour le tactile avec gestes de balayage, panneau lat\u00e9ral et vue partag\u00e9e. Id\u00e9al pour une lecture concentr\u00e9e.',
    'platformsPage.iphone.title': 'iPhone',
    'platformsPage.iphone.desc': 'Con\u00e7u pour une utilisation \u00e0 une main. Interface compacte, navigation gestuelle, acc\u00e8s rapide \u00e0 votre biblioth\u00e8que.',

    // Download page
    'downloadPage.title': 'Obtenir ContinuousReader',
    'downloadPage.subtitle': 'Disponible sur l\u2019App Store',
    'downloadPage.requirements': 'Configuration requise',
    'downloadPage.req.mac': 'macOS 15.0 Sequoia ou ult\u00e9rieur',
    'downloadPage.req.ipad': 'iPadOS 18.0 ou ult\u00e9rieur',
    'downloadPage.req.iphone': 'iOS 18.0 ou ult\u00e9rieur',
    'downloadPage.free': 'Essai gratuit',
    'downloadPage.freeDesc': 'Jusqu\u2019\u00e0 5 livres dans votre biblioth\u00e8que. Passez \u00e0 la version compl\u00e8te quand vous le souhaitez.',

    // Common
    'common.learnMore': 'En savoir plus',
    'common.comingSoon': 'Bient\u00f4t disponible',
    'common.new': 'Nouveau',
  },

  de: {
    // Navigation
    'nav.features': 'Funktionen',
    'nav.platforms': 'Plattformen',
    'nav.download': 'Herunterladen',
    'nav.language': 'Sprache',

    // Hero
    'hero.title': 'Ihre B\u00fccher, \u00fcberall',
    'hero.subtitle': 'Eine wundersch\u00f6ne native Lese-App f\u00fcr macOS, iPad und iPhone. EPUB, FB2, MOBI und mehr \u2014 in einer eleganten Bibliothek.',
    'hero.cta': 'Im App Store laden',
    'hero.secondary': 'Mehr erfahren',

    // Highlights
    'highlights.title': 'Warum ContinuousReader?',
    'highlights.formats.title': 'Alle Ihre Formate',
    'highlights.formats.desc': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 einzeln oder als ZIP. Import aus Dateien, URLs oder OPDS-Katalogen.',
    'highlights.reading.title': 'Genussvolles Lesen',
    'highlights.reading.desc': '17 sorgf\u00e4ltig gestaltete Designs, 9 Schriftfamilien mit Stilvarianten, Seitenumbruch, Silbentrennung und Vollbild-Uhr.',
    'highlights.smart.title': 'Intelligente Funktionen',
    'highlights.smart.desc': 'Integrierte \u00dcbersetzung, Vorlesen mit Worthervorhebung, farbige Lesezeichen, Lesestatistiken.',
    'highlights.platform.title': 'Alle Ihre Ger\u00e4te',
    'highlights.platform.desc': 'Native Leistung auf Mac, iPad und iPhone. Ihre Bibliothek wird nahtlos \u00fcber iCloud synchronisiert.',

    // Features preview
    'features.title': 'Alles, was Sie brauchen',
    'features.library.title': 'Leistungsstarke Bibliothek',
    'features.library.desc': 'Listen-, Karten- oder Tabellenansicht. Ordner, Genres, Farbmarkierungen, intelligente Suche. Organisieren Sie Tausende B\u00fccher nach Ihren W\u00fcnschen.',
    'features.reader.title': 'Immersives Lesen',
    'features.reader.desc': 'Anpassbare Schriften und Designs. Flie\u00dfendes Scrollen oder Seitenmodus. Seitenleiste mit Lesezeichen und Kapiteln.',
    'features.import.title': 'Einfacher Import',
    'features.import.desc': 'Dateien per Drag & Drop hinzuf\u00fcgen. Per URL herunterladen. OPDS-Kataloge wie Standard Ebooks und Project Gutenberg durchst\u00f6bern.',

    // CTA
    'cta.title': 'Fangen Sie heute an zu lesen',
    'cta.subtitle': 'Kostenlos testen. Kein Abo erforderlich.',
    'cta.button': 'ContinuousReader holen',

    // Footer
    'footer.tagline': 'Lesen ohne Grenzen',
    'footer.developer': 'Entwickelt von Oleksii Koshkin',
    'footer.privacy': 'Datenschutz',
    'footer.contact': 'Kontakt',
    'footer.copyright': '\u00a9 2026 ContinuousReader. Alle Rechte vorbehalten.',

    // Features page
    'featuresPage.title': 'Funktionen',
    'featuresPage.subtitle': 'Alles f\u00fcr ein perfektes Leseerlebnis',
    'featuresPage.reading.title': 'Leseerlebnis',
    'featuresPage.reading.themes': '17 Designs in 7 Gruppen \u2014 von Pastell bis Dunkel, Vintage bis Benutzerdefiniert',
    'featuresPage.reading.fonts': '9 Schriftfamilien mit Varianten f\u00fcr St\u00e4rke und Breite',
    'featuresPage.reading.modes': 'Flie\u00dfendes Scrollen, Seitenumbruch oder Doppelseite (macOS)',
    'featuresPage.reading.hyphenation': 'Intelligente Silbentrennung mit automatischer Spracherkennung',
    'featuresPage.reading.fullscreen': 'Vollbildmodus mit optionaler Pixel-Art-Uhr',
    'featuresPage.library.title': 'Bibliotheksverwaltung',
    'featuresPage.library.views': 'Drei Ansichten: detaillierte Liste, Cover-Karten, sortierbare Tabelle',
    'featuresPage.library.organize': 'Ordner, Genres, Farbmarkierungen, Anheften, intelligente Suche mit 6 Kriterien',
    'featuresPage.library.sort': '8 Sortieroptionen einschlie\u00dflich Erscheinungsdatum und Lesefortschritt',
    'featuresPage.library.bulk': 'Massenoperationen mit mehreren B\u00fcchern gleichzeitig',
    'featuresPage.import.title': 'Import und Kataloge',
    'featuresPage.import.formats': 'EPUB, FB2, MOBI, HTML, TXT, RTF \u2014 und deren ZIP-Varianten',
    'featuresPage.import.opds': 'OPDS-Kataloge: Standard Ebooks, Gutenberg, Feedbooks und eigene Server',
    'featuresPage.import.url': 'Direktimport per URL mit automatischer Formaterkennung',
    'featuresPage.smart.title': 'Intelligente Funktionen',
    'featuresPage.smart.translate': 'Integrierte \u00dcbersetzung mit Apple Translation \u2014 17 Sprachen',
    'featuresPage.smart.tts': 'Vorlesen mit animierter Wort-f\u00fcr-Wort-Hervorhebung',
    'featuresPage.smart.bookmarks': 'Farbcodierte Lesezeichen mit Notizen und Texthervorhebung',
    'featuresPage.smart.stats': 'Lesestatistiken: Serien, monatliche Aktivit\u00e4t, Lieblingsautoren, HTML-Berichte',

    // Platforms page
    'platformsPage.title': 'Eine App, drei Plattformen',
    'platformsPage.subtitle': 'Natives Erlebnis, angepasst an jedes Ger\u00e4t',
    'platformsPage.mac.title': 'macOS',
    'platformsPage.mac.desc': 'Das volle Erlebnis. Tabellenansicht, Tastaturk\u00fcrzel, schwebende Panels, Multifenster-Unterst\u00fctzung.',
    'platformsPage.ipad.title': 'iPad',
    'platformsPage.ipad.desc': 'Optimiert f\u00fcr Touch mit Wischgesten, Seitenleiste und geteilter Ansicht. Perfekt f\u00fcr konzentriertes Lesen.',
    'platformsPage.iphone.title': 'iPhone',
    'platformsPage.iphone.desc': 'Optimiert f\u00fcr die Einhandbedienung. Kompakte Oberfl\u00e4che, Gestennavigation, schneller Zugriff auf Ihre Bibliothek.',

    // Download page
    'downloadPage.title': 'ContinuousReader holen',
    'downloadPage.subtitle': 'Im App Store erh\u00e4ltlich',
    'downloadPage.requirements': 'Systemanforderungen',
    'downloadPage.req.mac': 'macOS 15.0 Sequoia oder neuer',
    'downloadPage.req.ipad': 'iPadOS 18.0 oder neuer',
    'downloadPage.req.iphone': 'iOS 18.0 oder neuer',
    'downloadPage.free': 'Kostenlos testen',
    'downloadPage.freeDesc': 'Bis zu 5 B\u00fccher in Ihrer Bibliothek. Jederzeit auf die Vollversion upgraden.',

    // Common
    'common.learnMore': 'Mehr erfahren',
    'common.comingSoon': 'Demnächst',
    'common.new': 'Neu',
  },
};

// ---------------------------------------------------------------------------
// i18n engine
// ---------------------------------------------------------------------------

const STORAGE_KEY = 'cr-site-language';
const SUPPORTED_LANGUAGES = ['en', 'ru', 'uk', 'es', 'fr', 'de'];
const DEFAULT_LANGUAGE = 'en';

let currentLanguage = DEFAULT_LANGUAGE;

/**
 * Returns the translated string for the given dot-notation key
 * in the current language. Falls back to English, then to the key itself.
 */
function t(key) {
  const lang = translations[currentLanguage];
  if (lang && lang[key] !== undefined) return lang[key];

  // Fallback to English
  const fallback = translations[DEFAULT_LANGUAGE];
  if (fallback && fallback[key] !== undefined) return fallback[key];

  // Last resort: return the key
  return key;
}

/**
 * Switches the active language and persists the choice.
 * Returns true if the language was changed, false if it was already active
 * or unsupported.
 */
function setLanguage(lang) {
  const code = lang.toLowerCase();
  if (!SUPPORTED_LANGUAGES.includes(code)) return false;
  if (code === currentLanguage) return false;

  currentLanguage = code;

  try {
    localStorage.setItem(STORAGE_KEY, code);
  } catch (_) {
    // localStorage may be unavailable (private browsing, etc.)
  }

  return true;
}

/**
 * Returns the current language code (e.g. "en", "ru").
 */
function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * Returns the list of supported language codes.
 */
function getSupportedLanguages() {
  return [...SUPPORTED_LANGUAGES];
}

// ---------------------------------------------------------------------------
// Auto-detect language on load
// ---------------------------------------------------------------------------

(function initLanguage() {
  // 1. Check localStorage
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved)) {
      currentLanguage = saved;
      return;
    }
  } catch (_) {
    // Ignore — localStorage may be blocked
  }

  // 2. Check navigator.language / navigator.languages
  const candidates = navigator.languages
    ? [...navigator.languages]
    : [navigator.language || ''];

  for (const tag of candidates) {
    // Full match first (e.g. "uk-UA" → "uk")
    const code = tag.split('-')[0].toLowerCase();
    if (SUPPORTED_LANGUAGES.includes(code)) {
      currentLanguage = code;
      return;
    }
  }

  // 3. Default to English
  currentLanguage = DEFAULT_LANGUAGE;
})();

// ---------------------------------------------------------------------------
// Exports (works in both module and script contexts)
// ---------------------------------------------------------------------------

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { translations, t, setLanguage, getCurrentLanguage, getSupportedLanguages };
}
