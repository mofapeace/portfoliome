import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../assets/logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-white/20 shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-5 h-16 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-10 h-10 rounded-full object-cover" />
            <h1 className="text-xl font-semibold text-white">Mofa Godlove</h1>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-10 text-lg text-white">
            <li><AnchorLink href="#home">Home</AnchorLink></li>
            <li><AnchorLink href="#about">About</AnchorLink></li>
            <li><AnchorLink href="#projects">Projects</AnchorLink></li>
            <li><AnchorLink href="#contact">Contact</AnchorLink></li>
          </ul>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-3xl"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      {/* MOBILE SLIDER */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black/60 backdrop-blur-2xl 
        transform ${open ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 z-50`}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white text-3xl"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* MENU ITEMS */}
        <ul className="mt-24 flex flex-col gap-8 text-white text-xl pl-6">
          <li><AnchorLink href="#home" onClick={() => setOpen(false)}>Home</AnchorLink></li>
          <li><AnchorLink href="#about" onClick={() => setOpen(false)}>About</AnchorLink></li>
          <li><AnchorLink href="#projects" onClick={() => setOpen(false)}>Projects</AnchorLink></li>
          <li><AnchorLink href="#contact" onClick={() => setOpen(false)}>Contact</AnchorLink></li>
        </ul>
      </div>
    </>
  );
}
