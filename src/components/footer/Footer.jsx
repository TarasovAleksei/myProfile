import React from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaGithub, FaWhatsapp, FaTelegram,
} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF/>, link: "https://www.facebook.com/"},
    {Social: <FaGithub/>, link: "https://github.com/TarasovAleksei"},
    {Social: <FaWhatsapp/>, link: "https://www.instagram.com/"},
    {Social: <FaLinkedinIn/>, link: "https://twitter.com/"},
    {Social: <FaTelegram/>, link: "https://t.me/Aleksei_Tarasov/"},
];

const Footer = () => {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-md-6 my-2">
                    <div className="nav justify-content-center justify-content-md-start">
                        {SocialShare.map((val, i) => (
                            <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                                {val.Social}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="col-md-6 my-2 text-center text-md-end">
                    <p>
                        © {new Date().getFullYear()} copyright{" "}
                        all right reserved
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
