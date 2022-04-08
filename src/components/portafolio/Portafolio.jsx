import React from 'react'
import './portafolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const datos = [
  {
    id: 1,
    image: img1,
    title: 'primer proyecto',
    github: 'https://github.com',
    demo: 'https://facebook.com'
  },
  {
    id: 2,
    image: img2,
    title: 'primer proyecto',
    github: 'https://github.com',
    demo: 'https://facebook.com'
  },
  {
    id: 3,
    image: img3,
    title: 'primer proyecto',
    github: 'https://github.com',
    demo: 'https://facebook.com'
  },
  {
    id: 4,
    image: img4,
    title: 'primer proyecto',
    github: 'https://github.com',
    demo: 'https://facebook.com'
  },
  {
    id: 5,
    image: img5,
    title: 'primer proyecto',
    github: 'https://github.com',
    demo: 'https://facebook.com'
  },
  {
    id: 6,
    image: img6,
    title: 'primer proyecto',
    github: 'https://github.com',
    demo: 'https://facebook.com'
  },
]


const Portafolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis trabajos</h5>
      <h2>Proyectos</h2>

      <div className="container portfolio__container">

        {
          datos.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3> {title} </h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Ver Demo</a>
                </div>
              </article>
            )
          })
       }

       
      </div>
    </section>
  )
}

export default Portafolio