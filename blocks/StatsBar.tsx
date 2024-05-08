import React from "react";
import StatBlock from "./StatBlock";
import useWindowDimensions from "../utils/useWindowDimensions";
import { HStack, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";

const StatBarBlock = withTheme(
  (props: {
    stats: {
      title: string;
      count: number;
    }[];
    theme: KaliThemeType;
  }) => {
    const { theme } = props;
    const dimensions = useWindowDimensions();

    return (
      <View style={{ width: "100%" }}>
        <HStack
          style={{
            backgroundColor: theme.colors["blur-background"],
            justifyContent: "center",
            gap: 8,
            borderRadius: 12,
          }}
        >
          {props.stats.map((stat, index) => (
            <StatBlock key={index} count={stat.count} title={stat.title} />
          ))}
        </HStack>
      </View>
    );
  }
);

export default StatBarBlock;
