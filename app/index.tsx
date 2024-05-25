import React from "react";
import KaliIcon from "@kali-app/components/icon/KaliIsoType";
import { withTheme } from "@kali-ui/core";
import { Center } from "@kali-ui/components/Layout";
import ScreenContainer from "@kali-ui/components/ScreenContainer";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "@kali-app/components/button/KaliButton";
import { TextStyles } from "@kali-app/components/typography.stylesheet";
import { LayoutStyles } from "@kali-app/components/layout/layout.stylesheet";
import { StyleSheet } from "react-native";

const WelcomeScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const navigateToAuth = () => {
    try {
      router.push("auth");
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
          LayoutStyles(theme)["Container"],
          LayoutStyles(theme)["Full"],
          LayoutStyles(theme)["CenterXY"],
          LayoutStyles(theme)["withPadding"],
          {
            justifyContent: "space-between",
          },
        ])}
      >
        {/* Logo Container */}
        <Center
          style={StyleSheet.flatten([
            LayoutStyles(theme)["Full"],
            LayoutStyles(theme)["CenterXY"],
          ])}
        >
          <KaliIcon />
        </Center>
        {/* Content */}
        <View
          style={StyleSheet.flatten([
            LayoutStyles(theme)["Container"],
            LayoutStyles(theme)["VStack"],
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
                TextStyles(theme)["Text"],
                TextStyles(theme)["Headline"],
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
            theme={theme}
            onPress={navigateToAuth}
            title={"Get started"}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
