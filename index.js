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
// SWIPER INITIALIZER FN
var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
