import React from "react";
import { Feather } from "@expo/vector-icons";
import WebView from "react-native-webview";

import { themes } from "../../theme/main";

// Styleds
import { CloseModalButton, Title } from "./styles";

type ModalSocialProps = {
  link: string;
  title: string;
  closeModal: () => void;
};

function ModalSocial({ link, title, closeModal }: ModalSocialProps) {
  return (
    <>
      <CloseModalButton onPress={closeModal} activeOpacity={0.8}>
        <Title>{title}</Title>
        <Feather name="x" size={32} color={themes.darkTheme.danger} />
      </CloseModalButton>

      <WebView
        source={{
          uri: link,
        }}
      />
    </>
  );
}

export default ModalSocial;
