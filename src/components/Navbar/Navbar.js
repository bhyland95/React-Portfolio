import React from "react";
import { MenuItems } from "./MenuItems"
import './Navbar.css'

function Navbar({ setCurrentPage, title, setCurrentTitle }) {



        return (
                <nav className="NavbarItems">
                        <h2 className="navbar-name">{title}</h2>
                        <a href="#" class="toggle-button">
                                <span class="bar"></span>
                                <span class="bar"></span>
                                <span class="bar"></span>
                        </a>

                        <ul className='nav-menu'>
                                {MenuItems.map((item, index) => {
                                        return (
                                                <li key={index}>
                                                        <a
                                                                className={item.cName}
                                                                href={item.url}
                                                                onClick={() => { setCurrentPage(item.title); setCurrentTitle(item.title) }}
                                                        // onClick={()=> setCurrentTitle(item.title)}
                                                        >
                                                                {item.title}
                                                        </a>
                                                </li>
                                        )
                                })}
                        </ul>
                </nav>
        )
}

export default Navbar