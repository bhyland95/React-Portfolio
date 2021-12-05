import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'

class Header extends Component {
       
        state = { clicked: false}
        
        handleClick = () => {
                this.setState({ clicked: !this.state.clicked})
        }
        
         render() {
                 return (
                         <header>
                                 <nav>
                                         <Navbar />
                                 </nav>
                         </header>
                 )
         }
 }

export default Header