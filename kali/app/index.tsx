/**
 * @name Welcome Screen
 * @type Screen
 * @path /
 * @file /index.tsx
 * @description @description The first screen users see when they open the app for the first time, or when they are not logged in.
 */

import React from "react";
import KaliIcon from "../components/icon/KaliIsoType";
import { Center, ScreenContainer, withTheme } from "@kali/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../components/button/KaliButton";
import { TextStyles } from "../components/typography.stylesheet";
import { LayoutStyles } from "../components/layout/layout.stylesheet";
import { StyleSheet } from "react-native";

const WelcomeScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      {/* Container */}
      <View
        style={StyleSheet.flatten([
          LayoutStyles(theme).Container,
          LayoutStyles(theme).Full,
          LayoutStyles(theme).CenterXY,
          LayoutStyles(theme).withPadding,
          {
            justifyContent: "space-between",
          },
        ])}
      >
        {/* Logo Container */}
        <Center
          style={StyleSheet.flatten([
            LayoutStyles(theme).Full,
            LayoutStyles(theme).CenterXY,
          ])}
        >
          <KaliIcon />
        </Center>
        {/* Content */}
        <View
          style={StyleSheet.flatten([
            LayoutStyles(theme).Container,
            LayoutStyles(theme).VStack,
            {
              justifyContent: "flex-end",
              width: "100%",
            },
          ])}
        >
          <Text
            accessible={true}
            style={[
              StyleSheet.flatten([
                TextStyles(theme).Text,
                TextStyles(theme).Headline,
                {
                  marginBottom: theme.spacing["4"],
                  textAlign: "left",
                },
              ]),
            ]}
          >
            Take Steps {"\n"}
            Earn Rewards
          </Text>

          {/* Get Started Button */}
          <KaliButton
            loading={false}
            disabled={false}
            onPress={() => router.push("auth")}
            title={"Get started"}
            variantName={"ButtonPrimary"}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
