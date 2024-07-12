import { FC, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const buttonVariant = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.4,
      ease: "easeOut",
    },
  },
};

const AnimatedButton: FC<Props> = ({ children, className, animate }) => {
  const buttonRef = useRef(null);
  const isInView = useInView(buttonRef, { amount: 0.4, once: true });

  return (
    <motion.div
      ref={buttonRef}
      variants={buttonVariant}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={cn(
        "group relative text-[1.5rem] text-black h-6 tracking-wider uppercase leading-6 overflow-hidden cursor-pointer",
        className
      )}
    >
      <span className="inline-block transition duration-500 ease-in-out group-hover:translate-y-[-300%]">
        {children}
      </span>
      <span className="absolute left-1/2 -translate-x-1/2 inline-block transition duration-500 ease-in-out translate-y-[200%] rotate-12 group-hover:translate-y-0 text-base group-hover:rotate-0">
        {children}
      </span>
    </motion.div>
  );
};

export default AnimatedButton;
