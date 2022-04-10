import React from 'react'
import './servicios.css'
import { BsCheckLg} from 'react-icons/bs'

const Servicios = () => {
  return (
    <section id='services'>
      <h5>Lo que ofrezco</h5>
      <h2>Servicios</h2>

      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Desarrollo de paginas web</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Pienso que cada detalle en el diseño de una pagina marca una gran diferencia.</p>
            </li>
           
          </ul>
        </article>
        {/* fin ux */}
        <article className='service'>
          <div className='service__head'>
            <h3>Aplicaciones responsive</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Codigos limpios.</p>
            </li>
           
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Accede a ellas desde tu movil o tablet</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Siempre en constante aprendizaje.</p>
            </li>
          </ul>
        </article>
        {/*fin web */}
        <article className='service'>
          <div className='service__head'>
            <h3>Aplicaciones Dinámicas</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Interactua con ellas</p>
            </li>
            <li>
              <BsCheckLg className='service__list-icon' />
              <p>Siempre actualizadas</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Servicios