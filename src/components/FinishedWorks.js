import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import WaveIMG from "../images/wave2.png";
import { CardsData } from "../data/cards";

const Container = styled.div`
  width: 100vw;
  height: 700px;

  background-color: #8a8b8c;
  position: absolute;
`;
const Wave = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
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
`;

function FinishedWorks() {
  return (
    <Container>
      <Wave src={WaveIMG} />
      <Content>
        <Title>Trabajos Finalizados</Title>
        <Carousel itemsToShow={4}>
          {CardsData.map((web, index) => (
            <Item key={index} title={web.title} text={web.text} img={web.img} link={web.link} />
          ))}
        </Carousel>
      </Content>
    </Container>
  );
}

export default FinishedWorks;
