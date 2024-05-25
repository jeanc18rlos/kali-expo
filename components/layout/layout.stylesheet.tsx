import { StyleSheet } from "react-native";

export const LayoutStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Container: {
      display: "flex",
    },
    Full: {
      flex: 1,
    },
    withPadding: {
      padding: theme.spacing["4"],
    },
    VStack: { flexDirection: "column" },
    HStack: { flexDirection: "row" },
    CenterXY: {
      justifyContent: "center",
      alignItems: "center",
    },
    CenterX: {
      justifyContent: "center",
    },
    CenterY: {
      alignItems: "center",
    },
  });
