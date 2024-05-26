import React from "react";

const MobileVersion = () => {
  return (
    <div className="flex flex-col items-center lg:hidden mt-24">
      <div className="h-[14rem] sm:h-[20rem] aspect-[14/9] bg-white/50 -z-10" />
      <div className="mt-12 sm:mt-16">
        <h3 className="text-3xl md:text-5xl font-bold">
          PROJECT DEMO - Schedule.
        </h3>
        <h4 className="text-lg md:text-xl my-4 font-semibold">
          A One line project description.
        </h4>
        <ul className="flex flex-col justify-between text-base font-thin list-disc">
          <li className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quod, qui molestias ullam omnis repudiandae enim amet modi
            recusandae magnam.
          </li>
          <li className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            quod, qui molestias ullam omnis repudiandae enim amet modi
            recusandae magnam.
          </li>
          <li className="my-2">
            Repudiandae enim amet modi recusandae magnam.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileVersion;
