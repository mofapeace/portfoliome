import React from 'react'
import './About.css'
import profileImg from '../../assets/About-profile.jpg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-section">
          <div className="about-left">
            <img src={profileImg} alt="" />
          </div>
          <div className="about-right">
            <div className="about-p">
              <p>I am a passionate frontend developer with a keen interest in cybersecurity. My journey in tech began with a curiosity for how things work and a drive to create seamless digital experiences.</p>
              <p>I enjoy learning new technologies, collaborating with others, and sharing knowledge with the community. When I’m not coding, you’ll find me exploring the latest trends in tech or helping others solve problems.</p>
            </div>
            <div className="about-skills">
              <div className="about-skill"><h2>HTML & CSS</h2><hr style={{width: "60%"}}/></div>
              <div className="about-skill"><h2>Linux Fundamental</h2><hr style={{width: "80%"}}/></div>
              <div className="about-skill"><h2>Nmap and Wireshark</h2><hr style={{width: "50%"}}/></div>
              <div className="about-skill"><h2>Graphics Design</h2><hr style={{width: "40%"}}/></div>
            </div>
          </div>
        </div>
        <div className="about-archivements">
            <div className="about-archivement">
              <h1>2+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-archivement">
              <h1>15+</h1>
              <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-archivement">
              <h1>6+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
    </div>
  )
}
export default About