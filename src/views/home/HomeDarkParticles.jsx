import React from "react";
import Header from "../../components/header/HeaderTwo";
import Slider from "../../components/slider/SliderThree";
import About from "../../components/about/AboutTwo";
import Resume from "../../components/resume/Resume";
import Portfolio from "../../components/portfolio/Portfolio";
import Contact from "../../components/contact/Contact";
import ContactInfo from "../../components/contact/ContactInfo";
import Map from "../../components/contact/Map";
import Footer from "../../components/footer/Footer";
import useDocumentTitle from "../../components/useDocumentTitle";

const HomeLightSidebarTwo = () => {
    useDocumentTitle("Tarasov_Alexey_portfolio");
    return (
        <div className="main-left theme-dark">
            <Header/>
            <Slider/>
            <About/>
            <Resume/>
            <section id="work" className="section theme-light dark-bg">
                <div className="container">
                    <div className="title">
                        <h3>My Portfolio.</h3>
                    </div>
                    <Portfolio/>
                </div>
            </section>
            <section id="contactus" className="section theme-light dark-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-xl-4 m-15px-tb">
                            <ContactInfo/>
                        </div>
                        <div className="col-lg-7 ml-auto m-15px-tb  ">
                            <div className="contact-form">
                                <h4>Say Something</h4>
                                <Contact/>
                            </div>
                        </div>
                        <div className="col-12">
                            <Map/>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer white">
                <div className="container">
                    <Footer/>
                </div>
            </footer>
        </div>
    );
};

export default HomeLightSidebarTwo;
