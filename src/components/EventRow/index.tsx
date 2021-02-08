import React from "react";

import { Container, LeftSection, RightSection } from "./styles";

import dashbardIcon from "../../assets/dashboardIcon.svg";
import clockIcon from "../../assets/clockIcon.svg";

interface Props {
  title: string;
  image: string;
  host?: string;
  eventType: RowType;
}

export enum RowType {
  lesson = "lesson",
  live = "live",
}

const EventRow: React.FC<Props> = ({ title, image, eventType, host }) => {
  return (
    <Container>
      <LeftSection>
        <img src={image} alt="Dev Ops" />
        <p>
          {title} <small>{host}</small>
        </p>
      </LeftSection>
      <RightSection>
        <img
          src={eventType === RowType.lesson ? dashbardIcon : clockIcon}
          alt="Dev Ops Button"
        />
        <p>Aula {eventType === RowType.live && <small>20h</small>} </p>
      </RightSection>
    </Container>
  );
};

export default EventRow;
