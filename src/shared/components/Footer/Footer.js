import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import Logo from "../../../assets/img/heroloLogo.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <img className="footer__left--logo" src={Logo} alt="logo" />
        <div className="footer__left--legal">
          &copy; 2020 by Samuel Wondem. All rights reserved.
        </div>
      </div>
      <div className="footer__right">
        <ul className="footer__right--icons">
          <li className="footer__right--icons--li">
            <FontAwesomeIcon
              className="footer__right--icons--li--icon"
              icon={faFacebookF}
            />
          </li>
          <li className="footer__right--icons--li">
            <FontAwesomeIcon
              className="footer__right--icons--li--icon"
              icon={faLinkedinIn}
            />
          </li>
          <li className="footer__right--icons--li">
            <FontAwesomeIcon
              className="footer__right--icons--li--icon"
              icon={faGithub}
            />
          </li>
      
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
