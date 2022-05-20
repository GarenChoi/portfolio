gsap.set("#section1 h1", {
  y: "-60vh",
  scale: 2,
});
gsap.to("#section1 h1", {
  duration: 0.7,
  y: 0,
  scale: 1,
  ease: "back.out(1.4)",
});

gsap.set("#section1 p", {
  y: "60vh",
  scale: 2,
});
gsap.to("#section1 p", {
  duration: 0.7,
  delay: 0.5,
  y: 0,
  scale: 1,
  ease: "back.out(1.2)",
});

gsap.set("#section1 .goBtn", {
  y: "-60vh",
  scale: 2,
  opacity: 0,
  pointerEvents: "none",
});
gsap.to("#section1 .goBtn", {
  duration: 0.5,
  delay: 1,
  y: 0,
  scale: 1,
  opacity: 1,
  ease: "back.out(1.2)",
});
gsap.to("#section1 .goBtn", {
  duration: 0,
  delay: 3,
  pointerEvents: "auto",
  ease: "back.out(1.2)",
});

gsap.set("#section1 .o1", {
  x: "-30vw",
  y: "60vh",
  scale: 2,
  opacity: 0,
});
gsap.to("#section1 .o1", {
  duration: 0.5,
  delay: 1.3,
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  ease: "back.out(2.5)",
});

gsap.set("#section1 .o2", {
  x: "10vw",
  y: "60vh",
  scale: 2,
  opacity: 0,
});
gsap.to("#section1 .o2", {
  duration: 0.5,
  delay: 1.5,
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  ease: "back.out(2.5)",
});

gsap.set("#section1 .o3", {
  x: "20vw",
  y: "50vh",
  scale: 2,
  opacity: 0,
});
gsap.to("#section1 .o3", {
  duration: 0.5,
  delay: 1.4,
  x: 0,
  y: 0,
  scale: 1,
  opacity: 1,
  ease: "back.out(2.5)",
});

gsap.to("#section1 h1", {
  duration: 0,
  delay: 3,
  animationName: "bounce",
});

gsap.to("#section1 h1 > span", {
  duration: 0,
  delay: 3,
  animationName: "shake",
});

gsap.to("#section1 p", {
  duration: 0,
  delay: 3,
  animationName: "bounce",
});
