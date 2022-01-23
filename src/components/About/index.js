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
                                                <p>My name is Blake Hyland. I am a web developer with a Master’s degree in accountancy. Recently, I earned a certificate in Full Stack Development from the University of Utah with skills in JavaScript, CSS, React.js, and database management. I am passionate about learning new technologies and techniques to perfect my expertise. I am known as an innovative problem solver and an excellent team member. During a recent project, I applied aspects of GraphQL and UX to help users keep track of online subscriptions. Check it out it my portfolio, it is called Subscripzen. I am seeking mentorship and the opportunity to utilize my analytical, technical, and programming skills to thrive as a software engineer. </p>

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

