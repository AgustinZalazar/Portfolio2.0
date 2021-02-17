import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

export const Container = styled.div`
  width: 100vw;
  height: 400px;
  background-color: #1c1d21;
`;

export const Content = styled.div`
  z-index: 10;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 50px 200px;
  @media screen and (max-width: 768px) {
    padding: 25px 0px;
  }
`;
export const Title = styled.h3`
  font-weight: 500;
  text-decoration: underline;
  text-decoration-color: #dda950;
  margin-bottom: 15px;
`;

export const PreFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
export const Copyright = styled.div`
  text-align: center;
  color: #dda950;
`;

export const QuickLinks = styled.ul`
  list-style: none;
  height: 100%;
`;

export const QLItem = styled.li`
  height: 40px;
`;

export const Link = styled(LinkS)`
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #dda950;
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;

export const IconLinkedin = styled(SiLinkedin)`
  width: 25px;
  height: 25px;
  margin-bottom: 15px;
  &:hover {
    color: #dda950;
  }
`;

export const IconGithub = styled(SiGithub)`
  width: 25px;
  height: 25px;
  margin-bottom: 15px;
  &:hover {
    color: #dda950;
  }
`;

export const IconInstragram = styled(FiInstagram)`
  width: 25px;
  height: 25px;
  margin-bottom: 15px;
  &:hover {
    color: #dda950;
  }
`;
export const IconLink = styled.a`
  color: #fff;
`;
