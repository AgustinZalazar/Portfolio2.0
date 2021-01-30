import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 500px;
  display: flex;
  text-align: right;
  background-color: #252629;
  justify-content: right;
`;
const Title = styled.h2`
  font-size: 35px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color:#DDA950;
`;
const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  width: 60%;
  color: #fff;
  padding: 50px 200px;
  justify-content: right;
`;

const Text = styled.p`
  padding: 15px 0 10px;
  font-size: 16px;
  line-height: 1.6;
`;
function AboutMe() {
  return (
    <Container>
      <Content>
        <Title>Sobre mi</Title>
        <Text>
          Hola mi nombre es Agustin Zalazar tengo 21 años, a los 18 años comence
          la carrera de Ingeniera en sistemas informaticos en el mismo año
          obtuve una pasantia de desarrollador web en la facultad en la que
          estoy realizando la carrera, actualmente estoy en mi cuarto año en la
          carrera.
        </Text>
        <Text>
          En la pasantia que realice en la Universidad Abierta Interamericana
          desarrolle junto con un diseñador grafico 5 paginas que actualmente se
          encuentran publicadas 4 paginas, estas paginas estan desarrolladas en
          un gestor de contenido llamado Umbraco, para que el cliente pueda
          modificar datos sin tener que recurrir a el/los desarrolladores.
        </Text>
        <Text>
          Actualmente estoy trabajando como desarrollador de integraciones en la
          empresa Epidata.
        </Text>
        
      </Content>
    </Container>
  );
}

export default AboutMe;
