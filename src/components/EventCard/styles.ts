import styled from "styled-components";
import { colors } from "../../styles/global";

export const CardContainer = styled.div`
  max-height: 296px;
  max-width: 600px;
`;

export const CardBody = styled.div`
  background-color: ${colors.bgPrimary};
  width: 100%;
  height: 100%;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  display: flex;
  padding: 20px 17px;
`;

export const CardFooter = styled.div`
  background-color: ${colors.bgSecondary};
  height: 42px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  img {
    width: 24px;
    filter: grayscale(1) opacity(0.5);
  }
`;

export const ImageContainer = styled.div`
  margin-right: 10px;
  max-width: 230px;
  flex: 1;

  @media (max-width: 500px) {
    flex: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
`;
export const ContentContainer = styled.div`
  flex: 1;
  h5 {
    font-size: 22px;
    font-weight: 400;
    color: ${colors.White};
    @media (max-width: 500px) {
      font-size: 16px;
    }
  }

  p {
    font-size: 16px;
    color: ${colors.Gray};
    @media (max-width: 500px) {
      font-size: 12px;
    }
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 5px;
    font-size: 16px;
    color: ${colors.Gray};
  }
`;
export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 5px;
    font-size: 16px;
    color: ${colors.Gray};

    small {
      margin-left: 5px;
      color: ${colors.Secondary};
    }
  }
`;
