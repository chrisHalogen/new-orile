import React, { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import "./hero.scss";
import { IoMenu } from "react-icons/io5";
import { CgClose } from "react-icons/cg";

const Hero = ({ toAbout, toMenu, toRSVP, toContact }) => {
  const [toggle, setToggle] = useState(false);

  const toggleMobile = () => {
    setToggle(!toggle);
  };

  const goDown = (value) => {
    toggle && setToggle(false);

    if (value === 1) toAbout();
    if (value === 2) toMenu();
    if (value === 3) toRSVP();
    if (value === 4) toContact();
  };

  return (
    <div className="container-body">
      <ParallaxBanner
        layers={[
          { image: "/hero.jpeg", speed: -10 },
          //   {
          //     speed: -15,
          //     children: (
          //       <div className="">
          //         <h1 className="text">Hello World!</h1>
          //       </div>
          //     ),
          //   },
        ]}
        className="bg-container"
      >
        <div className="bg-container">
          <div className="navbar">
            <div className="logo-container">
              <img src="/logo.png" alt="orile logo" />
            </div>
            <div className="hamburg-icon" id="hamburg">
              <IoMenu onClick={toggleMobile} />
            </div>
            <nav className={toggle ? "open" : ""}>
              <div className="close-icon" id="close">
                <CgClose onClick={toggleMobile} />
              </div>
              <ul>
                <li>
                  <a href="#about" onClick={() => goDown(1)}>
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#menu" onClick={() => goDown(2)}>
                    MENU
                  </a>
                </li>
                <li>
                  <a href="#reservation" onClick={() => goDown(3)}>
                    RESERVATIONS
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => goDown(4)}>
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="hero-text">
            <p>
              Welcome to our upscale restaurant and bar in the heart of Lekki,
              where we blend luxury with incredible food and drinks. Our
              talented chefs create dishes using the best ingredients, ensuring
              every bite is a delight. Step into an elegant atmosphere designed
              for memorable dining experiences, whether you're enjoying a cozy
              dinner, celebrating a special occasion, or sipping on expertly
              crafted cocktails at our bar. We're dedicated to providing
              top-notch service and exceptional cuisine, making each visit a
              celebration of great flavors and unforgettable moments. Join us in
              this culinary haven, where extraordinary tastes meet everyday
              enjoyment.
            </p>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Hero;
