import React from "react";
import Particles from "react-particles-js";

const sliderContent = {
    name: "Alexey Tarasov",
    description: `Hello, I am a person who has a strong
    passion for programming.
    I have experience in creating SPA
    with React/Redux/TypeScript.`,
    btnText: "DOWNLOAD CV",
};

const SliderTwo = () => {
    return (
        <>
            <section
                id="home"
                className="home-banner home-banner-two"
                style={{
                    backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/IMG_20200708_202336.jpg"
                    })`,
                }}
            >
                <div className="frame-layout__particles">
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 30,
                                },
                                size: {
                                    value: 6,
                                },
                            },
                            interactivity: {
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                },
                            },
                        }}
                    />
                </div>
                <div className="container">
                    <div className="row full-screen align-items-center">
                        <div className="col-lg-12">
                            <div className="type-box">
                                <h6 data-aos="fade-up" data-aos-duration="1200">
                                    Hello, My name is
                                </h6>
                                <h1
                                    className="font-alt"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="100"
                                >
                                    {sliderContent.name}
                                </h1>
                                <div
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="200"
                                >
                                    <p className="loop-text lead"> Front-end developer</p>
                                </div>
                                <p
                                    className="desc"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="300"
                                >
                                    {sliderContent.description}
                                </p>
                                <div
                                    className="mt-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                    data-aos-delay="400"
                                >
                                    <a
                                        className="px-btn px-btn-white"
                                        href="img/resume.png"
                                        download
                                    >
                                        {sliderContent.btnText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SliderTwo;
