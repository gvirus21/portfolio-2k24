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
      className="absolute inset-0 flex justify-center items-center h-screen w-screen max-h-full max-w-full z-[9999] opacity-0 overflow-hidden bg-green-500"
    >
      <div className="relative h-screen w-screen bg-red-600">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] md:-translate-y-1/2 h-[15.6rem] overflow-hidden text-black bg-purple-400">
          <div
            ref={collapseWordsRef}
            className="loader h-full md:w-[8rem] lg:w-[10rem]"
          >
            <div className="absolute top-0 left-0 h-[6.5rem] w-full z-50" />
            <div ref={wordGroupRef}>
              {GREETING_WORDS.map((word, index) => (
                <p key={index} className="text-xl md:text-2xl my-1 lowercase">
                  {word}
                </p>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 h-[6.5rem] w-full z-50" />
          </div>
        </div>
        {/* <NumberLoader timeline={timeline} /> */}
      </div>
    </div>
  );
};

export default Loader;
