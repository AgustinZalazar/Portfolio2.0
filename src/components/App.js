import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import GlobalStyle from "../GlobalStyles";
import { Hero } from "./HeroSection/Hero";
import AboutMe from "./Aboutme/AboutMe";
import FinishedWorks from "./FinishedWorks/FinishedWorks";
import Sidebar from "./Sidebar/Sidebar";
import Technologies from "./Technologies/Technologies";
import Contact from "./Contact/Contact";
import LoadingComp from "../components/Loading/Loading";
import './styles/app.css';
import Footer from "./Footer/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : (
        <>
          <GlobalStyle />
          <Sidebar toggle={toggle} isOpen={isOpen} />
          <Navbar toggle={toggle} />
          <Hero />
          <AboutMe />
          <FinishedWorks />
          <Technologies />
          <Contact />
          <Footer/>
        </>
      )}
    </>
  );
}

export default App;
