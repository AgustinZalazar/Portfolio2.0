import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>Sobre mi</SidebarLink>
          <SidebarLink to="finishedworks" onClick={toggle}>Trabajos Finalizados</SidebarLink>
          <SidebarLink to="Contact" onClick={toggle}>Contacto</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrap></SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
