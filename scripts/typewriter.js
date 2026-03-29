// Basic char‑by‑char typewriter for a single element
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

// Apply typewriter to all matching elements in parallel or staggered
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

  // Clear all first so they don't flash full text
  nodes.forEach(node => {
    node.dataset.fullText = node.textContent;
    node.textContent = '';
  });

  // Reset originals from dataset and start
  nodes.forEach(node => {
    node.textContent = node.dataset.fullText || '';
  });
  startNext();
}