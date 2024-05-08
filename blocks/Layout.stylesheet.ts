import * as StyleSheet from "../utils/StyleSheet";

export const Container = (theme: KaliThemeType) =>
  StyleSheet.create({
    View: {
      style: { flex: 1, padding: 16 },
      props: {},
    },
  });

export const CenterStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    Center: {
      style: { alignItems: "center", justifyContent: "center" },
      props: {},
    },
  });

export const VStackStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    "V Stack": { style: { flexDirection: "column" }, props: {} },
  });
export const HStackStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    "H Stack": {
      style: { alignItems: "center", flexDirection: "row" },
      props: {},
    },
  });

export const ZStackStyles = (theme: KaliThemeType) =>
  StyleSheet.create({
    "Z Stack": { style: { flexDirection: "row" }, props: {} },
  });
