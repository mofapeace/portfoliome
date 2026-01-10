import React from 'react'
import './Hero.css'
import profileImg from '../../../src/assets/profile-img.jpg'

const Hero = () => {
  return (
    <header id='home' className="hero fade-in">
      <div className="hero-left">
        <img src={profileImg} alt="profile" />
      </div>
      <div className="hero-main">
        <h1><span>mofa@host:~$</span> sudo run — build secure web apps</h1>
        <p>
          I design and secure modern web apps — frontend development fused with cybersecurity tooling and practices. I think in components and logs.
        </p>
        <div className="hero-action">
          <button className="hero-connect">Connect</button>
          <button className="hero-resume">Resume</button>
        </div>
      </div>
      <div className="hero-terminal">
        <pre>{`root@machine:~$ nmap -sV 192.168.1.0/24
open 22/tcp  ssh
open 80/tcp  http
open 443/tcp https
`}</pre>
      </div>
    </header>
  )
}

export default Hero