/* ==========================================================================
   main.js — CookSavvy landing page
   Progressive enhancement only: the page is fully functional without JS.
   Handles (1) the mobile nav toggle, (2) scroll-reveal animations, and
   (3) the dynamic footer year.
   ========================================================================== */

(function () {
  "use strict";

  /* ----------------------------------------------------------------------
     1. Mobile navigation toggle
     Wires the hamburger button to the menu with correct ARIA state, and
     closes the menu on link click, Escape, or resize back to desktop.
     ---------------------------------------------------------------------- */
  var toggle = document.querySelector(".nav__toggle");
  var menu = document.getElementById("nav-menu");

  if (toggle && menu) {
    var setMenu = function (open) {
      menu.setAttribute("data-open", String(open));
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    setMenu(false);

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      setMenu(!open);
    });

    // Close when a menu link is tapped (navigating to an in-page anchor)
    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setMenu(false);
      }
    });

    // Close on Escape for keyboard users
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenu(false);
      }
    });

    // Reset state if the viewport grows past the mobile breakpoint
    var desktopQuery = window.matchMedia("(min-width: 720px)");
    desktopQuery.addEventListener("change", function (event) {
      if (event.matches) {
        setMenu(false);
      }
    });
  }

  /* ----------------------------------------------------------------------
     2. Scroll-reveal
     Adds .is-visible to .reveal elements as they enter the viewport.
     Falls back to showing everything if IntersectionObserver is missing
     or the user prefers reduced motion.
     ---------------------------------------------------------------------- */
  var reveals = document.querySelectorAll(".reveal");
  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target); // reveal once, then stop watching
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------------------
     3. Footer year — keeps the copyright current without a build step
     ---------------------------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
