import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Resume from './components/Resume'
import Contact from './components/Contact'
import Header from './components/Header/Header';
import Projects from './components/Projects'
import { MenuItems } from './components/Navbar/MenuItems';
import Navbar2 from './components/Nav';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './components/Footer/Footer';



function App() {

  const [currentPage, setCurrentPage] = useState(MenuItems[0].title)

  function renderPage() {
    switch (currentPage) {
      case 'Projects':
        return <Projects />
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <About />
    }
  }

  


  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>

  );
}

export default App;
