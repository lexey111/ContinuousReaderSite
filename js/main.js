/* ==========================================================
   ContinuousReader site — main JS
   Vanilla, no dependencies
   ========================================================== */

(function () {
  'use strict';

  // ----------------------------------------------------------
  // Sticky nav border on scroll
  // ----------------------------------------------------------
  const nav = document.getElementById('nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ----------------------------------------------------------
  // Reveal sections on scroll
  // ----------------------------------------------------------
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
    // Fallback for older browsers — show everything immediately
    reveals.forEach((el) => el.classList.add('in-view'));
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

    // Create dialog once, lazily
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

      // Close on backdrop click (native dialog behavior)
      dialog.addEventListener('click', (e) => {
        if (e.target === dialog) dialog.close();
      });
    }

    const dialogImg = dialog.querySelector('img');

    // Bind handlers to all screenshot containers
    const screenshots = document.querySelectorAll('.screenshot, .screenshot-frame');
    screenshots.forEach((frame) => {
      const img = frame.querySelector('img');
      if (!img) {
        // Empty placeholder — disable cursor cue and click
        frame.style.cursor = 'default';
        return;
      }

      frame.addEventListener('click', (e) => {
        e.preventDefault();
        // Use highest-res version: prefer data-full src, fall back to img.src
        dialogImg.src = img.dataset.full || img.src;
        dialogImg.alt = img.alt || '';
        if (typeof dialog.showModal === 'function') {
          dialog.showModal();
        } else {
          // Very old browser fallback — open image in new tab
          window.open(dialogImg.src, '_blank');
        }
      });
    });

    // Callout dots — open screenshot in lightbox
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

  // Initialize after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLightbox);
  } else {
    setupLightbox();
  }

})();
