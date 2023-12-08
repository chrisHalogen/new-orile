import React, { useRef } from "react";
import "./global.scss";
import {
  Admission,
  CtaSection,
  Footer,
  GridSection,
  Hero,
  Menu,
  Safety,
  Walkins,
} from "./components";

const App = () => {
  const aboutRef = useRef(null);
  const menuRef = useRef(null);
  const rsvpRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToAbout = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToMenu = () => {
    window.scrollTo({
      top: menuRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToRSVP = () => {
    window.scrollTo({
      top: rsvpRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const scrollToContact = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="main">
      <Hero
        toAbout={scrollToAbout}
        toMenu={scrollToMenu}
        toRSVP={scrollToRSVP}
        toContact={scrollToContact}
      />
      <GridSection theRef={aboutRef} />
      <CtaSection toMenu={scrollToMenu} toContact={scrollToContact} />
      <Walkins theRef={rsvpRef} />
      <Menu theRef={menuRef} />
      <Admission />
      <Safety />
      <Footer theRef={contactRef} />
    </div>
  );
};

export default App;
