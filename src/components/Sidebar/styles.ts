import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
  background-color: ${colors.bgPrimary};
  width: 120px;
  height: 100vh;
  position: fixed;
  display: flex;
  transition: width 0.5s;

  flex-direction: column;
  @media (max-width: 800px) {
    width: 50px;
    p {
      display: none;
    }
  }
`;

export const LogoWrapper = styled.div`
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${colors.bgSecondary};
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const MenuItem = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.Primary};
  height: 80px;
  text-decoration: none;
  filter: grayscale(1) opacity(0.5);
  transition: filter 0.3s;
  &:hover {
    background-color: ${colors.bgSecondary};
    filter: none;
  }
  &.active {
    background-color: ${colors.bgSecondary};
    filter: none;
  }
`;
