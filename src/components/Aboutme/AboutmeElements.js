import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #252629;
`;
export const Content = styled.div`
  z-index: 10;
  display: flex;
  color: #fff;
  padding: 50px 200px;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    height: 100%;
    padding: 15px;
    align-items: center;
    align-content: center;
  }
`;
export const DivImg = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;
export const Img = styled.img`
  width: 500px;
  height: 500px;
  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
    align-self: center;
  }
`;
export const ContentText = styled.div`
  flex-direction: column;
  text-align: right;
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const Title = styled.h2`
  font-size: 45px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: #dda950;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;
export const Text = styled.p`
  padding: 15px 0 10px;
  font-size: 16px;
  line-height: 1.6;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
