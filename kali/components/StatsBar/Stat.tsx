import React from "react";
import { VStack, withTheme } from "@kali/ui";
import { Text } from "react-native";
import { TextStyles } from "../../components/typography.stylesheet";

const StatBlock = withTheme(
  (props: { theme: KaliThemeType; count?: number; title: string }) => {
    const { theme } = props;

    return (
      <VStack
        style={{
          justifyContent: "center",
          padding: 16,
        }}
      >
        <Text
          accessible={true}
          style={[
            TextStyles(theme).Text,
            TextStyles(theme).Headline5,

            {
              textAlign: "center",
            },
          ]}
        >
          {props.count ?? 0}
        </Text>
        <Text
          accessible={true}
          style={[
            TextStyles(theme).Text,
            TextStyles(theme).BodySmall,
            {
              maxWidth: 98,
              textAlign: "center",
            },
          ]}
        >
          {props.title}
        </Text>
      </VStack>
    );
  }
);

export default StatBlock;
