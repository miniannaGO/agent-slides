const slides = Array.from(document.querySelectorAll(".slides > section"));
const dots = Array.from(document.querySelectorAll(".dot"));
const progressFill = document.querySelector(".progress-fill");
const deckCounter = document.querySelector(".deck-counter");
const slideCurrent = document.querySelector("[data-slide-current]");
const slideTotal = document.querySelector("[data-slide-total]");
const themeToggle = document.querySelector("[data-theme-toggle]");
const THEME_STORAGE_KEY = "centro-costos2026-theme";
let fallbackIndex = 0;
let resizeTimer = 0;

function readSavedTheme() {
  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : null;
  } catch (error) {
    return null;
  }
}

function saveTheme(theme) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    return;
  }
}

function applyTheme(theme, shouldPersist = true) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  const isDark = nextTheme === "dark";
  document.documentElement.dataset.theme = nextTheme;
  document.documentElement.dataset.bsTheme = nextTheme;

  if (themeToggle) {
    const label = isDark ? "Activar modo claro" : "Activar modo oscuro";
    themeToggle.setAttribute("aria-label", label);
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("title", label);
  }

  if (shouldPersist) {
    saveTheme(nextTheme);
  }
}

function toggleTheme() {
  const currentTheme =
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  applyTheme(currentTheme === "dark" ? "light" : "dark");
}

function applyViewportMode() {
  const root = document.documentElement;
  root.classList.toggle(
    "deck-mobile",
    window.matchMedia("(max-width: 760px)").matches,
  );
  root.classList.toggle(
    "deck-tablet",
    window.matchMedia("(min-width: 761px) and (max-width: 1180px)").matches,
  );
  root.classList.toggle(
    "deck-short",
    window.matchMedia("(max-height: 680px)").matches,
  );
}

function scheduleLayout() {
  window.clearTimeout(resizeTimer);
  resizeTimer = window.setTimeout(() => {
    applyViewportMode();
    if (window.Reveal && typeof Reveal.layout === "function") {
      Reveal.layout();
    }
  }, 120);
}

function clearDeckHash() {
  if (!window.location.hash || !window.history || !window.history.replaceState)
    return;
  window.history.replaceState(
    null,
    document.title,
    window.location.pathname + window.location.search,
  );
}

function clampIndex(index) {
  return Math.max(0, Math.min(slides.length - 1, index));
}

function animateSlide(slide) {
  if (!slide) return;
  const items = Array.from(slide.querySelectorAll("[data-animate]"));
  const isCompact =
    document.documentElement.classList.contains("deck-mobile") ||
    document.documentElement.classList.contains("deck-short");
  if (window.gsap) {
    gsap.killTweensOf(items);
    gsap.fromTo(
      items,
      {
        autoAlpha: 0,
        y: isCompact ? 18 : 34,
        scale: isCompact ? 0.99 : 0.97,
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: isCompact ? 0.58 : 0.86,
        ease: "power3.out",
        stagger: isCompact ? 0.045 : 0.08,
      },
    );

    const nodes = Array.from(
      slide.querySelectorAll(".flow-node, .signal-card, .commitment"),
    );
    if (nodes.length) {
      gsap.fromTo(
        nodes,
        { rotateX: 7 },
        {
          rotateX: 0,
          duration: 0.9,
          ease: "back.out(1.6)",
          stagger: 0.05,
        },
      );
    }
  } else {
    items.forEach((item) => {
      item.style.opacity = "1";
      item.style.transform = "none";
    });
  }
}

function keepOverviewVisible() {
  document.querySelectorAll("[data-animate]").forEach((item) => {
    item.style.opacity = "1";
    item.style.visibility = "visible";
    item.style.transform = "none";
  });
}

function updateDeckCounter(index) {
  if (!slideCurrent || !slideTotal) return;
  const contentTotal = Math.max(slides.length - 1, 0);
  const label =
    index === 0 ? "Caratula" : `Diapositiva ${index} de ${contentTotal}`;

  slideCurrent.textContent =
    index === 0 ? "00" : String(index).padStart(2, "0");
  slideTotal.textContent =
    index === 0 ? "caratula" : `de ${String(contentTotal).padStart(2, "0")}`;

  if (deckCounter) {
    deckCounter.setAttribute("aria-label", label);
  }
}

function updateUi(index) {
  const current = clampIndex(index);
  if (slides[current]) {
    slides[current].scrollTop = 0;
  }
  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === current);
  });
  updateDeckCounter(current);
  progressFill.style.width = `${((current + 1) / slides.length) * 100}%`;
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-focused-slide", slideIndex === current);
  });
  animateSlide(slides[current]);
}

function goTo(index) {
  const target = clampIndex(index);
  if (window.Reveal && typeof Reveal.slide === "function") {
    Reveal.slide(target, 0);
  } else {
    fallbackIndex = target;
    slides.forEach((slide, slideIndex) => {
      slide.classList.toggle("fallback-visible", slideIndex === fallbackIndex);
    });
    updateUi(fallbackIndex);
  }
}

function step(delta) {
  if (window.Reveal && typeof Reveal.getIndices === "function") {
    const current = Reveal.getIndices().h || 0;
    goTo(current + delta);
  } else {
    goTo(fallbackIndex + delta);
  }
}

document
  .querySelector("[data-nav='prev']")
  .addEventListener("click", () => step(-1));
document
  .querySelector("[data-nav='next']")
  .addEventListener("click", () => step(1));
dots.forEach((dot) => {
  dot.addEventListener("click", () => goTo(Number(dot.dataset.jump)));
});
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

document.querySelectorAll(".flow-node").forEach((node) => {
  node.addEventListener("click", () => {
    document
      .querySelectorAll(".flow-node")
      .forEach((item) => item.classList.remove("is-focused"));
    node.classList.add("is-focused");
  });
  node.addEventListener("focus", () => node.classList.add("is-focused"));
  node.addEventListener("blur", () => node.classList.remove("is-focused"));
});

applyTheme(
  readSavedTheme() || document.documentElement.dataset.theme || "light",
  false,
);
applyViewportMode();
clearDeckHash();
window.addEventListener("resize", scheduleLayout, { passive: true });
window.addEventListener("orientationchange", scheduleLayout, { passive: true });

if (window.Reveal) {
  Reveal.initialize({
    controls: false,
    progress: false,
    hash: false,
    history: false,
    center: false,
    width: "100%",
    height: "100%",
    margin: 0,
    minScale: 1,
    maxScale: 1,
    transition: "convex",
    backgroundTransition: "fade",
    touch: !window.matchMedia("(max-width: 760px)").matches,
    overview: true,
    keyboard: {
      37: "prev",
      38: "prev",
      39: "next",
      40: "next",
    },
  });

  Reveal.on("ready", () => {
    clearDeckHash();
    Reveal.slide(0, 0);
    updateUi(0);
  });
  Reveal.on("slidechanged", (event) => updateUi(event.indexh || 0));
  Reveal.on("overviewshown", keepOverviewVisible);
  Reveal.on("overviewhidden", () => updateUi(Reveal.getIndices().h || 0));
} else {
  document.documentElement.classList.add("fallback");
  document.addEventListener("keydown", (event) => {
    if (["ArrowRight", "ArrowDown"].includes(event.key)) step(1);
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) step(-1);
  });
  slides[0].classList.add("fallback-visible");
  updateUi(0);
}
