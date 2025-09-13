import React from 'react'
import './Footer.css'
import Logo from '../../../src/assets/logo.jpg'
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Footer-top">
            <div className="top-left">
                <img src={Logo} alt="" />
                <p>I am a frontend developer with 2 years of expirence, also into Ethical hacking with some skills in Wireshark, Nmap, Burpsuite and more tools. i also have skills in graphics and desgining using tools like pixellab coraldraw and photoshop.</p>
            </div>
            <div className="top-right">
                <div className="email-input">
                    <i class="fa-solid fa-envelope"></i>
                    <input type="email" placeholder='Enter Your Email' />
                </div>
                <div className="subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="Footer-bottom">
            <p className='bottom-left'>© 2024 Godlove Mofa. All rights reserved.</p>
            <div className="bottom-right">
                <p>Terms of Services</p>
                <p>Privacy policies</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer