import React from 'react'
import './about.css'

function About() {

        return (
                <div class="section">
                        <div class="container">
                                <div class="content-section">
                                        <div class="title">
                                                <h2>Hi, I'm Blake Hyland</h2>
                                        </div>
                                        <div class="content">
                                                <h4>Web Developer</h4>
                                                <p>My name is Blake Hyland. I grew up in the great state of Texas, but I am currently located in Utah. I've
                                                        also had the privledge to live in Brazil and New York. Although I have a Master's Degree in Accounting,
                                                        my passion lies in web development. I am pursuing earning certificates in Full-Stack development by the
                                                        end of 2021. When i'm not busy improving myself in my coding journey, I enjoy playing soccer and
                                                        exploring the beautiful mountains of Utah.</p>

                                        </div>

                                </div>
                                <div class="image-section">
                                        <img className="resize" src={require("../../Assets/Profile.jpg").default}></img>
                                </div>
                        </div>
                </div>
        )
}

export default About

