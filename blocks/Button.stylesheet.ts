import * as Stylesheet from "../utils/StyleSheet";

export const ButtonStyles = (theme: KaliThemeType) =>
  Stylesheet.create({
    Button: {
      style: {
        borderWidth: 1,
        width: "100%",
        color: "transparent",
        borderColor: "transparent",
        backgroundColor: "transparent",
      },
      props: {},
    },
    ButtonSmall: {
      style: {
        ...theme.typography.body2,
        fontWeight: 700,
        fontFamily: "Raleway_700Bold",
        height: 38,
        borderRadius: 19,
        paddingVertical: 4,
        paddingHorizontal: 8,
      },
    },
    ButtonMedium: {
      style: {
        ...theme.typography.body1,
        fontWeight: 600,
        fontFamily: "Raleway_600SemiBold",
        height: 64,
        borderRadius: 32,
        paddingHorizontal: 16,
        paddingVertical: 8,
      },
    },
    ButtonPrimary: {
      style: {
        backgroundColor: theme.colors["primary"],
        borderColor: theme.colors["primary"],
        color: theme.colors["light"],
      },
      props: {},
    },
    ButtonSecondary: {
      style: {
        backgroundColor: theme.colors["background"],
        borderColor: theme.colors["body_text"],
        color: theme.colors["body_text"],
      },
      props: {},
    },
    ButtonTertiary: {
      style: {
        color: theme.colors["light"],
        backgroundColor: theme.colors.tertiary,
        borderColor: theme.colors.tertiary,
      },
    },
  });
