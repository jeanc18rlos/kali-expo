/**
 * @name Providers Screen
 * @type Screen
 * @path /auth
 * @file /auth/index.tsx
 * @description The main screen for the authentication flow, where users can choose how they want to sign up or log in.
 */

import React from "react";

import { Text, View } from "react-native";
import { Link } from "expo-router";
import KaliButton from "../../components/button/KaliButton";
import { TextStyles } from "../../components/typography.stylesheet";
import { VStack, withTheme, ScreenContainer } from "@kali/ui";
import { StyleSheet } from "react-native";
import { LayoutStyles } from "../../components/layout/layout.stylesheet";
import useResetRoute from "../../utils/resetRoute";

const AuthProvidersScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;
  const reset = useResetRoute();

  const auth = () => {
    try {
      reset("onboarding");
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
        <VStack
          style={StyleSheet.compose(LayoutStyles(theme).VStack, {
            justifyContent: "center",
            gap: theme.spacing["4"],
            height: "100%",
            width: "100%",
          })}
        >
          {/* Title */}
          <Text
            accessible={true}
            style={StyleSheet.compose(TextStyles(theme).Headline, {
              textAlign: "center",
            })}
          >
            Get Started
          </Text>
          {/*  Description */}
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme).Text,
                TextStyles(theme).Body
              ),
              {
                textAlign: "center",
                marginBottom: theme.spacing["4"],
              },
            ]}
          >
            Explore our curated marketplace and see how rewarding healthy habits
            can be.
          </Text>
          {/* Container */}
          <VStack
            style={StyleSheet.compose(LayoutStyles(theme).VStack, {
              alignItems: "stretch",
              gap: 8,
              justifyContent: "center",
            })}
          >
            {/* Email */}
            <KaliButton
              disabled={false}
              loading={false}
              onPress={auth}
              title={"Continue with email"}
              icon={"MaterialIcons/email"}
            />
            {/* Google */}
            <KaliButton
              disabled={false}
              loading={false}
              onPress={auth}
              variantName="ButtonSecondary"
              title={"Continue with Google"}
              icon={"AntDesign/google"}
            />
            {/* Apple */}
            <KaliButton
              disabled={false}
              loading={false}
              onPress={auth}
              variantName="ButtonSecondary"
              title={"Continue with Apple"}
              icon={"MaterialCommunityIcons/apple"}
            />
            <Text
              accessible={true}
              style={[
                StyleSheet.compose(
                  TextStyles(theme).Text,
                  TextStyles(theme).Body
                ),
                {
                  textAlign: "center",
                },
              ]}
            >
              By continuing your accept our {"\n"}
              <Link
                accessible={true}
                style={{ textDecorationLine: "underline" }}
                href={"https://kali.day/terms-and-conditions"}
              >
                Terms and Conditions
              </Link>
              {" and "}
              <Link
                accessible={true}
                style={{ textDecorationLine: "underline" }}
                href={"https://kali.day/privacy-policy"}
              >
                Privacy Policy
              </Link>
            </Text>
          </VStack>
        </VStack>
        <View />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AuthProvidersScreen);
