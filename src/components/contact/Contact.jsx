import React from 'react'
import './contact.css'
import { AiTwotoneMail } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Ponte en contacto</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail />
            <h4>Email</h4>
            <h5>danielapc8896@gmail.com</h5>
            <a href="mailto:danielapc8896@gmail.com" target='_blank'>Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>Dani puerta</h5>
            <a href="https://m.me/dani8896" target='_blank'>Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>Whastapp</h4>
            <h5>+573107228258</h5>
            <a href="https://api.whatsapp.com/send?phone+573107228258" target='_blank'>Enviar mensaje</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Escribe tu nombre completo' required />
          <input type="email" name='email' placeholder='Escribe tu email' required />
          <textarea name="message" placeholder='Escribe tu mensaje' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact