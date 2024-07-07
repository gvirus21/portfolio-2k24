import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  thirdDigitLoaingAnimation,
  firstDigitLoaingAnimation,
  secondDigitLoaingAnimation,
  exitLoadingDigitAnimation,
} from "./animations";

const FIRST_DIGITS_SET = [0, 1];
const SECOND_DIGITS_SET = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const temp_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const THIRD_DIGITS_SET = Array(10)
  .fill([...temp_array, 0].join(""))
  .join("")
  .split("")
  .map(Number);

interface Props {
  timeline: gsap.core.Timeline | null;
}

const NumberLoader = ({ timeline }: Props) => {
  const loadingNumberRefContainer = useRef(null);

  useGSAP(() => {
    timeline &&
      timeline
        .add(thirdDigitLoaingAnimation())
        .add(secondDigitLoaingAnimation(), 1)
        .add(firstDigitLoaingAnimation(), 2)
        .add(exitLoadingDigitAnimation(), 6);
  }, [timeline]);

  return (
    <div
      ref={loadingNumberRefContainer}
      className="for-gsap-loading-number-container absolute bottom-24 md:bottom-10 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 flex h-[5rem] w-[9rem] text-black text-[3.5rem] overflow-hidden"
    >
      <div className="flex justify-center items-start h-[5rem] w-[3rem] overflow-hidden">
        <div className="for-gsap-first-digit">
          {FIRST_DIGITS_SET.map((digit) => (
            <p key={`0-${digit}`}>{digit}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-start h-[5rem] w-[3rem]">
        <div className="for-gsap-second-digit">
          {SECOND_DIGITS_SET.map((digit) => (
            <p key={`1-${digit}`}>{digit}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-start h-[5rem] w-[3rem]">
        <div className="for-gsap-third-digit">
          {THIRD_DIGITS_SET.map((digit) => (
            <p key={`2-${digit}`}>{digit}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberLoader;
