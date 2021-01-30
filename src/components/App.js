import "./styles/App.css";
import Navbar from "./Navbar";
import GlobalStyle from "../GlobalStyles";
import { Hero } from "./Hero";
import AboutMe from "./AboutMe";
import FinishedWorks from "./FinishedWorks";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <AboutMe/>
      <FinishedWorks/>
    </>
  );
}

export default App;
