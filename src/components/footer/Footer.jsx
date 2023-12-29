import React from "react";
import "./footer.scss";
import SocialLinks from "../socialLinks/SocialLinks";

const Footer = ({ theRef }) => {
  return (
    <div className="footer" ref={theRef}>
      <div className="contact">
        <p>
          <b>Address</b>
          <br />
          Orílé Restaurant and Bar
          <br />
          2, Ichie Chris,
          <br />
          Lekki Phase 1.
          <br />
          Lagos, Nigeria
          <br />
          <br />
          <b>Contacts</b>
          <br />
          Email:{" "}
          <a href="mailto:Orilerestaurantandbar@gmail.com">
            orilerestaurantandbar@gmail.com
          </a>
          <br />
          Phone: <a href="tel:+2349136800000">+234 913 680 0000</a>
          <br />
          Whatsapp: <a href="https://wa.me/+2349136800000">+234 913 680 0000</a>
          <br />
        </p>
      </div>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6437831947396!2d3.4619178!3d6.4397712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52b59d7a997%3A0x9714a3c6c936122b!2sOrile%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sng!4v1702042340149!5m2!1sen!2sng"
        // width="800"
        // height="600"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="Locatio"
      ></iframe>

      <div className="credit">
        <p>© Copyright 2023 O R I L E - All Rights Reserved</p>
        <SocialLinks />
      </div>
    </div>
  );
};

export default Footer;
