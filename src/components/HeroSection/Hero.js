import React from "react";
import {HeroSection, HeroIMG, HeroContent, Wave, HeaderImg} from './HeroElements'

import SgvIMG from "../../images/Website-Creator-bro.png";
import WaveSVG from "../../images/wavepng.png";
import TextHero from "./TextHero";


export const Hero = () => {
  return (
    <HeroSection name="home">
      <HeroIMG>
        <HeroContent>
          <TextHero />
          <HeaderImg src={SgvIMG} />
        </HeroContent>
        <Wave src={WaveSVG} />
      </HeroIMG>
    </HeroSection>
  );
};
