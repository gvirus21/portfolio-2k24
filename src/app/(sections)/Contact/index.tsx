import AnimatedButton from "@/components/ui/AnimatedButton";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Element } from "react-scroll";

interface Props {
  timeline: gsap.core.Timeline | null;
}

export const ContactSection = ({}: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  const container = useRef(null);

  return (
    <Element name="contact-section">
      <section
        ref={container}
        className="h-0 md:h-[5rem] lg:h-[24rem] w-11/12 lg:w-10/12 max-w-[140rem] mx-auto mt-0 md:mt-[5rem] lg:pt-[4rem] mb-10"
      >
        <motion.div
          style={{ y: windowWidth > 1024 ? 0 : -200 }}
          className="flex flex-col sm:flex-row justify-between items-center w-full mx-auto"
        >
          <div className="flex flex-col w-full md:w-5/6">
            <h2 className="text-3xl md:text-5xl lg:text-7xl">Contact Me</h2>
            <p className="text-sm lg:text-base max-w-[15rem] sm:max-w-[24rem] sm:w-[16rem] lg:w-[20rem] xl:w-full my-4">
              I WOULD LOVE TO HEAR FROM YOU, LET&apos;S WORK — TOGETHER.
            </p>
            <AnimatedButton className="flex justify-center items-center h-[2.5rem] sm:h-[3rem] w-[7rem] sm:w-[10rem] mt-3 lg:mt-5 text-sm md:text-base text-black border border-black rounded-full capitalize">
              Email Me
            </AnimatedButton>
          </div>

          <div className="hidden sm:flex text-sm md:text-base justify-between w-[30rem] lg:w-[26rem] xl:w-[22rem] mt-10">
            <div className="md:text-left">
              <h3 className="text-xl mb-4 font-medium">Social</h3>
              <ul className="text-sm">
                <li className="mb-2 underline-link-hover-effect">
                  <Link href="">X / Twitter</Link>
                </li>
                <li className="mb-2 underline-link-hover-effect">
                  <Link href="">Github</Link>
                </li>
                <li className="mb-2 underline-link-hover-effect">
                  <Link href="">LinkedIn</Link>
                </li>
              </ul>
            </div>

            <div className="lg:text-left">
              <h3 className="text-xl mb-4 font-medium">Contact Details</h3>
              <ul className="text-sm">
                <li className="mb-2 underline-link-hover-effect">
                  <a href="mailto:gouravkumar21.dev@gmail.com">
                    gouravkumar21.dev@gmail.com
                  </a>
                </li>
                <li className="mb-2 underline-link-hover-effect">
                  <a href="tel:+918249894413">+91 824-989-4413</a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
    </Element>
  );
};

export default ContactSection;
