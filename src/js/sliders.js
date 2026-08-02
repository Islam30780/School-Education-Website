import Swiper from "swiper";
import "swiper/css";

export function Sliders(){
    const animatedSlider = document.querySelector(".testimonials-swiper")
    if(!animatedSlider){return;}
   new Swiper(".testimonials-swiper", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,
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