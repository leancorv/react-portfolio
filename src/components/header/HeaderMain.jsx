import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter";
import CTA from './CTA'

const Header__Main = () => {
  const [text, count] = useTypewriter({
    words: [
      "Soy Leandro Corvalán",
      "Software Developer",
      "Que ama programar",
      "Y los memes",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='main__text'>
        <h1>
          <span >{text}</span>
          <Cursor cursorColor="text-white" />
        </h1>
        <h5 className="text-light">Desarollador de Software</h5>
        <CTA />
    </div>
  )
}

export default Header__Main