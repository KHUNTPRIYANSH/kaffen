let bar = document.querySelector(".bar");
let close = document.querySelector(".close");
let menu = document.querySelector(".invis-menu");
bar.onclick = visibalMenu;
close.onclick = hideMenu;
menu.style.opacity = "0";
close.style.display = "none";
bar.style.display = "flex";
menu.style.right = "-500PX";
menu.style.display = "flex";
function visibalMenu() {
  console.log("Yooo");
  console.log(menu);
  bar.style.display = "none";
  close.style.display = "flex";
  menu.style.right = "0";
  menu.style.opacity = "1";
}
function hideMenu() {
  menu.style.opacity = "0";
  close.style.display = "none";
  bar.style.display = "flex";
  menu.style.right = "-500PX";
}
var swiper = new Swiper(".sss", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
var swiper2 = new Swiper(".carddd", {
  effect: "cards",
  grabCursor: true,
  // loop: true,
  pagination: ".swiper-pagination2",
  paginationClickable: true,
  slidesPerView: "auto",
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
