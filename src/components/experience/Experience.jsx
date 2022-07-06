import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
import html from '../../assets/html-5.svg'
import css from '../../assets/css-3.svg'
import javas from '../../assets/javascript.svg'
import react from '../../assets/create-react-app.svg'
import boot from '../../assets/bootstrap.svg'
import mate from '../../assets/materializecss.svg'
import php from '../../assets/php.svg'
import mongo from '../../assets/mongodb.svg'
import python from '../../assets/python.svg'
import node from '../../assets/nodejs.svg'
import mysql from '../../assets/mysql.svg'
import word from '../../assets/wordpress-icon.svg'



const Experience = () => {
  return (
    <section id='experience'>
      <h5>Mis habilidades</h5>
      <h2>Mi experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Front - end </h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={html} alt="" className='experience__details' width='50px'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>90%</small>

              </div>
            </article>
            <article className="experience__details">
              <img src={css} alt="" className='experience__details' width='50px' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>80%</small>

              </div>
            </article>
            <article className="experience__details">
              <img src={javas} alt="" className='experience__details' width='50px' />
              <div>
              <h4>Javascripth</h4>
              <small className='text-light'>70%</small>

              </div>
            </article>
            <article className="experience__details">
              <img src={boot} alt="" className='experience__details' width='50px' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>70%</small>

              </div>
            </article>
            <article className="experience__details">
              <img src={mate} alt="" className='experience__details' width='50px' />
              <div>
              <h4>Materialize</h4>
              <small className='text-light'>80%</small>

              </div>
            </article>
            <article className="experience__details">
              <img src={react} alt="" className='experience__details' width='50px' />
              <div>
              <h4>React</h4>
              <small className='text-light'>80%</small>

              </div>
            </article>
            <article className="experience__details">
              <img src={word} alt="" className='experience__details' width='50px' />
              <div>
                <h4>Wordpress</h4>
                <small className='text-light'>100%</small>

              </div>
            </article>
          </div>
        </div>
        {/* fin del frontend */}

        <div className="experience__backend">
          <h3>Back-end</h3>
          <div className="experience__content">
            <article className="experience__details">
              <img src={node} alt="" className='experience__details' width='50px' />
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>50%</small>
              </div>
              
            </article>
            <article className="experience__details">
              <img src={mongo} alt="" className='experience__details' width='50px' />
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>50%</small>

              </div>
            </article>
            <article className="experience__details">
              <img src={php} alt="" className='experience__details' width='50px' />
              <div>
              <h4>PHP</h4>
              <small className='text-light'>80%</small>

              </div>
            </article>
            <article className="experience__details">
              <img src={mysql} alt="" className='experience__details' width='50px' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>90%</small>

              </div>
            </article>
            <article className="experience__details">
              <img src={python} alt="" className='experience__details' width='50px' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>50%</small>

              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience