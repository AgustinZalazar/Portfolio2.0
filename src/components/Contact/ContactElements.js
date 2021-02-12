import styled from "styled-components";

export const ContainerContact = styled.div`
  width: 100vw;
  height: 700px;
  background-color: #8a8b8c;
`;

export const Title = styled.h2`
  font-size: 35px;
  text-decoration: underline;
  text-decoration-style: solid;
  text-decoration-color: #dda950;
`;
export const ContentContact = styled.div`
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

export const Inputs = styled.input`
  padding: 0 0.5rem;
  width: 100%;
  height: 2.5rem;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
  margin-bottom: 10px;
`;
export const Form = styled.form`
  margin: 3rem auto 0;
  width: 35rem;
  text-align: left;
`;
export const Error = styled.p`
  margin-top: 0.5rem;
  color: #dda950;
`;
export const Label = styled.label`
  display: block;
  color: #fff;
`;
export const TextArea = styled.textarea`
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
  height: 5rem;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const InputButton = styled.input`
  height: 2.5rem;
  width: 100%;
  font-size: 1rem;
  color: #fff;
  background: #dda950;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
`;
