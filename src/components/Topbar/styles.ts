import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
  background-color: ${colors.bgPrimary};
  position: fixed;
  height: 77px;
  padding: 7px;
  width: 100%;
  padding-left: 120px;
  transition: padding 0.5s;

  @media (max-width: 800px) {
    padding-left: 50px;
  }
`;

export const TopBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  padding: 0 10px;
`;

export const RepositoryButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 50px;

  p {
    margin-left: 7px;
    color: ${colors.Gray};
  }
`;
