import React from "react";
import {
  CardBodyStyled,
  CardHeaderStyled,
  CardStyled,
  BodyContent,
  Btn,
} from "./FWElements";

function Card({ title, text, img, link }) {
  return (
    <CardStyled>
      <CardHeaderStyled src={img} />
      <CardBodyStyled>
        <h2>{title}</h2>
        <BodyContent>{text}</BodyContent>
        <Btn>
          <a href={link} target="blank" style={{'color': 'white', 'textDecoration': 'none'}}>
            Ver mas
          </a>
        </Btn>
      </CardBodyStyled>
    </CardStyled>
  );
}
export default Card;
