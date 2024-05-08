import * as StyleSheet from "../utils/StyleSheet";

export const TextInputStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    InputErrorMessage: {
      style: {
        borderColor: theme.colors["error"],
        color: theme.colors["error"],
      },
    },
    TextInput: {
      style: {
        borderWidth: 1,
        width: "100%",
        padding: 16,
        borderRadius: 16,
        backgroundColor: theme.colors["background"],
        borderColor: theme.colors["body_text"],
        color: theme.colors["body_text"],
        fontFamily: "Raleway_400Regular",
        ...theme.typography.body2,
        lineHeight: 16,
      },
      props: {},
    },
  });
