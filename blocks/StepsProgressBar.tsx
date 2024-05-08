import React from "react";
import { VStack, withTheme } from "@draftbit/ui";
import { View, Text } from "react-native";
import { SemiCircleProgressBar } from "./ProgressBarSVG";
import { TextStyles } from "./Typography.stylesheet";

const StepProgressBarBlock = withTheme(
  (props: { steps: number; goal: number; theme: KaliThemeType }) => {
    const { theme } = props;

    return (
      <View style={{ width: "100%" }}>
        <VStack
          style={{
            backgroundColor: theme.colors["blur-background"],
            justifyContent: "center",
            padding: 16,
            position: "relative",
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <SemiCircleProgressBar
            radius={137}
            progress={Math.max(
              Math.min(props.steps / props.goal - 0.5, 0.5),
              -0.5
            )}
          />
          <View
            style={{
              alignItems: "center",
              marginTop: -112,
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
              STEPS TODAY
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
              {props.steps}
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
              GOAL {props.goal}
            </Text>
          </View>
        </VStack>
      </View>
    );
  }
);

export default StepProgressBarBlock;
