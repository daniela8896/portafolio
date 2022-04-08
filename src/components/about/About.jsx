import React from 'react'
import './about.css'
import Me from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Un poco</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>1 año en proyectos</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>Emprendimientos felices</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>En constante trabajo</small>
            </article>
          </div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo facilis voluptas exercitationem neque, aliquid quam voluptate iste ullam atque fugit ab doloremque magni odio in quos nulla? Et, perspiciatis est?</p>
          <a className='btn btn-primary'href="#contact">Contactame</a>
        </div>
      </div>
    </section>
  )
}

export default About
