//rafce
import React from 'react'
import Navbar from './Comoponents/Navbar/Navbar'
import Hero from './Comoponents/Hero/Hero'
import About from './Comoponents/About/About'
import Certificates from './Comoponents/Certifications/Certificates'
import MyWork from './Comoponents/MyWork/MyWork'
import Contact from './Comoponents/Contact/Contact'
import Footer from './Comoponents/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Certificates/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
