import React from "react";
import {
    FaFacebookF,
    FaTelegram,
    FaGithub,
    FaWhatsapp,
    FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
    {Social: <FaFacebookF/>, link: "https://www.linkedin.cn/in/alexey-tarasov-13a400222/"},
    {Social: <FaGithub/>, link: "https://github.com/TarasovAleksei"},
    {Social: <FaWhatsapp/>, link: "https://wa.me/79260471800"},
    {Social: <FaLinkedinIn/>, link: "https://www.linkedin.cn/in/alexey-tarasov-13a400222/"},
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
