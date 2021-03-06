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
          <SidebarLink to="about">About</SidebarLink>
          <SidebarLink to="FinishedWorks">Finished Works</SidebarLink>
          <SidebarLink to="Contact">Contact</SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrap></SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
