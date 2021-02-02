import React from "react";
import styled from "styled-components";


const CardStyled = styled.article`
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
const CardHeaderStyled = styled.header`
  height: 150px;
  width: 100%;
  padding: 15px;
  width: 100%;
  background-size: cover;
  color: #fff;
`;
const CardBodyStyled = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 100%;
  color: #10161a;
  height: 200px;
  border-radius: 8px;
`;
const BodyContent = styled.p`
  padding-bottom: 40px;
  font-size: 13px;
  line-height: 1.8;
`;

const Btn = styled.button`
  border: none;
  box-shadow: none;
  font-family: inherit;
  background-color: transparent;
  color: #dda950;
  font-size: 15px;
  transition: 0.25s;
`;

function Card({ title, text, img, link }) {
  return (
    <CardStyled>
      <CardHeaderStyled style={{ backgroundImage: `url(${img})` }} />
      <CardBodyStyled>
        <h2>{title}</h2>
        <BodyContent>{text}</BodyContent>
        <Btn>
          <a href={link} target="blank">
           Ver mas
          </a>
        </Btn>
      </CardBodyStyled>
    </CardStyled>
  );
}
export default Card;
