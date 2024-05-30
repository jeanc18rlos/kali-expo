/**
 * @name Welcome Screen
 * @type Screen
 * @path /
 * @file /index.tsx
 * @description @description The first screen users see when they open the app for the first time, or when they are not logged in.
 */

import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
import React from "react";
import StepsProgressBar from "../../components/ProgressBar/StepsProgressBar";
import { VStack, withTheme, LinearGradient } from "@kali/ui";

import { LayoutStyles } from "../../components/layout/layout.stylesheet";
import useStepCount from "../../utils/useStepCount";
import StatBarBlock from "../../components/StatsBar";
import WeeklyStreakBar from "../../components/WeeklyStreakBar";
import PointsToLevelProgressBar from "../../components/ProgressBar/PointsToLevelProgressBar";

const stats = [
  { title: "weekly steps", count: 0 },
  { title: "daily streak", count: 0 },
  { title: "weekly points", count: 0 },
];

const WelcomeScreen = (props: { theme: KaliThemeType }) => {
  const { currentStepCount } = useStepCount();
  const { theme } = props;

  return (
    <VStack
      style={{
        position: "relative",
        height: "100%",
        flex: 1,
      }}
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
          {
            height: Dimensions.get("window").height,
            left: 0,
            position: "absolute",
            top: 0,
            flex: 1,
            width: Dimensions.get("window").width,
          },
        ]}
      />
      <ScrollView
        bounces={false}
        contentContainerStyle={[
          {
            display: "flex",
            flexDirection: "column",
          },
        ]}
      >
        {/* Container */}
        <VStack
          style={{
            height: 40,
          }}
        />
        <VStack
          style={StyleSheet.flatten([
            LayoutStyles(theme).Container,
            LayoutStyles(theme).Full,
            LayoutStyles(theme).CenterXY,
            LayoutStyles(theme).withPadding,
            {
              justifyContent: "space-between",
              backgroundColor: "transparent",
              gap: 16,
            },
          ])}
        >
          <StatBarBlock stats={stats} />
          <StepsProgressBar goal={1000} steps={currentStepCount} />
          <PointsToLevelProgressBar
            points={0}
            nextLevelPoints={1000}
            nextLevel={1}
            rotation={true}
          />
          <WeeklyStreakBar activeDays={[]} />
        </VStack>
        <View
          style={StyleSheet.flatten([
            LayoutStyles(theme).Container,
            LayoutStyles(theme).VStack,
            {
              justifyContent: "flex-end",
              backgroundColor: theme.colors.background,
              width: "100%",
              height: 500,
              borderTopLeftRadius: theme.spacing[8],
              borderTopRightRadius: theme.spacing[8],
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            },
          ])}
        />
      </ScrollView>
    </VStack>
  );
};

export default withTheme(WelcomeScreen);
