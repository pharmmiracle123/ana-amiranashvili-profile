/**
 * Ana Amiranashvili — Portfolio
 * TypeScript entry: theme, navigation, scroll reveals, year
 */

type Theme = "light" | "dark";

const STORAGE_KEY = "ana-portfolio-theme";

/** Resolve preferred theme: stored → system → light */
function getPreferredTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  return "light";
}

function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem(STORAGE_KEY, theme);
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute("content", theme === "dark" ? "#0c0c0d" : "#faf9f7");
  }
}

function initTheme(): void {
  const theme = getPreferredTheme();
  applyTheme(theme);

  const toggle = document.getElementById("themeToggle");
  toggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") as Theme;
    applyTheme(current === "dark" ? "light" : "dark");
  });

  // React to system preference changes when user hasn't forced a choice
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      applyTheme(e.matches ? "dark" : "light");
    }
  });
}

function initHeaderScroll(): void {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const onScroll = (): void => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileNav(): void {
  const toggle = document.getElementById("menuToggle") as HTMLButtonElement | null;
  const nav = document.getElementById("primaryNav");
  if (!toggle || !nav) return;

  const close = (): void => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  // Close on link click
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initReveals(): void {
  const elements = document.querySelectorAll<HTMLElement>(
    ".section-header, .stat-card, .project-card, .platform-card, .point, .timeline-item, .edu-card, .contact-panel, .investment-panel, .about-copy, .skill-list"
  );

  elements.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

function setYear(): void {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function initSmoothAnchors(): void {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

/** Boot */
function main(): void {
  initTheme();
  initHeaderScroll();
  initMobileNav();
  initReveals();
  setYear();
  initSmoothAnchors();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", main);
} else {
  main();
}

export {};
