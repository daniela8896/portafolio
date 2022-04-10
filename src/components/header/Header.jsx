import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ILUSTRACION.svg'
import logo from '../../assets/LOGOTIPOD.svg'
import HeaderSocials from './HeaderSocials'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <img src={logo} alt="" width='200px' />
        <h1>Dessarrolladora web full stack</h1>
       
        <div className='text-light'>
          <span style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Front-end', 'Back-end', 'Wordpress', 'Movil!']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="yo"   />
        </div>

        <a href="#contact" className='scroll__down'>Dezplazate hacia abajo</a>
      </div>
    </header>
  )
}

export default Header