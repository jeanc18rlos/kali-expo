import { StyleSheet, View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  HStack,
  IconButton,
  LinearGradient,
  ScreenContainer,
  VStack,
  withTheme,
} from "@draftbit/ui";
import { Container } from "../../blocks/Layout.stylesheet";
import StatBarBlock from "../../blocks/StatsBar";
import * as Haptics from "expo-haptics";
import { Pedometer } from "expo-sensors";
import PointsToLevelProgressBar from "../../blocks/PointsToLevelProgressBar";
import { LinearGradientStyles } from "../../GlobalStyles";
import Leaderboard from "../../blocks/Leaderboard";
import WeeklyActivityBlock from "../../blocks/WeeklyActivity";
import { TextStyles } from "../../blocks/Typography.stylesheet";
const stats = [
  { title: "Streak", count: 0 },
  { title: "Weekly Steps", count: 0 },
  { title: "Weekly Points", count: 0 },
  { title: "Next Level", count: 0 },
];
function App({ theme }: { theme: KaliThemeType }) {
  const explosion = useRef(null);

  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount((result) => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
  }, []);

  return (
    <>
      <ScreenContainer
        scrollable={true}
        hasBottomSafeArea={false}
        hasSafeArea={false}
        hasTopSafeArea={true}
      >
        <LinearGradient
          endX={100}
          endY={100}
          startX={0}
          startY={0}
          color1={theme.colors["gradient-color-1"]}
          color2={theme.colors["gradient-color-2"]}
          color3={theme.colors["gradient-color-3"]}
          style={[
            LinearGradientStyles(theme)["Linear Gradient"].style,
            {
              height: "100%",
              left: 0,
              flex: 1,
              position: "absolute",
              top: 0,
              width: "100%",
            },
          ]}
        />
        <VStack
          style={StyleSheet.compose(Container(theme)["View"].style, {
            justifyContent: "flex-start",
            gap: 8,
          })}
        >
          <PointsToLevelProgressBar
            rotation={false}
            withBg={false}
            points={pastStepCount + currentStepCount}
            nextLevelPoints={
              (currentStepCount && currentStepCount > 0) ||
              (pastStepCount && pastStepCount > 0)
                ? Math.ceil(
                    ((pastStepCount || 0) + (currentStepCount || 0)) / 1000
                  ) * 1000
                : 1000
            }
            nextLevel={
              (currentStepCount && currentStepCount > 0) ||
              (pastStepCount && pastStepCount > 0)
                ? Math.ceil(
                    ((pastStepCount || 0) + currentStepCount || 0) / 1000
                  )
                : 1
            }
          />
          <StatBarBlock stats={stats} contained />
        </VStack>
        <VStack
          style={StyleSheet.compose(Container(theme)["View"].style, {
            justifyContent: "flex-start",
            gap: 16,
            backgroundColor: theme.colors.background,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 16,
          })}
        >
          <HStack style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <Text
              style={[
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Headline6"].style,
              ]}
            >
              1 - 7 JAN
            </Text>
            <HStack>
              <IconButton onPress={() => {}} icon="AntDesign/left" size={18} style={
                {
                  backgroundColor: theme.colors.divider,
                  height: 32,
                  width: 32,
                  padding: 0,
                  borderRadius: 16,
                  marginRight: 8,
                }
              } />
              <IconButton onPress={() => {}} icon="AntDesign/right" size={18} style={
                {
                  backgroundColor: theme.colors.divider,
                  height: 32,
                  width: 32,
                  padding: 0,
                  borderRadius: 16,
                }
              } />
            </HStack>
          </HStack>
          <WeeklyActivityBlock
            record={12000}
            sunday_steps={{
              goalSteps: 10000,
              dailySteps: 0,
              extraSteps: 2000,
            }}
            monday_steps={{
              goalSteps: 300,
              dailySteps: 0,
              extraSteps: 0,
            }}
            tuesday_steps={{
              goalSteps: 10000,
              dailySteps: 12000,
              extraSteps: 12000,
            }}
            wednesday_steps={{
              goalSteps: 0,
              dailySteps: 1200,
              extraSteps: 0,
            }}
            thursday_steps={{
              goalSteps: 10000,
              dailySteps: 0,
              extraSteps: 0,
            }}
            friday_steps={{
              goalSteps: 10000,
              dailySteps: 12000,
              extraSteps: 12000,
            }}
            saturday_steps={{
              goalSteps: 10000,
              dailySteps: 1500,
              extraSteps: 0,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={[
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Headline6"].style,
                {
                },
              ]}
            >
              {"Daily average"}
            </Text>
            <Text
              style={[
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Headline6"].style,
                {
                  marginLeft: 8,
                },
              ]}
            >
              {"2,548 steps"}
            </Text>
          </View>
          <Leaderboard />
        </VStack>
      </ScreenContainer>
    </>
  );
}

export default withTheme(App);
