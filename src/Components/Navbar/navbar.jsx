import { useState, useEffect } from "react";
import './navbar.css';
import Logo from "../../assets/logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faUser, faFolderOpen, faEnvelope, faBriefcase, faSun, faMoon, faCertificate, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar({ setView, currentView }) {
  const [open, setOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    // Default to 'light' (true) if nothing is saved!
    return saved ? saved === 'light' : true;
  });

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-mode');
      localStorage.setItem('portfolio-theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('portfolio-theme', 'dark');
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(prev => !prev);
  };

  useEffect(() => {
    if (currentView === 'sandbox') {
      setActiveSection('sandbox');
      return;
    }
    if (currentView === 'all-projects') {
      setActiveSection('projects');
      return;
    }

    const sections = ['home', 'about', 'certifications', 'projects', 'services', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // Trigger in sweet spot of viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, [currentView]);

  const navItems = [
    { id: 'home', type: 'anchor', title: 'Home', icon: faHome },
    { id: 'about', type: 'anchor', title: 'About', icon: faUser },
    { id: 'certifications', type: 'anchor', title: 'Certifications', icon: faCertificate },
    { id: 'projects', type: 'anchor', title: 'Projects', icon: faFolderOpen },
    { id: 'services', type: 'anchor', title: 'Services', icon: faBriefcase },
    { id: 'sandbox', type: 'view', title: 'Security Sandbox', icon: faShieldHalved },
    { id: 'contact', type: 'anchor', title: 'Contact', icon: faEnvelope },
    { id: 'github', type: 'external', title: 'GitHub', icon: faGithub, url: 'https://github.com/mofapeace' },
    { id: 'linkedin', type: 'external', title: 'LinkedIn', icon: faLinkedin, url: 'https://www.linkedin.com/in/mofa-godlove-tanyi/' },
  ];

  const handleNavClick = (e, item) => {
    if (item.type === 'external') return;
    
    e.preventDefault();
    
    if (item.id === 'sandbox') {
      setView('sandbox');
      setOpen(false);
      window.scrollTo(0, 0);
      return;
    }

    if (currentView !== 'home') {
      setView('home');
      setOpen(false);
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      setOpen(false);
      const el = document.getElementById(item.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const renderNavItem = (item, index) => {
    const isActive = activeSection === item.id;
    
    // Inline css variable for staggered load delay
    const style = { '--i': index };

    if (item.type === 'external') {
      return (
        <li 
          key={item.id} 
          className="nav-item external-link" 
          data-tooltip={item.title}
          style={style}
        >
          <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.title}>
            <FontAwesomeIcon icon={item.icon} />
          </a>
        </li>
      );
    }

    return (
      <li 
        key={item.id} 
        className={`nav-item ${isActive ? 'active' : ''}`} 
        data-tooltip={item.title}
        style={style}
      >
        {item.type === 'view' ? (
          <button 
            onClick={(e) => handleNavClick(e, item)} 
            className="nav-sandbox-btn" 
            aria-label={item.title}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span className="active-dot"></span>
          </button>
        ) : (
          <a 
            href={`#${item.id}`} 
            onClick={(e) => handleNavClick(e, item)}
            aria-label={item.title}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span className="active-dot"></span>
          </a>
        )}
      </li>
    );
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

      {/* MOBILE OVERLAY (closes drawer when clicked outside) */}
      {open && <div className="mobile-nav-overlay" onClick={() => setOpen(false)} />}

      {/* LEFT SIDEBAR (Ubuntu-like) - shown on wide screens */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <img src={Logo} alt="logo" className="sidebar-logo" />
        </div>
        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item, index) => renderNavItem(item, index))}
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
            {navItems.map((item, index) => renderNavItem(item, index))}
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
