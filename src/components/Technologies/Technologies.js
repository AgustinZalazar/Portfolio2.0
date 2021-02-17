import React, {useEffect} from "react";
import { Container, Content, Title, TechContainer, Tech , TechImg, TechName } from "./TechElements";
import { SkillsData } from "../../data/Skills";
import Aos from 'aos';
import "aos/dist/aos.css"

function Technologies() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <Container>
      <Content data-aos="fade">
        <Title>Tecnologias que utilizo</Title>
        <TechContainer>{SkillsData.map((skill, index) => (
          <Tech key={index}>
              <TechImg  src={skill.svg} />
              <TechName> { skill.name } </TechName>
          </Tech>
        ))}</TechContainer>
      </Content>
    </Container>
  );
}

export default Technologies;
