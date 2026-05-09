/* ==========================================================
   ContinuousReader site — main JS
   Vanilla, no dependencies
   ========================================================== */

(function () {
  'use strict';

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

  function applyLanguage(lang) {
    if (!i18nReady()) return;

    document.documentElement.setAttribute('lang', lang);

    // Replace text content / innerHTML for all marked elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = lookup(lang, key);
      if (val !== null) {
        el.innerHTML = val;
      }
    });

    // Replace specific attributes: data-i18n-attr="attr:key,attr2:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        if (!attr || !key) return;
        const val = lookup(lang, key);
        if (val !== null) el.setAttribute(attr, val);
      });
    });

    // Update <title> if it has a data-i18n key (innerHTML works for
    // <title> too, but normalize entities by setting textContent).
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const val = lookup(lang, titleEl.getAttribute('data-i18n'));
      if (val !== null) document.title = val.replace(/<[^>]+>/g, '');
    }

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

    const screenshots = document.querySelectorAll('.screenshot, .screenshot-frame');
    screenshots.forEach((frame) => {
      const img = frame.querySelector('img');
      if (!img) {
        frame.style.cursor = 'default';
        return;
      }
      frame.addEventListener('click', (e) => {
        e.preventDefault();
        dialogImg.src = img.dataset.full || img.src;
        dialogImg.alt = img.alt || '';
        if (typeof dialog.showModal === 'function') {
          dialog.showModal();
        } else {
          window.open(dialogImg.src, '_blank');
        }
      });
    });

    document.querySelectorAll('.callout-dot[data-screenshot]').forEach((dot) => {
      dot.addEventListener('click', (e) => {
        e.preventDefault();
        dialogImg.src = dot.dataset.screenshot;
        dialogImg.alt = dot.dataset.alt || '';
        if (typeof dialog.showModal === 'function') {
          dialog.showModal();
        } else {
          window.open(dialogImg.src, '_blank');
        }
      });
    });
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
