import React from "react";
import { Container, Content, Title, TechContainer, Tech , TechImg, TechName } from "./TechElements";
import { SkillsData } from "../../data/Skills";
function Technologies() {
  return (
    <Container>
      <Content>
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
