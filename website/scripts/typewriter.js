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