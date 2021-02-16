import styled from "styled-components";

//Finished Works Layout

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #252629;
  position: relative;
`;
export const Wave = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  height: 450px;
  z-index: 1;
  background-color: #8a8b8c;
  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;
export const Title = styled.h2`
  font-size: 35px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: #dda950;
`;
export const Content = styled.div`
  position: absolute;
  z-index: 10;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 100px 200px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 25px 0px;
  }
`;

// Cards
export const CardStyled = styled.article`
  width: 280px;
  display: block;
  margin: 60px auto;
  box-shadow: 10px 5px 40px 20px darken(#341cac, 5%);
  transition: 0.25s;
  background-color: #fff;
  border-radius: 5px;
  &:hover {
    box-shadow: 10px 5px 40px 20px darken(#341cac, 10%);
    cursor: pointer;

    .button-primary {
      transform: translate(10px, 0);
    }
  }
`;
export const CardHeaderStyled = styled.header`
  height: 150px;
  width: 100%;
  padding: 15px;
  width: 100%;
  background-size: cover;
  color: #fff;
`;
export const CardBodyStyled = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 100%;
  color: #10161a;
  height: 200px;
  border-radius: 8px;
`;
export const BodyContent = styled.p`
  padding-bottom: 40px;
  font-size: 13px;
  line-height: 1.8;
`;

export const Btn = styled.button`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: #dda950;
  font-size: 15px;
  transition: 0.25s;
`;
