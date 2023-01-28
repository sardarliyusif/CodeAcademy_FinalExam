import React from 'react'
import Carousel from '../Carousel'
import './style.scss'

const Hero = () => {
  return (
    <section className='hero'>
        <Carousel/>
        <div className='hero__content'>
            <p className='hero__content__welcome'>Welcome to</p>
            <h1 className='hero__content__title'>PATO PLACE</h1>
            <button className='hero__content__button'>LOOK MENU</button>
        </div>
    </section>
  )
}

export default Hero