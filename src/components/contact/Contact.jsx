import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTelegram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qn9sywc', 'template_7t6h7p9', form.current, 'Cz6_lmzCMcTE7eIVX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Ey!</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>leancorv@gmail.com</h5>
            <a href="mailto:leancorv@gmail.com" target="_blank" rel="noreferrer">Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsTelegram className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@leancorv</h5>
            <a href="https://t.me/leancorv" target="_blank" rel="noreferrer">Enviar mensaje</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>@leancorv</h5>
            <a href="https://www.linkedin.com/in/leancorv/" target="_blank" rel="noreferrer">Enviar mensaje</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default Contact