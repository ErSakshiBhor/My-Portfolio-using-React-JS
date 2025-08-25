import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile1.jpeg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile} alt="" />
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>I am a dedicated and enthusiastic Computer Engineering student with a strong interest in web development and programming.</p>
                    <p>I enjoy building creative and user-friendly websites using technologies like HTML, CSS, JavaScript, ReactJS, and Python. I'm always eager to learn new skills, take on challenges, and grow as a developer.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill">
                        <p> HTML & CSS</p> <hr style={{width:"80%"}}/>
                    </div>

                    <div className="about-skill">
                        <p> React JS</p> <hr style={{width:"70%"}}/>
                    </div>

                    <div className="about-skill">
                        <p> Javascript</p> <hr style={{width:"70%"}}/>
                    </div>

                    <div className="about-skill">
                        <p> Python</p> <hr style={{width:"60%"}}/>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About

