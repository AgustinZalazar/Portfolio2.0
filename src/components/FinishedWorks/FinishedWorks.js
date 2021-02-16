import React from "react";
import { Container, Wave, Content, Title } from "./FWElements";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import WaveIMG from "../../images/wave2.png";
import { CardsData } from "../../data/cards";
import "../styles/Carousel.css";

function FinishedWorks() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <Container name="finishedworks">
      <Wave src={WaveIMG} />
      <Content>
        <Title>Trabajos Finalizados</Title>
        <Carousel breakPoints={breakPoints}>
          {CardsData.map((web, index) => (
            <Item
              key={index}
              title={web.title}
              text={web.text}
              img={web.img}
              link={web.link}
            />
          ))}
        </Carousel>
      </Content>
    </Container>
  );
}

export default FinishedWorks;
