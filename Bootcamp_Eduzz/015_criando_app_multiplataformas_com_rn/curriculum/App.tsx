import { StatusBar } from "expo-status-bar";
import React from "react";
import SocialProfile from "./src/components/SocialProfile";

import { Container } from "./src/styles/global";

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" hidden />
      <SocialProfile />
    </Container>
  );
}
