import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Sliders() {
  const animatedSlider = document.querySelector(".testimonials-swiper");

  if (!animatedSlider) return;

  new Swiper(".testimonials-swiper", {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,
    pagination: {
      el: ".testimonials-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".testimonials-next",
      prevEl: ".testimonials-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });
}