import React from "react";
import { Text, View } from "react-native";
import { IconButton, withTheme, HStack } from "@kali/ui";
import { TextStyles } from "../typography.stylesheet";
import { IconButtonStyles } from "../iconButton.stylesheet";
import { StyleSheet } from "react-native";
import { LayoutStyles } from "./layout.stylesheet";
import type { IconButtonProps } from "@kali/core/lib/typescript/src/components/IconButton";

type IconNames = "CloseButton" | "GoBackButton" | "PenButton" | "SaveButton";

export const Placeholder = () => <View />;

export const Button = withTheme(
  (
    props: Omit<IconButtonProps, "Icon"> & {
      iconName: IconNames;
      theme: KaliThemeType;
    }
  ) => (
    <IconButton
      onPress={props.onPress}
      style={StyleSheet.flatten([
        IconButtonStyles(props.theme).IconButton.style,
        { backgroundColor: props.theme.colors.divider },
        props.style,
      ])}
      {...IconButtonStyles(props.theme)[props.iconName].props}
    />
  )
);

export const Header = withTheme(
  (props: { theme: KaliThemeType; children: React.ReactNode }) => {
    return (
      <HStack
        style={StyleSheet.flatten([
          LayoutStyles(props.theme).Container,
          LayoutStyles(props.theme).withPadding,
          {
            justifyContent: "space-between",
            alignItems: "center",
            height: props.theme.spacing["16"],
            backgroundColor: props.theme.colors.background,
          },
        ])}
      >
        {props.children}
      </HStack>
    );
  }
);

export const Title = withTheme(
  (props: { title: string; theme: KaliThemeType }) => (
    <Text
      accessible={true}
      style={StyleSheet.compose(
        TextStyles(props.theme).Text,
        TextStyles(props.theme).Headline6
      )}
    >
      {props.title}
    </Text>
  )
);

export default {
  Button,
  Header,
  Title,
  Placeholder,
};
