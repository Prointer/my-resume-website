import React from 'react'
import './App.css'
import Header from './Header'
import ScrollToTopButton from './ScrollToTopButton'
function App() {

  return (
    
    <>
    <div>
      <Header /> 
      <main>
        <section id="home" style={{padding:"100px 20px", minHeight:"100vh"}}>
          <h1> Welcome to My Resume Website </h1>
        </section>
        <section id="about" style={{ padding: '100px 20px', minHeight: '100vh' }}>
          <h2>About Me</h2>
          <p>Some information about myself.</p>
        </section>
        <section id="projects" style={{ padding: '100px 20px', minHeight: '100vh' }}>
          <h2>My Projects</h2>
        </section>
        <section id="contact" style={{ padding: '100px 20px', minHeight: '100vh' }}>
          <h2>Contact Me</h2>
        </section>
      </main>
      <ScrollToTopButton />
      
    </div>
    </>
  )
}

export default App
