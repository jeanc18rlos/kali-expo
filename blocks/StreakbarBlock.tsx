import React from "react";
import { HStack, withTheme } from "@draftbit/ui";
import { View } from "react-native";
import DailyStreakBlock from "./DailyStreakBlock";

const weeklyStreak = ["S", "M", "T", "W", "T", "F", "S"];

const StreakBarBlock = withTheme(
  (props: { activeDays: number[]; theme: KaliThemeType }) => {
    const { theme } = props;

    return (
      <View style={{ width: "100%" }}>
        <HStack
          style={{
            backgroundColor: theme.colors["blur-background"],
            justifyContent: "space-evenly",
            gap: 16,
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 12,
          }}
        >
          {weeklyStreak.map((activity, index) =>
            props.activeDays.length > 0 &&
            props.activeDays.find((num) => num === index) ? (
              <DailyStreakBlock
                key={index}
                hadActivity={true}
                label={activity}
              />
            ) : (
              <DailyStreakBlock
                key={index}
                hadActivity={false}
                label={activity}
              />
            )
          )}
        </HStack>
      </View>
    );
  }
);

export default StreakBarBlock;
