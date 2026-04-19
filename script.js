// GSAP + ScrollTrigger animations
gsap.registerPlugin(ScrollTrigger);

// 1. Reveal animations (headings, paragraphs)
gsap.utils.toArray(".animate").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});

// 2. Skills list ek-ek karke reveal
gsap.from("#about ul li", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  x: -50,
  duration: 0.8,
  stagger: 0.3,
  ease: "power2.out"
});

// 3. Portfolio items zoom effect
gsap.from("#portfolio ul li", {
  scrollTrigger: {
    trigger: "#portfolio",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  scale: 0.8,
  duration: 1,
  stagger: 0.3,
  ease: "back.out(1.7)"
});

// 4. Background parallax
gsap.utils.toArray("section").forEach(section => {
  gsap.to(section, {
    backgroundPositionY: "50%",
    scrollTrigger: {
      trigger: section,
      scrub: true
    }
  });
});

// 5. Hero heading cinematic zoom
gsap.from("#home h1", {
  scrollTrigger: {
    trigger: "#home",
    start: "top center",
    scrub: true
  },
  scale: 0.5,
  rotation: 15,
  opacity: 0,
  duration: 2,
  ease: "power2.out"
});

// 6. Pin portfolio section
ScrollTrigger.create({
  trigger: "#portfolio",
  start: "top top",
  end: "+=500",
  pin: true,
  scrub: true
});

// 7. Spline embeds animation
gsap.from(".kingfisher", {
  scrollTrigger: {
    trigger: ".kingfisher",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  scale: 0.7,
  duration: 1.5,
  ease: "power3.out"
});

gsap.from(".fireflies", {
  scrollTrigger: {
    trigger: ".fireflies",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 100,
  duration: 1.5,
  ease: "power3.out"
});
