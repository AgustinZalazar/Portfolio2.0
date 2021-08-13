import styled from "styled-components";
import WaveIMG from "../../images/wave2.png";
//Finished Works Layout

export const Container = styled.div`
  width: 100%;
  background-color: rgb(138, 139, 140);
  background-repeat: no-repeat;
  background-size: 100%;
  background-image: url(${WaveIMG});
`;
export const Wave = styled.img`
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100vw;
  z-index: 1;
  background-color: #8a8b8c;
`;
export const Title = styled.h2`
  font-size: 35px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: #dda950;
`;
export const Content = styled.div`
  /* position: absolute; */
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

export const Cards = styled.div`
  display: grid;
  width: 100%;
  margin-top: 50px;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-row-gap: 60px;
  @media screen and (max-width: 768px) {
    grid-gap: 40px;
  }
`;

export const CardStyled = styled.article`
  width: 300px;
  display: block;
  box-shadow: 10px 5px 40px 20px darken(#341cac, 5%);
  transition: 0.25s;
  border-radius: 8px;
  border: none;
  background-color: #1c1d21;
  justify-self: center;
  &:hover {
    box-shadow: 10px 5px 40px 20px darken(#341cac, 10%);
    cursor: pointer;
    transform: translate(8px, -8px);
    .button-primary {
      transform: translate(10px, 0);
    }
  }
`;

export const CardHeaderStyled = styled.img`
  height: 200px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
export const CardBodyStyled = styled.div`
  padding: 15px;
  background-color: #1c1d21;
  width: 100%;
  color: #FFF;
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
  background-color: #dda950;
  color: #fff;
  font-size: 15px;
  -webkit-transition: 0.25s;
  transition: 0.25s;
  border-radius: 5px;
  padding: 5px 20px;
`;
