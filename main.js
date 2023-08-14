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




gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
