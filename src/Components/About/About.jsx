import React, { useEffect, useState, useRef } from 'react'
import './About.css'
import profileImg from '../../assets/About-profile.jpg'

const About = () => {
  const [counts, setCounts] = useState({ exp: 0, projects: 0, clients: 0 })
  const sectionRef = useRef(null)

  useEffect(() => {
    const targets = { exp: 2, projects: 20, clients: 10 }
    const duration = 1500
    let animationFrameId;
    let hasAnimated = false;

    const startAnimation = () => {
      const start = performance.now()
      function step(ts) {
        const progress = Math.min((ts - start) / duration, 1)
        setCounts({
          exp: Math.floor(progress * targets.exp),
          projects: Math.floor(progress * targets.projects),
          clients: Math.floor(progress * targets.clients)
        })
        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step)
        } else {
          setCounts(targets)
        }
      }
      animationFrameId = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!hasAnimated) {
            startAnimation()
            hasAnimated = true
          }
        } else {
          // Reset count and flag when out of view, so it animates again next time you scroll past
          cancelAnimationFrame(animationFrameId)
          setCounts({ exp: 0, projects: 0, clients: 0 })
          hasAnimated = false
        }
      })
    }, { threshold: 0.15 })

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section id='about' ref={sectionRef} className='about fade-in'>
      <div className="about-title">
        <h1>About</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img className='about-img' src={profileImg} alt="about" />
        </div>
        <div className="about-right">
          <div className="about-p">
            <p>I’m a Frontend Developer and Cybersecurity Enthusiast. I build highly responsive, performant React user interfaces while applying defensive security practices to keep web apps safe.</p>
            <p>I bridge the gap between creative UI/UX design and solid systems security foundations, with strong hands-on experience in Linux configurations, secure input validations, and network scanning basics.</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><h2>Frontend</h2><div className="skill-bar-container"><div className="skill-bar-progress" style={{ width: '80%' }} /></div></div>
            <div className="about-skill"><h2>Linux</h2><div className="skill-bar-container"><div className="skill-bar-progress" style={{ width: '85%' }} /></div></div>
            <div className="about-skill"><h2>Pentesting</h2><div className="skill-bar-container"><div className="skill-bar-progress" style={{ width: '65%' }} /></div></div>
            <div className="about-skill"><h2>Design</h2><div className="skill-bar-container"><div className="skill-bar-progress" style={{ width: '50%' }} /></div></div>
            <div className="about-skill"><h2>Network Design</h2><div className="skill-bar-container"><div className="skill-bar-progress" style={{ width: '80%' }} /></div></div>
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