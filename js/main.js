/* ==========================================================
   ContinuousReader site — main JS
   Vanilla, no dependencies
   ========================================================== */

(function () {
  'use strict';

  // Mark scripting available (the <head> snippet does this too; this is a
  // fallback). Image fade-in / spinner CSS is gated on `.js`.
  document.documentElement.classList.add('js');

  // ----------------------------------------------------------
  // Internationalization
  //
  // Strategy:
  //   - The HTML source carries English content + data-i18n attrs.
  //   - Other languages live in js/i18n.js as key→string maps.
  //   - On apply, we walk [data-i18n] and replace innerHTML when a
  //     translation exists; missing keys fall back to whatever is
  //     in the HTML (i.e. English).
  //   - Page-level keys (<title>, <meta>) are looked up by data-i18n
  //     on those elements too — convention: data-i18n="meta.<page>.title"
  //     on <title>, data-i18n-attr="content:meta.<page>.desc" on
  //     <meta name="description">.
  //   - User selection persists in localStorage; otherwise we sniff
  //     navigator.language; otherwise English.
  // ----------------------------------------------------------

  const STORAGE_KEY = 'cr-lang';

  function i18nReady() {
    return window.CR_I18N && window.CR_I18N.translations;
  }

  function detectLanguage() {
    if (!i18nReady()) return 'en';
    const supported = window.CR_I18N.supported;

    // 1. Saved choice
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && supported.includes(saved)) return saved;
    } catch (_) { /* localStorage unavailable */ }

    // 2. Browser preference — try the full chain (e.g. uk-UA → uk)
    const langs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || 'en'];
    for (const tag of langs) {
      const code = (tag || '').toLowerCase().split('-')[0];
      if (supported.includes(code)) return code;
    }

    // 3. Default
    return 'en';
  }

  function lookup(lang, key) {
    const t = window.CR_I18N.translations;
    if (t[lang] && Object.prototype.hasOwnProperty.call(t[lang], key)) {
      return t[lang][key];
    }
    if (t.en && Object.prototype.hasOwnProperty.call(t.en, key)) {
      return t.en[key];
    }
    return null;
  }

  // Brand-name highlighter. Wraps Apple device + platform names in a span
  // so they stand out in body text — particularly important in Cyrillic
  // languages where "Mac" reads as "Мас" with the brain locked into the
  // alphabet of the surrounding text. Listed longest-first so JS regex
  // alternation prefers compound forms.
  const DEVICE_RE = /\b(MacBook Pro|MacBook Air|MacBook|Mac mini|Mac Studio|Mac Pro|macOS|iPadOS|iOS|iMac|Mac|iPad|iPhone)\b/g;
  function wrapDevices(html) {
    // Walk the string alternating tag segments (<...>) and text segments,
    // applying DEVICE_RE only to text. Without this an attribute like
    // data-alt="Mac chapter map" would become data-alt="<span class="dev">Mac</span> chapter map"
    // — the inner double-quote terminates the attribute and the rest renders
    // as visible text.
    return html.replace(/(<[^>]*>)|([^<]+)/g, (m, tag, text) =>
      tag ? tag : text.replace(DEVICE_RE, '<span class="dev">$1</span>')
    );
  }
  function stripTags(html) {
    return html.replace(/<[^>]+>/g, '');
  }

  function applyLanguage(lang) {
    if (!i18nReady()) return;

    document.documentElement.setAttribute('lang', lang);

    // Replace innerHTML (or document.title for <title>) for all marked
    // elements. Wrap device names so they get the brand accent everywhere.
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = lookup(lang, key);
      if (val === null) return;
      if (el.tagName === 'TITLE') {
        document.title = stripTags(val);
      } else {
        el.innerHTML = wrapDevices(val);
      }
    });

    // Replace specific attributes: data-i18n-attr="attr:key,attr2:key2".
    // Attribute values are plain text — strip any inline HTML from the
    // translation before applying.
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (!attr || !key) return;
        const val = lookup(lang, key);
        if (val !== null) el.setAttribute(attr, stripTags(val));
      });
    });

    // Reflect current language in the picker label + footer state
    const labels = window.CR_I18N.labels;
    document.querySelectorAll('[data-lang-current]').forEach((el) => {
      el.textContent = labels[lang] || lang.toUpperCase();
    });
    document.querySelectorAll('[data-lang]').forEach((el) => {
      el.classList.toggle('is-current', el.getAttribute('data-lang') === lang);
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) { /* */ }
  }

  function setupLanguagePicker() {
    if (!i18nReady()) return;
    const supported = window.CR_I18N.supported;
    const names = window.CR_I18N.names;
    const labels = window.CR_I18N.labels;

    // Replace the static `<button class="nav-lang">EN</button>` with a
    // proper dropdown if the page has one.
    document.querySelectorAll('.nav-lang').forEach((btn) => {
      // Avoid wrapping twice (e.g. on hot reload)
      if (btn.dataset.langWired === 'true') return;
      btn.dataset.langWired = 'true';
      btn.setAttribute('aria-haspopup', 'listbox');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('data-lang-current', '');
      btn.textContent = labels[document.documentElement.lang] || 'EN';

      // Build the dropdown panel
      const panel = document.createElement('ul');
      panel.className = 'nav-lang-menu';
      panel.setAttribute('role', 'listbox');
      panel.hidden = true;
      supported.forEach((code) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.setAttribute('data-lang', code);
        li.innerHTML = `<span class="nav-lang-code">${labels[code]}</span><span class="nav-lang-name">${names[code]}</span>`;
        li.addEventListener('click', (e) => {
          e.preventDefault();
          applyLanguage(code);
          closeMenu();
        });
        panel.appendChild(li);
      });

      // Place panel as sibling so absolute positioning lines up
      btn.insertAdjacentElement('afterend', panel);

      function openMenu() {
        panel.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
        document.addEventListener('click', onDocClick, true);
        document.addEventListener('keydown', onKeyDown, true);
      }
      function closeMenu() {
        panel.hidden = true;
        btn.setAttribute('aria-expanded', 'false');
        document.removeEventListener('click', onDocClick, true);
        document.removeEventListener('keydown', onKeyDown, true);
      }
      function onDocClick(e) {
        if (panel.contains(e.target) || btn.contains(e.target)) return;
        closeMenu();
      }
      function onKeyDown(e) {
        if (e.key === 'Escape') { closeMenu(); btn.focus(); }
      }

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (panel.hidden) openMenu(); else closeMenu();
      });
    });

    // Footer language list — bind clicks to whichever <a data-lang> exists
    document.querySelectorAll('.footer [data-lang]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        applyLanguage(el.getAttribute('data-lang'));
      });
    });
  }

  // Apply language ASAP so the page doesn't flash English first when a
  // user has selected another. We also re-apply on full DOMContentLoaded
  // to catch elements added after initial parse.
  const initialLang = detectLanguage();
  if (i18nReady()) applyLanguage(initialLang);

  // ----------------------------------------------------------
  // Sticky nav border on scroll
  // ----------------------------------------------------------
  function setupStickyNav() {
    const nav = document.getElementById('nav');
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ----------------------------------------------------------
  // Reveal sections on scroll
  // ----------------------------------------------------------
  function setupReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
      );
      reveals.forEach((el) => io.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('in-view'));
    }
  }

  // ----------------------------------------------------------
  // Lightbox for screenshots
  //
  // Triggered by clicking on any .screenshot or .screenshot-frame
  // that contains an <img>. Uses native <dialog> element.
  // Empty placeholders (no img) are skipped.
  // ----------------------------------------------------------
  function setupLightbox() {
    let dialog = document.getElementById('lightbox-dialog');

    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.id = 'lightbox-dialog';
      dialog.className = 'lightbox';
      dialog.innerHTML = `
        <button type="button" class="lightbox-close" aria-label="Close">Close (Esc)</button>
        <div class="lightbox-spinner" aria-hidden="true"></div>
        <div class="lightbox-content">
          <img alt="" />
        </div>
      `;
      document.body.appendChild(dialog);

      const closeBtn = dialog.querySelector('.lightbox-close');
      const content = dialog.querySelector('.lightbox-content');

      closeBtn.addEventListener('click', () => dialog.close());
      content.addEventListener('click', () => dialog.close());

      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) dialog.close();
      });
    }

    const dialogImg = dialog.querySelector('img');

    // Open with a spinner and only reveal the image once it has fully decoded —
    // so the previously-opened image never flashes while the new one downloads,
    // and a partially-loaded (progressive) image never shows.
    function openLightbox(src, alt) {
      if (typeof dialog.showModal !== 'function') {
        window.open(src, '_blank');
        return;
      }
      dialogImg.classList.remove('is-loaded'); // hide old image immediately
      dialog.classList.add('is-loading');      // show spinner
      dialog.showModal();

      const pre = new Image();
      pre.onload = () => {
        dialogImg.src = src;                   // already decoded → instant
        dialogImg.alt = alt || '';
        dialog.classList.remove('is-loading');
        requestAnimationFrame(() => dialogImg.classList.add('is-loaded')); // fade in
      };
      pre.onerror = () => {                     // don't spin forever on failure
        dialog.classList.remove('is-loading');
        dialogImg.src = src;
        dialogImg.alt = alt || '';
        dialogImg.classList.add('is-loaded');
      };
      pre.src = src;
    }

    document.querySelectorAll('.screenshot, .screenshot-frame').forEach((frame) => {
      const img = frame.querySelector('img');
      if (!img) {
        frame.style.cursor = 'default';
        return;
      }
      frame.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(img.dataset.full || img.src, img.alt);
      });
    });

    document.querySelectorAll('.callout-dot[data-screenshot]').forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(dot.dataset.screenshot, dot.dataset.alt);
      });
    });
  }

  // ----------------------------------------------------------
  // Inline screenshots: fade in once decoded (spinner shows via CSS until
  // .is-loaded). width/height attrs already reserve the box (no layout shift).
  // ----------------------------------------------------------
  function setupImageFade() {
    const imgs = document.querySelectorAll('.screenshot img, .screenshot-frame img');
    imgs.forEach((img) => {
      if (img.complete && img.naturalWidth > 0) {
        img.classList.add('is-loaded');
        return;
      }
      const reveal = () => img.classList.add('is-loaded');
      img.addEventListener('load', reveal);
      img.addEventListener('error', reveal); // reveal (broken) rather than spin forever
    });
  }

  // ----------------------------------------------------------
  // Features-page right-side TOC: scroll-spy that marks the currently-
  // visible section/subsection in the sidebar. Targets follow the
  // <id-prefix>-<name> convention injected into features.html (s1, s1-themes,
  // s2-translate, etc.). Subsection list nests under its parent <li> and
  // only renders when the parent has .active — keeps the sidebar compact.
  // ----------------------------------------------------------
  function setupFeaturesTOC() {
    const toc = document.querySelector('.features-toc');
    if (!toc) return;

    const linkById = new Map();
    toc.querySelectorAll('a[href^="#"]').forEach((a) => {
      linkById.set(a.getAttribute('href').slice(1), a);
    });

    // Smooth-scroll on TOC link click, with an offset for the sticky nav.
    toc.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: 'smooth' });
        history.replaceState(null, '', '#' + id);
      });
    });

    // Collect anchor targets in document order.
    const targets = Array.from(document.querySelectorAll('[id]')).filter((el) =>
      /^s\d+(-[\w-]+)?$/.test(el.id)
    );

    function updateActive() {
      const offset = 200; // px from viewport top — counts as "passed"
      let activeSection = null;
      let activeSub = null;

      for (const el of targets) {
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) {
          if (el.id.includes('-')) activeSub = el.id;
          else { activeSection = el.id; activeSub = null; }
        } else {
          break;
        }
      }

      toc.querySelectorAll('.active').forEach((el) => el.classList.remove('active'));

      if (activeSection) {
        const link = linkById.get(activeSection);
        if (link) {
          link.classList.add('active');
          const li = link.closest('li');
          if (li) li.classList.add('active');
        }
      }
      if (activeSub) {
        const subLink = linkById.get(activeSub);
        if (subLink) subLink.classList.add('active');
        // Also light up the parent section.
        const parentId = activeSub.split('-')[0];
        const parentLink = linkById.get(parentId);
        if (parentLink) {
          parentLink.classList.add('active');
          const li = parentLink.closest('li');
          if (li) li.classList.add('active');
        }
      }
    }

    let scheduled = false;
    function onScroll() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        updateActive();
        scheduled = false;
      });
    }

    updateActive();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
  }

  // ----------------------------------------------------------
  // Boot
  // ----------------------------------------------------------
  function boot() {
    // Re-apply language now that all elements are parsed
    const lang = detectLanguage();
    if (i18nReady()) applyLanguage(lang);
    setupLanguagePicker();
    // Re-run once more so the freshly-built dropdown items pick up
    // the .is-current marker and label.
    if (i18nReady()) applyLanguage(lang);
    setupStickyNav();
    setupReveal();
    setupLightbox();
    setupImageFade();
    setupFeaturesTOC();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
