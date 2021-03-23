import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 500px;
  background-color: #8a8b8c;
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 35px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: #dda950;
`;
export const Content = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 90px 200px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding: 25px 0px;
  }
`;
export const TechContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding-top: 80px;
  @media screen and (max-width: 768px) {
    padding-top: 50px;
    flex-direction: column;
  }
`;
export const Tech = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100px;
    height: 100px;
    align-items: center;
  }
`;
export const TechImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const TechName = styled.h4`
  font-weight: 300;
  padding-top: 10px;
`;