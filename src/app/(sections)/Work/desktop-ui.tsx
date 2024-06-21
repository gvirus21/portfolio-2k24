import React from "react";

const DesktopVersion = () => {
  return (
    <div className="relative hidden lg:flex flex-row justify-between min-h-[53rem] xl:min-h-0 xl:h-[40rem] mt-32 mx-auto w-10/12 xl:w-full">
      <div className="flex flex-col justify-between h-[50rem] xl:h-[40rem]">
        <div className="w-[40rem] 2xl:w-full">
          <h3 className="text-5xl xl:text-6xl font-thin">
            PROJECT DEMO - Schedule.
          </h3>
          <h4 className="text-lg md:text-xl lg:text-4xl my-4 lg:my-10 font-semibold">
            A One line project description.
          </h4>
        </div>
        <div className="xl:absolute xl:top-[12%] 2xl:top-14 3xl:top-0 xl:right-0 h-[12rem] lg:h-[24rem] 2xl:h-[32rem] 3xl:h-[40rem] aspect-[14/9] bg-white/50 mt-10 mx-auto"></div>

        <ul className="flex flex-col justify-between lg:h-[16rem] xl:w-[32rem] 2xl:w-[80%] 2xl:max-w-[40rem] text-base lg:text-xl list-disc lg:mt-12 lg:pl-6">
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

export default DesktopVersion;
