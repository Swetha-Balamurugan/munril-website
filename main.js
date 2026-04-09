const rootStyles = getComputedStyle(document.documentElement);

const NAV_TRANSPARENT = rootStyles.getPropertyValue('--nav-transparent');
const NAV_SOLID = rootStyles.getPropertyValue('--bg-primary');

const nav = document.querySelector(".custom-nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.style.background = NAV_SOLID;
  } else {
    nav.style.background = NAV_TRANSPARENT;
  }
});