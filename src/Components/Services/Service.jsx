import React, { useState } from 'react'
import './Service.css'

const Services = () => {
  const [active, setActive] = useState(null)

  const services = [
    {
      id: 'frontend',
      icon: 'fa-brands fa-react',
      title: 'Frontend Development',
      desc: 'Responsive, accessible UI using React, HTML, CSS and performance best-practices.',
      projects: [
        { id: 'f1', name: 'UI Kit', desc: 'Design system & components.', image: '' },
        { id: 'f2', name: 'Dashboard', desc: 'Analytics dashboard with charts.', image: '' },
        { id: 'f3', name: 'Landing', desc: 'Marketing landing with animations.', image: '' }
      ]
    },
    {
      id: 'os',
      icon: 'fa-solid fa-laptop',
      title: 'OS Install & Dual Boot',
      desc: 'Windows/Linux installs, partitioning, and troubleshooting.',
      projects: [
        { id: 'o1', name: 'DualBoot Guide', desc: 'Step-by-step dualboot setup.', image: '' },
        { id: 'o2', name: 'Restore', desc: 'Recover and repair installs.', image: '' }
      ]
    },
    {
      id: 'design',
      icon: 'fa-solid fa-lightbulb',
      title: 'Graphics & Design',
      desc: 'Branding, social assets, and ad creatives.',
      projects: [
        { id: 'd1', name: 'Brand Kit', desc: 'Logo + assets', image: '' },
        { id: 'd2', name: 'Poster', desc: 'Event poster designs.', image: '' }
      ]
    },
    {
      id: 'network',
      icon: 'fa-solid fa-network-wired',
      title: 'Network Design',
      desc: 'Topology design, subnet planning, and secure configuration.',
      projects: [
        { id: 'n1', name: 'Office LAN', desc: 'VLANs and segmentation design.', image: '' },
        { id: 'n2', name: 'Home Lab', desc: 'Secure home lab blueprint.', image: '' },
        { id: 'n3', name: 'Monitoring', desc: 'Network monitoring setup.', image: '' }
      ]
    }
  ]

  const toggle = (id) => setActive(active === id ? null : id)

  return (
    <div id='services' className='services fade-in'>
      <div className="services-title">
        <h1>Services</h1>
        <p>Choose a service to view related projects and examples.</p>
      </div>

      <div className="services-section">
        <div className="services-cards">
          {services.map(s => (
            <div key={s.id} className="services-card-wrapper">
              <div className={`services-card ${active === s.id ? 'active' : ''}`} onClick={() => toggle(s.id)}>
                <i className={s.icon}></i>
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <div className="card-cta">{active === s.id ? 'Close' : 'Explore'}</div>
              </div>
              <div className={`service-details ${active === s.id ? 'open' : ''}`}>
                <h3>{s.title} — Projects</h3>
                <div className="projects-grid">
                  {s.projects.map(p => (
                    <div className="project-card" key={p.id}>
                      <div className="project-img">{p.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
                      <div className="project-info">
                        <h4>{p.name}</h4>
                        <p>{p.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Services