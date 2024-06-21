import gsap from "gsap";

export const textAppearAnimaton = () => {
  const tl = gsap.timeline();

  tl.from(".large-animated-text", {
    yPercent: 400,
    skewY: 20,
    skewX: 20,
    duration: 3,
    ease: "power3.in",
  });

  return tl;
};
