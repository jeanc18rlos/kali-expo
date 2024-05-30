import React from "react";
import { VStack, withTheme } from "@kali/ui";
import { View, Text } from "react-native";
import { SemiCircleProgressBar } from "./ProgressBarSVG";
import { TextStyles } from "../typography.stylesheet";
import { BlurView } from "expo-blur";

const StepProgressBarBlock = withTheme(
  (props: { steps: number; goal: number; theme: KaliThemeType }) => {
    const { theme } = props;

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
        <VStack
          style={{
            justifyContent: "center",
            position: "relative",
            borderRadius: 12,
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <BlurView
            intensity={50}
            tint={"systemThickMaterialLight"}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <VStack
            style={{
              padding: 16,
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
                  TextStyles(theme).Text,
                  TextStyles(theme).Headline5,
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
                  TextStyles(theme).Text,

                  TextStyles(theme).Display,
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
                  TextStyles(theme).Text,
                  TextStyles(theme).Headline6,

                  {
                    textAlign: "center",
                  },
                ]}
              >
                GOAL {props.goal}
              </Text>
            </View>
          </VStack>
        </VStack>
      </View>
    );
  }
);

export default StepProgressBarBlock;
