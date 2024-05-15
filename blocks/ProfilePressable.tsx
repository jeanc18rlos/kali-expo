import React from "react";

import { Icon, Pressable, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { TextStyles } from "./Typography.stylesheet";

const KPressableProfileBlock = (props: {
  icon?:
    | "shopping"
    | "heart"
    | "settings"
    | "support"
    | "logout"
    | "membership";
  withIcon?: boolean;
  theme: KaliThemeType;
  title: string;
  isFirst?: boolean;
  onPress: () => void;
}) => {
  const { theme } = props;
  const icons = {
    shopping: "MaterialCommunityIcons/shopping-outline",
    heart: "MaterialCommunityIcons/heart-outline",
    settings: "MaterialCommunityIcons/cog-outline",
    support: "MaterialCommunityIcons/help-circle-outline",
    logout: "MaterialCommunityIcons/logout",
    membership: "MaterialCommunityIcons/account-group-outline",
  };
  return (
    <Pressable onPress={props.onPress}>
      <View
        style={{
          alignItems: "center",
          alignSelf: "stretch",
          backgroundColor: "rgb(255, 255, 255)",
          borderColor: "rgb(229, 231, 235)",
          ...(props.isFirst
            ? { borderTopWidth: 0 }
            : {
                borderTopWidth: 1,
              }),

          flexDirection: "row",
          gap: 16,
          padding: 8,
          paddingBottom: 16,
          paddingTop: 16,
        }}
      >
        {/* Close Wrapper */}
        {props.withIcon && (
          <View
            style={{
              alignItems: "center",
              alignSelf: "center",
              backgroundColor: theme.colors.divider,
              borderRadius: 19,
              height: 38,
              justifyContent: "center",
              width: 38,
            }}
          >
            <Icon
              size={24}
              name={
                (props.icon && icons[props.icon]) ??
                "MaterialCommunityIcons/shopping-outline"
              }
            />
          </View>
        )}

        <View style={{ alignItems: "flex-start", flex: 100, gap: 2 }}>
          <Text
            accessible={true}
            style={{
              ...TextStyles(theme)["Headline6"].style,
              ...TextStyles(theme)["Text"].style,
            }}
          >
            {props.title ?? null}
          </Text>
        </View>
        {/* Icon 2 */}
        <Icon size={24} name={"AntDesign/right"} />
      </View>
    </Pressable>
  );
};

export default withTheme(KPressableProfileBlock);
