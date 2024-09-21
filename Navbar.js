import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll'
import logo from './Images/lienco3.png';
import Emergency from './Emergency/Emergency';

const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
      </div>

      <ul className='nav-menu'>
        <li>
        <Link  to="hero" spy={true} smooth={true} offset={50}  duration={500}> Home</Link>
        </li>
        <li>
          <Link  to="about" spy={true} smooth={true} offset={50}  duration={500}> About Us</Link>
        </li>
        <li>
        <Link  to="assessment" spy={true} smooth={true} offset={50}  duration={500}> Assessment</Link>
        </li>
        <li>
        <Link  to="contact" spy={true} smooth={true} offset={50}  duration={500}> Contact Us</Link>
        </li>
        <li className='emergency'><Emergency /></li>
      </ul>
    </div>
  )
}

export default Navbar
