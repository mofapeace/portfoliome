import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './navbar.css';
import Logo from "../../assets/logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faUser, faFolderOpen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE NAV TOGGLE BUTTON (only on small screens) */}
      <button 
        onClick={() => setOpen(!open)} 
        className="mobile-nav-toggle" 
        aria-label="Toggle navigation"
      >
        <FontAwesomeIcon icon={open ? faTimes : faBars} />
      </button>

      {/* LEFT SIDEBAR (Ubuntu-like) - shown on wide screens */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <img src={Logo} alt="logo" className="sidebar-logo" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><AnchorLink href="#home"><FontAwesomeIcon icon={faHome} /></AnchorLink></li>
            <li><AnchorLink href="#about"><FontAwesomeIcon icon={faUser} /></AnchorLink></li>
            <li><AnchorLink href="#projects"><FontAwesomeIcon icon={faFolderOpen} /></AnchorLink></li>
            <li><AnchorLink href="#services"><FontAwesomeIcon icon={faGithub} /></AnchorLink></li>
            <li><AnchorLink href="#contact"><FontAwesomeIcon icon={faEnvelope} /></AnchorLink></li>
          </ul>
        </nav>
      </aside>

      {/* MOBILE SIDEBAR (toggleable, same style as PC) */}
      <aside className={`mobile-sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-top">
          <img src={Logo} alt="logo" className="sidebar-logo" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><AnchorLink href="#home" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faHome} /></AnchorLink></li>
            <li><AnchorLink href="#about" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faUser} /></AnchorLink></li>
            <li><AnchorLink href="#projects" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faFolderOpen} /></AnchorLink></li>
            <li><AnchorLink href="#services" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faGithub} /></AnchorLink></li>
            <li><AnchorLink href="#contact" onClick={() => setOpen(false)}><FontAwesomeIcon icon={faEnvelope} /></AnchorLink></li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
