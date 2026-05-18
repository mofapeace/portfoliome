import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import './navbar.css';
import Logo from "../../assets/logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faUser, faFolderOpen, faEnvelope, faBriefcase, faSun, faMoon, faCertificate, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar({ setView }) {
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight(!isLight);
    document.body.classList.toggle('light-mode');
  };

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
            <li><AnchorLink href="#home" title="Home"><FontAwesomeIcon icon={faHome} /></AnchorLink></li>
            <li><AnchorLink href="#about" title="About"><FontAwesomeIcon icon={faUser} /></AnchorLink></li>
            <li><AnchorLink href="#certifications" title="Certifications"><FontAwesomeIcon icon={faCertificate} /></AnchorLink></li>
            <li><AnchorLink href="#projects" title="Projects"><FontAwesomeIcon icon={faFolderOpen} /></AnchorLink></li>
            <li><AnchorLink href="#services" title="Services"><FontAwesomeIcon icon={faBriefcase} /></AnchorLink></li>
            <li><button onClick={() => setView('sandbox')} className="nav-sandbox-btn" title="Security Sandbox"><FontAwesomeIcon icon={faShieldHalved} /></button></li>
            <li><AnchorLink href="#contact" title="Contact"><FontAwesomeIcon icon={faEnvelope} /></AnchorLink></li>
            <li><a href="https://github.com/mofapeace" target="_blank" rel="noopener noreferrer" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/mofa-godlove-tanyi/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          </ul>
        </nav>
        <div className="sidebar-bottom">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
          </button>
        </div>
      </aside>

      {/* MOBILE SIDEBAR (toggleable, same style as PC) */}
      <aside className={`mobile-sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-top">
          <img src={Logo} alt="logo" className="sidebar-logo" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li><AnchorLink href="#home" onClick={() => setOpen(false)} title="Home"><FontAwesomeIcon icon={faHome} /></AnchorLink></li>
            <li><AnchorLink href="#about" onClick={() => setOpen(false)} title="About"><FontAwesomeIcon icon={faUser} /></AnchorLink></li>
            <li><AnchorLink href="#certifications" onClick={() => setOpen(false)} title="Certifications"><FontAwesomeIcon icon={faCertificate} /></AnchorLink></li>
            <li><AnchorLink href="#projects" onClick={() => setOpen(false)} title="Projects"><FontAwesomeIcon icon={faFolderOpen} /></AnchorLink></li>
            <li><AnchorLink href="#services" onClick={() => setOpen(false)} title="Services"><FontAwesomeIcon icon={faBriefcase} /></AnchorLink></li>
            <li><button onClick={() => { setView('sandbox'); setOpen(false); }} className="nav-sandbox-btn" title="Security Sandbox"><FontAwesomeIcon icon={faShieldHalved} /></button></li>
            <li><AnchorLink href="#contact" onClick={() => setOpen(false)} title="Contact"><FontAwesomeIcon icon={faEnvelope} /></AnchorLink></li>
            <li><a href="https://github.com/mofapeace" target="_blank" rel="noopener noreferrer" title="GitHub"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.linkedin.com/in/mofa-godlove-tanyi/" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a></li>
          </ul>
        </nav>
        <div className="sidebar-bottom">
          <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Theme">
            <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
          </button>
        </div>
      </aside>
    </>
  );
}
