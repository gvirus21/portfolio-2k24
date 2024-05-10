import { useGSAP } from "@gsap/react";
import { textAppearAnimaton } from "./animations";
import { cn } from "@/lib/utils";
import LinkHoverAnimation from "../shared/LinkHoverAnimation";
import { IoIosArrowRoundForward as ArrowIcon } from "react-icons/io";

interface Props {
  timeline: gsap.core.Timeline | null;
}

const AnimatedText = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div className={cn("h-28 overflow-hidden", containerClassName)}>
      <h1 className={cn(className, "large-animated-text")}>{children}</h1>
    </div>
  );
};

const HeroSection = ({ timeline }: Props) => {
  useGSAP(() => {
    timeline?.add(textAppearAnimaton());
  }, []);

  return (
    <section className="flex justify-center h-screen w-screen">
      <div className="relative h-[90vh] w-11/12 max-w-[140rem] mt-[14rem]">
        {/* Heading Text Block */}
        <div className="flex flex-col justify-between items-start h-[22rem] text-[6.2rem] font-medium tracking-[-0.025rem] capitalize leading-[5rem]">
          <AnimatedText containerClassName="h-60">
            A <span className="font-quanta-grotesk">Creative</span> Frontend
          </AnimatedText>
          <AnimatedText containerClassName="h-60">
            Developer, with a passion
          </AnimatedText>
          <AnimatedText containerClassName="h-[16rem]">
            for building on the web.
          </AnimatedText>
        </div>

        <div className="absolute top-[43%] right-0 w-[24rem] text-2xl text-justify tracking-wide leading-10 capitalize">
          <p>I help businesses build their</p>
          <p>awesome and high converging</p>
          <p> website.</p>
        </div>

        <div className="absolute bottom-44 flex justify-between items-center h-20 w-full z-50 opacity-55">
          <div className="relative w-full">
            <LinkHoverAnimation className="left-0 text-2xl tracking-wider">
              <p className="flex justify-between items-center">
                SEE MY WORK <ArrowIcon className="h-12 w-16" />
              </p>
            </LinkHoverAnimation>
            <LinkHoverAnimation className="right-0 text-2xl tracking-wider">
              <p className="flex justify-between items-center">
                BOOK A FREE CALL <ArrowIcon className="h-12 w-16" />
              </p>
            </LinkHoverAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
