import styled from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  z-index: 10000;
  position: fixed;
  width: 100%;
  top: 0;
  background: #1C1D21;
  @media screen and (max-width: 768px) {
    transition: 0.8 all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  max-width: 1550px;
`;

export const NavMenuLinkR = styled(LinkR)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  padding: 0 1rem;
  height: 100;
  cursor: pointer;
  text-decoration: none;
`;

export const Logo = styled.img`
  display: flex;
  align-items: center;
  padding: 0;
  max-height: 65px;
  cursor: pointer;
  text-decoration: none;
`;

export const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 105%);
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavMenuLink = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #DDA950;
  }
`;
