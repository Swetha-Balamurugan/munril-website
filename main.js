const rootStyles = getComputedStyle(document.documentElement);

const NAV_BG = rootStyles.getPropertyValue('--bg-deep-transparent');
const NAV_SOLID = rootStyles.getPropertyValue('--bg-deep');

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".custom-nav");

  if (window.scrollY > 50) {
    nav.style.background = NAV_SOLID;
  } else {
    nav.style.background = NAV_BG;
  }
});