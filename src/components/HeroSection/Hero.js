import React from "react";
import {HeroSection, HeroIMG, HeroContent, Wave, HeaderImg} from './HeroElements'

// import SgvIMG from "../../images/Website-Creator-bro.png";
import WaveSVG from "../../images/wavepng.png";
import HeaderAnimation from '../../assets/lotties/header_animation.json'

import TextHero from "./TextHero";  

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  },animationData: HeaderAnimation
};
export const Hero = () => {
  return (
    <HeroSection name="home">
      <HeroIMG>
        <HeroContent>
          <TextHero />
          <HeaderImg options={defaultOptions}/>
        </HeroContent>
        <Wave src={WaveSVG} />
      </HeroIMG>
    </HeroSection>
  );
};
