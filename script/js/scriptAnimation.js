var s = skrollr.init();

function scroll() {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  let wrapWidth = document.getElementById("wrap").offsetWidth;
  document.body.style.height = `${wrapWidth}px`;

  let viewWidth = wrapWidth - window.innerWidth;
  let viewHeight = wrapWidth - window.innerHeight;
  let goLeft = scrollTop * (viewWidth / viewHeight);

  gsap.to("#wrap", {
    duration: 1,
    translateX: -goLeft,
    ease: "linear",
  });
  gsap.to(".infoInner1 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8,
    ease: "linear",
  });
  gsap.to(".infoInner2 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 8,
    ease: "linear",
  });
  gsap.to(".infoInner3 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 5,
    ease: "linear",
  });
  gsap.to(".infoInner4 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 2.5,
    ease: "linear",
  });
  gsap.to(".infoInner5 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 2,
    ease: "linear",
  });
  gsap.to(".infoInner6 .bgText", {
    duration: 3,
    translateX: -goLeft * 0.8 + viewWidth / 1.5,
    ease: "linear",
  });

  requestAnimationFrame(scroll);
}
scroll();
window.addEventListener("resize", scroll);

//글씨 쪼개기
let text = document.querySelectorAll("h1 div");
text.forEach((el) => {
  let splitText = el.innerText;
  let splitWrap = splitText.split("").join("</span><span aria-hidden='true'>");
  splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
  el.innerHTML = splitWrap;
  el.setAttribute("aria-label", splitText);
});
setTimeout(() => {
  document.querySelectorAll(".title1 span").forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("show");
    }, 100 * (index + 1));
  });
}, 500);
setTimeout(() => {
  document.querySelectorAll(".title2 span").forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("show");
    }, 100 * (index + 1));
  });
}, 1500);
setTimeout(() => {
  document.querySelectorAll(".title3 span").forEach((span, index) => {
    setTimeout(() => {
      span.classList.add("show");
    }, 500 * (index + 1));
  });
}, 3000);
