// **************************************************
// ******** Section_03_약속과 책임 스크롤트리커********
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const timeline1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards",
      start: "top 90%",
      end: "64% 100%",
      scrub: 2,
    },
  });

  timeline1.to(
    ".cards li:nth-child(1)",
    { y: "-100px", duration: 2, ease: "none" },
    0.4
  );

  const timeline2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards",
      start: "top 90%",
      end: "64% 100%",
      scrub: 2,
    },
  });

  timeline2.to(
    ".cards li:nth-child(2)",
    { y: "-100px", duration: 2, ease: "none", delay: 3 },
    0.5
  );
  const timeline3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cards",
      start: "top 90%",
      end: "64% 100%",
      scrub: 2,
    },
  });

  timeline3.to(
    ".cards li:nth-child(3)",
    { y: "-100px", duration: 2, ease: "none", delay: 4 },
    0.6
  );
});
