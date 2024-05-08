import Avatar from "./blocks/Avatar";
import * as StyleSheet from "./utils/StyleSheet";

export const SVGStyles = (theme: KaliThemeType) =>
  StyleSheet.create({ SVG: { style: { height: 100, width: 100 }, props: {} } });

export const BottomSheetStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    "Bottom Sheet": {
      style: {
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 10,
      },
      props: {},
    },
  });

export const LinearGradientStyles = (theme: KaliThemeType) =>
  StyleSheet.create({ "Linear Gradient": { style: { flex: 1 }, props: {} } });

export const LinkStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Link: {
      style: {
        ...theme.typography.body1,
        color: theme.colors.primary,
        fontFamily: "Raleway_300Light",

        textDecorationLine: "underline",
      },
      props: {},
    },
    SKIP: {
      style: {
        color: theme.colors.primary,
        fontFamily: "Raleway_400Regular",
        textDecorationLine: "underline",
      },
      props: {},
    },
    "under-link": {
      style: {
        color: "rgb(32, 32, 32)",
        fontFamily: "Raleway_600SemiBold",
        textDecorationLine: "underline",
      },
      props: {},
    },
  });

export const SwiperStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Swiper: { style: { height: 300, width: "100%" }, props: {} },
  });

export const ImageBackgroundStyles = (theme: KaliThemeType) =>
  StyleSheet.create({ "Image Background": { style: { flex: 1 }, props: {} } });

export const ImageStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Image: { style: { height: 100, width: 100 }, props: {} },
    AvatarXL: {
      style: { borderRadius: 48, height: 96, width: 96 },
      props: {},
    },
    Avatar: {
      style: { borderRadius: 24, height: 48, width: 48 },
      props: {},
    },
    Premium: {
      style: { borderColor: theme.colors.premium, borderWidth: 2 },
      props: {},
    },
    Free: {
      style: { borderColor: theme.colors.light, borderWidth: 2 },
      props: {},
    },
  });

export const AccordionGroupStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Accordion: {
      style: {
        fontSize: 16,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
  });

export const DividerStyles = (theme: KaliThemeType) =>
  StyleSheet.create({ Divider: { style: { height: 1 }, props: {} } });

export const SliderStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Slider: { style: { marginLeft: 12, marginRight: 12 }, props: {} },
  });

export const CircleStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Circle: {
      style: {
        alignItems: "center",
        backgroundColor: theme.colors.primary,
        justifyContent: "center",
      },
      props: {},
    },
  });

export const SwitchRowStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    "Switch Row": { style: { marginLeft: 0, marginRight: 0 }, props: {} },
  });

export const SwipeableItemStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    "Swipeable Item": { style: { overflow: "hidden" }, props: {} },
  });

export const ActionSheetItemStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    "Action Sheet Item": { style: { textAlign: "center" }, props: {} },
  });

export const NumberInputStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    "Number Input": {
      style: {
        borderBottomWidth: 1,
        borderColor: theme.colors.divider,
        borderLeftWidth: 1,
        borderRadius: 8,
        borderRightWidth: 1,
        borderTopWidth: 1,
        paddingBottom: 8,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 8,
      },
      props: {},
    },
    "number-input": {
      style: {
        borderBottomWidth: 1,
        borderColor: "rgb(93, 93, 93)",
        borderLeftWidth: 1,
        borderRadius: 16,
        borderRightWidth: 1,
        borderTopWidth: 1,
        color: "rgb(148, 148, 148)",
        fontFamily: "Raleway_400Regular",
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
      },
      props: {},
    },
  });

export const SurfaceStyles = (theme: KaliThemeType) =>
  StyleSheet.create({ Surface: { style: { minHeight: 40 }, props: {} } });

export const SwitchStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    switch: {
      style: { height: 24, width: 44 },
      props: {
        activeTrackColor: theme.colors.primary,
      },
    },
  });
