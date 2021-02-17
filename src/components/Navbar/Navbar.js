import React, { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import {
  Nav,
  NavbarContainer,
  NavMenuLinkR,
  NavMenuLink,
  Logo,
  MenuBars,
  NavMenu,
  NavItem,
} from "./NavbarElements";

import LogoBlanco from "../../images/Logo(Blanco).png";
//import LogoMostaza from "../../images/Logo(Mostaza).png";

const Navbar = ({ toggle }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  return (
    <Nav>
      <NavbarContainer>
        <NavMenuLinkR to="/">
          <Logo src={LogoBlanco} alt="logo" />
        </NavMenuLinkR>
        <MenuBars onClick={toggle} />
        <NavMenu>
          <NavItem>
            <NavMenuLink
              spy={true}
              activeClass="active"
              to="home"
              smooth={true}
              
              duration={1000}
            >
              Inicio
            </NavMenuLink>
          </NavItem>
          <NavItem>
            <NavMenuLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Sobre mi
            </NavMenuLink>
          </NavItem>
          <NavItem>
            <NavMenuLink
              spy={true}
              activeClass="active"
              to="finishedworks"
              smooth={true}
              duration={1000}
            >
              Trabajos finalizados
            </NavMenuLink>
          </NavItem>
          <NavItem>
            <NavMenuLink
              spy={true}
              activeClass="active"
              to="Contact"
              smooth={true}
              duration={1000}
            >
              Contacto
            </NavMenuLink>
          </NavItem>
        </NavMenu>
        <NavMenu>
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={50}
          />
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
