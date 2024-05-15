import React from "react";
import { HStack, IconButton, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import { TextStyles } from "./Typography.stylesheet";
import { IconButtonStyles } from "./IconButton.stylesheet";

type IconNames = "CloseButton" | "GoBackButton" | "PenButton" | "SaveButton";

const ActionButton = ({
  icon,
  theme,
  action,
}: {
  icon: IconNames;
  action: () => void;
  theme: KaliThemeType;
}) => {
  return (
    <IconButton
      style={[
        IconButtonStyles(theme)["IconButton"].style,
        {
          backgroundColor: theme.colors.divider,
          borderRadius: 100,
          padding: 8,
        },
      ]}
      onPress={action}
      color={IconButtonStyles(theme)["IconButton"].style.color}
      icon={IconButtonStyles(theme)[icon].props.icon}
      size={24}
    />
  );
};

const KaliModalHeader: React.FC<{
  title?: string;
  left_button?: boolean;
  left_action?: () => void;
  left_icon?: IconNames;
  right_button?: boolean;
  right_icon?: IconNames;
  right_action?: () => void;
  theme: any;
  isCenter?: boolean;
}> = (props) => {
  const { theme } = props;

  return (
    <HStack
      style={{
        justifyContent: "space-between",
        padding: 16,
        backgroundColor: theme.colors.background,
        height: 60,
        alignItems: "center",
      }}
    >
      {/* Go back Wrapper */}
      <>
        {props.left_button ? (
          <ActionButton
            icon={props.left_icon ?? "GoBackButton"}
            action={
              props.left_action ? props.left_action : () => router.push("../")
            }
            theme={theme}
          />
        ) : (
          <View
            style={{
              width: 32,
              height: 32,
            }}
          />
        )}
      </>
      {/* H6 */}
      <Text
        accessible={true}
        style={[
          TextStyles(theme)["Text"].style,
          TextStyles(theme)["Headline6"].style,
          { color: theme.colors["body_text"] },
        ]}
      >
        {props.title}
      </Text>
      {/* Close Wrapper */}
      <>
        {!(props.right_button ?? null) ? null : (
          <ActionButton
            icon={props.right_icon ?? "CloseButton"}
            action={
              props.right_action
                ? props.right_action
                : () => router.replace("/")
            }
            theme={theme}
          />
        )}
        {!props.right_button && props.isCenter ? (
          <View
            style={{
              width: 32,
              height: 32,
            }}
          />
        ) : null}
      </>
    </HStack>
  );
};

export default withTheme(KaliModalHeader);
