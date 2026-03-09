

gsap.registerPlugin(ScrollTrigger, SplitText);

// LINE ANIMATION
document.querySelectorAll(".has_text_move_anim").forEach(t => {
  let delay = parseFloat(t.getAttribute("data-delay")) || 0.1;

  ScrollTrigger.create({
    trigger: t,
    start: "top 85%",
    once: true,
    onEnter: () => {
      let split = new SplitText(t, { type: "lines" });
      gsap.set(t, { perspective: 400 });
      gsap.from(split.lines, {
        duration: 1,
        delay: delay,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1
      });
    }
  });
});

// // CHARACTER ANIMATION
// document.querySelectorAll(".has_char_anim").forEach(t => {
//   let stagger = parseFloat(t.getAttribute("data-stagger")) || 0.02;
//   let translateX = parseFloat(t.getAttribute("data-translateX")) || 0;
//   let translateY = parseFloat(t.getAttribute("data-translateY")) || 0;
//   let onScroll = parseInt(t.getAttribute("data-on-scroll")) !== 0;
//   let delay = parseFloat(t.getAttribute("data-delay")) || 0.1;
//   let duration = parseFloat(t.getAttribute("data-duration")) || 1;
//   let ease = t.getAttribute("data-ease") || "power2.out";

//   const animate = () => {
//     let split = new SplitText(t, { type: "chars, words" });
//     gsap.from(split.chars, {
//       duration: duration,
//       delay: delay,
//       x: translateX,
//       y: translateY,
//       autoAlpha: 0,
//       ease: ease,
//       stagger: stagger
//     });
//   };

//   if (onScroll) {
//     ScrollTrigger.create({
//       trigger: t,
//       start: "top 85%",
//       once: true,
//       onEnter: animate
//     });
//   } else {
//     animate();
//   }
// });
gsap.registerPlugin(SplitText, ScrollTrigger);

document.querySelectorAll(".has_char_anim").forEach(t => {
  let stagger = parseFloat(t.getAttribute("data-stagger")) || 0.03;
  let delay = parseFloat(t.getAttribute("data-delay")) || 0;
  let duration = parseFloat(t.getAttribute("data-duration")) || 0.8;
  let ease = t.getAttribute("data-ease") || "power2.out";
  let onScroll = parseInt(t.getAttribute("data-on-scroll")) !== 0;

  const animate = () => {
    let split = new SplitText(t, { type: "chars, words" });

    gsap.from(split.chars, {
      x: 80, // Reduced translateX for a more subtle effect
      opacity: 0,
      duration: duration,
      ease: ease,
      stagger: stagger,
      delay: delay,
      force3D: true,
      transformOrigin: "center center"
    });
  };

  if (onScroll) {
    ScrollTrigger.create({
      trigger: t,
      start: "top 85%",
      once: true,
      onEnter: animate
    });
  } else {
    animate();
  }
});




// WORD ANIMATION
document.querySelectorAll(".has_word_anim").forEach(t => {
  let stagger = parseFloat(t.getAttribute("data-stagger")) || 0.04;
  let translateX = parseFloat(t.getAttribute("data-translateX")) || 0;
  let translateY = parseFloat(t.getAttribute("data-translateY")) || 0;
  let onScroll = parseInt(t.getAttribute("data-on-scroll")) !== 0;
  let delay = parseFloat(t.getAttribute("data-delay")) || 0.1;
  let duration = parseFloat(t.getAttribute("data-duration")) || 0.75;

  const animate = () => {
    let split = new SplitText(t, { type: "chars, words" });
    gsap.from(split.words, {
      duration: duration,
      delay: delay,
      x: translateX,
      y: translateY,
      autoAlpha: 0,
      stagger: stagger
    });
  };

  if (onScroll) {
    ScrollTrigger.create({
      trigger: t,
      start: "top 90%",
      once: true,
      onEnter: animate
    });
  } else {
    animate();
  }
});

