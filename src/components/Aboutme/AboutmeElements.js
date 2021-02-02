import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #252629;
  justify-content: center;
  align-items: center;
`;
export const Content = styled.div`
  z-index: 10;
  display: flex;
  color: #fff;
  padding: 50px 200px;
`;
export const DivImg = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const Img = styled.img`
  width: 500px;
  height: 500px;
`;
export const ContentText = styled.div`
  flex-direction: column;
  text-align: right;
`;
export const Title = styled.h2`
  font-size: 45px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: #dda950;
`;


export const Text = styled.p`
  padding: 15px 0 10px;
  font-size: 16px;
  line-height: 1.6;
`;


