"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { GREETING_WORDS } from "./words";
import { wordsAnimation, collapseWordsAnimation } from "./animations";
import NumberLoader from "./number-loader";
import "./styles.css"

interface Props {
  timeline: gsap.core.Timeline | null;
}

const Loader = ({ timeline }: Props) => {
  const wordGroupRef = useRef(null);
  const collapseWordsRef = useRef(null);

  useGSAP(() => {
    timeline &&
      timeline
        .add(wordsAnimation({ wordGroupRef }), 0)
        .add(collapseWordsAnimation({ collapseWordsRef }));
  }, [timeline]);

  return (
    <div className="absolute inset-0 flex justify-center items-center h-screen w-screen z-[9999]">
      <div className="relative h-[15.6rem] w-[20rem] overflow-hidden text-black ml-36">
        <div ref={collapseWordsRef} className="loader h-full w-full">
          <div className="absolute top-0 left-0 h-[6.5rem] w-full bg-[#eaeaeab7] z-50" />
          <div ref={wordGroupRef}>
            {GREETING_WORDS.map((word, index) => (
              <p key={index} className="text-2xl my-1 lowercase">
                {word}
              </p>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 h-[6.5rem] w-full bg-[#eaeaeac5] z-50" />
        </div>
      </div>
      <NumberLoader timeline={timeline} />
    </div>
  );
};

export default Loader;
