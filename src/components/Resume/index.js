import React from 'react'
import './resume.css'
import resume from '../../Assets/resume.pdf'

function Resume() {

        return (
                <section>
                        <br />
                        <div className="download">
                                <a className='resumeLink' href={resume} download><strong>Download my Resume!</strong></a>

                        </div>
                        <div>
                                <h2>Front-end Proficiencies</h2>
                                <ul className="skills">
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
                                <ul className="skills">
                                        <li>APIs</li>
                                        <li>Node</li>
                                        <li>Express</li>
                                        <li>MySQL, Sequelize</li>
                                        <li>MongoDB, Mongoose</li>
                                        <li>REST</li>
                                        <li>GraphQL</li>
                                        <br></br>

                                </ul>
                        </div>
                </section>
        )
}

export default Resume