import React from 'react'
import './footer.css'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Leancorv</a>
      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com"><BsLinkedin /></a>
        <a href="https://github.com/lecov/"><FaGithub /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; LeanDev. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer