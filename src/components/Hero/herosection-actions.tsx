import React from "react";
import LinkHoverAnimation from "../shared/LinkHoverAnimation";
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";

const HeroSectionActions = () => (
  <>
    <MobileVersion />
    <DesktopVersion />
  </>
);

const DesktopVersion = () => {
  return (
    <div className="hidden sm:flex absolute bottom-0 xl:bottom-10 justify-between items-center h-20 w-full z-50 opacity-55">
      <div className="relative w-full">
        <LinkHoverAnimation className="left-0 xl:text-xl tracking-wider">
          <p className="flex justify-between items-center">
            SEE MY WORK <ArrowIcon className="h-8 xl:h-10 w-8 xl:w-14" />
          </p>
        </LinkHoverAnimation>
        <LinkHoverAnimation className="right-0 xl:text-xl tracking-wider">
          <p className="flex justify-between items-center">
            BOOK A FREE CALL <ArrowIcon className="h-8 xl:h-10 w-8 xl:w-14" />
          </p>
        </LinkHoverAnimation>
      </div>
    </div>
  );
};

const MobileVersion = () => {
  return (
    <div className="sm:hidden absolute bottom-10 flex flex-col justify-between items-center w-full text-sm">
      <button className="flex justify-between items-center h-12 w-full bg-black border border-white px-4 my-2 ">
        SEE MY WORK <ArrowIcon className="h-8 w-10" />
      </button>
      <button className="flex justify-between items-center h-12 w-full bg-black border border-white px-4 my-2">
        BOOK A FREE CALL <ArrowIcon className="h-8 w-10" />
      </button>
    </div>
  );
};

export default HeroSectionActions;
