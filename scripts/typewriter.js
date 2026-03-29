/**
 * Typewriter utilities for animating text content in the DOM.
 * Provides both sequential (container-based) and staggered parallel effects.
 */

/**
 * Type text into a single element character by character.
 *
 * @param {HTMLElement} element - Target element whose textContent will be animated.
 * @param {string} fullText - The complete text to render via the typewriter effect.
 * @param {number} speed - Delay in milliseconds between characters.
 * @param {Function} [done] - Optional callback fired when typing is finished.
 */
function typeWriterPlain(element, fullText, speed, done) {
  if (!element) return;
  element.textContent = '';
  let i = 0;

  function tick() {
    if (i < fullText.length) {
      element.textContent += fullText.charAt(i);
      i++;
      setTimeout(tick, speed);
    } else if (typeof done === 'function') {
      done();
    }
  }

  tick();
}

/**
 * Run a sequential typewriter animation from top to bottom
 * for all h2 and p nodes inside a container.
 *
 * @param {string} containerSelector - CSS selector for the container element.
 * @param {{ speed?: number }} [options] - Configuration options.
 * @param {number} [options.speed=15] - Delay in milliseconds between characters.
 */
function runHeroTypewriterFor(containerSelector, { speed = 15 } = {}) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  const nodes = container.querySelectorAll('h2, p');
  const steps = [];

  nodes.forEach(node => {
    const original = node.textContent;
    node.textContent = '';
    steps.push(next => {
      typeWriterPlain(node, original, speed, next);
    });
  });

  let idx = 0;
  function runStep() {
    if (idx >= steps.length) return;
    const fn = steps[idx++];
    fn(runStep);
  }

  runStep();
}

/**
 * Run a parallel/staggered typewriter animation for all
 * elements matching a selector.
 *
 * @param {string} selector - CSS selector for the elements to animate.
 * @param {{ speed?: number, stagger?: number }} [options] - Configuration options.
 * @param {number} [options.speed=18] - Delay in milliseconds between characters.
 * @param {number} [options.stagger=0] - Delay in milliseconds before starting each subsequent element.
 */
function runTypewriter(selector, { speed = 18, stagger = 0 } = {}) {
  const nodes = document.querySelectorAll(selector);
  let index = 0;

  function startNext() {
    if (index >= nodes.length) return;
    const node = nodes[index++];
    const original = node.textContent;
    typeWriterPlain(node, original, speed, () => {
      if (stagger > 0) {
        setTimeout(startNext, stagger);
      } else {
        startNext();
      }
    });
  }

  startNext();
}