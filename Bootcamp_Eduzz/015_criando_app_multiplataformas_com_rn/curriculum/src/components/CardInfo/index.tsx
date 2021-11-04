import React from "react";

// Styleds
import {
  CardContainer,
  CardContent,
  CardHeader,
  CardText,
  CardTitle,
} from "./styles";

type CardProps = {
  title: string;
  texts: string[];
};

function Card({ title, texts = [] }: CardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      {texts.length > 0 && (
        <CardContent>
          {texts.map((text, index) => (
            <CardText key={index}>{text}</CardText>
          ))}
        </CardContent>
      )}
    </CardContainer>
  );
}

export default Card;
