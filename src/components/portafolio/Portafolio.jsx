import React from 'react'
import './portafolio.css'
import img1 from '../../assets/toqueneldom.png'
import img2 from '../../assets/colorcake.png'
import img3 from '../../assets/efs.png'
import img4 from '../../assets/replica.png'
import img5 from '../../assets/mockup-credimio.svg'
import img6 from '../../assets/mockup-efs.svg'

const datos = [
  {
    id: 1,
    image: img1,
    title: 'Toquen el Dom',
    github: 'https://github.com/daniela8896/toquen-el-DOM',
    demo: 'https://daniela8896.github.io/toquen-el-DOM/'
  },
  {
    id: 2,
    image: img2,
    title: 'Color cake',
    github: 'https://github.com/daniela8896/color-cake',
    demo: 'https://daniela8896.github.io/'
  },
  {
    id: 3,
    image: img3,
    title: 'EFS Software',
    github: 'https://github.com/daniela8896/efs-software',
    demo: 'https://daniela8896.github.io/efs-software/'
  },
  {
    id: 4,
    image: img4,
    title: 'Replica web',
    github: 'https://github.com/daniela8896/replica-web',
    demo: 'https://daniela8896.github.io/replica-web/#inicio'
  },
  {
    id: 5,
    image: img5,
    title: 'App Credimio',
    github: 'https://github.com/daniela8896/AppCredimio',
    demo: 'https://play.google.com/store/apps/details?id=com.efssoftware.appcredimio&hl=es_CO&gl=US'
  },
  {
    id: 6,
    image: img6,
    title: 'App EFS Software',
    github: 'https://github.com',
    demo: 'https://play.google.com/store/apps/details?id=com.efssoftware.appefssoftware&hl=es_CO&gl=US'
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
                  <img src={image} alt={title} className='img__portfolio'/>
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