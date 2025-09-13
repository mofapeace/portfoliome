import React from 'react'
import './Service.css'

const Services = () => {
  return (
    <div className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <p>Here are some services that I provide.</p>
        </div>
        <div className="services-section">
        <div className="services-cards">
            <div className="services-card">
              <i className='fa-brands fa-react'></i>
              <h2>Frontend Development</h2>
              <p>Building responsive and interactive user interfaces using React, HTML, CSS, and JavaScript.</p>
            </div>
            <div className="services-card">
              <i className='fa-solid fa-laptop'></i>
              <h2>Operating System Installation & Dual Boot</h2>
              <p>
                Installation of Windows and Linux operating systems, dual-boot setup, activation, and troubleshooting.
              </p>
            </div>
            <div className="services-card">
              <i className="fa-solid fa-lightbulb"></i>
              <h2>Graphics and Design</h2>
              <p>
                Create quality designs at affordable prices for flyers, social media posts, and other advertisements.
              </p>
            </div>
        </div>
        </div>
    </div>
  )
}
export default Services