import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import './Header.css'
import { MenuItems } from '../Navbar/MenuItems';




function Header({ setCurrentPage, XurrentTitle }) {

        const [currentTitle, setCurrentTitle] = useState(MenuItems[0].title)

        function renderTitle() {
                switch (currentTitle) {
                  case 'Projects':
                    return "Projects"
                  case 'Contact':
                    return "Contact Me"
                  case 'Resume':
                    return "Resume"
                  default:
                    return "About"
                }
              }


        return (
                <header>
                        <div className="hero-image">
                                <nav>
                                        <Navbar setCurrentPage={setCurrentPage} title='Blake Hyland' setCurrentTitle={setCurrentTitle} currentTitle={currentTitle} />
                                </nav>
                                <h1 className="hero-text">{renderTitle()}</h1>
                        </div>
                </header>
        )

}

export default Header