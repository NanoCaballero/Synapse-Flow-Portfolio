/* =========================================================================
   Synapse-Flow · Portafolio Fantasy Labs
   script.js — JavaScript vanilla (sin dependencias)
   --------------------------------------------------------------------------
   El sitio funciona aunque este archivo no cargue. El JS solo MEJORA la
   experiencia: menú móvil, sección activa, revelado al hacer scroll, entrada
   escalonada del hero y botón "volver arriba".
   ========================================================================= */
(function () {
  "use strict";

  // Marca que hay JS disponible (habilita los estados ocultos de .reveal en CSS)
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 1. Menú móvil ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", function () {
      var open = navLinks.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    navLinks.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        navLinks.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- 2. Sección activa en la navbar ---------- */
  var sections = document.querySelectorAll("section[id]");
  var linkMap = {};
  document.querySelectorAll('.nav-links a[href^="#"]').forEach(function (a) {
    linkMap[a.getAttribute("href").slice(1)] = a;
  });
  if ("IntersectionObserver" in window && sections.length) {
    var navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          Object.keys(linkMap).forEach(function (k) {
            var on = k === id;
            linkMap[k].classList.toggle("active", on);
            if (on) { linkMap[k].setAttribute("aria-current", "true"); }
            else { linkMap[k].removeAttribute("aria-current"); }
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    sections.forEach(function (s) { navObs.observe(s); });
  }

  /* ---------- 3. Revelado al hacer scroll (con escalonado) ---------- */
  if (!reduceMotion && "IntersectionObserver" in window) {
    var selectors = [
      ".section__head", ".card", ".pipeline__step", ".table-wrap",
      ".node-chip", ".team-card", ".link-group", ".diagram", ".callout",
      ".hero__badge", ".hero h1", ".hero__subtitle", ".hero__tagline",
      ".hero__desc", ".hero__buttons", ".hero__panel", ".subhead"
    ];
    var revealEls = document.querySelectorAll(selectors.join(","));
    revealEls.forEach(function (el) { el.classList.add("reveal"); });

    var revObs = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          // delay según posición entre hermanos que también se revelan
          var sibs = Array.prototype.filter.call(el.parentElement.children, function (c) {
            return c.classList.contains("reveal");
          });
          var idx = sibs.indexOf(el);
          el.style.transitionDelay = (Math.min(idx, 6) * 70) + "ms";
          el.classList.add("is-visible");
          obs.unobserve(el);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

    revealEls.forEach(function (el) { revObs.observe(el); });
  }

  /* ---------- 4. Botón "volver arriba" ---------- */
  var toTop = document.querySelector(".to-top");
  if (toTop) {
    var onScroll = function () { toTop.classList.toggle("show", window.scrollY > 640); };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- 5. Barra de progreso de lectura ---------- */
  var bar = document.querySelector(".progress");
  if (bar) {
    var updateBar = function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      bar.style.width = (max > 0 ? (h.scrollTop / max) * 100 : 0) + "%";
    };
    window.addEventListener("scroll", updateBar, { passive: true });
    window.addEventListener("resize", updateBar);
    updateBar();
  }

  /* ---------- 6. Ocultar elementos decorativos a lectores de pantalla ---------- */
  document.querySelectorAll(
    ".node-chip .dot, .hero__badge .dot, .flow-connector, .pipeline__arrow, .diagram__connector"
  ).forEach(function (el) { el.setAttribute("aria-hidden", "true"); });

  /* ---------- 7. Año dinámico en el footer ---------- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) { yearEl.textContent = String(new Date().getFullYear()); }
})();
