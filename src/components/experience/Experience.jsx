import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3, IoLogoJavascript, IoLogoVue} from 'react-icons/io5'
import { FaReact, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPython, SiDjango, SiFirebase, SiTypescript} from 'react-icons/si'
import {TbBrandReactNative, TbBrandNextjs} from 'react-icons/tb'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Algunas de las</h5>
      <h2>Tecnologias que uso</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className='experience__details-icons' />
              <div>
                <h4>HTML</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <IoLogoCss3 className='experience__details-icons' />
              <div>
                <h4>CSS</h4>
                {/* <small className='text-light'>Intermidiate</small> */}
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className='experience__details-icons' />
              <div>
                <h4>JavaScript</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <FaReact className='experience__details-icons' />
              <div>
                <h4>React</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <TbBrandNextjs className='experience__details-icons' />
              <div>
                <h4>NextJS</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <SiTailwindcss className='experience__details-icons' />
              <div>
                <h4>Tailwind</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <IoLogoVue className='experience__details-icons' />
              <div>
                <h4>Vue</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
            <article className="experience__details">
              <TbBrandReactNative className='experience__details-icons' />
              <div>
                <h4>ReactNative</h4>
                {/* <small className='text-light'>Experienced</small> */}
              </div>
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNodeJs className='experience__details-icons' />
              <div>
                <h4>Node JS</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiExpress className='experience__details-icons' />
              <div>
                <h4>Express</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMongodb className='experience__details-icons' />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql className='experience__details-icons' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiPython className='experience__details-icons' />
              <div>
                <h4>Python</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiDjango className='experience__details-icons' />
              <div>
                <h4>Django</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiFirebase className='experience__details-icons' />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className="experience__details">
              <SiTypescript className='experience__details-icons' />
              <div>
                <h4>Typescript</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience