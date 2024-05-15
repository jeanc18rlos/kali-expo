import React from "react";
import { VStack, withTheme } from "@draftbit/ui";
import { View, Text } from "react-native";
import { SemiCircleProgressBar } from "./ProgressBarSVG";
import { TextStyles } from "./Typography.stylesheet";

const PointsProgressBarBlock = withTheme(
  (props: {
    withBg?: boolean;
    points: number;
    nextLevelPoints: number;
    nextLevel: number;
    theme: KaliThemeType;
    rotation: boolean;
  }) => {
    const { theme, rotation = true, withBg = true } = props;

    return (
      <View style={{ width: "100%" }}>
        <VStack
          style={{
            backgroundColor: withBg
              ? theme.colors["blur-background"]
              : "transparent",
            justifyContent: "center",
            padding: 16,
            position: "relative",
            borderRadius: 12,
            alignItems: "center",
            height: 180,
          }}
        >
          <SemiCircleProgressBar
            radius={137}
            roated={rotation}
            progress={Math.max(
              Math.min(props.points / props.nextLevelPoints - 0.5, 0.5),
              -0.5
            )}
          />
          <View
            style={{
              alignItems: "center",
              marginTop: rotation ? -160 : -110,
              marginBottom: rotation ? 35 : 16,
              justifyContent: "flex-start",
            }}
          >
            <Text
              accessible={true}
              style={[
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Headline5"].style,
                {
                  textAlign: "center",
                  letterSpacing: 1,
                },
              ]}
            >
              KALI POINTS
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              style={[
                TextStyles(theme)["Text"].style,

                TextStyles(theme)["Display"].style,
                {
                  textAlign: "center",
                  lineHeight: 60,
                },
              ]}
            >
              {props.points}
            </Text>
            {/* Text 3 */}
            <Text
              accessible={true}
              style={[
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Headline6"].style,

                {
                  textAlign: "center",
                },
              ]}
            >
              Next Level {props.nextLevel}
            </Text>
          </View>
        </VStack>
      </View>
    );
  }
);

export default PointsProgressBarBlock;
