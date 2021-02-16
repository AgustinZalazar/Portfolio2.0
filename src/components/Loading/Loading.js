import React from "react";
import { Facebook } from "react-spinners-css";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position:fixed;
  top: 0;
  left: 0;
  background-color: #1c1d21; 
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

function Loading() {
  return (
    <Container>
      <Facebook color="#dda950" />
    </Container>
  );
}

export default Loading;
