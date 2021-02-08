import React from "react";
import EventCard from "../EventCard";
import { card, row } from "../../assets/static";
import devOpsImage from "../../assets/devOpsImage.png";
import firstDayImage from "../../assets/firstDayImage.png";
import { PageTitle, SectionDivider, SectionTitle } from "./styles";
import EventRow, { RowType } from "../EventRow";

const DefaultPage: React.FC = () => {
  return (
    <div>
      <PageTitle>Programação de hoje</PageTitle>
      <EventCard title={card.title} text={card.text} image={devOpsImage} />

      <div>
        <SectionDivider />
        <SectionTitle>01/02</SectionTitle>
        <EventRow
          title={row[0].title}
          image={devOpsImage}
          eventType={RowType.lesson}
        />
        <EventRow
          title={row[1].title}
          image={firstDayImage}
          host={row[1].host}
          eventType={RowType.live}
        />
      </div>
    </div>
  );
};

export default DefaultPage;
