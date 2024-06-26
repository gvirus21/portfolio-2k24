import { WORK_DATA } from "./work-data";

const MobileVersion = () => {
  return (
    <div className="flex flex-col items-center lg:hidden mt-24">
      {WORK_DATA.map((work) => (
        <div key={work.id} className="mt-12 sm:mt-10">
          <div className="h-[14rem] sm:h-[20rem] aspect-[14/9] bg-white/50 -z-10 mb-16" />
          <h3 className="text-3xl md:text-5xl font-bold">{work.title}</h3>
          <h4 className="text-lg md:text-xl my-4 font-semibold">
            {work.jobTitle}
          </h4>
          <ul className="flex flex-col justify-between text-base font-thin list-disc">
            {work.description.map((message, i) => (
              <li key={i} className="my-2">
                {message}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MobileVersion;
