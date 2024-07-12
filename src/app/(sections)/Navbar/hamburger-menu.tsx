import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { upperMenubarVariant, lowerMenubarVariant } from "./hamburger-variants";
import { cn } from "@/lib/utils";

interface HamburgerMenuProps {
  menuIsOpen: boolean;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ menuIsOpen, setMenuIsOpen }: HamburgerMenuProps) => {
  const [menuAnimate, setMenuAnimate] = useState("closed");

  useEffect(() => {
    if (menuIsOpen) {
      setMenuAnimate("open");
    }
    if (!menuIsOpen) {
      setMenuAnimate("closed");
    }
  }, [menuIsOpen]);

  return (
    <motion.div
      className="flex flex-col justify-between items-center mt-2 h-4 mr-2 md:hidden z-[9999] pointer-events-auto"
      whileHover={{
        scale: 1.1,
        transition: { type: "tween", duration: 0.2 },
      }}
      onClick={() => {
        setMenuIsOpen(!menuIsOpen);
        setMenuAnimate(menuAnimate === "closed" ? "open" : "closed");
      }}
    >
      <motion.div
        key="upperMenubar"
        variants={upperMenubarVariant}
        animate={menuAnimate}
        className={cn("w-7 h-[1px] rounded bg-black")}
        exit={{
          y: 0,
          transition: { type: "tween", duration: 0.2 },
        }}
      ></motion.div>
      <motion.div
        key="lowerMenubar"
        variants={lowerMenubarVariant}
        animate={menuAnimate}
        className={cn("w-7 h-[1px] z-10 rounded bg-black")}
        exit={{
          y: 0,
          transition: { type: "tween", duration: 0.2 },
        }}
      ></motion.div>
    </motion.div>
  );
};

export default HamburgerMenu;
