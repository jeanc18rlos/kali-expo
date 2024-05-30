import React from "react";
import { Icon, VStack, withTheme } from "@kali/ui";
import { Text } from "react-native";
import { TextStyles } from "../../components/typography.stylesheet";

const WeekedayStreakBlock = withTheme(
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
            name={"Ionicons/flame-sharp"}
          />
        ) : (
          <Icon
            size={24}
            color={theme.colors.tertiary}
            name={"Ionicons/flame-sharp"}
          />
        )}

        {/* Disabled icon */}

        <Text
          accessible={true}
          style={[
            TextStyles(theme).Text,
            TextStyles(theme).Headline5,

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

export default WeekedayStreakBlock;
