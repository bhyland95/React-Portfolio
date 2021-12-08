import React from 'react'
import './resume.css'
function Resume() {

        return (
                <section>
                        <br />
                        <div className="download">
                                <a href="resume.pdf" download="">Click here to download my full resume</a>       

                        </div>
                <div>
                        <h2>Front-end Proficiencies</h2>
                        <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>responsive design</li>
                                <li>React</li>
                                <li>Bootstrap</li>

                        </ul>
                </div>
                        
                <div>
                        <h2>Back-end Proficiencies</h2>
                        <ul>
                                <li>APIs</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL, Sequelize</li>
                                <li>MongoDB, Mongoose</li>
                                <li>REST</li>
                                <li>GraphQL</li>

                        </ul>
                </div>
                </section>
        )
}

export default Resume