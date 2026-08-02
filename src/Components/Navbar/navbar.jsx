import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './navbar.css';
import Logo from "../../assets/logo.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHome, faUser, faFolderOpen, faEnvelope, faBriefcase, faSun, faMoon, faCertificate } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ setView, currentView }) {
  const navigate = useNavigate();
  const location = useLocation();
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
    { id: 'contact', type: 'anchor', title: 'Contact', icon: faEnvelope },
  ];

  const handleNavClick = (e, item) => {
    if (item.type === 'external') return;
    
    e.preventDefault();
    
    if (item.type === 'view') {
      setView(item.id);
      if (location.pathname !== '/') navigate('/');
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return;
    }

    if (currentView !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
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

      {/* BOTTOM NAVIGATION (Mobile & Tablet) */}
      <aside className="mobile-sidebar">
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
