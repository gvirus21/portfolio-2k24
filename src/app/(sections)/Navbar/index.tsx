"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "./hamburger-menu";
import MobileExpandedMenu from "./mobile-expanded-menu";
import { useLenis } from "@studio-freight/react-lenis";
import { cn } from "@/lib/utils";

export const menuLinks = [
  {
    id: "home",
    value: "Home",
  },
  {
    id: "about",
    value: "About",
  },
  {
    id: "services",
    value: "Services",
  },
  {
    id: "contact-us",
    value: "Contact us",
  },
];

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const lenis = useLenis();
  // const { setIsMouseHovered } = useMouseHoverStore();

  // Disable scrolling when modal is open
  useEffect(() => {
    if (menuIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuIsOpen]);

  return (
    <>
      <AnimatePresence>
        {menuIsOpen && <MobileExpandedMenu setMenuIsOpen={setMenuIsOpen} />}
      </AnimatePresence>
      <nav className="fixed flex justify-center items-center top-0 pt-10 pb-3 h-32 w-full font-light z-50">
        <div className="flex justify-between items-start h-full w-full max-w-[145rem] mx-6 sm:mx-10 2xl:mx-0">
          <p>gourav kumar</p>
          <ul className="h-full hidden md:flex flex-col justify-between items-end text-[0.7rem]">
            {menuLinks.map((link) => (
              <li
                key={link.id}
                className={cn(
                  "duration-100 text-black underline-hover-effect-1-black"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(link.id);
                  lenis?.scrollTo(`#${link.id}`, { lerp: 0.05 });
                }}
                // onMouseEnter={() => setIsMouseHovered(true)}
                // onMouseLeave={() => setIsMouseHovered(false)}
              >
                {link.value}
              </li>
            ))}
          </ul>

          {/* hamburger */}
          <AnimatePresence>
            <HamburgerMenu
              menuIsOpen={menuIsOpen}
              setMenuIsOpen={setMenuIsOpen}
            />
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
