import React, {useState} from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import DarkModeToggle from "react-dark-mode-toggle";

import LogoBlanco from "../images/Logo(Blanco).png";
//import LogoMostaza from "../images/Logo(Mostaza).png";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 200px;
  z-index: 10;
  position: absolute;
  width: 100%;
  background: transparent;
`;

const NavLink = css`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100;
  cursor: pointer;
  text-decoration: none;
`;

const Logo = styled.img`
  display: flex;
  align-items: center;
  padding: 0;
  max-height: 65px;
  cursor: pointer;
  text-decoration: none;
`;
const MenuBars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    height: 25px;
    width: 25px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-55%, 70%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  color: #fff;
  ${NavLink}
`;

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  return (
    <Nav>
      <NavMenuLinks to="/">
        <Logo src={LogoBlanco} alt="logo" />
      </NavMenuLinks>
      <MenuBars />
      <NavMenu>
        <NavMenuLinks to="/">Home</NavMenuLinks>
        <NavMenuLinks to="/aboutme">About me</NavMenuLinks>
        <NavMenuLinks to="/finishedworks">Finished Works</NavMenuLinks>
        <NavMenuLinks to="/contact">Contact</NavMenuLinks>
        <DarkModeToggle
          onChange={setIsDarkMode}
          checked={isDarkMode}
          size={50}
        />
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
