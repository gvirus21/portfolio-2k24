import { Element } from "react-scroll";
import HeroSectionActions from "./herosection-actions";
// import { useGSAP } from "@gsap/react";
// import { textAppearAnimaton } from "./animations";

interface Props {
  timeline: gsap.core.Timeline | null;
}

export const HeroSectionAlt = ({ timeline }: Props) => {
  //   useGSAP(() => {
  //     timeline?.add(textAppearAnimaton());
  //   }, []);

  return (
    <Element name="hero-section">
      <section className="relative flex justify-center h-screen w-full">
        <div className="relative flex flex-col justify-between h-[90vh] lg:h-[100vh] w-full sm:w-11/12 lg:w-10/12 xl:w-11/12 2xl:max-w-[140rem] mt-14 lg:mt-0 pt-3 md:pt-8 lg:pt-24 xl:pt-32 2xl:pt-[10rem]">
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col justify-between leading-[3rem] xs:leading-none sm:items-center text-4xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl h-[17rem] xs:h-[12rem] sm:h-[12rem] md:h-[15rem] xl:h-[20rem] 2xl:h-[24rem] 3xl:h-[30rem] mt-8 sm:mt-14 md:mt-10 lg:mt-0 xl:mt-5 3xl:mt-10 tracking-wider">
              <h1>
                I AM A <span className="font-sendflowers">CREATIVE</span>
              </h1>
              <h1>FRONTEND WEB DEVELOPER</h1>
              <h1>WITH A PASSION FOR</h1>
              <h1>BUILDING THE WEB</h1>
            </div>

            <p className="sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl xs:w-[20rem] sm:w-[23rem] md:w-[24rem] xl:w-[30rem] 2xl:w-[38rem] 3xl:w-[46rem] text-center tracking-wider sm:leading-10 mt-10 sm:mt-8 md:mt-12 2xl:mt-16 3xl:mt-24 capitalize font-sendflowers">
              I help businesses build their awesome and high converging website.
            </p>

            <div className="flex justify-center items-center py-1 sm:h-10 md:h-12 md:w-[12rem] xl:w-[15rem] border-2 border-black rounded-full mt-10 lg:mt-12 xl:mt-16 2xl:mt-20 3xl:mt-32">
              <p className="md:text-sm xl:text-base font-hauora">
                Open For Work - Contact Now
              </p>
            </div>
          </div>
          <HeroSectionActions />
        </div>
      </section>
    </Element>
  );
};

export default HeroSectionAlt;
