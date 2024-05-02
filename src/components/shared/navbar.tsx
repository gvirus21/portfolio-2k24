import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-20 w-screen flex justify-between items-center px-24 py-16 z-0">
      <p>gourav kumar</p>
      <ul className="flex flex-col justify-between h-[6rem] mt-16 text-right text-sm tracking-wider">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
