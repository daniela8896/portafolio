import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>CUTE CODE</a>
      
      <ul className='permalinks'>
        <li><a href='#'></a>Inicio </li>
        <li><a href='#about'></a>Sobre mi </li>
        <li><a href='#experience'></a>Experiencia </li>
        <li><a href='#services'></a>Servicios</li>
        <li><a href='#contact'></a>Contacto</li>
       
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/dani8896"><BsFacebook /></a>
        <a href="https://www.instagram.com/danielita8896/"><BsInstagram/></a>
        <a href="https://twitter.com/daniela72365165"><BsTwitter /></a>
      </div>

      <div className="foote__copyright">
        <small>&copy; Daniela, Cute code. Derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer