import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <h4>What’s your story? Get in touch</h4>
        <p>
          Always available for freelancing if the right project comes along,
          Feel free to contact me.
        </p>

        <ul>
          <li className="media">
            <i className="icon icon-map"></i>
            <span className="media-body">
              129085 Moscow City , Russian Federation.
            </span>
          </li>


          <li className="media">
            <i className="icon icon-envelope"></i>
            <span className="media-body">tarasovas1988@mail.ru</span>
          </li>
          <li className="media">
            <i className="icon icon-phone"></i>
            <span className="media-body">+7 926 047 18 00</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ContactInfo;
