import React from "react";
import "./Footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="socialWrapper">
        <FaFacebookF className="icons" />
        <AiOutlineTwitter className="icons" />
        <FaLinkedinIn className="icons" />
        <FaInstagram className="icons" />
      </div>
    </div>
  );
};

export default Footer;