// FADE ANIMATION
document.querySelectorAll(".has_fade_anim").forEach(t => {
  let offset = parseFloat(t.getAttribute("data-fade-offset")) || 50;
  let duration = parseFloat(t.getAttribute("data-duration")) || 1.15;
  let from = t.getAttribute("data-fade-from") || "bottom";
  let onScroll = parseInt(t.getAttribute("data-on-scroll")) !== 0;
  let delay = parseFloat(t.getAttribute("data-delay")) || 0.15;
  let ease = t.getAttribute("data-ease") || "power2.out";

  let animProps = {
    opacity: 0,
    ease: ease,
    duration: duration,
    delay: delay
  };

  if (from === "top") animProps.y = -offset;
  if (from === "left") animProps.x = -offset;
  if (from === "bottom") animProps.y = offset;
  if (from === "right") animProps.x = offset;

  if (onScroll) {
    animProps.scrollTrigger = {
      trigger: t,
      start: "top 85%",
      once: true
    };
  }

  gsap.from(t, animProps);
});

// PIN SECTION ITEMS ON DESKTOP
gsap.matchMedia().add("(min-width: 1024px)", () => {
  document.querySelectorAll(".section-item").forEach(t => {
    gsap.to(t, {
      scrollTrigger: {
        trigger: t,
        start: "bottom bottom",
        end: "bottom-=500",
        pin: true,
        pinSpacing: false,
        markers: false
      }
    });
  });
});

// Refresh triggers after DOM is ready


// -------------------------------------
gsap.registerPlugin(SplitText, ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  // Select all elements with the class 'split'
  const elements = document.querySelectorAll(".split");

  elements.forEach((el) => {

    const split = new SplitText(el, {
      type: "lines,words",
      linesClass: "ts-line"
    });

    // Initial animation on page load
    gsap.from(split.words, {
      duration: 1.2,
      yPercent: 100,
      opacity: 0,
      ease: "circ.out",
      stagger: 0.1
    });

    // Scroll-triggered animation
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.fromTo(
          split.words,
          {
            yPercent: 100,
            opacity: 0
          },
          {
            yPercent: 0,
            opacity: 1,
            ease: "circ.out",
            stagger: 0.1,
            duration: 1
          }
        );
      }
    });
  });
});

// gsap.registerPlugin(SplitText, ScrollTrigger);

// document.addEventListener("DOMContentLoaded", () => {
//   const el = document.querySelector(".split");

//   if (!el) return;

//   // Split the text into lines and words
//   const split = new SplitText(el, {
//     type: "lines,words",
//     linesClass: "ts-line"
//   });

//   // Initial animation on page load
//   gsap.from(split.words, {
//     duration: 0.6,
//     yPercent: 100,
//     opacity: 0,
//     ease: "circ.out",
//     stagger: 0.1
//   });

//   // Scroll-triggered animation
//   ScrollTrigger.create({
//     trigger: el,
//     start: "top 85%",
//     once: true,
//     onEnter: () => {
//       gsap.fromTo(
//         split.words,
//         {
//           yPercent: 100,
//           opacity: 0
//         },
//         {
//           yPercent: 0,
//           opacity: 1,
//           ease: "circ.out",
//           stagger: 0.1,
//           duration: 1
//         }
//       );
//     }
//   });
// });


// ---------------Reaveal img------------------
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".reveal-img").forEach((container) => {
  const image = container.querySelector("img");
  const delay = parseFloat(container.getAttribute("data-delay")) || 0;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, {
    duration: 1.2,
    xPercent: -100,
    ease: "power2.out",
    delay: delay
  });
  tl.from(image, {
    duration: 1.2,
    xPercent: 100,
    scale: 1.3,
    ease: "power2.out"
  }, "<");
});


ScrollTrigger.refresh();

// --------------hover-move----------
$(document).ready(function () {
  $(".tilt-container").tilt({
    maxTilt: 20,
    perspective: 1400,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    speed: 1200,
    glare: true,
    maxGlare: 0.2,
    scale: 1.02
  });
});

// -----------split-line
// gsap.registerPlugin(SplitText, ScrollTrigger);

// document.addEventListener("DOMContentLoaded", () => {
//   document.querySelectorAll(".split-line").forEach((el) => {
//     const split = SplitText.create(el, {
//       type: "lines",
//       linesClass: "line",
//       autoSplit: true
//     });

//     gsap.from(split.lines, {
//       scrollTrigger: {
//         trigger: el,
//         start: "top 85%",
//         toggleActions: "play none none none"
//       },
//       y: 100,
//       opacity: 0,
//       duration: 1,
//       ease: "power4.out",
//       stagger: 0.07
//     });
//   });
// });





