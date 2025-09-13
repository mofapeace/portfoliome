import React from 'react'
import './navbar.css'
import Logo from '../../../src/assets/logo.jpg'

const Navbar = () => {

//const [menu, setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={Logo} alt="" />
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default Navbar