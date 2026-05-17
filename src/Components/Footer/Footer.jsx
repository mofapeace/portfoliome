import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.jpg'
const Footer = () => {
    return (
        <div className='Footer fade-in'>
        <div className="Footer-top">
            <div className="top-left">
                <img src={Logo} alt="" />
                <p>I am a frontend developer with 2 years of experience, also into ethical hacking with skills in Wireshark, Nmap, Burp Suite, and other tools. I am also skilled in graphics and designing using tools like PixelLab, CorelDraw, and Photoshop.</p>
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
            <p className='bottom-left'>© 2024 Godlove Mofa. All rights reserved.</p>
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