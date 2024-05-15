import React from "react";
import { Icon, VStack, withTheme } from "@draftbit/ui";
import { Text } from "react-native";
import { TextStyles } from "./Typography.stylesheet";

const DailyStreakBlock = withTheme(
  (props: { theme: KaliThemeType; label: string; hadActivity?: boolean }) => {
    const { theme } = props;

    return (
      <VStack
        style={{
          alignItems: "center",
          height: 52,
          justifyContent: "space-around",
          width: 24,
        }}
      >
        {/* Active icon */}
        {props.hadActivity ? (
          <Icon
            size={24}
            color={theme.colors.error}
            name={"Ionicons/ios-flame-sharp"}
          />
        ) : (
          <Icon
            size={24}
            color={theme.colors.tertiary}
            name={"Ionicons/ios-flame-sharp"}
          />
        )}

        {/* Disabled icon */}

        <Text
          accessible={true}
          style={[
            TextStyles(theme)["Text"].style,
            TextStyles(theme)["Headline5"].style,

            {
              textAlign: "center",
              color: props.theme.colors.tertiary,
            },
          ]}
        >
          {props.label}
        </Text>
      </VStack>
    );
  }
);

export default DailyStreakBlock;
