import React from "react";
import { Container, LogoWrapper, MenuItem, MenuList } from "../Sidebar/styles";

import sideLogo from "../../assets/logoFullCycleSmall.svg";
import homeIcon from "../../assets/homeIcon.svg";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import checkIcon from "../../assets/checkIcon.svg";
import calendarIcon from "../../assets/calendarIcon.svg";
import clockIcon from "../../assets/clockIcon.svg";

const Sidebar: React.FC = () => {
  return (
    <Container>
      <LogoWrapper>
        <img src={sideLogo} alt="Full Cycle Small" />
      </LogoWrapper>
      <MenuList>
        <MenuItem href="#/">
          <img src={homeIcon} alt="Home" />
          <p>Home</p>
        </MenuItem>
        <MenuItem href="#/">
          <img src={dashboardIcon} alt="Aulas" className="icon" />
          <p>Aulas</p>
        </MenuItem>
        <MenuItem href="#/">
          <img src={clockIcon} alt="Lives" className="icon" />
          <p>Lives</p>
        </MenuItem>
        <MenuItem href="#/">
          <img src={checkIcon} alt="Desafios" className="icon" />
          <p>Desafios</p>
        </MenuItem>
        <MenuItem href="#/">
          <img src={calendarIcon} alt="Cursos" className="icon" />
          <p>Cursos</p>
        </MenuItem>
      </MenuList>
    </Container>
  );
};

export default Sidebar;
