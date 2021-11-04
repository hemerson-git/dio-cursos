import styled from "styled-components/native";
import { themes } from "../../theme/main";
import { Dimensions } from "react-native";

export const CardContainer = styled.View`
  padding: 0 20px;
  border-radius: 6px;
  margin-bottom: 32px;
  width: ${Dimensions.get("screen").width}px;
`;

export const CardHeader = styled.View``;

export const CardTitle = styled.Text`
  color: ${themes.darkTheme.primary};
  font-size: 24px;
  margin-bottom: 16px;
`;

export const CardContent = styled.View`
  background-color: ${themes.darkTheme.primary}77;
  border-top-width: 0px;
  border-radius: 16px;
  border-top-left-radius: 0px;
  border-bottom-color: ${themes.darkTheme.danger}aa;
  border-right-color: ${themes.darkTheme.danger}aa;
  border-bottom-width: 2px;
  border-right-width: 2px;
  padding: 8px 16px;
`;

export const CardText = styled.Text`
  font-size: 16px;
  color: ${themes.darkTheme.light};
  margin-bottom: 8px;
`;
