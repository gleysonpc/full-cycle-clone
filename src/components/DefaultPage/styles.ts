import styled from "styled-components";
import { colors } from "../../styles/global";

export const PageTitle = styled.h1`
  font-size: 32px;
  color: ${colors.Primary};
  margin-bottom: 7px;
`;

export const SectionTitle = styled.h2`
  font-size: 22px;
  color: ${colors.White};
  margin-bottom: 7px;
  font-weight: lighter;
`;

export const SectionDivider = styled.div`
  width: 100%;
  height: 0.5px;
  background-color: ${colors.Gray};
  opacity: 0.3;
  margin: 10px 0;
  display: block;
`;
