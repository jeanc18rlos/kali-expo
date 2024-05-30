import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, useRouter } from "expo-router";

import KaliAppHeader from "../../components/layout/KaliAppHeader";
import { Pressable } from "react-native";
import { ScreenContainer, Avatar, HStack } from "@kali/ui";
import KaliButton from "../../components/button/KaliButton";

const HomeHeader = () => {
  const router = useRouter();
  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <KaliAppHeader.Header>
        <HStack
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pressable onPress={() => router.push("profile")}>
            <Avatar
              source="https://firebasestorage.googleapis.com/v0/b/kali-f3ff6.appspot.com/o/profile-pictures%2Fmarie.jpeg?alt=media&token=20b5d97d-8a07-471e-83eb-097f70f99a35"
              size={50}
            />
          </Pressable>

          <KaliButton
            variantName="ButtonTertiary"
            sizeName="ButtonSmall"
            loading={false}
            disabled={false}
            onPress={() => router.push("profile")}
            title="Upgrade"
            style={{ width: 90, height: 40, marginLeft: 10 }}
          />
        </HStack>

        <KaliButton
          variantName="ButtonTertiary"
          sizeName="ButtonSmall"
          loading={false}
          disabled={false}
          onPress={() => router.push("profile")}
          style={{ maxWidth: 140, height: 40, marginLeft: 10 }}
          icon={"MaterialCommunityIcons/alpha-k-circle"}
          title="Points 0,0"
        />
      </KaliAppHeader.Header>
    </ScreenContainer>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarActiveTintColor: "rgb(37, 37, 37)",
        tabBarStyle: {
          height: 100,
        },
        header: (props) => {
          switch (props.route.name) {
            case "home":
              return <HomeHeader />;
            default:
              return <></>;
          }
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
