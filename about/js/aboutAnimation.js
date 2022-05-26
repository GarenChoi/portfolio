let scrollTop;
function scroll() {
  scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  let heightAll = document.querySelector("#wrap").offsetHeight;
  document.body.style.height = `${heightAll}px`;

  requestAnimationFrame(scroll);
}
scroll();
window.addEventListener("resize", scroll);

window.addEventListener("scroll", () => {
  gsap.to("#wrap", {
    duration: 1,
    y: -scrollTop,
  });
});
