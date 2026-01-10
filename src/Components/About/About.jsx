import React, { useEffect, useState } from 'react'
import './About.css'
import profileImg from '../../assets/About-profile.jpg'

const About = () => {
  const [counts, setCounts] = useState({ exp: 0, projects: 0, clients: 0 })

  useEffect(() => {
    const targets = { exp: 2, projects: 15, clients: 6 }
    const duration = 1500
    const start = performance.now()

    function step(ts) {
      const progress = Math.min((ts - start) / duration, 1)
      setCounts({
        exp: Math.floor(progress * targets.exp),
        projects: Math.floor(progress * targets.projects),
        clients: Math.floor(progress * targets.clients)
      })
      if (progress < 1) requestAnimationFrame(step)
      else setCounts(targets)
    }

    requestAnimationFrame(step)
  }, [])

  return (
    <section id='about' className='about fade-in'>
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img className='about-img' src={profileImg} alt="about" />
        </div>
        <div className="about-right">
          <div className="about-p">
            <p>I’m a frontend developer who thinks like a defender — building performant interfaces while applying security-minded practices.</p>
            <p>I bridge UI/UX and security tooling, with experience in Linux, network scanning, and web app hardening.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><h2>Frontend</h2><div className="skill-bar" style={{width: '80%'}}/></div>
            <div className="about-skill"><h2>Linux</h2><div className="skill-bar" style={{width: '85%'}}/></div>
            <div className="about-skill"><h2>Pentesting</h2><div className="skill-bar" style={{width: '65%'}}/></div>
            <div className="about-skill"><h2>Design</h2><div className="skill-bar" style={{width: '50%'}}/></div>
            <div className="about-skill"><h2>Network Design</h2><div className="skill-bar" style={{width: '80%'}}/></div>
          </div>
        </div>
      </div>
      <div className="about-archivements">
        <div className="about-archivement">
          <h1>{counts.exp}+</h1>
          <p>Years Experience</p>
        </div>
        <div className="about-archivement">
          <h1>{counts.projects}+</h1>
          <p>Projects</p>
        </div>
        <div className="about-archivement">
          <h1>{counts.clients}+</h1>
          <p>Clients</p>
        </div>
      </div>
    </section>
  )
}

export default About