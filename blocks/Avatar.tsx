import React from "react";
import * as GlobalStyles from "../GlobalStyles";
import * as StyleSheet from "../utils/StyleSheet";
import { withTheme } from "@draftbit/ui";
import { Image, Pressable, View } from "react-native";

type Subscription = "Free" | "Premium";
type Size = "Avatar" | "AvatarXL";
const Avatar = (props: {
  uri: string;
  theme: KaliThemeType;
  subscription?: Subscription;
  size?: Size;
  onPress?: () => void;
}) => {
  const { theme } = props;

  return (
    <Pressable onPress={props.onPress}>
      <Image
        resizeMode={"cover"}
        {...GlobalStyles.ImageStyles(theme)["Image"].props}
        source={{ uri: props.uri }}
        style={StyleSheet.compose(
          GlobalStyles.ImageStyles(theme)[props.size ?? "Avatar"].style,
          GlobalStyles.ImageStyles(theme)[props.subscription ?? "Free"].style
        )}
      />
    </Pressable>
  );
};

export default withTheme(Avatar);
