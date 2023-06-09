import React from 'react';

import NavBar from './components/header/NavBar';
import Header from './components/header/Header';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Conclusion from './components/conclusion/Conclusion';
import Footer from './components/footer/Footer';

function App() {
  return <React.Fragment>
    <NavBar />
    <Header />
    <main>
      <Experience />
      <Skills />
      <Projects />
      <Conclusion />
    </main>
    <Footer />
  </React.Fragment>
}

export default App;
