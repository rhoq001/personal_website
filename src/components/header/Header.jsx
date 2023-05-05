import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <section id='home'>
      <header>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Raqtan Hoq</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <div className='home__card'>
            <div className='me'>
              <a href="#contact">
                <h3>Contact me</h3>
                <img className='imgme' src={ME} alt="me" />
              </a>
            </div>
            <CTA />
          </div>
        </div>
      </header>
    </section>
  )
}

export default Header