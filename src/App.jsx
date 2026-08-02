import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications'
import Projects from './Components/Projects/Projects'
import Service from './Components/Services/Service'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AllProjects from './Components/Projects/AllProjects'
import DesignGallery from './Components/Projects/DesignGallery'
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

const App = () => {
  const [view, setView] = useState('home'); // 'home' or 'all-projects'

  return (
    <div>
      <Navbar setView={setView} currentView={view} />
      <Routes>
        <Route path="/" element={
          view === 'home' ? (
            <>
              <Hero setView={setView} />
              <About />
              <Certifications />
              <Projects setView={setView} />
              <Service />
              <Contact />
              <Footer />
            </>
          ) : (
            <>
              <AllProjects setView={setView} />
              <Footer />
            </>
          )
        } />
        <Route path="/design" element={<><DesignGallery /><Footer /></>} />
      </Routes>
      <ScrollToTop />
      <Analytics />
    </div>
  )
}

export default App