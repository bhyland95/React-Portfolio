import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Resume from './components/Resume'
import Contact from './components/Contact'
import Header from './components/Header/Header';
import Projects from './components/Projects'


function App() {


  return (
    <div>
        <Header />
        
      <main>
        <About />
        <Projects />
        <Contact />
        <Resume />
      </main>
    </div>

  );
}

export default App;
