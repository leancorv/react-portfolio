import React from 'react'
import './header.css'
import ME from '../../assets/me-about-2.png'
import HeaderSocials from './HeaderSocials.jsx'
import HeaderMain from './HeaderMain.jsx'

const Header = () => {
  return (
    <header >
      <div className="container header__container">
        <div className="main">
          <HeaderMain />

          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>

        <HeaderSocials />


        <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header