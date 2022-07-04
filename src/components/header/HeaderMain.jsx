import React from 'react'
import CTA from './CTA'

const Header__Main = () => {
  return (
    <div className='main__text'>
        <h5>Hello, I'm</h5>
        <h1>Leandro Corvalán</h1>
        <h5 className="text-light">Fullstack developer</h5>
        <CTA />
    </div>
  )
}

export default Header__Main