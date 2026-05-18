import React, { useState } from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications'
import Projects from './Components/Projects/Projects'
import Service from './Components/Services/Service'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import AllProjects from './Components/Projects/AllProjects'
import SecuritySandbox from './Components/Sandbox/SecuritySandbox'
import Blog from './Components/Blog/Blog'
import { Analytics } from "@vercel/analytics/react"
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'

const App = () => {
  const [view, setView] = useState('home'); // 'home', 'all-projects', or 'sandbox'

  return (
    <div>
      <Navbar setView={setView} currentView={view} />
      {view === 'home' ? (
        <>
          <Hero setView={setView} />
          <About />
          <Certifications />
          <Projects setView={setView} />
          <Service />
          <Contact />
          <Footer />
        </>
      ) : view === 'all-projects' ? (
        <>
          <AllProjects setView={setView} />
          <Footer />
        </>
      ) : view === 'blog' ? (
        <>
          <Blog setView={setView} />
          <Footer />
        </>
      ) : (
        <>
          <SecuritySandbox setView={setView} />
          <Footer />
        </>
      )}
      <ScrollToTop />
      <Analytics />
    </div>
  )
}

export default App