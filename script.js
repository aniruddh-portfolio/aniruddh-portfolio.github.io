// GSAP + ScrollTrigger animations
gsap.registerPlugin(ScrollTrigger);

// Animate headings and paragraphs
gsap.utils.toArray(".animate").forEach(el => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%", // jab element viewport me aaye
      toggleActions: "play none none reverse"
    },
    y: 100, // neeche se upar move hoga
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });
});

// Skills list ke liye ek‑ek karke reveal
gsap.from("#about ul li", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  x: -50,
  duration: 0.8,
  stagger: 0.3, // ek‑ek karke animate hoga
  ease: "power2.out"
});

// Portfolio items ke liye zoom effect
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
// Background parallax effect
gsap.utils.toArray("section").forEach(section => {
  gsap.to(section, {
    backgroundPositionY: "50%",
    scrollTrigger: {
      trigger: section,
      scrub: true
    }
  });
});
// Hero heading cinematic zoom
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
// Pin portfolio section
ScrollTrigger.create({
  trigger: "#portfolio",
  start: "top top",
  end: "+=500",
  pin: true,
  scrub: true
});
