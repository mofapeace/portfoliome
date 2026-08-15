import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DesignGallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faPalette, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const sections = [
  {
    id: 'logos',
    title: 'Logo Design',
    subtitle: 'Clean, memorable brandmarks and identity systems for businesses, teams, and products.',
    items: [
      { label: 'Logo 01', description: 'Minimal brandmark for a creative studio.', image: new URL('../../assets/logos/Netaura.png', import.meta.url).href, demo: 'https://mofagodlove.vercel.app/', github: 'https://github.com/mofapeace' },
      { label: 'Logo 02', description: 'Tech-inspired mark for a digital consulting brand.', image: new URL('../../assets/logos/Psudo.jpg', import.meta.url).href, demo: 'https://mofagodlove.vercel.app/', github: 'https://github.com/mofapeace' },
      { label: 'Logo 03', description: 'Modern geometric entity for an app launch.', image: new URL('../../assets/logos/ringspace.png', import.meta.url).href, demo: '#', github: 'https://github.com/mofapeace' },
    ],
  },
  {
    id: 'flyers',
    title: 'Flyer Design',
    subtitle: 'High-impact digital and print flyers for events, promotions, and campaigns.',
    items: [
      { label: 'Flyer 01', description: 'Event promotion with bold typography and vivid contrast.' },
      { label: 'Flyer 02', description: 'Product launch flyer with sleek visual hierarchy.' },
      { label: 'Flyer 03', description: 'Community event flyer with a premium textured feel.' },
    ],
  },
  {
    id: 'apps',
    title: 'App Design',
    subtitle: 'Mobile and web UI screens, app landing pages, and polished interface concepts.',
    items: [
      { label: 'App Screen 01', description: 'Dashboard concept with focused data visualisation.' },
      { label: 'App Screen 02', description: 'E-commerce product browsing experience.' },
      { label: 'App Screen 03', description: 'Onboarding flow with a clean, modern layout.' },
    ],
  },
];

const DesignGallery = () => {
  const navigate = useNavigate();

  return (
    <section className="design-page fade-in">
      <div className="design-header">
        <button onClick={() => navigate('/')} className="design-back-btn">
          <FontAwesomeIcon icon={faArrowLeft} /> Back to portfolio
        </button>
        <div className="design-heading">
          <span className="design-badge">
            <FontAwesomeIcon icon={faPalette} /> Design Gallery
          </span>
          <h1>UI/UX & Brand Design</h1>
          <p>Explore a curated gallery of logo systems, flyer campaigns, and app interface concepts built with the same visual palette and typography used across this portfolio.</p>
        </div>
      </div>

      {sections.map((section) => (
        <div className="design-section" key={section.id}>
          <div className="design-section-header">
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>
          </div>

          <div className="design-grid">
            {section.items.map((item) => (
              <article className="design-card" key={item.label}>
                <div className="design-card-preview" aria-hidden="true" onClick={() => item.demo && item.demo !== '#' && window.open(item.demo, '_blank')}>
                  {item.image ? (
                    <>
                      <img src={item.image} alt={item.label} />
                      <div className="design-card-image-links">
                        {item.github && (
                          <a href={item.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        )}
                        {item.demo && item.demo !== '#' && (
                          <a href={item.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                          </a>
                        )}
                      </div>
                      <div className="design-card-overlay">
                        <span>{item.label}</span>
                      </div>
                    </>
                  ) : (
                    <div className="design-card-overlay">
                      <span>{item.label}</span>
                    </div>
                  )}
                </div>
                <div className="design-card-body">
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default DesignGallery;
