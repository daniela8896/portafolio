import React from 'react'
import CV from '../../assets/ebook galletas-comprimido (1).pdf'

const CTA = () => {
  return (
      <div className='cta'>
          <a href={CV} download className='btn' >Descarga CV</a>
          <a href="#contact" className='btn btn-primary'>Contacto</a>
    </div>
  )
}

export default CTA