import React from "react";
import Social from "../Social";
import Services from "../service/Service";
import myPhoto from '../../assets/img/myPhoto2.jpg'

const AboutTwo = () => {
    return (
        <>
            <section id="about" className="section theme-light dark-bg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="about-me">
                                <div className="img">
                                    <div className="img-in">
                                        <img src={myPhoto} alt="about image"/>
                                    </div>
                                    <Social/>
                                </div>
                                <div className="info">
                                    <p>Front-end developer</p>
                                    <h3>Alexey Tarasov</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 ml-auto">
                            <div className="about-info">
                                <div className="title">
                                    <h3>Biography</h3>
                                </div>
                                <div className="about-text">
                                    <p>
                                        Hello, I am a person who has a strong
                                        passion for programming.
                                        I have experience in creating SPA
                                        with React/Redux/TypeScript.
                                        Now I am improving my skills in this
                                        direction and expanding them with
                                        new technologies. I'm planning to
                                        study Node.js because my next focus
                                        is to become a Full-Stack Developer.
                                        And also I have an interest in
                                        boosting my English to C1 level.
                                        I spend my leisure time on CodeWars
                                        or speaking with native English
                                        speakers.
                                        Open to your suggestions.
                                    </p>
                                </div>
                                <div className="info-list">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <label>Name: </label>
                                                    <span>Alexey Tarasov</span>
                                                </li>
                                                <li>
                                                    <label>Birthday: </label>
                                                    <span>27th May 1988</span>
                                                </li>
                                                <li>
                                                    <label>Age: </label>
                                                    <span>33 years</span>
                                                </li>
                                                <li>
                                                    <label>Address: </label>
                                                    <span>Moscow</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <label>Phone: </label>
                                                    <span>(+7) 926 047 18 00</span>
                                                </li>
                                                <li>
                                                    <label>Email: </label>
                                                    <span>tarasovas1988@mail.ru</span>
                                                </li>
                                                <li>
                                                    <label>Telegram: </label>
                                                    <span>@Aleksei_Tarasov</span>
                                                </li>
                                                <li>
                                                    <label>Freelance: </label>
                                                    <span>Available</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="separated"

                    ></div>
                    <div className="title">
                        <h3>What I do?</h3>
                    </div>
                    <Services/>


                </div>
            </section>
        </>
    );
};

export default AboutTwo;
