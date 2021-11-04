import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

import { themes } from "../../theme/main";

// Styles
import {
  Container,
  Avatar,
  Name,
  Position,
  SocialContainer,
  SocialButton,
  Title,
} from "./styles";

// Components
import ModalSocial from "../ModalSocial";
import { Modal } from "react-native";

function SocialProfile() {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [isModalOpen, setIsModalOpened] = useState(false);

  const INSTA = "https://www.instagram.com/hemerson.oliveira";
  const GITHUB = "https://github.com/hemerson-git";
  const IN = "https://www.linkedin.com/in/hemerson-silva-869137186/";

  function handleSocialPress(link: string, title: string) {
    setLink(link);
    setTitle(title);
    setIsModalOpened(true);
  }

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  return (
    <Container>
      <Title>Who am I</Title>

      <Avatar source={{ uri: "https://github.com/hemerson-git.png" }} />
      <Name>Hemerson Oliveira</Name>
      <Position>Front-end developer</Position>

      <SocialContainer>
        <SocialButton onPress={() => handleSocialPress(GITHUB, "Github")}>
          <Feather name="github" size={30} color={themes.darkTheme.success} />
        </SocialButton>

        <SocialButton onPress={() => handleSocialPress(INSTA, "Instagram")}>
          <Feather
            name="instagram"
            size={30}
            color={themes.darkTheme.success}
          />
        </SocialButton>

        <SocialButton onPress={() => handleSocialPress(IN, "LinkedIn")}>
          <Feather name="linkedin" size={30} color={themes.darkTheme.success} />
        </SocialButton>
      </SocialContainer>

      <Modal animationType="slide" transparent visible={isModalOpen}>
        <ModalSocial link={link} closeModal={handleCloseModal} title={title} />
      </Modal>
    </Container>
  );
}

export default SocialProfile;
