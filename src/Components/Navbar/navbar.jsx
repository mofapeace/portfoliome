import React, { useRef } from 'react'
import './navbar.css'
import Logo from '../../../src/assets/logo.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }
  return (
    <div className='navbar'>
      <img src={Logo} alt="" />
      <i className='nav-open fa-solid fa-bars' onClick={openMenu}></i>
      <ul ref={menuRef} className="nav-menu">
        <i className='nav-closed fa-solid fa-x' onClick={closeMenu}></i>
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