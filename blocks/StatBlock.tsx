import React from "react";
import { VStack, withTheme } from "@draftbit/ui";
import { Text } from "react-native";
import { TextStyles } from "./Typography.stylesheet";

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
            TextStyles(theme)["Text"].style,
            TextStyles(theme)["Headline5"].style,

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
            TextStyles(theme)["Text"].style,
            TextStyles(theme)["BodySmall"].style,
            {
              maxWidth: 90,
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
