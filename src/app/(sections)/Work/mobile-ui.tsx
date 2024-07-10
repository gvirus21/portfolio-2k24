import Image from "next/image";
import { WORK_DATA } from "./work-data";
import { TextReveal, SimpleTextReveal } from "@/components/helpers";

const MobileVersion = () => {
  return (
    <div className="flex flex-col items-center xl:hidden mt-24">
      {WORK_DATA.map((work) => (
        <div key={work.id} className="mt-12 sm:mt-10 md:mt-16 w-11/12">
          <h3 className="text-3xl md:text-5xl font-bold">
            <SimpleTextReveal>{work.title}</SimpleTextReveal>
          </h3>
          <h4 className="text-2xl md:text-4xl my-4 font-semibold font-sendflowers">
            <SimpleTextReveal>{work.jobTitle}</SimpleTextReveal>
          </h4>
          <div className="flex justify-center items-center w-full max-w-[40rem] aspect-[14/9] bg-black -z-10 my-10 mx-auto">
            <Image
              className="w-full aspect-video bg-cover"
              src={work.image}
              height={700}
              width={800}
              alt="work-image"
            />
          </div>
          <ul className="flex flex-col justify-between text-base font-thin">
            {work.description.map((message, i) => (
              <li key={i} className="my-2">
                <TextReveal animationDelay={0.005}>{message}</TextReveal>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MobileVersion;
