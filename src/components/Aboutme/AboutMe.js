import React, {useEffect} from "react";
import {
  Container,
  Content,
  Title,
  Text,
  DivImg,
  Img,
  ContentText
} from "./AboutmeElements";
import Aos from 'aos';
import "aos/dist/aos.css"
import imgAboutMe from "../../images/imgAboutMe.png";

function AboutMe() {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])
  return (
    <Container name="about">
      <Content>
        <DivImg>
          <Img src={imgAboutMe} data-aos="fade-right"/>
        </DivImg>
        <ContentText  data-aos="fade-left">
          <Title>Sobre mi</Title>
          <Text>
            Hola mi nombre es Agustin Zalazar tengo 21 años, a los 18 años
            comence la carrera de Ingeniera en sistemas informaticos en el mismo
            año obtuve una pasantia de desarrollador web en la facultad en la
            que estoy realizando la carrera, actualmente estoy en mi cuarto año
            en la carrera.
          </Text>
          <Text>
            En la pasantia que realice en la Universidad Abierta Interamericana
            desarrolle junto con un diseñador grafico 5 paginas que actualmente
            se encuentran publicadas 4 paginas, estas paginas estan
            desarrolladas en un gestor de contenido llamado Umbraco, para que el
            cliente pueda modificar datos sin tener que recurrir a el/los
            desarrolladores.
          </Text>
          <Text>
            Actualmente estoy trabajando como desarrollador de integraciones en
            la empresa Epidata.
          </Text>
        </ContentText>
      </Content>
    </Container>
  );
}

export default AboutMe;
