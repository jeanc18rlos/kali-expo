import { Button, withTheme } from "@kali/ui";
import React from "react";
import { ButtonStyles } from "./KaliButton.stylesheet";
import { StyleSheet } from "react-native";
import { ButtonProps } from "@kali/core/lib/typescript/src/components/Button";

type SizeNames = "ButtonMedium" | "ButtonSmall";

type VariantNames = "ButtonPrimary" | "ButtonSecondary" | "ButtonTertiary";

const KaliButton = withTheme(
  (
    props: {
      theme: KaliThemeType;
      variantName?: VariantNames;
      sizeName?: SizeNames;
    } & Omit<ButtonProps, "Icon">
  ) => {
    const { theme, style, variantName, sizeName, ...rest } = props;

    return (
      <Button
        {...rest}
        style={StyleSheet.flatten([
          ButtonStyles(theme).Button,
          ButtonStyles(theme)[sizeName || "ButtonMedium"],
          ButtonStyles(theme)[variantName || "ButtonPrimary"],
          style,
        ])}
      />
    );
  }
);

export default KaliButton;
