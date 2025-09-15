import React from 'react'
import './navbar.css'
import Logo from '../../../src/assets/logo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  return (
    <div  className='navbar'>
        <img src={Logo} alt="" />
        <ul className="nav-menu">
            <li><AnchorLink className='a-link' href="#home">Home</AnchorLink></li>
            <li><AnchorLink className='a-link' offset={50} href="#about">About Me</AnchorLink></li>
            <li><AnchorLink className='a-link' offset={50} href="#services">Services</AnchorLink></li>
            <li><AnchorLink className='a-link' offset={50} href="#contact">Contact</AnchorLink></li>
        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar