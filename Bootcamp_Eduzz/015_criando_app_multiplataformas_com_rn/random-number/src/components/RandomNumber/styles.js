import { StyleSheet } from "react-native";

import { theme } from "../../theme/main";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    flex: 1,
    paddingBottom: 32,
    backgroundColor: theme.colors.dark,
    width: "100%",
  },

  main: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  footer: {},

  lastNumber: {
    fontSize: 100,
    fontWeight: "bold",
    color: theme.colors.light,
  },

  btnShuffle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.secondary,
    width: 200,
    padding: 8,
    borderRadius: 8,
    marginBottom: 30,
  },

  btnShuffleText: {
    marginLeft: 8,
    color: theme.colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
