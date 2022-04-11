import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
      <a href="https://www.linkedin.com/in/daniela-puerta-262472231/" target='_blank'><BsLinkedin className='header__socials-link'/></a>
      <a href="https://github.com/daniela8896" target='_blank'> <FaGithub className='header__socials-link'/> </a>
      <a href="https://www.facebook.com/dani8896" target='_blank'> <BsFacebook className='header__socials-link'/> </a>
    </div>
  )
}

export default HeaderSocials