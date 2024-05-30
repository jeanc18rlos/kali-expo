/**
 * @name 404 Screen
 * @type Screen
 * @path /
 * @file /+not-found.tsx
 * @description @description The screen that is displayed when a user navigates to a page that does not exist.
 */

import React from "react";
import { Center, ScreenContainer, withTheme } from "@kali/ui";
import { Text, View } from "react-native";
import KaliButton from "../components/button/KaliButton";
import { TextStyles } from "../components/typography.stylesheet";
import { LayoutStyles } from "../components/layout/layout.stylesheet";
import { StyleSheet } from "react-native";
import useResetRoute from "../utils/resetRoute";

const NotFoundScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;
  const reset = useResetRoute();
  const toHome = () => {
    try {
      reset("index");
    } catch (err) {
      console.error(err);
    }
  };

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
            Not Found Error
          </Text>
          <Text
            style={[
              StyleSheet.flatten([
                TextStyles(theme).Text,
                TextStyles(theme).Body,
                {
                  marginBottom: theme.spacing["4"],
                  textAlign: "left",
                },
              ]),
            ]}
          >
            The page you are looking for, does not exist. Please check the URL
            and try again.
          </Text>
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
          {/* Get Started Button */}
          <KaliButton
            loading={false}
            disabled={false}
            onPress={toHome}
            title={"Go to Home"}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(NotFoundScreen);
