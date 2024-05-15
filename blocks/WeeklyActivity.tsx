import React from "react";
import DailyActivityVerticalBarBlock from "./DailyActivityVerticalBarBlock";
import * as StyleSheet from "../utils/StyleSheet";
import useWindowDimensions from "../utils/useWindowDimensions";
import { HStack, VStack, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { TextStyles } from "./Typography.stylesheet";

const WeeklyActivityBlock = (props: {
  sunday_steps: { goalSteps: number; dailySteps: number; extraSteps: number };
  monday_steps: { goalSteps: number; dailySteps: number; extraSteps: number };
  tuesday_steps: { goalSteps: number; dailySteps: number; extraSteps: number };
  wednesday_steps: {
    goalSteps: number;
    dailySteps: number;
    extraSteps: number;
  };
  thursday_steps: { goalSteps: number; dailySteps: number; extraSteps: number };
  friday_steps: { goalSteps: number; dailySteps: number; extraSteps: number };
  saturday_steps: { goalSteps: number; dailySteps: number; extraSteps: number };
  record: number;
  theme: any;
}) => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { paddingBottom: 16, paddingTop: 16 },
        dimensions.width
      )}
    >
      <VStack
        style={{
          backgroundColor: theme.colors.divider,
          borderRadius: 20,
          padding: 16,
        }}
      >
        {/* Legend */}
        <HStack
          style={{
            justifyContent: "space-between",
            marginBottom: 20,
            width: "100%",
          }}
        >
          {/* Today Steps */}
          <HStack>
            {/* color */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.daily_steps_bg,
                  borderRadius: 5,
                  height: 10,
                  width: 10,
                },
                dimensions.width
              )}
            />
            {/* label */}
            <Text
              accessible={true}
              style={[
                TextStyles(theme)["Text"].style,
                {
                  fontFamily: "DMSans_400Regular",
                  marginLeft: 8,
                },
              ]}
            >
              {"Today steps"}
            </Text>
          </HStack>
          {/* Goal Steps */}
          <HStack>
            {/* color */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.goal_steps_bg,
                  borderRadius: 5,
                  height: 10,
                  width: 10,
                },
                dimensions.width
              )}
            />
            {/* label */}
            <Text
              accessible={true}
              style={[
                TextStyles(theme)["Text"].style,
                {
                  fontFamily: "DMSans_400Regular",
                  marginLeft: 8,
                },
              ]}
            >
              {"Goal steps"}
            </Text>
          </HStack>
          {/* Extra Steps */}
          <HStack>
            {/* color */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.extra_steps_bg,
                  borderRadius: 5,
                  height: 10,
                  width: 10,
                },
                dimensions.width
              )}
            />
            {/* label */}
            <Text
              accessible={true}
              style={[
                TextStyles(theme)["Text"].style,
                {
                  color: theme.colors["Custom Color_34"],
                  fontFamily: "DMSans_400Regular",
                  marginLeft: 8,
                },
              ]}
            >
              {"Extra steps"}
            </Text>
          </HStack>
        </HStack>
        {/* Activity */}
        <HStack style={{ flex: 1, justifyContent: "space-between" }}>
          {/* Sunday */}
          <DailyActivityVerticalBarBlock
            record={props.record}
            dailySteps={
              (
                props.sunday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.sunday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.sunday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={"SU"}
          />
          {/* Monday */}
          <DailyActivityVerticalBarBlock
            record={props.record}
            dailySteps={
              (
                props.monday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.monday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.monday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={"MO"}
          />
          {/* Tuesday */}
          <DailyActivityVerticalBarBlock
            record={props.record}
            dailySteps={
              (
                props.tuesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.tuesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.tuesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={"TU"}
          />
          {/* Wednesday */}
          <DailyActivityVerticalBarBlock
            record={props.record}
            dailySteps={
              (
                props.wednesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.wednesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.wednesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={"WE"}
          />
          {/* Thursday */}
          <DailyActivityVerticalBarBlock
            record={props.record}
            dailySteps={
              (
                props.thursday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.thursday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.thursday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={"TH"}
          />
          {/* Friday */}
          <DailyActivityVerticalBarBlock
            record={props.record}
            dailySteps={
              (
                props.friday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.friday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.friday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={"FR"}
          />
          {/* Saturday */}
          <DailyActivityVerticalBarBlock
            record={props.record}
            dailySteps={
              (
                props.saturday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.saturday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.saturday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={"SA"}
          />
        </HStack>
      </VStack>
    </View>
  );
};

export default withTheme(WeeklyActivityBlock);
