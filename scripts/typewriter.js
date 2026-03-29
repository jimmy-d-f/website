// Basic char‑by‑char typewriter for a single node
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

// Sequential typewriter from top to bottom inside a container
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