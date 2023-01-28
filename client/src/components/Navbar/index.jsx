import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram , FaFacebookF , FaTwitter , FaBars} from "react-icons/fa";
import './style.scss'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="container">
      <div className='logo'>
        <img src="/assets/img/logo.png" alt="logo" />
      </div>
      <ul className='link'>
          <li>
            <Link to='/'>HOME</Link>
          </li>
          <li>
            <Link to='/add'>ADD</Link>
          </li>
          <li>
            <Link to='/'>RESERVATION</Link>
          </li>
          <li>
            <Link to='/'>GALLERY</Link>
          </li>
          <li>
            <Link to='/'>ABOUT</Link>
          </li>
          <li>
            <Link to='/'>BLOG</Link>
          </li>
          <li>
            <Link to='/'>CONTACT</Link>
          </li>
      </ul>
      <ul className='menu'>
      <li>
            <Link to='/'><FaInstagram/></Link>
          </li>
          <li>
            <Link to='/'><FaFacebookF/></Link>
          </li>
          <li>
            <Link to='/'><FaTwitter/></Link>
          </li>
          <li className='bars'>
            <Link to='/'><FaBars/></Link>
          </li>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar