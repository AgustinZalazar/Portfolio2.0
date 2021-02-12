import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import WaveIMG from "../../images/wave2.png";
import { CardsData } from "../../data/cards";
import '../styles/Carousel.css';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #252629;
  position: relative;
  
`;
const Wave = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 450px; 
  z-index: 1;
  background-color: #8a8b8c;
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
const Title = styled.h2`
  font-size: 35px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: #dda950;
`;
const Content = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 50px 200px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 25px 0px;
  }
`;

function FinishedWorks() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]
  return (
    <Container name="finishedworks">
      <Wave src={WaveIMG} />
      <Content>
        <Title>Trabajos Finalizados</Title>
        <Carousel breakPoints={breakPoints}>
          {CardsData.map((web, index) => (
            <Item key={index} title={web.title} text={web.text} img={web.img} link={web.link} />
          ))}
        </Carousel>
      </Content>
    </Container>
  );
}

export default FinishedWorks;
