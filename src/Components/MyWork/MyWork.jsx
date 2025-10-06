import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import security from '../../assets/security.jpg'
import auth from '../../assets/auth.jpeg'
import news from '../../assets/news.jpeg'
import bucketstudyBackeground from '../../assets/bucketstudyBackeground.png'
// '../../assets/bucketstudyBackground.png'

import QR from '../../assets/qr.jpeg'
import textutils from '../../assets/textutils1.png'

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img className="mywork-title-img" src={theme_pattern} alt="" />
      </div>

      <div className="mywork-cards">
        <div className="mywork-card">
          <img src={security} alt="Women's Security Portal" />
          <h2>Women's Security side web portal</h2>
          <p>Build to solve womens problems that face in day to day life</p>
          <a className="know-more" href="https://ersakshibhor.github.io/Women-s-Security-Side-Web-Portal/newhome.html">know more</a>
        </div>

        <div className="mywork-card">
          <img src={auth} alt="FlaskAuth" />
          <h2>Flask Authentication System</h2>
          <p>Flask Based Web Application, allows users to register, login, update and delete there accounts.</p>
          <a className="know-more" href="https://first-flask-app-pr5u.onrender.com/register">know more</a>
        </div>

        <div className="mywork-card">
          <img src={bucketstudyBackeground} alt="bucketstudy Clone" />
          <h2>BucketStudy Clone</h2>
          <p>Build using ReactJs, React Routers,CSS, Mongodb and Springboot </p>
          <a className="know-more" href="https://github.com/BucketStudy-EduTech/bucketstudy-frontend">know more</a>
        </div>
      </div>

{/* //second column */}

        <div className="mywork-cards">
        <div className="mywork-card">
          <img src={news} alt="Quik News" />
          <h2>Quick News App</h2>
          <p>A quick and responsive React-based news app that fetches real-time headlines using a news API.</p>
          <a className="know-more" href="https://github.com/ErSakshiBhor/quick_news">know more</a>
        </div>

         <div className="mywork-card">
          <img src={QR} alt="QR Code Generator" />
          <h2>QR Code Generator</h2>
          <p>A QR Code Generator built using Flask and Bootstrap that instantly converts text or URLs into downloadable QR codes</p>
          <a className="know-more" href="https://sakshuqrcodegenerator.pythonanywhere.com/">know more</a>
        </div>

         <div className="mywork-card">
          <img src={textutils} alt="Text Utils" />
          <h2>TextUtils</h2>
          <p>A Django-based Text Utils web app that performs text transformations like removing punctuation, changing case, and counting characters</p>
          <a className="know-more" href="https://textutils-5jtl.onrender.com/">know more</a>
        </div> 
      </div> 

    </div>
  )
}

export default MyWork
