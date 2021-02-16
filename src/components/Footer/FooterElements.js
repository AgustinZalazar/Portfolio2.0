import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 400px;
  background-color: #1C1D21;
`;

export const Content = styled.div`
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