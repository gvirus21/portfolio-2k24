"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useCursorState from "@/store/useCursorState";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ id, children, className }: Props) => {
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
    <header className="overflow-hidden inline-block w-full">
      <h2
        id={id}
        className={cn(
          "font-medium text-4xl sm:text-5xl md:text-6xl xl:text-7xl",
          className
        )}
        onMouseEnter={() => setCursorState("lg-hovered")}
        onMouseLeave={() => setCursorState("regular")}
      >
        {children}
      </h2>
    </header>
  );
};

export default Heading;
