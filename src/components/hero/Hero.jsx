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
          { image: "/hero-entry.jpeg", speed: -10 },
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
              <img src="/logo-final.png" alt="orile logo" />
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
              Orílé is a culture inclined afro-fusion restaurant focused on
              ethnic and contemporary cuisine.
              <br />
              <br />
              We boast of a spectacular list of signature cocktails, that cuts
              across a rich blend of classic flavors for every taste type.
              <br />
              <br />
              The Garden by Orílé is an outdoor dining area with a conducive and
              refreshing ambience with a well curated menu of mouth watering
              small plated dishes, platters for group dining and all kinds of
              drinks for every mood.
            </p>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Hero;
