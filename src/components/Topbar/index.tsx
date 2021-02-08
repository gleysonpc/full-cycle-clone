import React from "react";
import { Container, TopBarContent, RepositoryButton } from "./styles";
import headerLogoLarge from "../../assets/logoFullCycleLarge.svg";
import githubIcon from "../../assets/githubIcon.svg";

const TopBar: React.FC = () => {
  return (
    <Container>
      <TopBarContent>
        <img src={headerLogoLarge} alt="Full Cycle Large" />
        <RepositoryButton>
          <img src={githubIcon} alt="GitHub Repository" />
          <p>Repositório do Projeto</p>
        </RepositoryButton>
      </TopBarContent>
    </Container>
  );
};

export default TopBar;
