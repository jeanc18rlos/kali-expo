import React from "react";
import StatBlock from "./Stat";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { HStack, withTheme } from "@kali/ui";
import { View } from "react-native";
import { BlurView } from "expo-blur";
const StatBarBlock = withTheme(
  (props: {
    stats: {
      title: string;
      count: number;
    }[];
    contained?: boolean;
    theme: KaliThemeType;
  }) => {
    const { contained = false } = props;
    const dimensions = useWindowDimensions();

    return (
      <View
        style={{
          width: "100%",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.15,
          shadowRadius: 3,
          elevation: 1,
        }}
      >
        <HStack
          style={{
            ...(!contained
              ? {
                  borderRadius: 12,
                }
              : {
                  gap: 8,
                }),
            justifyContent: "center",

            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            overflow: "hidden",
          }}
        >
          <BlurView
            intensity={50}
            tint={"systemUltraThinMaterialLight"}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          {props.stats.map((stat, index) => (
            <View
              key={index}
              style={{
                justifyContent: "center",
                alignItems: "center",
                ...(contained
                  ? {
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
