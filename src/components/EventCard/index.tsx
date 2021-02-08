import React from "react";
import {
  CardContainer,
  CardBody,
  CardFooter,
  ImageContainer,
  ContentContainer,
  FooterLeft,
  FooterRight,
} from "./styles";
import dashboardIcon from "../../assets/dashboardIcon.svg";
import clockIcon from "../../assets/clockIcon.svg";

interface Props {
  title: string;
  text: string;
  image: string;
}

const EventCard: React.FC<Props> = ({ title, text, image }) => {
  return (
    <CardContainer>
      <CardBody>
        <ImageContainer>
          <img src={image} alt="Card Logo" />
        </ImageContainer>
        <ContentContainer>
          <h5>{title}</h5>
          <p>{text}</p>
        </ContentContainer>
      </CardBody>
      <CardFooter>
        <FooterLeft>
          <img src={dashboardIcon} alt="Data" />
          <p>06/02</p>
        </FooterLeft>
        <FooterRight>
          <img src={clockIcon} alt="Data" />
          <p>
            Aula <small>NO AR</small>
          </p>
        </FooterRight>
      </CardFooter>
    </CardContainer>
  );
};

export default EventCard;
