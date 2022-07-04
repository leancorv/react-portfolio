import React from 'react'
import './about.css'
import ME from '../../assets/me-about-3.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me-2" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <small>Based in</small>
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
          </div>

            <p>
              I'm Leandro, a front-end developer based in Argentina and I'm 23 years old. I love learning new technologies and creating things. I enjoy work in usefull and escalable proyects that people could enjoy. 
            </p>

            <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About


