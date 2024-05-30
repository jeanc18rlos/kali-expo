/**
 * @name Auth Navigator
 * @type Navigator
 * @path /auth
 * @file /auth/_layout.tsx
 * @description The container that provides the navigation setup for the authentication flow.
 */

import React from "react";
import { Stack } from "expo-router";
import KaliAppHeader from "../../components/layout/KaliAppHeader";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

const LayoutHeader = (props: NativeStackHeaderProps) => {
  const { navigation } = props;
  console.log("props", props);
  return (
    <KaliAppHeader.Header>
      <KaliAppHeader.Placeholder />
      <KaliAppHeader.Button
        iconName="CloseButton"
        onPress={() => navigation.replace("index")}
      />
    </KaliAppHeader.Header>
  );
};

export default function Layout() {
  return (
    <Stack
      initialRouteName="providers"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "transparent",
        },

        header: LayoutHeader,

        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="providers" />
    </Stack>
  );
}
