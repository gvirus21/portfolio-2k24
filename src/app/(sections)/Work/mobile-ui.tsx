import { useRef } from "react";
import Image from "next/image";
import { WORK_DATA } from "./work-data";
import { motion, useInView } from "framer-motion";
import { TextReveal, SimpleTextReveal } from "@/components/helpers";

const MobileVersion = () => {
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);

  const isInView1 = useInView(imageRef1, { amount: 0.3, once: true });
  const isInView2 = useInView(imageRef2, { amount: 0.3, once: true });
  const isInView3 = useInView(imageRef3, { amount: 0.3, once: true });
  const isInView4 = useInView(imageRef4, { amount: 0.3, once: true });

  const refs = [imageRef1, imageRef2, imageRef3, imageRef4];
  const inViews = [isInView1, isInView2, isInView3, isInView4];

  const variants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col items-center xl:hidden mt-24">
      {WORK_DATA.map((work, i) => {
        return (
          <div key={work.id} className="mt-12 sm:mt-10 md:mt-16 w-11/12">
            <h3 className="text-3xl md:text-5xl font-bold">
              <SimpleTextReveal>{work.title}</SimpleTextReveal>
            </h3>
            <h4 className="text-2xl md:text-4xl my-4 font-semibold font-sendflowers">
              <SimpleTextReveal>{work.jobTitle}</SimpleTextReveal>
            </h4>
            <motion.div
              ref={refs[i]}
              variants={variants}
              initial="initial"
              animate={inViews[i] ? "animate" : "initial"}
              className="flex justify-center items-center w-full max-w-[40rem] aspect-[14/9] bg-black -z-10 my-10 mx-auto"
            >
              <Image
                className="w-full aspect-video bg-cover"
                src={work.image}
                height={700}
                width={800}
                alt="work-image"
              />
            </motion.div>
            <ul className="flex flex-col justify-between text-base font-thin">
              {work.description.map((message, i) => (
                <li key={i} className="my-2">
                  <TextReveal animationDelay={0.005}>{message}</TextReveal>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MobileVersion;
