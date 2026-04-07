window.addEventListener("scroll", () => {
  const nav = document.querySelector(".custom-nav");

  if (window.scrollY > 50) {
    nav.style.background = "#071520";
  }
});