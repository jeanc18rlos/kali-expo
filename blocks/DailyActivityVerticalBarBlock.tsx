import React from "react";

import useWindowDimensions from "../utils/useWindowDimensions";
import { withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { TextStyles } from "./Typography.stylesheet";

const DailyActivityVerticalBarBlock = (props: {
  theme: any;
  dailySteps: number;
  extraSteps: number;
  goalSteps: number;
  label: string;
  record: number;
}) => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const record = props.record;
  const dailySteps = Math.floor((props.dailySteps / record) * 135);
  const extraSteps = Math.floor((props.extraSteps / record) * 135);
  const goalSteps = Math.floor((props.goalSteps / record) * 135);
  return (
    <View
      style={{
        alignItems: "center",
        height: 167,
        justifyContent: "space-between",
        width: 30,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ProgressBar */}
      <View
        style={{
          backgroundColor: theme.colors.background,
       
          borderRadius: 3,
          height: 135,
          overflow: "hidden",
          width: 6,
        }}
      >
        {/* TodaySteps */}
        <View
          style={{
            backgroundColor: theme.colors["daily_steps_bg"],
            borderRadius: 3,
            bottom: 0,
            height: dailySteps,
            left: 0,
            position: "absolute",
            width: "100%",
          }}
        />
        {/* Goal Steps */}
        <View
          style={{
            backgroundColor: theme.colors["goal_steps_bg"],
            borderRadius: 3,
            bottom: 0,
            height: goalSteps,
            left: 0,
            position: "absolute",
            width: "100%",
            zIndex: 2,
          }}
        />
        {/* Extra Steps */}
        <View
          style={{
            backgroundColor: theme.colors["extra_steps_bg"],
            borderRadius: 3,
            bottom: 0,
            height: extraSteps,
            left: 0,
            position: "absolute",
            width: 6,
          }}
        />
      </View>
      {/* Label */}
      <Text
        accessible={true}
        style={[
          TextStyles(theme)["Text"].style,
          {
            color: theme.colors["Custom Color_34"],
            fontFamily: "DMSans_500Medium",
            lineHeight: 20,
          },
        ]}
      >
        {props.label ?? "MO"}
      </Text>
    </View>
  );
};

export default withTheme(DailyActivityVerticalBarBlock);
