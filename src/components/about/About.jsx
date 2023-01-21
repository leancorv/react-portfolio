import React from 'react'
import './about.css'
import ME from '../../assets/me-about-3.png'
import {BiWorld} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Un poco</h5>
      <h2>Sobre mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-2" />
          </div>
        </div>

        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <BiWorld className='about__icon'/>
              <small>Buenos Aires</small>
              <h5>Argentina</h5>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <small>200+ Worldwide</small>
              <h5>Clients</h5>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <small>80+ Completed</small>
              <h5>Proyects</h5>
            </article>
          </div> */}

            <p>
              Hola! Soy Leandro, un desarrollador apasionado al que le encanta ser parte de proyectos y aprender nuevas tecnologias. Soy fan de aportar mi mejor esfuerzo creando y desarrollando. 
              Creo fielmente que todo tiene solución y me encanta pasar tiempo buscándolos. 
            </p>

            <a href="#contact" className='btn btn-primary'>Hablemos!</a>
        </div>
      </div>
    </section>
  )
}

export default About


