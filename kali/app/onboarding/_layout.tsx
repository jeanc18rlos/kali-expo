import React from "react";
import { Stack } from "expo-router";
import KaliAppHeader from "../../components/layout/KaliAppHeader";
import { Pressable } from "react-native";
import { ScreenContainer } from "@kali/ui";
import useResetRoute from "../../utils/resetRoute";

const LayoutHeader = () => {
  const reset = useResetRoute();
  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <KaliAppHeader.Header>
        <KaliAppHeader.Placeholder />
        <Pressable
          onPress={() => {
            reset("(tabs)");
          }}
        >
          <KaliAppHeader.Title title="SKIP" />
        </Pressable>
      </KaliAppHeader.Header>
    </ScreenContainer>
  );
};

export default function Layout() {
  return (
    <Stack
      initialRouteName="steps"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "transparent",
        },
        header: LayoutHeader,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="steps" />
      <Stack.Screen name="points" />
      <Stack.Screen name="consistency" />
      <Stack.Screen name="track" />
      <Stack.Screen name="goal" />
      <Stack.Screen name="name" />
      <Stack.Screen name="notifications" />
    </Stack>
  );
}
