import React from "react";
import "./socialLinks.scss";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { RiTiktokLine } from "react-icons/ri";

const SocialLinks = () => {
  return (
    <div className="social-container">
      <a href="https://instagram.com/orilerestaurantandbar" className="social">
        <FaInstagram />
      </a>

      <a href="https://www.tiktok.com/@orilerestobar" className="social">
        <RiTiktokLine />
      </a>

      <a href="https://wa.me/09136800000" className="social">
        <FaWhatsapp />
      </a>

      <a href="https://twitter.com/Orilerestobar" className="social">
        <FaXTwitter />
      </a>

      <a href="mailto:Orilerestaurantandbar@gmail.com" className="social">
        <HiOutlineMail />
      </a>
    </div>
  );
};

export default SocialLinks;
