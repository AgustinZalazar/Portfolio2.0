import styled from "styled-components/macro";
import Lottie from 'react-lottie'

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  background-color: #1c1d21;
  @media screen and (max-width: 768px) {
  }
`;

export const HeroIMG = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
  width: 100%;
  color: #fff;
  padding: 200px;
  @media screen and (max-width: 1350px) {
    flex-direction: column;
    padding: 0;
    align-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const HeaderImg = styled(Lottie)`
  width: 600px;
  height: 600px;
  z-index: 5;
  @media screen and (max-width: 600px) {
    width: 250px;
    height: 250px;
    margin-top: 20px;
  }
  @media screen and (min-width: 600px ) and (max-width : 1600px) {
    width: 400px;
    height: 400px;
    margin-top: 20px;
  }
`;

export const Wave = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100vw;
  z-index: 1;
`;