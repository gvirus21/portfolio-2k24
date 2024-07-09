import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const SimpleTextReveal = ({
  children,
  className,
  delay,
}: {
  children: string;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 1, once: true });

  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },

    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay ?? 0,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.span>
  );
};

export default SimpleTextReveal;
