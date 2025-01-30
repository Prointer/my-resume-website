import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import ScrollToTopButton from './ScrollToTopButton'
import './styles.css'

function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '60px' }}>
        <section id="home" className="section">
          <MainPage />
        </section>
        <section id="about" className="section">
          <h2>About Me</h2>
          <p>Some information about myself.</p>
        </section>
        <section id="projects" className="section">
          <h2>Projects</h2>
          <p>Details about my projects.</p>
        </section>
      </main>
      <ScrollToTopButton />
    </>
  );
}

export default App;
