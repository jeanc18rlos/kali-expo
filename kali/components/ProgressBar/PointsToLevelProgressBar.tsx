import React from "react";
import { VStack, withTheme } from "@kali/ui";
import { View, Text } from "react-native";
import { SemiCircleProgressBar } from "./ProgressBarSVG";
import { TextStyles } from "../typography.stylesheet";
import { BlurView } from "expo-blur";

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
        <View
          style={{
            overflow: "hidden",
            width: "100%",
            borderRadius: 12,
          }}
        >
          {withBg && (
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
          )}
          <VStack
            style={{
              justifyContent: "center",
              padding: 16,
              position: "relative",

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
                  TextStyles(theme).Text,
                  TextStyles(theme).Headline5,
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
                  TextStyles(theme).Text,

                  TextStyles(theme).Display,
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
                  TextStyles(theme).Text,
                  TextStyles(theme).Headline6,

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
      </View>
    );
  }
);

export default PointsProgressBarBlock;
