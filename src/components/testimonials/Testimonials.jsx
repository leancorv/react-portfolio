import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero officia, excepturi, dolorem in soluta maiores tempore perferendis laudantium expedita eligendi ipsa nesciunt sequi ducimus nihil et iure facere accusamus! Sed.'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero officia, excepturi, dolorem in soluta maiores tempore perferendis laudantium expedita eligendi ipsa nesciunt sequi ducimus nihil et iure facere accusamus! Sed.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero officia, excepturi, dolorem in soluta maiores tempore perferendis laudantium expedita eligendi ipsa nesciunt sequi ducimus nihil et iure facere accusamus! Sed.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama Mcbrown',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero officia, excepturi, dolorem in soluta maiores tempore perferendis laudantium expedita eligendi ipsa nesciunt sequi ducimus nihil et iure facere accusamus! Sed.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        {
          data.map(({avatar, name, review}) => {
            return (
              <article key={name} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials