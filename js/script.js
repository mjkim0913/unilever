// **************************************************
// ******** Section_01_회사소개 이미지 스케일 스크롤트리커********
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  ease: "none",
});

tl.from(".img_box img", {
  scale: 0.4,
  duration: 5,
  transformOrigin: "bottom center",
}).to(
  {},
  {
    duration: 1,
  }
);
ScrollTrigger.create({
  trigger: ".img_box",
  start: "top top",
  end: "bottom bottom",
  pin: ".img_box",
  animation: tl,
  scrub: 0.78,
  pinSpacing: false,
});

// **************************************************
// ******** Section_03_약속과 책임 스크롤트리거********
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

// about

function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem); // assure that the element is hidden when scrolled into view

    ScrollTrigger.create({
      trigger: elem,
      markers: true,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      }, // assure that the element is hidden when scrolled into view
    });
  });
});

// Brand swiper
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".brandSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
