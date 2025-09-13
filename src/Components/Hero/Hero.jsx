import React from 'react'
import './Hero.css'
import profileImg from '../../../src/assets/profile-img.jpg'
const Hero = () => {
  return (
    <div>
        <div className="hero">
            <img src={profileImg} alt="" />
            <h1><span>I'm Mofa Godlove,</span> Frontend Developer, Cybersecurity Enthusiast and Tech junckie.</h1>
            <p>
                I build modern, responsive web applications and am passionate about protecting digital spaces. Always exploring new technologies and sharing knowledge with the tech community.
            </p>
            <div className="hero-action">
                <div className="hero-connect">Connect with me</div>
                <div className="hero-resume">My resume</div>
            </div>
        </div>
    </div>
  )
}

export default Hero