import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.jpg'
const Footer = () => {
    return (
        <div className='Footer fade-in'>
        <div className="Footer-top">
            <div className="top-left">
                <img src={Logo} alt="" />
                <p>I am a Frontend Developer and Cybersecurity Enthusiast based in Cameroon, bridging the gap between high-performance user interfaces and solid systems security foundations. Specializing in secure React development, Linux system hardening, network troubleshooting, and premium digital brand design.</p>
            </div>
            <div className="top-right">
                <div className="email-input">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" placeholder='Enter Your Email' />
                    <div className="subscribe">Subscribe</div>
                </div>
            </div>
        </div>
        <hr />
        <div className="Footer-bottom">
            <p className='bottom-left'>© 2026 Godlove Mofa. All rights reserved.</p>
            <div className="bottom-right">
                <a href="#" className="footer-link">Terms of Services</a>
                <a href="#" className="footer-link">Privacy policies</a>
                <a href="#contact" className="footer-link">Connect with me</a>
            </div>
        </div>
    </div>
  )
}

export default Footer