import React, { useState, useEffect } from 'react';
import './AllProjects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faArrowLeft, faSearch, faTimes, faCode, faNetworkWired, faShieldHalved, faLaptopCode, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const AllProjects = ({ setView }) => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fullProjectList = [
    {
      id: 1,
      title: '04:27 Network Monitor & ISP Analyzer',
      category: 'dev',
      tags: ['Python', 'FastAPI', 'SQLite', 'SmartScore', 'Diagnostics'],
      description: 'A high-fidelity network telemetry platform built in Python. Features real-time packet loss analysis, SmartScore quality metrics, and structured ISP leaderboard benchmarks.',
      icon: faLaptopCode,
      github: 'https://github.com/mofapeace',
      demo: 'https://mofagodlove.vercel.app/'
    },
    {
      id: 2,
      title: 'Stateful Firewall From Scratch',
      category: 'security',
      tags: ['Python', 'Scapy', 'Packet Filtering', 'Sockets', 'Security'],
      description: 'A custom, lightweight stateful firewall program developed entirely in Python. Inspects IP/TCP/UDP packet headers using raw sockets, enforces filtering rules, and tracks active state connections.',
      icon: faShieldHalved,
      github: 'https://github.com/mofapeace',
      demo: '#'
    },
    {
      id: 3,
      title: 'Windows 11 & Kali / Ubuntu Secure Dual-Boot',
      category: 'os',
      tags: ['Kali Linux', 'Ubuntu', 'Windows 11', 'GRUB Hardening', 'Partitioning'],
      description: 'A secure partition configuration script and guidebook setup for multi-OS systems. Enforces GRUB bootloader password protection, LUKS/BitLocker security alignment, and dynamic shared storage mounts.',
      icon: faNetworkWired,
      github: 'https://github.com/mofapeace',
      demo: '#'
    },
    {
      id: 4,
      title: 'Creative Brand Kits, Flyers & Figma Designs',
      category: 'design',
      tags: ['Figma', 'Logos', 'Event Flyers', 'Branding', 'Vector Art'],
      description: 'A curated creative design portfolio showcasing interactive Figma app prototypes, custom company logos, high-resolution vector flyers, and dynamic print-ready branding systems.',
      icon: faPalette,
      github: 'https://github.com/mofapeace',
      demo: 'https://mofagodlove.vercel.app/'
    },
    {
      id: 5,
      title: 'Secured Coffee Shop Public & Private LAN',
      category: 'security',
      tags: ['VLANs', 'Captive Portal', 'WPA3 Enterprise', 'Firewalls', 'DHCP Snooping'],
      description: 'A robust commercial network model featuring complete traffic segregation between corporate POS checkouts, security cameras, and public guest Wi-Fi networks via strict firewall rules and VLAN tags.',
      icon: faNetworkWired,
      github: 'https://github.com/mofapeace',
      demo: '#'
    },
    {
      id: 6,
      title: 'Automated Port & Vulnerability Scanner',
      category: 'security',
      tags: ['Python', 'Sockets', 'Port Scanning', 'CVE Auditing', 'Threading'],
      description: 'A multi-threaded networking script designed to discover active TCP/UDP ports, perform service banner grabbing, check against a local CVE threat intelligence database, and output clean HTML audits.',
      icon: faShieldHalved,
      github: 'https://github.com/mofapeace',
      demo: '#'
    },
    {
      id: 7,
      title: 'Custom VPN Router & DNS Pi-hole Blocker',
      category: 'security',
      tags: ['Raspberry Pi', 'WireGuard', 'Pi-hole', 'DNS Crypt', 'Ad-blocking'],
      description: 'A custom hardware network gateway setup leveraging WireGuard for encrypted site-to-site VPN routing and Pi-hole for network-wide telemetry blocking, DNS caching, and trackers sanitization.',
      icon: faNetworkWired,
      github: 'https://github.com/mofapeace',
      demo: '#'
    },
    {
      id: 8,
      title: 'Glassmorphic Portfolio Dashboard',
      category: 'dev',
      tags: ['React', 'CSS Grid', 'Vite', 'IntersectionObserver', 'Glassmorphism'],
      description: 'The secure frontend codebase for this responsive developer portfolio. Features custom animations, fluid mobile sidebars, IntersectionObserver counter integrations, and highly structured SEO indexes.',
      icon: faLaptopCode,
      github: 'https://github.com/mofapeace',
      demo: 'https://mofagodlove.vercel.app/'
    },
    {
      id: 9,
      title: 'Adversarial Attack Simulation Report',
      category: 'security',
      tags: ['Pentesting', 'Nmap', 'Metasploit', 'Vulnerability Scan', 'Risk Assessment'],
      description: 'A comprehensive, simulated security audit detailing active information gathering, exploit execution using standard framework utilities, post-exploitation audits, and secure remedial code fixes.',
      icon: faShieldHalved,
      github: 'https://github.com/mofapeace',
      demo: '#'
    },
    {
      id: 10,
      title: 'Corporate Brand Vector guidelines & Assets',
      category: 'design',
      tags: ['CorelDraw', 'Photoshop', 'PixelLab', 'Vector Graphics', 'Branding'],
      description: 'A detailed catalog of premium vector marketing mockups, high-resolution company business flyers, custom merchandise patterns, and printable visual standard operating guides.',
      icon: faPalette,
      github: 'https://github.com/mofapeace',
      demo: '#'
    }
  ];

  // Filtering + Searching logic combined
  const filteredAndSearchedProjects = fullProjectList.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesTitle = project.title.toLowerCase().includes(query);
    const matchesDescription = project.description.toLowerCase().includes(query);
    const matchesTags = project.tags.some(tag => tag.toLowerCase().includes(query));

    return matchesCategory && (matchesTitle || matchesDescription || matchesTags);
  });

  return (
    <section className="all-projects-container fade-in">
      {/* Top Navigation Row */}
      <header className="all-projects-header">
        <button onClick={() => setView('home')} className="back-btn" aria-label="Go back to Home">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
        </button>
        <div className="search-wrapper">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search projects by title, tag, or desc..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="clear-search-btn" aria-label="Clear Search">
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
        </div>
      </header>

      {/* Hero Headings */}
      <div className="all-projects-title">
        <h1>All Projects</h1>
        <p>A full searchable repository of my development, system hardening, and creative graphic design work.</p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'dev' ? 'active' : ''} onClick={() => setFilter('dev')}>Development</button>
        <button className={filter === 'security' ? 'active' : ''} onClick={() => setFilter('security')}>Security & Network</button>
        <button className={filter === 'os' ? 'active' : ''} onClick={() => setFilter('os')}>OS Setup</button>
        <button className={filter === 'design' ? 'active' : ''} onClick={() => setFilter('design')}>UI/UX & Design</button>
      </div>

      {/* Results Count */}
      <div className="results-count">
        <p>Showing {filteredAndSearchedProjects.length} of {fullProjectList.length} projects</p>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid-showcase">
        {filteredAndSearchedProjects.length > 0 ? (
          filteredAndSearchedProjects.map(project => (
            <article className="project-card-showcase" key={project.id}>
              <div className="project-card-header">
                <div className="project-card-icon">
                  <FontAwesomeIcon icon={project.icon} />
                </div>
                <div className="project-card-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="project-card-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))
        ) : (
          <div className="no-results">
            <p>No projects match your search query: "<strong>{searchQuery}</strong>"</p>
            <button onClick={() => { setSearchQuery(''); setFilter('all'); }} className="reset-btn">
              Reset Filters & Search
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-back-action">
        <button onClick={() => { setView('home'); window.scrollTo(0, 0); }} className="back-btn bottom-back">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to Home
        </button>
      </div>
    </section>
  );
};

export default AllProjects;
