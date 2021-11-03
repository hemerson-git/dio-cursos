import React from "react";
import { SafeAreaView, Text, View } from "react-native";

// Styles
import { Container, Avatar } from "./styles";

function SocialProfile() {
  return (
    <Container>
      <Avatar source={{ uri: "https://github.com/hemerson-git.png" }} />
    </Container>
  );
}

export default SocialProfile;
