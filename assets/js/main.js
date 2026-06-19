// Mobile navigation toggle. No frameworks, no build step —
// edit freely if you need to change behavior.
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("primary-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Homepage research-area carousel. Plain JS, no dependencies.
  var carousel = document.getElementById("home-carousel");
  if (!carousel) return;

  var slides = Array.prototype.slice.call(carousel.querySelectorAll(".carousel__slide"));
  var dots = Array.prototype.slice.call(carousel.querySelectorAll(".carousel__dot"));
  var prevBtn = carousel.querySelector(".carousel__arrow--prev");
  var nextBtn = carousel.querySelector(".carousel__arrow--next");
  var current = 0;
  var timer = null;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var autoplayMs = parseInt(carousel.getAttribute("data-autoplay"), 10) || 5000;

  function show(index) {
    if (slides.length === 0) return;
    current = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === current);
    });
    dots.forEach(function (dot, i) {
      dot.classList.toggle("is-active", i === current);
    });
  }

  function next() { show(current + 1); }
  function prev() { show(current - 1); }

  function startAutoplay() {
    if (reduceMotion || slides.length < 2) return;
    stopAutoplay();
    timer = setInterval(next, autoplayMs);
  }
  function stopAutoplay() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  if (nextBtn) nextBtn.addEventListener("click", function () { next(); startAutoplay(); });
  if (prevBtn) prevBtn.addEventListener("click", function () { prev(); startAutoplay(); });
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () { show(i); startAutoplay(); });
  });

  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);
  carousel.addEventListener("focusin", stopAutoplay);
  carousel.addEventListener("focusout", startAutoplay);

  show(0);
  startAutoplay();
});
