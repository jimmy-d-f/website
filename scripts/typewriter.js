// scripts/typewriter.js

function typeWriterElement(el, text, speed = 20) {
  el.textContent = "";
  let i = 0;

  function tick() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(tick, speed);
    }
  }

  tick();
}

/**
 * Apply the effect to all matching elements.
 * selector: CSS selector, e.g. '.typewriter', '.content-area p'
 * options: { speed: number, stagger: number }
 */
function runTypewriter(selector, options = {}) {
  const speed = options.speed ?? 20;
  const stagger = options.stagger ?? 300;

  const nodes = document.querySelectorAll(selector);
  nodes.forEach((el, index) => {
    const original = el.textContent;
    el.dataset.originalText = original;
    el.textContent = "";

    setTimeout(() => {
      typeWriterElement(el, original, speed);
    }, index * stagger);
  });
}