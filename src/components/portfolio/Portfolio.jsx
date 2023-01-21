import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'TWO - Streaming Movies Website',
    desc: 'Streaming Movies UI, usando HTML, CSS y JavaScript',
    github: 'https://github.com/lecov/proyecto-two',
    demo: 'https://lecov.github.io/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Spotify Clone',
    desc: 'Spotify Clone usando Next.js, Spotify API, NextAuth, Tailwind CSS, Recoil',
    github: 'https://github.com/lecov/nextjs-spotify',
    demo: 'https://dribble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Giffy - Gifs website',
    desc: 'Amazing Streaming Movies UI, using HTML, CSS and JS',
    github: 'https://github.com/lecov/react-giffy',
    demo: 'https://react-giffy-eight.vercel.app/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Netflix-clone',
    desc: 'Netflix clone usando Next.js, Typescript, Tailwind, Firebase v9',
    github: 'https://github.com/lecov/nextjs-netflix',
    demo: 'https://two-app.vercel.app/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mi proyectos recientes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, desc, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer" >Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer" >App Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio