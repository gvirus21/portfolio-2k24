import AnimatedButton from "@/components/utils/AnimatedButton";
import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-screen flex justify-between px-24 py-16 z-0">
      <AnimatedButton>Menu</AnimatedButton>
      <AnimatedButton>Contact</AnimatedButton>
    </nav>
  );
};

export default Navbar;
