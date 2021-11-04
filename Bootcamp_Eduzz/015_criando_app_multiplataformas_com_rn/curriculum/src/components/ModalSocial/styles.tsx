import styled from "styled-components/native";
import { themes } from "../../theme/main";

export const CloseModalButton = styled.TouchableOpacity`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px 20px;
  background-color: ${themes.darkTheme.dark};
`;

export const Title = styled.Text`
  color: ${themes.darkTheme.primary};
  font-size: 24px;
  font-weight: bold;
`;
