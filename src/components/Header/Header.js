import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar'
import './Header.css'




function Header({ setCurrentPage, currentPage }) {

        


        return (
                <header>
                        <div className="hero-image">
                                <nav>
                                        <Navbar setCurrentPage={setCurrentPage} title='Blake Hyland' currentPage={currentPage} />
                                </nav>
                                
                        </div>
                </header>
        )

}

export default Header