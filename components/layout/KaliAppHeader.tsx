import React from "react";
import { Text, View } from "react-native";
import { HStack } from "@/design-system/components/Layout";
import IconButton from "@/design-system/components/IconButton";
import { TextStyles } from "../typography.stylesheet";
import { withTheme } from "@/design-system/core";
import { IconButtonStyles } from "../iconButton.stylesheet";
import { StyleSheet } from "react-native";
import { LayoutStyles } from "./layout.stylesheet";

type IconNames = "CloseButton" | "GoBackButton" | "PenButton" | "SaveButton";

export const HeaderItemPlaceholder = (props: { theme: KaliThemeType }) => (
  <View />
);

export const Button = withTheme(
  (props: { icon: any; onPress: () => void; theme: KaliThemeType }) => (
    <IconButton
      Icon={props.icon}
      onPress={props.onPress}
      style={[IconButtonStyles(props.theme)["IconButton"].style]}
      {...{
        icon: props.icon,
        size: 24,
      }}
    />
  )
);

export const Header = withTheme((props: { theme: KaliThemeType }) => {
  return (
    <HStack
      style={StyleSheet.flatten([
        LayoutStyles(props.theme)["Container"],
        LayoutStyles(props.theme)["Full"],
        { justifyContent: "space-between", alignItems: "center" },
      ])}
    ></HStack>
  );
});

export const Title = withTheme(
  (props: { title: string; theme: KaliThemeType }) => (
    <Text
      accessible={true}
      style={StyleSheet.compose(
        TextStyles(props.theme)["Text"],
        TextStyles(props.theme)["Headline6"]
      )}
    >
      {props.title}
    </Text>
  )
);
