export function mobileMenu() {
  const menuButton = document.querySelector("[data-menu-toggle]");
  const mobileMenuElement = document.querySelector("[data-mobile-menu]");

  if (!menuButton || !mobileMenuElement) return;

  menuButton.addEventListener("click", () => {
    mobileMenuElement.classList.toggle("hidden");

    const isOpen = !mobileMenuElement.classList.contains("hidden");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "x" : "☰";
  });
}
