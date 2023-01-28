import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { BsArrowRight } from "react-icons/bs";

const Welcome = () => {
  return (
    <div className=' welcome container'>
        <div className='welcome__content'>
            <p className='welcome_italian'>Italian Restaurant</p>
            <h3 className='welcome_title'>Welcome</h3>
            <p className='welcome_desc'>Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac facilisis ligula sem id neque.</p>
            <Link to='/' className='our-story'><span>Out Story</span> <BsArrowRight/></Link>
        </div>
        <div className='welcome__img'>
            <img src="/assets/img/welcome.jpg" alt="welcome" />
        </div>
    </div>
  )
}

export default Welcome