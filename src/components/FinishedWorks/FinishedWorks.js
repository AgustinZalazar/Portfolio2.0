import React, { useState, useEffect } from "react";
import { Container, Wave, Content, Title, Cards } from "./FWElements";
// import Carousel from "react-elastic-carousel";
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

  return (
    <Container name="finishedworks">
      {/* <Wave src={WaveIMG} /> */}
      <Content>
        <Title>Trabajos Finalizados</Title>
        <Cards>
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
          </Cards>
      </Content>
    </Container>
  );
}

export default FinishedWorks;
