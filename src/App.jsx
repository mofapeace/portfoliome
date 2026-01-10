import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Service from './Components/Services/Service'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
      <Analytics/>
    </div>
  )
}

export default App