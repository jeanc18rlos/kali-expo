import { Button } from "@kali-ui/components/Button";
import React, { FC } from "react";
import { ButtonStyles } from "./KaliButton.stylesheet";
import { StyleSheet } from "react-native";
type ButtonProps = {
  variant?: "ButtonPrimary" | "ButtonSecondary" | "ButtonTertiary";
  size?: "ButtonMedium" | "ButtonSmall";
  theme: KaliThemeType;
  style?: any;
};

const KaliButton: FC<ButtonProps & Record<string, any>> = (props) => {
  const { theme, style = {}, variant, size, ...rest } = props;

  return (
    <Button
      {...rest}
      style={StyleSheet.flatten([
        ButtonStyles(theme)["Button"],
        ButtonStyles(theme)[size || "ButtonMedium"],
        ButtonStyles(theme)[variant || "ButtonPrimary"],
      ])}
    />
  );
};

export default KaliButton;
