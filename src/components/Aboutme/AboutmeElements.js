import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #252629;
  display: flex;
  align-items: center;
`;
export const Content = styled.div`
  display: flex;
  gap: 20px;
  color: #fff;
  padding: 50px 200px;
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    height: 100%;
    padding: 100px 200px;
    align-items: center;
    align-content: center;
  }

  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`;
export const DivImg = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;
export const Img = styled.img`
  width: 100%;
  max-width: 500px;
  min-width: 320px;
  height: auto;
  @media screen and (max-width: 1200px) {
    height: auto;
    align-self: center;
  }
`;
export const ContentText = styled.div`
  flex-direction: column;
  text-align: right;
  @media screen and (max-width: 1200px) {
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
