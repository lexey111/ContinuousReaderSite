// The family's page (family.html): the map with a card a place, the
// questions that end in one reader, and the two tables side by side.
// The words are in the page (data-i18n), so a language change needs
// nothing from here.
(function () {
  'use strict';

  // MARK: The map — the apps' About map (CR #1142): a place clicked is
  // chosen and its card shown under the map.
  const map = document.querySelector('.fmap');
  if (map) {
    const places = [...map.querySelectorAll('.fmap-place')];
    const cards = [...document.querySelectorAll('.fmap-card')];
    const choose = (id) => {
      for (const place of places) {
        const on = place.dataset.place === id;
        place.classList.toggle('chosen', on);
        place.setAttribute('aria-pressed', String(on));
      }
      for (const card of cards) {
        const on = card.dataset.place === id;
        card.classList.toggle('shown', on);
        card.inert = !on;
      }
    };
    for (const place of places) place.addEventListener('click', () => choose(place.dataset.place));
    // A link to the page with a reader's name chooses it: family.html#jr.
    const asked = location.hash.slice(1);
    choose(places.some((place) => place.dataset.place === asked) ? asked : 'jr');
  }

  // MARK: Which one suits: a step a question, «=xx» an answer. Back goes
  // one step up, Start over to the first. Over the questions: where you
  // are («Question 2 of 3») and what you have answered so far, so an
  // answer clicked by chance is seen for what it did.
  const wiz = document.querySelector('.wiz');
  if (wiz) {
    const steps = [...wiz.querySelectorAll('.wiz-step')];
    const result = wiz.querySelector('.wiz-result');
    const answers = [...wiz.querySelectorAll('.wiz-answer')];
    const back = wiz.querySelector('.wiz-back');
    const again = wiz.querySelector('.wiz-again');
    const progress = wiz.querySelector('.wiz-progress');
    const bar = wiz.querySelector('.wiz-bar');
    const trailLine = wiz.querySelector('.wiz-trail');
    const trail = [];
    const picked = [];
    // The most questions left from a step, itself included.
    const depth = (q) => {
      const step = steps.find((s) => s.dataset.q === q);
      if (!step) return 0;
      let most = 0;
      for (const option of step.querySelectorAll('.wiz-opt')) {
        const go = option.dataset.go;
        if (!go.startsWith('=')) most = Math.max(most, depth(go));
      }
      return 1 + most;
    };
    const show = (to, focus) => {
      const app = to.startsWith('=') ? to.slice(1) : null;
      for (const step of steps) step.hidden = app !== null || step.dataset.q !== to;
      result.hidden = app === null;
      for (const answer of answers) answer.classList.toggle('shown', answer.dataset.app === app);
      back.hidden = trail.length === 0;
      again.hidden = app === null;
      wiz.dataset.at = to;
      progress.hidden = app !== null;
      if (app === null) {
        const n = trail.length + 1;
        const total = trail.length + depth(to);
        wiz.querySelector('.wiz-n').textContent = n;
        wiz.querySelector('.wiz-t').textContent = total;
        bar.replaceChildren(...Array.from({ length: total }, (_, i) => {
          const tick = document.createElement('i');
          if (i < n) tick.className = i === n - 1 ? 'now' : 'done';
          return tick;
        }));
      }
      trailLine.hidden = picked.length === 0;
      trailLine.textContent = picked.join(' → ');
      if (focus) {
        const first = app ? result.querySelector('.wiz-answer.shown a') : wiz.querySelector(`.wiz-step[data-q="${to}"] .wiz-opt`);
        first?.focus({ preventScroll: true });
      }
    };
    for (const option of wiz.querySelectorAll('.wiz-opt')) {
      option.addEventListener('click', () => {
        trail.push(wiz.dataset.at);
        picked.push(option.querySelector('strong').textContent.trim());
        show(option.dataset.go, true);
      });
    }
    back.addEventListener('click', () => { picked.pop(); show(trail.pop() || 'where', true); });
    again.addEventListener('click', () => { trail.length = 0; picked.length = 0; show('where', true); });
    show('where', false);
  }

  // MARK: Side by side: Apple's three, or the three of three active books.
  const tabs = [...document.querySelectorAll('.cmp-tab')];
  const panes = [...document.querySelectorAll('.cmp-pane')];
  const pick = (name) => {
    for (const tab of tabs) tab.setAttribute('aria-selected', String(tab.dataset.pane === name));
    for (const pane of panes) pane.hidden = pane.dataset.pane !== name;
  };
  for (const tab of tabs) tab.addEventListener('click', () => pick(tab.dataset.pane));
  if (location.hash === '#compare-three') pick('three');
})();
