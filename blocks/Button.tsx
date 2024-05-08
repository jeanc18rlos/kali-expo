import { Button as DraftBitButton } from "@draftbit/ui";
import React, { FC } from "react";
import { ButtonStyles } from "./Button.stylesheet";
import { StyleSheet } from "react-native";

type ButtonProps = {
  variant?: "ButtonPrimary" | "ButtonSecondary" | "ButtonTertiary";
  size?: "ButtonLarge" | "ButtonMedium" | "ButtonSmall";
  theme: KaliThemeType;
  style?: any;
};

const KaliButton: FC<ButtonProps & Record<string, any>> = (props) => {
  const { theme, style = {}, variant, size, ...rest } = props;

  return (
    <DraftBitButton
      {...rest}
      //@ts-ignore
      style={[
        ButtonStyles(theme)["Button"].style,
        ButtonStyles(theme)[size || "ButtonMedium"].style,
        ButtonStyles(theme)[variant || "ButtonPrimary"].style,
        style
        ]
      }
    />
  );
};

export default KaliButton;
