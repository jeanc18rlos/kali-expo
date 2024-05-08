import { systemWeights } from "react-native-typography";

const KaliTheme = {
  disabledOpacity: 0.5,
  roundness: 6,
  colors: {
    body_text: "rgb(37, 37, 37)",
    primary: "rgb(37, 37, 37)",
    secondary: "rgb(82, 82, 82)",
    tertiary: "rgb(172,172,172)",
    background: "rgba(255, 255, 255, 1)",
    light: "rgba(255, 255, 255, 1)",
    error: "rgba(239, 102, 93, 1)",
    premium: "#FFE145",
    "blur-background": "rgba(0, 0, 0, 0.04)",
    //    draftbit
    // HOME GRADIENT
    "gradient-color-1": "rgb(247, 202, 202)",
    "gradient-color-2": "rgb(244, 222, 209)",
    "gradient-color-3": "rgb(234, 244, 255)",
    // Daily Bonus GRADIENT
    "gradient-color-4": "rgb(102, 92, 141)",
    "gradient-color-5": "rgb(149, 139, 186)",
    accentColor: "rgb(38, 38, 38)",
    custom_rgb100_102_104: "rgb(100, 102, 104)",
    custom_rgb102_92_141: "rgb(102, 92, 141)",
    custom_rgb106_106_106: "rgb(106, 106, 106)",
    custom_rgb117_117_117: "rgb(117, 117, 117)",
    custom_rgb127_127_127: "rgb(127, 127, 127)",
    custom_rgb131_131_131: "rgb(131, 131, 131)",
    custom_rgb131_92_141: "rgb(131, 92, 141)",
    custom_rgb139_139_139: "rgb(139, 139, 139)",
    custom_rgb141_92_119: "rgb(141, 92, 119)",
    custom_rgb149_139_186: "rgb(149, 139, 186)",
    custom_rgb152_218_159: "rgb(152, 218, 159)",
    custom_rgb171_171_171: "rgb(171, 171, 171)",
    custom_rgb185_56_28: "rgb(185, 56, 28)",
    custom_rgb186_139_148: "rgb(186, 139, 148)",
    custom_rgb18_18_18: "rgb(18, 18, 18)",
    custom_rgb200_200_200: "rgb(200, 200, 200)",
    custom_rgb201_201_201: "rgb(201, 201, 201)",
    custom_rgb206_206_206: "rgb(206, 206, 206)",
    custom_rgb221_48_36: "rgb(221, 48, 36)",
    custom_rgb229_231_235: "rgb(229, 231, 235)",
    custom_rgb234_244_255: "rgb(234, 244, 255)",
    custom_rgb241_63_51: "rgb(241, 63, 51)",
    custom_rgb244_222_209: "rgb(244, 222, 209)",
    custom_rgb245_245_245: "rgb(245, 245, 245)",
    custom_rgb247_202_202: "rgb(247, 202, 202)",
    custom_rgb28_27_31: "rgb(28, 27, 31)",
    custom_rgb32_32_32: "rgb(32, 32, 32)",
    custom_rgb46_46_46: "rgb(46, 46, 46)",
    custom_rgb55_65_81: "rgb(55, 65, 81)",
    custom_rgb59_59_59: "rgb(59, 59, 59)",
    custom_rgb63_63_63: "rgb(63, 63, 63)",
    custom_rgb74_107_225: "rgb(74, 107, 225)",
    custom_rgb74_74_74: "rgb(74, 74, 74)",
    custom_rgb75_75_74: "rgb(75, 75, 74)",
    custom_rgb82_82_82: "rgb(82, 82, 82)",
    custom_rgb93_93_93: "rgb(93, 93, 93)",
    custom_rgba0_0_0_004: "rgba(0, 0, 0, 0.04)",
    custom_rgba0_0_0_023: "rgba(0, 0, 0, 0.23)",
    divider: "rgba(234, 237, 242, 1)",

    inputColor: "rgb(41, 41, 41)",
    lightInverse: "rgba(255, 255, 255, 0.68)",
    medium: "rgba(70, 78, 88, 1)",
    mediumInverse: "rgba(255, 255, 255, 0.87)",

    strong: "rgba(18, 20, 44, 1)",
    strongInverse: "rgba(255, 255, 255, 1)",
    surface: "rgba(255, 255, 255, 1)",
    typographyColor: "rgb(52, 52, 52)",
  },
  typography: {
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
  spacing: {},
} as const;

export default KaliTheme;

declare global {
  type KaliThemeType = typeof KaliTheme;
}
