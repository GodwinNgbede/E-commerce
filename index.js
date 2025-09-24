// To change background header
function scrollHeader() {
  const navEl = document.querySelector(".navbar-expand-sm");
  if (this.scrollY > 50) {
    navEl.classList.add("scroll-header");
  } else {
    navEl.classList.remove("scroll-header");
  }
  window.addEventListener("scroll", scrollHeader);
}
// HOME SWIPER INITIALIZER FN
var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// NEW SWIPER
var newSwiper = new Swiper(".new-swiper", {
  centeredSlide: true,

  loop: true,

  // Responsive breakpoints
  breakpoints: {
    // for phones
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
  },
});
