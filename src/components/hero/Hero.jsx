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
          { image: "/hero-bg.jpg", speed: -10 },
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Veritatis temporibus praesentium soluta assumenda delectus.
              Doloribus nostrum repudiandae assumenda, ullam, sint, ipsam id
              error totam inventore laboriosam explicabo eveniet blanditiis?
              Fugit tempora nostrum inventore maxime odio ducimus molestiae
              necessitatibus quas distinctio.
            </p>
          </div>
        </div>
      </ParallaxBanner>
    </div>
  );
};

export default Hero;
