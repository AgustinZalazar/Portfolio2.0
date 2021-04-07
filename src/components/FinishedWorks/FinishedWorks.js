import React, { useState, useEffect } from "react";
import { Container, Wave, Content, Title } from "./FWElements";
import Carousel from "react-elastic-carousel";
import Item from "./Item.js";
import WaveIMG from "../../images/wave2.png";
import sanityClient from "../../data/Client";
import "../styles/Carousel.css";

function FinishedWorks() {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          descripcion,
          url,
          mainImage{
            asset->{
            _id,
            url
          }
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
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
          {postData &&
            postData.map((post, index) => (
              <Item
                key={index}
                title={post.title}
                link={post.url}
                img={post.mainImage.asset.url}
                text={post.descripcion} 
              />
            ))}
        </Carousel>
      </Content>
    </Container>
  );
}

export default FinishedWorks;
