import React from 'react'
import { FaInstagram , FaFacebookF , FaTwitter , FaBars} from "react-icons/fa";
import { Link } from 'react-router-dom';
import './style.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <ul className='footer-menu'>
      <li>
            <Link to='/'><FaInstagram/></Link>
          </li>
          <li>
            <Link to='/'><FaFacebookF/></Link>
          </li>
          <li>
            <Link to='/'><FaTwitter/></Link>
          </li>
      </ul>
        <div className='footer-right'>
            2017 Colibrif Get the theme
        </div>
    </footer>
  )
}

export default Footer