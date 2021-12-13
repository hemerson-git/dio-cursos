import { StatusBar } from "expo-status-bar";
import React from "react";
import Card from "./src/components/CardInfo";
import SocialProfile from "./src/components/SocialProfile";

import { Container } from "./src/styles/global";

export default function App() {
  const profissionalExperiences = [
    "2 years as front-end developer at iZap Softworks.",
  ];

  const educationBackground = [
    "Bachelor's degree in System Informations - IFBA",
  ];

  const aboutMe = [
    "I'm a 24yo front-end developer, I love programming, play guitar, drawing," +
      "and over all, to be together with my family 💓.",
  ];

  return (
    <Container>
      <StatusBar style="auto" hidden />
      <SocialProfile />

      <Card title="About Me :" texts={aboutMe} />
      <Card title="Professional Experience :" texts={profissionalExperiences} />
      <Card title="Education Background :" texts={educationBackground} />
    </Container>
  );
}
