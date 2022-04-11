import React from 'react'
import './about.css'
import Me from '../../assets/danifondo-100.jpg'
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
          <h2>Hola, soy Daniela un placer conocerte.</h2>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experiencia</h5>
              <small>En proyectos.</small>
            </article>
            <article className="about__card">
              <FaUsers className='about__icon' />
              <h5>Clientes</h5>
              <small>Me encantaria ayudarte</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Proyectos</h5>
              <small>Exitosos, con las mejores practicas</small>
            </article>
          </div>
          <p>Soy desarrolladora full-stack, con experiencia en proyectos, cada dia aprendo cosas nuevas con los proyectos que realizo, siempre en constante aprendizaje,  me encanta lo que hago, codigos limpios y paginas web seguras.</p>
          <a className='btn btn-primary'href="#contact">Contactame</a>
        </div>
      </div>
    </section>
  )
}

export default About
