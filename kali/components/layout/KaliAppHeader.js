import React from "react";
import { Text, View } from "react-native";
import { IconButton, withTheme, HStack } from "@kali/ui";
import { TextStyles } from "../typography.stylesheet";
import { IconButtonStyles } from "../iconButton.stylesheet";
import { StyleSheet } from "react-native";
import { LayoutStyles } from "./layout.stylesheet";
export const Placeholder = () => React.createElement(View, null);
export const Button = withTheme((props) =>
  React.createElement(IconButton, {
    onPress: props.onPress,
    style: StyleSheet.flatten([
      IconButtonStyles(props.theme).IconButton.style,
      { backgroundColor: props.theme.colors.divider },
      props.style,
    ]),
    ...IconButtonStyles(props.theme)[props.iconName].props,
  })
);
export const Header = withTheme((props) => {
  return React.createElement(
    HStack,
    {
      style: StyleSheet.flatten([
        LayoutStyles(props.theme).Container,
        LayoutStyles(props.theme).withPadding,
        {
          justifyContent: "space-between",
          alignItems: "center",
          height: props.theme.spacing["16"],
          backgroundColor: props.theme.colors.background,
        },
      ]),
    },
    props.children
  );
});
export const Title = withTheme((props) =>
  React.createElement(
    Text,
    {
      accessible: true,
      style: StyleSheet.compose(
        TextStyles(props.theme).Text,
        TextStyles(props.theme).Headline6
      ),
    },
    props.title
  )
);
export default {
  Button,
  Header,
  Title,
  Placeholder,
};
//# sourceMappingURL=KaliAppHeader.js.map
