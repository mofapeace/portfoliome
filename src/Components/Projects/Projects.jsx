import React, { useState } from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faNetworkWired, faShieldHalved, faLaptopCode, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = ({ setView }) => {
  const [filter, setFilter] = useState('all');

  const projectList = [
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
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectList 
    : projectList.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects fade-in">
      <div className="projects-title">
        <h1>Projects Showcase</h1>
        <p>A curated gallery of my latest development, network architecture, and security projects.</p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'dev' ? 'active' : ''} onClick={() => setFilter('dev')}>Development</button>
        <button className={filter === 'security' ? 'active' : ''} onClick={() => setFilter('security')}>Security & Network</button>
        <button className={filter === 'os' ? 'active' : ''} onClick={() => setFilter('os')}>OS Setup</button>
        <button className={filter === 'design' ? 'active' : ''} onClick={() => setFilter('design')}>UI/UX & Design</button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid-showcase">
        {filteredProjects.map(project => (
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
        ))}
      </div>

      <div className="projects-more-cta">
        <button onClick={() => { setView('all-projects'); window.scrollTo({ top: 0, behavior: 'instant' }); }} className="see-more-btn">
          See More Projects <FontAwesomeIcon icon={faExternalLinkAlt} />
        </button>
      </div>
    </section>
  );
};

export default Projects;
