import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import GlobalStyle from "../GlobalStyles";
import { Hero } from "./HeroSection/Hero";
import AboutMe from "./Aboutme/AboutMe";
import FinishedWorks from "./FinishedWorks/FinishedWorks";
import Sidebar from "./Sidebar/Sidebar";
import Technologies from "./Technologies/Technologies";
import Contact from './Contact/Contact'

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <GlobalStyle />
      <Sidebar toggle={toggle} isOpen={isOpen}/>
      <Navbar toggle={toggle}/>
      <Hero />
      <AboutMe/>
      <FinishedWorks/> 
      <Technologies/>
      <Contact />
    </>
  );
}

export default App;
