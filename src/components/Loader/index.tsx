"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { GREETING_WORDS } from "./words";
import {
  loaderAppearAnimation,
  wordsAnimation,
  collapseWordsAnimation,
} from "./animations";
import NumberLoader from "./number-loader";
import "./styles.css";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const Loader = ({ timeline }: Props) => {
  const loaderContainerRef = useRef(null);
  const wordGroupRef = useRef(null);
  const collapseWordsRef = useRef(null);

  useGSAP(() => {
    timeline &&
      timeline
        .add(loaderAppearAnimation({ loaderContainerRef }), 0)
        .add(wordsAnimation({ wordGroupRef }), 1)
        .add(collapseWordsAnimation({ collapseWordsRef }), 7);
  }, [timeline]);

  return (
    <div
      ref={loaderContainerRef}
      className="absolute inset-0 flex justify-center items-center h-screen w-screen z-[9999] opacity-0"
    >
      <div className="relative h-[15.6rem] w-[20rem] overflow-hidden text-black ml-36">
        <div ref={collapseWordsRef} className="loader h-full w-full">
          <div className="absolute top-0 left-0 h-[6.5rem] w-full z-50" />
          <div ref={wordGroupRef}>
            {GREETING_WORDS.map((word, index) => (
              <p key={index} className="text-2xl my-1 lowercase">
                {word}
              </p>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 h-[6.5rem] w-full z-50" />
        </div>
      </div>
      <NumberLoader timeline={timeline} />
    </div>
  );
};

export default Loader;
