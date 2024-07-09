import Image from "next/image";
import { Element } from "react-scroll";
import { TextReveal, SimpleTextReveal } from "@/components/helpers";
import profileImage from "/public/assets/gourav-kumar.webp";

const aboutPoints = [
  "I started my career as an iOS dev but later transitioned to a Frontend developer.",
  "I worked as a lead Frontend dev @playgrounds.xyz",
  "I've collaborated with major web3 organizations around the world, like BanklessDAO and ForefrontDAO.",
  "I participated in the RoadToWeb3 hackathon, where my team and I built awesome projects and walked away with some cool goodies. It was like Christmas, but for coders!",
  "My Primary Wepons are: HTML, CSS, Javascript, Typescript, TailwindCSS, ReactJs, Next Js & a bit of Rust.",
];

export const AboutSection = () => {
  return (
    <Element name="about-section">
      <section
        className="relative left-1/2 -translate-x-1/2 flex flex-col lg:flex-row justify-between min-h-[90vh] lg:min-h-[70vh] 
      2xl:min-h-[40vh] w-11/12 lg:w-10/12 xl:w-11/12 max-w-[140rem] mt-20 md:mt-20 lg:mt-[8rem] 2xl:mt-[14rem]"
      >
        <div className="flex flex-col justify-between">
          <>
            <TextReveal className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl md:mb-10 lg:mb-0 uppercase">
              About Me
            </TextReveal>
            <p
              style={{ lineHeight: "2.5rem" }}
              className="w-[40rem] hidden xl:block xl:w-[37rem] 2xl:w-[40rem] lg:text-xl 2xl:text-2xl lg:mt-8 xl:mt-3 2xl:mt-16 capitalize font-medium tracking-wider"
            >
              <TextReveal containerDelay={0.5} animationDelay={0.02}>
                Hey, I&apos;m Gourav! I&apos;m a frontend developer from India.
                I enjoy creating web projects that are both functional and
                aesthetically pleasing, with a focus on great user experience.
                In my downtime, I love watching anime and picking up new skills.
              </TextReveal>
            </p>
          </>

          {/* Profile photo */}
          <div className="absolute top-20 md:top-28 xl:top-1/2 left-1/2 xl:left-auto -translate-x-1/2 xl:translate-x-0 xl:right-0 xl:-translate-y-[45%] 2xl:-translate-y-[40%] h-[26rem] lg:h-[32rem] xl:h-[40rem] 2xl:h-[50rem] max-w-full aspect-[3/4] rounded-md lg:rounded-lg z-[9999] bg-blend-multiply">
            <Image
              src={profileImage}
              fill
              alt="profile-image"
              className="object-cover"
            />
          </div>

          {/* Desktop text seciton */}
          <div className="hidden xl:flex flex-col">
            <div className="mt-20 xl:mt-[3rem] 2xl:mt-[16rem]">
              <h3 className="font-medium text-5xl font-sendflowers">
                <SimpleTextReveal delay={1}>My Experience:</SimpleTextReveal>
              </h3>
              <ul className="flex flex-col justify-between min-h-[18rem] xl:min-h-[22rem] w-[26rem] xl:w-[35rem] 2xl:w-[44rem] mt-10 xl:mt-12 2xl:mt-16 text-lg 2xl:text-xl tracking-wider  list-disc">
                {aboutPoints.map((point, i) => (
                  <li key={i} className="mb-3 capitalize">
                    <TextReveal containerDelay={1.5} animationDelay={0.03}>
                      {point}
                    </TextReveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* mobile text seciton */}
          <div className="flex flex-col xl:hidden mt-[32rem] lg:mt-[40rem] px-4">
            <p className="text-2xl">
              Hey, I&apos;m Gourav! I&apos;m a frontend developer from India. I
              enjoy creating web projects that are both functional and
              aesthetically pleasing, with a focus on great user experience. In
              my downtime, I love watching anime and picking up new skills.
            </p>
            <div>
              <h3 className="font-medium text-3xl mt-[5rem] text-center md:text-left font-sendflowers">
                <SimpleTextReveal>My Experience</SimpleTextReveal>
              </h3>
              <ul className="flex flex-col justify-between min-h-[22rem] lg:min-h-[17rem] mt-12 text-lg list-disc">
                {aboutPoints.map((point, i) => (
                  <li key={i} className="mb-3 sm:mb-0">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default AboutSection;
