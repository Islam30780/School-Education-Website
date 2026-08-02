import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function createSlider(selector, prev, next, pagination) {
  const slider = document.querySelector(selector);

  if (!slider) return;
  new Swiper(selector, {
    modules: [Navigation, Pagination],
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}
export function Sliders() {
  createSlider(
    ".testimonials-swiper",
    ".testimonials-prev",
    ".testimonials-next",
    ".testimonials-pagination"
  );

  createSlider(
    ".gallery-swiper",
    ".gallery-prev",
    ".gallery-next",
    ".gallery-pagination"
  );

  createSlider(
    ".learning-swiper",
    ".learning-prev",
    ".learning-next",
    ".learning-pagination"
  );
}