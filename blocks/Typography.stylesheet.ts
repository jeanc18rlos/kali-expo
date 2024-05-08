import * as StyleSheet from "../utils/StyleSheet";

export const TextStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Body: {
      style: {
        ...theme.typography.body1,
        fontFamily: "Raleway_300Light",
      },
      props: {},
    },
    BodySmall: {
      style: {
        ...theme.typography.body2,
        fontFamily: "Raleway_300Light",
      },
      props: {},
    },
    Caption: {
      style: {
        ...theme.typography.caption,
        fontFamily: "Raleway_300Light",
      },
      props: {},
    },
    Display: {
      style: { ...theme.typography.display, fontFamily: "Raleway_700Bold" },
      props: {},
    },
    Headline: {
      style: {
        ...theme.typography.headline1,
        fontFamily: "Raleway_700Bold",
      },
      props: {},
    },
    Headline2: {
      style: {
        ...theme.typography.headline2,
        fontFamily: "Raleway_700Bold",
      },
      props: {},
    },
    Headline3: {
      style: {
        ...theme.typography.headline3,
        fontFamily: "Raleway_700Bold",
      },
      props: {},
    },
    Headline4: {
      style: {
        ...theme.typography.headline4,
        fontFamily: "Raleway_700Bold",
      },
      props: {},
    },
    Headline5: {
      style: {
        ...theme.typography.headline5,
        fontFamily: "Raleway_700Bold",
      },
      props: {},
    },
    Headline6: {
      style: {
        ...theme.typography.headline6,
        fontFamily: "Raleway_700Bold",
      },
      props: {},
    },
    Overline: {
      style: {
        ...theme.typography.overline,
        fontFamily: "Raleway_300Light",
      },
      props: {},
    },

    SubTitle: {
      style: {
        ...theme.typography.subtitle1,
        fontFamily: "Raleway_400Regular",
      },
      props: {},
    },
    SubTitleSmall: {
      style: {
        ...theme.typography.subtitle2,
        fontFamily: "Raleway_400Regular",
      },
      props: {},
    },
    ErrorMessage: {
      style: {
        color: theme.colors.error,
      },
      props: {},
    },

    Text: { style: { color: theme.colors.body_text }, props: {} },
  });
