/** Ambient starfield on a canvas behind the page. */

const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)');
const TINTS = ['#E6E9F2', '#8FC7FF', '#CFC5AE', '#F2A65A'];

export function initStarfield(canvas) {
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let stars = [];
  let width = 0;
  let height = 0;
  let frame = 0;
  let scrollY = window.scrollY;

  function build() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.min(320, Math.round((width * height) / 9000));
    stars = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      depth: (i % 3) + 1,
      radius: 0.4 + Math.random() * 1.1,
      alpha: 0.25 + Math.random() * 0.55,
      tint: TINTS[Math.floor(Math.random() * TINTS.length)],
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (const star of stars) {
      const parallax = (scrollY * 0.04) / star.depth;
      let y = (star.y - parallax) % height;
      if (y < 0) y += height;
      ctx.globalAlpha = star.alpha;
      ctx.fillStyle = star.tint;
      ctx.beginPath();
      ctx.arc(star.x, y, star.radius / star.depth + 0.2, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function step() {
    for (const star of stars) {
      star.x -= 0.012 / star.depth;
      if (star.x < -2) star.x = width + 2;
    }
    draw();
    frame = requestAnimationFrame(step);
  }

  function start() {
    if (REDUCED.matches) { draw(); return; }
    if (frame) return;
    frame = requestAnimationFrame(step);
  }

  function stop() {
    if (!frame) return;
    cancelAnimationFrame(frame);
    frame = 0;
  }

  let resizeTimer = 0;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { build(); draw(); }, 150);
  });

  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else start();
  });

  REDUCED.addEventListener('change', () => {
    stop();
    start();
  });

  build();
  start();
}
