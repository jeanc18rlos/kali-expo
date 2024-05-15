import React from "react";
import StatBlock from "./StatBlock";
import useWindowDimensions from "../utils/useWindowDimensions";
import { HStack, withTheme } from "@draftbit/ui";
import { Dimensions, Text, View } from "react-native";

const StatBarBlock = withTheme(
  (props: {
    stats: {
      title: string;
      count: number;
    }[];
    contained?: boolean;
    theme: KaliThemeType;
  }) => {
    const { theme, contained = false } = props;
    const dimensions = useWindowDimensions();

    return (
      <View style={{ width: "100%" }}>
        <HStack
          style={{
            ...(!contained
              ? {
                  backgroundColor: theme.colors["blur-background"],
                  borderRadius: 12,
                }
              : {
                  gap: 8,
                }),
            justifyContent: "center",

            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
        >
          {props.stats.map((stat, index) => (
            <View
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                ...(contained
                  ? {
                      backgroundColor: theme.colors["blur-background"],
                      borderRadius: 12,
                    }
                  : {}),
                  height: 80,
                width:
                  props.stats.length > 1
                    ? props.stats.length > 3
                      ? dimensions.width / 2 - 20
                      : dimensions.width / props.stats.length - 16
                    : dimensions.width - 16,
              }}
            >
              <StatBlock count={stat.count} title={stat.title} />
            </View>
          ))}
        </HStack>
      </View>
    );
  }
);

export default StatBarBlock;
