document.getElementById("year").textContent = new Date().getFullYear();

const healthCaption = document.querySelector(".goal-health-caption");

if (healthCaption && "ResizeObserver" in window && "IntersectionObserver" in window) {
  const captionText = healthCaption.firstElementChild;
  healthCaption.classList.add("is-measured");

  const stopCaptionAnimation = () => healthCaption.classList.add("is-interacting");
  healthCaption.addEventListener("pointerdown", stopCaptionAnimation, { passive: true });
  healthCaption.addEventListener("focus", stopCaptionAnimation);

  const captionWidth = new ResizeObserver(() => {
    const overflow = Math.ceil(captionText.getBoundingClientRect().width - healthCaption.clientWidth);
    healthCaption.classList.toggle("is-overflowing", overflow > 1);
    healthCaption.style.setProperty("--goal-caption-offset", -overflow + "px");
    if (overflow > 1) {
      healthCaption.tabIndex = 0;
    } else {
      healthCaption.removeAttribute("tabindex");
    }
  });
  captionWidth.observe(healthCaption);
  captionWidth.observe(captionText);

  const captionVisibility = new IntersectionObserver(([entry]) => {
    healthCaption.classList.toggle("is-visible", entry.intersectionRatio >= 0.75);
  }, { threshold: 0.75 });
  captionVisibility.observe(healthCaption);
}
