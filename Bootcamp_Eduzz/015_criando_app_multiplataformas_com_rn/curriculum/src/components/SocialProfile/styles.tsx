import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { themes } from "../../theme/main";

export const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  padding: 20px;
  padding-top: 32px;
`;

export const Title = styled.Text`
  color: ${themes.darkTheme.primary};
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 32px;
  margin-top: 32px;
`;

export const Avatar = styled.Image`
  width: 250px;
  height: 250px;
  border-radius: 125px;
  margin-bottom: 16px;
  border: 4px ${themes.darkTheme.danger};
`;

export const Name = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: ${themes.darkTheme.primary};
`;

export const Position = styled.Text`
  color: ${themes.darkTheme.success};
  margin-bottom: 10px;
  font-size: 16px;
`;

export const SocialContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: ${Dimensions.get("screen").width * 0.9}px;
  margin-top: 32px;
`;

export const SocialButton = styled.TouchableOpacity``;
