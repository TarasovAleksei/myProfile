import React from "react";
import {
    FaFacebookF,
    FaTelegram,
    FaGithub,
    FaWhatsapp,
    FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF/>, link: "https://www.facebook.com/"},
    {Social: <FaGithub/>, link: "https://github.com/TarasovAleksei"},
    {Social: <FaWhatsapp/>, link: "https://www.instagram.com/"},
    {Social: <FaLinkedinIn/>, link: "https://twitter.com/"},
    {Social: <FaTelegram/>, link: "https://t.me/Aleksei_Tarasov/"},
];

const Social = () => {
    return (
        <div className="nav social-icons justify-content-center">
            {SocialShare.map((val, i) => (
                <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
                    {val.Social}
                </a>
            ))}
        </div>
    );
};

export default Social;
