import React, { useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router, Tabs } from "expo-router";
import UserProfileHeader from "../../blocks/UserProfileHeader";
import * as GlobalVariables from "../../config/GlobalVariableContext";

export default function TabLayout() {
  const Constants = GlobalVariables.useValues();

  useEffect(() => {
    if (!Constants.AUTHORIZATION_HEADER) {
      try {
        router.replace("/auth");
      } catch (err) {
        console.error(err);
      }
    }
  }, [Constants.AUTHORIZATION_HEADER]);
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "blue",

        header: () => {
          return <UserProfileHeader />;
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
