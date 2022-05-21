var s = skrollr.init();

const infoInner = document.querySelectorAll(".infoInner");

function scroll() {
  let scrollTop =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    window.scrollY;
  // document.querySelector(".scrollTop").innerText = Math.round(scrollTop);

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
    translateX: (-goLeft * 0.8)+(viewWidth/6),
    ease: "linear",
  });
  gsap.to(".infoInner3 .bgText", {
    duration: 3,
    translateX: (-goLeft * 0.8)+(viewWidth/2.7),
    ease: "linear",
  });
  gsap.to(".infoInner4 .bgText", {
    duration: 3,
    translateX: (-goLeft * 0.8)+(viewWidth/1.85),
    ease: "linear",
  });

infoInner.forEach((el,index) => {
    if(infoInner[index].getBoundingClientRect().left<(window.innerWidth/2)){
        infoInner[index].querySelector(".aniBox").style.animationName = "moveBox1";
        setTimeout(()=>{
            infoInner[index].querySelector(".aniBox").style.opacity = "1";
        },1000)
    } else {
        infoInner[index].querySelector(".aniBox").style.animationName = "moveBox2";
        setTimeout(()=>{
            infoInner[index].querySelector(".aniBox").style.opacity = "0";
        },1000)
    }
})
  requestAnimationFrame(scroll);
}
scroll();
window.addEventListener("resize", scroll);

//글씨 쪼개기
let text = document.querySelectorAll("h1 div");
text.forEach((el) => {
  let splitText = el.innerText;
  let splitWrap = splitText
    .split("")
    .join("</span><span aria-hidden='true'>");
  splitWrap = "<span aria-hidden='true'>" + splitWrap + "</span>";
  el.innerHTML = splitWrap;
  el.setAttribute("aria-label", splitText);
});
setTimeout(()=>{
document.querySelectorAll(".title1 span").forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("show");
        }, 100 * (index + 1));
    })
},500)
setTimeout(()=>{
    document.querySelectorAll(".title2 span").forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("show");
        }, 100 * (index + 1));
    })
}, 1500)
setTimeout(()=>{
    document.querySelectorAll(".title3 span").forEach((span, index) => {
        setTimeout(() => {
            span.classList.add("show");
        }, 500 * (index + 1));
    })
}, 3000)