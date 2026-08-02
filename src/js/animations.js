import AOS from "aos";
import "aos/dist/aos.css";

export function initAnimations() {
  AOS.init({
    duration: 700,
    easing: "ease-out",
    once: true,
    offset: 80,
  });
}