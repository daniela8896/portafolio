import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import logo from '../../assets/LOGOTIPOD.svg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <img src={logo} alt="" width='200px' />
        <h1>Hola, soy Daniela puerta</h1>
       
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="yo" width='250px'  />
        </div>

        <a href="#contact" className='scroll__down'>Dezplazate hacia abajo</a>
      </div>
    </header>
  )
}

export default Header