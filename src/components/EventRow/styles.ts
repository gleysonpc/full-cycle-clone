import styled from "styled-components";
import { colors } from "../../styles/global";

export const Container = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  max-width: 1400px;
  margin: 14px 0;
`;

export const LeftSection = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.bgPrimary};
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
  display: flex;
  align-items: center;
  padding: 10px 20px;

  img {
    width: 70px;
    height: 70px;
    border-radius: 7px;
  }
  p {
    margin-left: 10px;
    color: ${colors.Gray};
    font-size: 19px;
    small {
      color: ${colors.Primary};
      font-size: 19px;
    }
  }

  @media (max-width: 700px) {
    p {
      font-size: 16px;
      small {
        font-size: 16px;
      }
    }
  }
`;

export const RightSection = styled.div`
  max-width: 180px;
  height: 100%;
  width: 100%;
  background-color: ${colors.bgSecondary};
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;

  img {
    width: 28px;
    filter: grayscale(1) opacity(0.5);
  }
  p {
    margin-left: 10px;
    color: ${colors.Gray};
    font-size: 19px;

    small {
      color: ${colors.Primary};
      font-size: 16px;
    }
  }

  @media (max-width: 700px) {
    max-width: 120px;
    img {
      width: 24px;
    }
  }
`;
