import * as Stylesheet from "../utils/StyleSheet";

export const IconButtonStyles = (theme: KaliThemeType) =>
  Stylesheet.create({
    IconButton: {
      style: {
        borderRadius: 16,
        width: 32,
        height: 32,
        backgroundColor: theme.colors["tertiary"],
        color: theme.colors["body_text"],
      },
    },
    CloseButton: {
      props: {
        icon: "close",
      },
    },
    GoBackButton: {
      props: {
        icon: "AntDesign/left",
      },
    },
  });
