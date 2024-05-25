import { StyleSheet } from "react-native";

export const TextStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Body: {
      ...theme.typography.body1,
      fontFamily: "Raleway_300Light",
    },
    BodySmall: {
      ...theme.typography.body2,
      fontFamily: "Raleway_300Light",
    },
    Caption: {
      ...theme.typography.caption,
      fontFamily: "Raleway_300Light",
    },
    Display: {
      ...theme.typography.display,
      fontFamily: "Raleway_700Bold",
    },
    Headline: {
      ...theme.typography.headline1,
      fontFamily: "Raleway_700Bold",
    },
    Headline2: {
      ...theme.typography.headline2,
      fontFamily: "Raleway_700Bold",
    },
    Headline3: {
      ...theme.typography.headline3,
      fontFamily: "Raleway_700Bold",
    },
    Headline4: {
      ...theme.typography.headline4,
      fontFamily: "Raleway_700Bold",
    },
    Headline5: {
      ...theme.typography.headline5,
      fontFamily: "Raleway_700Bold",
    },
    Headline6: {
      ...theme.typography.headline6,
      fontFamily: "Raleway_700Bold",
    },
    Overline: {
      ...theme.typography.overline,
      fontFamily: "Raleway_300Light",
    },

    SubTitle: {
      ...theme.typography.subtitle1,
      fontFamily: "Raleway_400Regular",
    },
    SubTitleSmall: {
      ...theme.typography.subtitle2,
      fontFamily: "Raleway_400Regular",
    },
    ErrorMessage: {
      color: theme.colors.error,
    },

    Text: { color: theme.colors.body_text },
    props: {},
  });
