import React, {useState} from "react";
import Scrollspy from "react-scrollspy";
import {Link} from "react-router-dom";
import {
    FiUser,
    FiBriefcase,
    FiFileText,
    FiPhoneOutgoing,
} from "react-icons/fi";
import {FaHome} from "react-icons/fa";

const HeaderTwo = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <>
            <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                    <div className={click ? "active" : ""}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
            </div>
            <header
                className={
                    click
                        ? "header-left header-menu-style-two menu-open"
                        : "header-left header-menu-style-two"
                }
            >
                <div className="scroll-bar">
                    <div className="hl-top">
                        <div className="hl-logo">
                            <Link to="/myProfile">A</Link>
                        </div>
                    </div>
                    <Scrollspy
                        className="nav nav-menu"
                        items={["home", "about", "resume", "work", "contactus"]}
                        currentClassName="active"
                        offset={-30}
                    >
                        <li>
                            <a className="nav-link " href="#home" onClick={handleClick}>
                                <FaHome/>
                                <span className="item">Home</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#about" onClick={handleClick}>
                                <FiUser/>
                                <span className="item">About</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#resume" onClick={handleClick}>
                                <FiFileText/>
                                <span className="item">Resume</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#work" onClick={handleClick}>
                                <FiBriefcase/>
                                <span className="item">Work</span>
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="#contactus" onClick={handleClick}>
                                <FiPhoneOutgoing/>
                                <span className="item">Contact</span>
                            </a>
                        </li>
                    </Scrollspy>
                </div>
            </header>
        </>
    );
};

export default HeaderTwo;
