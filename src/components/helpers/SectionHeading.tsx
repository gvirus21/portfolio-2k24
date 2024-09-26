import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useCursorState from "@/store/useCursorState";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  id: string;
  children: string;
  className?: string
}

const SectionHeading = ({ id, children, className }: Props) => {
  useGSAP(() => {
    animateHeadings();
  });

  function animateHeadings() {
    const heading = document.getElementById(id);
    gsap.set(heading, { y: "100%" });

    ScrollTrigger.create({
      trigger: heading,
      start: "top 80%",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline({
          defaults: { duration: 1, ease: "power3.out" },
        });

        tl.to(heading, {
          y: 0,
          duration: 1.5,
          stagger: 0.08,
          delay: 0.7,
        });
      },
    });
  }
  const { setCursorState } = useCursorState();

  return (
    <header className={cn("overflow-hidden inline-block", className)}>
      <h2
        id={id}
        className="font-medium text-4xl md:text-5xl 2xl:text-6xl 3xl:text-7xl md:mb-10 lg:mb-0 uppercase"
        onMouseEnter={() => setCursorState("lg-hovered")}
        onMouseLeave={() => setCursorState("regular")}
      >
        {children}
      </h2>
    </header>
  );
};

export default SectionHeading;
