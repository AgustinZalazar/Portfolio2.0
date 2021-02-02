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

const Navbar = ({toggle}) => {
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
            <NavMenuLink to="/">Home</NavMenuLink>
          </NavItem>
          <NavItem>
            <NavMenuLink to='about' smooth={true} offset={50} duration={500}>About me</NavMenuLink>
          </NavItem>
          <NavItem>
            <NavMenuLink to='finishedworks' smooth={true} offset={50} duration={500}>Finished Works</NavMenuLink>
          </NavItem>
          <NavItem>
            <NavMenuLink to='contact' smooth={true} offset={50} duration={500}>Contact</NavMenuLink>
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
