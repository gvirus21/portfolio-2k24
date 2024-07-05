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
            <div className="flex flex-col justify-between items-center text-8xl 3xl:h-[30rem] mt-10">
              <h1>I AM A CREATIVE</h1>
              <h1>FRONTEND WEB DEVELOPER</h1>
              <h1>WITH A PASSION FOR</h1>
              <h1>BUILDING THE WEB</h1>
            </div>

            <p className="text-4xl w-[46rem] text-center tracking-wider leading-10 mt-24">
              I help businesses build their awesome and high converging website.
            </p>

            <div className="flex justify-center items-center h-12 w-[16rem] border-2 border-black rounded-full mt-32">
                <p>Open For Work . Contact Now</p>
            </div>
          </div>

          <HeroSectionActions />
        </div>
      </section>
    </Element>
  );
};

export default HeroSectionAlt;
