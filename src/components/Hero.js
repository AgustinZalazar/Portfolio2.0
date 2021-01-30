import React from "react";
import styled from "styled-components/macro";

import SgvIMG from "../images/Website-Creator-bro.png";
import WaveSVG from '../images/wavepng.png'
import TextHero from "./TextHero";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;
const BigHero = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroIMG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div `
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: row;
    width: 100%;
    color: #FFF;
    padding: 200px;
`;
const IMG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-color: #1C1D21;
`;
const HeaderImg = styled.img`
    width: 600px;
    height: 600px;
    z-index: 5;
`;

const Wave = styled.img`
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100vw;
    z-index: 1;
`;
export const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <BigHero>
          <HeroIMG>
            <IMG  />
            <HeroContent>
                <TextHero />
                <HeaderImg src={ SgvIMG } />
            </HeroContent>
            <Wave src={ WaveSVG } />
          </HeroIMG>
        </BigHero>
      </HeroWrapper>
    </HeroSection>
  );
};
