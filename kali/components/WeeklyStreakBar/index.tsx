import React from "react";
import { HStack, withTheme } from "@kali/ui";
import { View } from "react-native";
import WeekedayStreakBlock from "./WeekedayStreakBlock";
import { BlurView } from "expo-blur";

const weeklyStreak = ["S", "M", "T", "W", "T", "F", "S"];

const StreakBarBlock = withTheme(
  (props: { activeDays: number[]; theme: KaliThemeType }) => {
    return (
      <View
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.15,
          shadowRadius: 3,
          elevation: 1,
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            borderRadius: 12,
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
          <HStack
            style={{
              justifyContent: "space-evenly",
              gap: 16,
              paddingVertical: 8,
              paddingHorizontal: 16,
            }}
          >
            {weeklyStreak.map((activity, index) =>
              props.activeDays.length > 0 &&
              props.activeDays.find((num) => num === index) ? (
                <WeekedayStreakBlock
                  key={index}
                  hadActivity={true}
                  label={activity}
                />
              ) : (
                <WeekedayStreakBlock
                  key={index}
                  hadActivity={false}
                  label={activity}
                />
              )
            )}
          </HStack>
        </View>
      </View>
    );
  }
);

export default StreakBarBlock;
