import { SimpleTextReveal } from "@/components/helpers";
import TextReveal from "@/components/helpers/TextReveal";
import useCursorState from "@/store/useCursorState";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const companyLogos = [
  {
    id: "playgrounds",
    src: "/assets/company-logos/playgrounds.png",
    link: "https://playgrounds.network",
  },
  {
    id: "forefront",
    src: "/assets/company-logos/forefront.png",
    link: "https://forefront.com",
  },
  {
    id: "bankless",
    src: "/assets/company-logos/bankless.png",
    link: "https://bankless.com",
  },
  {
    id: "codewalla",
    src: "/assets/company-logos/codewalla.png",
    link: "https://codewalla.com",
  },
];

export const WhyChooseMeSection = () => {
  const { setCursorState } = useCursorState();
  const textContainerRef = useRef(null);

  const isInView = useInView(textContainerRef, {
    amount: 0.4,
    once: true,
  });

  return (
    <div className="flex flex-col 2xl:flex-row justify-between items-center min-h-[30vh] w-screen max-w-full mt-28 xs:mt-6 sm:mt-36 xl:mt-20 lg:px-20 py-20">
      <div
        ref={textContainerRef}
        className="w-full md:w-6/12 lg:w-4/12 xl:w-full 2xl:w-[30%] px-4 md:px-5 xl:px-0"
      >
        <h3
          onMouseEnter={() => setCursorState("lg-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="text-3xl lg:text-4xl xl:text-7xl 2xl:text-4xl mx-auto text-left font-semibold tracking-wide"
        >
          <SimpleTextReveal delay={0.5}>Why Choose Me?</SimpleTextReveal>
        </h3>
        <div
          onMouseEnter={() => setCursorState("md-hovered")}
          onMouseLeave={() => setCursorState("regular")}
          className="flex flex-col w-10/12 text-3xl capitalize mx-auto mt-10 lg:mt-16 text-center tracking-wider"
        >
          <div className="text-justify">
            <TextReveal
              className="h-10"
              isContainerInView={isInView}
              animationDelay={0.02}
            >
              As a solo web developer, I have a unique perspective on what my
              clients need for their business. Through my websites, I help them
              achieve their goals—something big agencies often struggle with.
            </TextReveal>
          </div>

          <div className="text-left mt-5">
            <TextReveal
              className="h-10"
              isContainerInView={isInView}
              animationDelay={0.02}
            >
              My top priority is to deliver a high-quality website that not only
              looks great but also meets the client&apos; needs.
            </TextReveal>
          </div>

          <div className="mt-32">
            <h3 className="text-2xl font-semibold text-center uppercase underline underline-offset-4">
              Organizations I&apos;ve Worked With
            </h3>
            <div className="flex justify-between items-center mt-10 w-9/12 mx-auto">
              {companyLogos.map((company, index) => (
                <Link
                  key={company.id}
                  href={company.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-16 w-28 relative"
                >
                  <Image
                    src={company.src}
                    alt={`Company ${index + 1}`}
                    fill
                    style={{ objectFit: "contain" }}
                    className="filter brightness-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseMeSection;
