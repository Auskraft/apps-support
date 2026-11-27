(() => {
  const artwork = document.querySelector('.opening .hero-art');
  if (!artwork) return;

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) return;

  canvas.className = 'hero-motion';
  canvas.setAttribute('aria-hidden', 'true');
  canvas.hidden = true;
  artwork.after(canvas);

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const scenes = [
    {sprite: 'gull-1.png', x: 1168, y: 150, size: 81, phase: 0.04},
    {sprite: 'gull-2.png', x: 1242, y: 220, size: 56, phase: 0.18},
    {sprite: 'gull-3.png', x: 1172, y: 266, size: 40, phase: 0.27}
  ];
  // Coordinates refer to the original postcard image. Soft patches replace the
  // three printed birds while the same sky area is animated.
  const printedBirds = [[1128, 135, 117, 49], [1224, 210, 78, 34], [1158, 259, 60, 33]];
  let sprites = null;
  let patches = [];
  let preparing = false;
  let visible = false;
  let view = null;
  let frame = 0;
  let lastPaint = 0;
  let elapsed = 0;

  function skyPatch([x, y, width, height]) {
    const patch = document.createElement('canvas');
    patch.width = width;
    patch.height = height;
    const ink = patch.getContext('2d');
    ink.drawImage(artwork, x - width - 48, y, width, height, 0, 0, width, height);
    ink.globalCompositeOperation = 'destination-in';
    for (const axis of ['x', 'y']) {
      const gradient = ink.createLinearGradient(0, 0, axis === 'x' ? width : 0, axis === 'y' ? height : 0);
      gradient.addColorStop(0, 'transparent');
      gradient.addColorStop(.15, '#fff');
      gradient.addColorStop(.85, '#fff');
      gradient.addColorStop(1, 'transparent');
      ink.fillStyle = gradient;
      ink.fillRect(0, 0, width, height);
    }
    return {image: patch, x, y};
  }

  function measure() {
    const bounds = artwork.getBoundingClientRect();
    const width = bounds.width;
    const height = bounds.height;
    if (!width || !height || !artwork.naturalWidth) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const scale = Math.max(width / artwork.naturalWidth, height / artwork.naturalHeight);
    const position = getComputedStyle(artwork).objectPosition.split(' ');
    // CSS uses a percentage or right for x and center for y at each breakpoint.
    const alignX = position[0] === 'right' ? 1 : parseFloat(position[0]) / 100;
    const x = (width - artwork.naturalWidth * scale) * alignX;
    const y = (height - artwork.naturalHeight * scale) / 2;
    const parent = artwork.parentElement.getBoundingClientRect();
    canvas.style.left = bounds.left - parent.left + 'px';
    canvas.style.top = bounds.top - parent.top + 'px';
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    view = {scale: scale * dpr, x: x * dpr, y: y * dpr};
  }

  function waves(t) {
    context.save();
    context.beginPath();
    // Keep the coast, trees and printed horizon in place.
    context.moveTo(0, 525);
    context.lineTo(491, 525);
    context.bezierCurveTo(695, 550, 747, 578, 761, 603);
    context.bezierCurveTo(788, 635, 710, 677, 591, 725);
    context.lineTo(0, 725);
    context.closePath();
    context.clip();

    for (let y = 525; y < 725; y += 5) {
      const amplitude = 2 + (y - 525) * .07;
      const shift = Math.sin(y * .046 - t * 2.1) * amplitude;
      const height = Math.min(5, 725 - y);
      context.drawImage(artwork, 0, y, 810, height, shift, y, 810, height);
    }

    context.lineCap = 'round';
    for (let index = 0; index < 8; index++) {
      const progress = (t * .24 + index / 8) % 1;
      const x = 736 - progress * 870;
      const y = 552 + index * 20 + Math.sin(progress * Math.PI * 2) * 7;
      context.strokeStyle = 'rgba(255, 232, 170, ' + Math.sin(progress * Math.PI) * .35 + ')';
      context.lineWidth = 1.15 + index * .14;
      context.beginPath();
      context.moveTo(x, y);
      context.quadraticCurveTo(x + 31, y - 6, x + 72 + index * 3, y - 2);
      context.stroke();
    }
    context.restore();
  }

  function lantern(t) {
    const x = 1659;
    const y = 157;
    const rotation = t * .58;
    const pulse = .5 + .5 * Math.cos(rotation);
    const endX = x - 375 - 79 * pulse;
    const endY = y + Math.sin(rotation) * 65;
    const beam = context.createLinearGradient(x, y, endX, endY);
    beam.addColorStop(0, 'rgba(255, 237, 157, .56)');
    beam.addColorStop(.25, 'rgba(255, 226, 125, .27)');
    beam.addColorStop(1, 'rgba(255, 235, 175, 0)');
    context.save();
    context.globalAlpha = .25 + pulse * .75;
    context.fillStyle = beam;
    context.beginPath();
    context.moveTo(x + 4, y - 4);
    context.lineTo(endX, endY - 28);
    context.lineTo(endX, endY + 29);
    context.lineTo(x + 4, y + 6);
    context.closePath();
    context.fill();
    const halo = context.createRadialGradient(x, y, 1, x, y, 47);
    halo.addColorStop(0, 'rgba(255, 250, 211, .93)');
    halo.addColorStop(.25, 'rgba(255, 218, 117, .37)');
    halo.addColorStop(1, 'rgba(255, 211, 107, 0)');
    context.fillStyle = halo;
    context.fillRect(x - 47, y - 47, 94, 94);
    context.restore();
  }

  function gulls(t) {
    for (const patch of patches) context.drawImage(patch.image, patch.x, patch.y);
    scenes.forEach(({x, y, size, phase}, index) => {
      const sprite = sprites[index];
      const flight = (t / 18 + phase) % 1;
      const flap = .83 + .17 * Math.cos(t * 13 + index * 2.5);
      const span = size * (1 - flight * .48);
      const rise = y - flight * 85 + Math.sin(flight * Math.PI * 2) * 13;
      const height = span * sprite.naturalHeight / sprite.naturalWidth * flap;
      context.globalAlpha = Math.min(1, flight * 13, (1 - flight) * 8);
      context.drawImage(sprite, x + flight * 528, rise, span, height);
    });
    context.globalAlpha = 1;
  }

  function paint(now) {
    frame = requestAnimationFrame(paint);
    if (lastPaint && now - lastPaint < 32) return;
    if (lastPaint) elapsed += (now - lastPaint) / 1000;
    lastPaint = now;
    context.resetTransform();
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.setTransform(view.scale, 0, 0, view.scale, view.x, view.y);
    waves(elapsed);
    lantern(elapsed);
    gulls(elapsed);
  }

  function updatePlayback() {
    if (!visible || document.hidden || reduceMotion.matches || !sprites || !view) {
      cancelAnimationFrame(frame);
      frame = 0;
      lastPaint = 0;
      canvas.hidden = true;
      return;
    }
    canvas.hidden = false;
    if (!frame) frame = requestAnimationFrame(paint);
  }

  async function prepare() {
    if (preparing || sprites || reduceMotion.matches) return;
    preparing = true;
    try {
      await artwork.decode();
      const images = await Promise.all(scenes.map(async ({sprite}) => {
        const image = new Image();
        image.src = new URL(sprite, artwork.src).href;
        await image.decode();
        return image;
      }));
      patches = printedBirds.map(skyPatch);
      sprites = images;
      measure();
      updatePlayback();
    } catch {
      // The original artwork stays in place if a decorative asset does not load.
    } finally {
      preparing = false;
    }
  }

  new ResizeObserver(() => { measure(); updatePlayback(); }).observe(artwork);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) void prepare();
    updatePlayback();
  }).observe(artwork);
  reduceMotion.addEventListener('change', () => {
    if (visible) void prepare();
    updatePlayback();
  });
  document.addEventListener('visibilitychange', updatePlayback);
})();
