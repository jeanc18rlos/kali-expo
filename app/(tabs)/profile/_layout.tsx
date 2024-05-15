import { router, Stack } from "expo-router";
import KaliModalHeader from "../../../blocks/KaliModalHeader";
import { ScreenContainer } from "@draftbit/ui";
import React from "react";
const getRouteData = (route: { name: string }) => {
  const right_icon = false;
  const right_button = true;
  const right_action = undefined;
  const title = "";
  const left_button = true;
  const left_icon = "GoBackButton";
  const left_action = () => router.canGoBack() && router.back();
  console.log(route);
  if (route.name === "index") {
    return {
      title: "MY PROFILE",
      left_button: false,
      right_button,
      left_icon,
      left_action,
      right_icon: "PenButton",
      right_action: () => router.push("profile/edit"),
    };
  }
  if (route.name === "edit") {
    return {
      title: "EDIT PROFILE",
      left_button,
      right_button,
      left_icon,
      left_action,
      right_icon: "SaveButton",
      right_action: () => {
        alert("Saved Profile");
        router.push("profile");
      },
    };
  }
  if (route.name === "goal") {
    return {
      title: "EDIT GOAL",
      left_button,
      right_button,
      left_icon,
      left_action,
      right_icon: "SaveButton",
      right_action: () => {
        alert("Saved Goal");
        router.push("profile");
      },
    };
  }

  if (route.name === "permissions") {
    return {
      title: "SET PERMISSIONS",
      left_button,
      right_button: false,
      right_action,
      right_icon,
      left_icon,
      left_action,
    };
  }
  if (route.name === "settings") {
    return {
      title: "MY SETTINGS",
      left_button,
      right_button: false,
      right_action,
      right_icon,
      left_icon,
      left_action,
    };
  }
};

export default function Layout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "transparent",
        },

        header: ({
          route,
        }: {
          route: {
            name: string;
          };
        }) => {
          const data = getRouteData(route);
          console.log(route);
          return (
            <ScreenContainer
              scrollable={false}
              hasBottomSafeArea={false}
              hasSafeArea={true}
              hasTopSafeArea={false}
            >
              <KaliModalHeader
                title={data.title}
                left_button={data.left_button}
                right_button={data.right_button}
                left_icon={data.left_icon}
                right_icon={data.right_icon}
                isCenter={true}
                right_action={data.right_action}
                left_action={data.left_action}
              />
            </ScreenContainer>
          );
        },
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="edit" />
      <Stack.Screen name="goal" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="permissions" />
    </Stack>
  );
}
