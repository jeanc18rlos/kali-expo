import { StyleSheet } from "react-native";

export const ButtonStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Button: {
      borderWidth: 1,
      width: "100%",
      color: "transparent",
      borderColor: "transparent",
      backgroundColor: "transparent",
    },
    ButtonSmall: {
      ...theme.typography.body2,
      fontWeight: 700,
      fontFamily: "Raleway_700Bold",
      borderRadius: theme.spacing["5"],
      paddingVertical: theme.spacing["2"],
      paddingHorizontal: theme.spacing["2"],
    },
    ButtonMedium: {
      ...theme.typography.body1,
      fontWeight: 600,
      fontFamily: "Raleway_600SemiBold",
      borderRadius: theme.spacing["7"],
      paddingHorizontal: theme.spacing["4"],
      paddingVertical: theme.spacing["4"],
    },
    ButtonPrimary: {
      backgroundColor: theme.colors["primary"],
      borderColor: theme.colors["primary"],
      color: theme.colors["light"],
    },
    ButtonSecondary: {
      backgroundColor: theme.colors["background"],
      borderColor: theme.colors["body_text"],
    },
    ButtonTertiary: {
      color: theme.colors["light"],
      backgroundColor: theme.colors.tertiary,
      borderColor: theme.colors.tertiary,
    },
  });
