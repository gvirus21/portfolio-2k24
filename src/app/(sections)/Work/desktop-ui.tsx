import { useEffect, useState } from "react";
import { WORK_DATA } from "./work-data";

const DesktopVersion = () => {
  const [workIndex, setWorkIndex] = useState(0);
  const [currentWork, setCurrentWork] = useState(WORK_DATA[workIndex]);

  useEffect(() => {
    setCurrentWork(WORK_DATA[workIndex]);
  }, [workIndex]);

  return (
    <div className="relative hidden lg:flex flex-row justify-between min-h-[53rem] xl:min-h-0 xl:h-[40rem] mt-32 mx-auto w-10/12 xl:w-full">
      <div className="flex flex-col justify-between h-[50rem] xl:h-[40rem]">
        <div className="w-[40rem] 2xl:w-full">
          <h3 className="text-5xl xl:text-6xl font-thin">
            {currentWork.title}
          </h3>
          <h4 className="text-lg md:text-xl lg:text-4xl my-4 lg:my-10 font-semibold">
            {currentWork.jobTitle}
          </h4>
        </div>
        <div className="xl:absolute xl:top-[12%] 2xl:top-14 3xl:top-0 xl:right-0 h-[12rem] lg:min-h-[24rem] 2xl:h-[32rem] 3xl:h-[40rem] aspect-[14/9] bg-white/50 my-10 mx-auto"></div>

        <ul className="flex flex-col justify-between xl:w-[32rem] 2xl:w-[36rem] 3xl:w-[50rem] text-base lg:text-xl list-disc lg:pl-6">
          {currentWork.description.map((message, i) => (
            <li key={i} className="my-2">
              {message}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DesktopVersion;
