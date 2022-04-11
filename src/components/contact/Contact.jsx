import React from 'react'
import './contact.css'
import { AiTwotoneMail } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v9rolf7', 'template_wdhnqdz', form.current, 'ovgXCW4aWjV30dzuL')
      
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Quieres trabajar conmigo?, Enviame un mensaje.</h5>
      <h2>Contacto</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiTwotoneMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>danielapc8896@gmail.com</h5>
            <a href="mailto:danielapc8896@gmail.com" target='_blank'>Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Dani puerta</h5>
            <a href="https://m.me/dani8896" target='_blank'>Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+573107228258</h5>
            <a href="https://api.whatsapp.com/send?phone+573107228258" target='_blank'>Enviar mensaje</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
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