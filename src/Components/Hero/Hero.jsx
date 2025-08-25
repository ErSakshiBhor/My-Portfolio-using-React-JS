import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile} alt="" />

     <h1>
  Hii, I'm Sakshi Bhor,
  <br />
  <span className="typing">Python Full Stack Developer</span>
</h1>


      {/* <h1><span>Hii, I'm Sakshi Bhor,</span>  Python Full Stack Developer</h1> */}
      <p>I am Sakshi Bhor, passionate about Full Stack Development using Python(Flask,Django)</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">
            <a 
              href="../../Sakshi_Bhor_FullstackDeveloper.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="anchor-link"
            >
             My Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
