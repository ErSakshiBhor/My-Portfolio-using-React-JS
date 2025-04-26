// import React from 'react'
// import './MyWork.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
// import security from '../../assets/security.jpg'
// import zepto from '../../assets/zepto.jpg'
// import netflix from '../../assets/netflix.jpg'


// const MyWork = () => {
//   return (
//     <div id='work' className='mywork'>
//       <div className="mywork-title">
//         <h1>My Latest Work</h1>
//         <img src={theme_pattern} alt="" />
//       </div>

    

//     </div>
    
//   )
// }

// export default MyWork

import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import security from '../../assets/security.jpg'
import zepto from '../../assets/zepto.jpg'
import netflix from '../../assets/netflix.jpg'

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
          <a className="know-more" href="#">know more</a>
        </div>

        <div className="mywork-card">
          <img src={zepto} alt="E-commerce Website" />
          <h2>E-commerce Website</h2>
          <p>Build using HTML, CSS, JAVASCRIPT, FLASK</p>
          <a className="know-more" href="#">know more</a>
        </div>

        <div className="mywork-card">
          <img src={netflix} alt="Netflix Clone" />
          <h2>Netflix Clone</h2>
          <p>Build frontend using HTML and CSS</p>
          <a className="know-more" href="#">know more</a>
        </div>
      </div>
    </div>
  )
}

export default MyWork
