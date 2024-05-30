import React from "react";
import { StyleSheet } from "react-native";
import { ScreenContainer, VStack, withTheme } from "@kali/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../../components/button/KaliButton";

import { TextStyles } from "../../components/typography.stylesheet";
import { LayoutStyles } from "../../components/layout/layout.stylesheet";

const OnboardingConsistencyScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const navigateToAuth = () => {
    try {
      router.push("/onboarding/track");
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
          LayoutStyles(theme).withPadding,
          LayoutStyles(theme).Full,
          {
            justifyContent: "space-between",
          },
        ])}
      >
        <VStack>
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme).Text,
                TextStyles(theme).Headline2
              ),
              {
                marginBottom: 16,
                textAlign: "center",
              },
            ]}
          >
            Consistency is key!
          </Text>
        </VStack>

        <View>
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme).Text,
                TextStyles(theme).Body
              ),
              {
                marginBottom: 8,
                textAlign: "center",
              },
            ]}
          >
            Check in on Kali daily to unlock additional rewards.
          </Text>

          {/* Get Started Button */}

          <KaliButton
            disabled={false}
            loading={false}
            variantName="ButtonPrimary"
            onPress={navigateToAuth}
            style={{
              marginTop: 24,
            }}
            title={"Next"}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingConsistencyScreen);
