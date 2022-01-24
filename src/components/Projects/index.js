import React from 'react'
import './Projects.css'

function Projects() {

        return (
                <section id="projects" class="Portfolio">

                <div class="myProjects">
                    <div class="project-container">
                        <div className='project'>
                            <a class="secondary image1" href="https://obscure-stream-43810.herokuapp.com/" target="_blank">
                                <div class="project-display ">
                                    <div class="project-title">
                                        <h3>Shop-Shop-Shop</h3>
                                        <a className="github-link" href='https://github.com/bhyland95/Project1' target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </a>
                            <p>This app is an example of an e-commerce application. It features a landing page with multiple products, a shopping cart that can be used to keep track of items users want to buy, and uses Stripe for a payment processor. It was built using the MERN stack.</p>
                        </div>

                        <div className='project'>
                            <a class="secondary image2" href="https://quiet-journey-83566.herokuapp.com/" target="_blank">
                                <div class="project-display">
                                    <div class="project-title">
                                        <h3>Ethical Social Media</h3>
                                        <a className="github-link" href='https://github.com/bhyland95/Ethical-Social-Media' target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </a>
                            <p>This application is a whimsical take on social media. The app lets users rate other users so that a person can know what others are thinking about them. A user can login, create a profile, be rated, and rate others. A user can rate anyone on any category. It was built using MySQL, JavaScipt, and handlebars. </p>
                        </div>

                        <div className='project'>
                            <a class="secondary image3" href="https://peaceful-gorge-13766.herokuapp.com/" target="_blank">
                                <div class="project-display">
                                    <div class="project-title">
                                        <h3>SubscripZen</h3>
                                        <a className="github-link" href='https://github.com/bhyland95/Subscripzen' target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </a>
                            <p>This was designed for mobile view. It's an application designed to help users keep track of all of their subscriptions. The user can add, update or delete their subscriptions to help keep track of how much money they are spending monthly. It was built using the MERN stack.</p>
                        </div>

                        <div className='project'>
                            <a class="secondary image4" href="https://bhyland95.github.io/photo-port/" target="_blank">
                                <div class="project-display">
                                    <div class="project-title">
                                        <h3>Photo Port</h3>
                                        <a className="github-link" href='https://github.com/bhyland95/photo-port' target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </a>
                            <p>This application was built to display a portfolio of photos. Users can filter photos by category and click on photos for an enlarged view. It is a single-page application built using React.</p>
                        </div>

                        <div className='project'>
                            <a class="secondary image5" href="https://bhyland95.github.io/food-festival/" target="_blank">
                                <div class="project-display">
                                    <div class="project-title">
                                        <h3>Food Festival</h3>
                                        <a className="github-link"  href='https://github.com/bhyland95/food-festival' target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </a>
                            <p>This application is a front-end webpage for a food-festival. It uses progressive web application features to give users an optimal experience. The app is available to use offline. It was built using Javascript.</p>
                        </div>

                        <div className='project'>
                            <a class="secondary image6" href="https://quiet-earth-87101.herokuapp.com/" target="_blank">
                                <div class="project-display">
                                    <div class="project-title">
                                        <h3>Deep Thoughts</h3>
                                        <a className="github-link"  href='https://github.com/bhyland95/deep-thoughts' target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                </div>
                            </a>
                            <p>This application is a take on a simple social media website. Users are able to create their own account and then are able to share their thoughts with others, comment on other people's thoughts, and add freinds. This application was built using the MERN stack</p>
                        </div>


                    </div>
                </div>
            </section>
        )
}

export default Projects