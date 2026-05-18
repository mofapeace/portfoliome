import React from 'react';
import './Certifications.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faAward, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const Certifications = () => {
  const certificationList = [
    {
      id: 1,
      title: 'Certified in Cybersecurity (CC)',
      issuer: 'ISC2',
      date: '2025',
      credly: 'https://www.credly.com/org/isc2',
      details: 'Vetted knowledge in security principles, business continuity, disaster recovery, incident response, access controls, network security, and security operations.'
    },
    {
      id: 2,
      title: 'Ethical Hacking',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      credly: 'https://www.credly.com/org/cisco',
      details: 'Practical competence in vulnerability scanning, penetration testing techniques, target reconnaissance, threat methodologies, and mitigation system applications.'
    },
    {
      id: 3,
      title: 'Introduction to Cybersecurity',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      credly: 'https://www.credly.com/org/cisco',
      details: 'Foundational training in data privacy, encryption standards, common malware vectors, network-level security models, and social engineering mitigation.'
    },
    {
      id: 4,
      title: 'ISC2 Active Member',
      issuer: 'ISC2 Organization',
      date: '2025',
      credly: 'https://www.isc2.org/',
      details: 'Active standing membership with the International Information System Security Certification Consortium, aligning with professional ethical standards.'
    },
    {
      id: 5,
      title: 'Cisco Learn-A-Thon Badge',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      credly: 'https://www.credly.com/org/cisco',
      details: 'Special academy recognition for network protocols audit, network defenses optimization, and advanced packet-level simulation campaigns.'
    }
  ];

  return (
    <section id="certifications" className="certifications fade-in">
      <div className="certifications-title">
        <h1>Professional Credentials</h1>
        <p>Verified certifications and organization memberships documenting my cybersecurity fundamentals.</p>
      </div>

      <div className="certifications-grid">
        {certificationList.map((cert) => (
          <article className="certification-card" key={cert.id}>
            <div className="cert-card-header">
              <div className="cert-badge-icon">
                <FontAwesomeIcon icon={cert.issuer.includes('ISC2') ? faShieldHalved : faAward} />
              </div>
              <a 
                href={cert.credly} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="verify-link"
                aria-label={`Verify ${cert.title}`}
              >
                Verify <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>

            <div className="cert-card-body">
              <h3>{cert.title}</h3>
              <span className="cert-issuer">{cert.issuer} • {cert.date}</span>
              <p>{cert.details}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
