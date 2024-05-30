import { DefaultTheme } from "@kali/ui";
import { systemWeights } from "react-native-typography";

const KaliTheme = {
  ...DefaultTheme,
  disabledOpacity: 0.5,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    "body_text": "rgb(37, 37, 37)",
    "primary": "rgb(37, 37, 37)",
    "secondary": "rgb(82, 82, 82)",
    "tertiary": "rgb(172,172,172)",
    "background": "rgba(255, 255, 255, 1)",
    "light": "rgba(255, 255, 255, 1)",
    "error": "rgba(239, 102, 93, 1)",
    "premium": "#FFE145",
    "blur-background": "rgba(0, 0, 0, 0.04)",
    "daily_steps_bg": "#4A6BE1FF",
    "extra_steps_bg": "#98DA9FFF",
    "goal_steps_bg": "#646668FF",
    "gradient-color-1": "rgb(247, 202, 202)",
    "gradient-color-2": "rgb(244, 222, 209)",
    "gradient-color-3": "rgb(234, 244, 255)",
    "gradient-color-4": "rgb(102, 92, 141)",
    "gradient-color-5": "rgb(149, 139, 186)",
    // check
    "divider": "rgba(234, 237, 242, 1)",
    "inputColor": "rgb(41, 41, 41)",
    "lightInverse": "rgba(255, 255, 255, 0.68)",
    "medium": "rgba(70, 78, 88, 1)",
    "mediumInverse": "rgba(255, 255, 255, 0.87)",
    "strong": "rgba(18, 20, 44, 1)",
    "strongInverse": "rgba(255, 255, 255, 1)",
    "surface": "rgba(255, 255, 255, 1)",
    "typographyColor": "rgb(52, 52, 52)",
  },
  typography: {
    ...DefaultTheme.typography,
    body1: {
      ...systemWeights.light,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 24,
    },
    body2: {
      ...systemWeights.light,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
    caption: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 0,
      lineHeight: 18,
    },
    headline1: {
      ...systemWeights.bold,
      fontSize: 34,
      letterSpacing: 0,
      lineHeight: 42,
    },
    display: {
      ...systemWeights.bold,
      fontSize: 64,
      letterSpacing: 0,
      lineHeight: 80,
    },
    headline2: {
      ...systemWeights.bold,
      fontSize: 28,
      letterSpacing: 0,
      lineHeight: 34,
    },
    headline3: {
      ...systemWeights.bold,
      fontSize: 24,
      letterSpacing: 0,
      lineHeight: 32,
    },
    headline4: {
      ...systemWeights.bold,
      fontSize: 20,
      letterSpacing: 0,
      lineHeight: 28,
    },
    headline5: {
      ...systemWeights.bold,
      fontSize: 18,
      letterSpacing: 0,
      lineHeight: 25,
    },
    headline6: {
      ...systemWeights.bold,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 24,
    },
    overline: {
      ...systemWeights.regular,
      fontSize: 12,
      letterSpacing: 2,
      lineHeight: 18,
    },
    subtitle1: {
      ...systemWeights.regular,
      fontSize: 16,
      letterSpacing: 0,
      lineHeight: 24,
    },
    subtitle2: {
      ...systemWeights.regular,
      fontSize: 14,
      letterSpacing: 0,
      lineHeight: 22,
    },
  },
  spacing: {
    ...DefaultTheme.spacing,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 44,
    12: 48,
    13: 52,
    14: 56,
    15: 60,
    16: 64,
  },
  borderRadius: {
    ...DefaultTheme.borderRadius,
    global: 6,
    button: 6,
  },
} as const;

export default KaliTheme;

declare global {
  type KaliThemeType = typeof KaliTheme;
  type Theme = KaliThemeType;
}
