"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HamburgerMenu from "./hamburger-menu";
import MobileExpandedMenu from "./mobile-expanded-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

export const menuLinks = [
  {
    id: "home",
    value: "Home",
    target: "hero-section",
  },
  {
    id: "about",
    value: "About",
    target: "about-section",
  },
  {
    id: "work",
    value: "Work",
    target: "work-section",
  },
  {
    id: "projects",
    value: "Projects",
    target: "featured-work-section",
  },
  {
    id: "contact-us",
    value: "Contact us",
    target: "contact-section",
  },
];

type ActiveState = "home" | "projects" | "work" | "contact-us";

export const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeState, setActiveState] = useState<ActiveState>("home"); //TODO: use activeState

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
      <nav className="fixed flex justify-center items-center top-0 pt-6 md:pt-8 pb-3 h-10 md:h-40 w-full font-light z-50">
        <div className="flex justify-between items-start h-full w-full max-w-[140rem] mx-6 sm:mx-10">
          <p>gourav kumar</p>
          <ul className="h-full hidden md:flex flex-col justify-between items-end text-[0.7rem]">
            {menuLinks.map((link) => (
              <Link
                smooth="easeInOutQuart"
                delay={40}
                key={link.id}
                to={link.target}
                offset={-100}
                duration={2500}
                onSetActive={() => setActiveState(link.id as ActiveState)}
                className={cn(
                  "text-black underline-link-hover-effect tracking-wider hover:font-medium transition-all ease-in-out duration-200 cursor-pointer"
                )}
              >
                {link.value}
              </Link>
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
