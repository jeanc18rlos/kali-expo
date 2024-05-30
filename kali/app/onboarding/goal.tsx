import React from "react";

import { StyleSheet } from "react-native";
import { ScreenContainer, VStack, withTheme } from "@kali/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../../components/button/KaliButton";
import { TextStyles } from "../../components/typography.stylesheet";
import { LayoutStyles } from "../../components/layout/layout.stylesheet";
import RulerSlider from "../../components/slider/Ruler";
import SwipeIcon from "../../components/icon/SwipeIcon";
import * as Haptics from "expo-haptics";

const OnboardingGoalScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const [goal, setGoal] = React.useState(10);
  const navigateToAuth = () => {
    try {
      const handler = async () => {
        try {
          router.push("/onboarding/name");
        } catch (err) {
          console.error(err);
        }
      };
      handler();
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
                marginBottom: 32,
                textAlign: "center",
              },
            ]}
          >
            Set your daily steps goal
          </Text>
          <Text
            accessible={true}
            style={[
              TextStyles(theme).Text,
              TextStyles(theme).Display,
              {
                marginBottom: 16,
                textAlign: "center",
              },
            ]}
          >
            {goal * 100}
          </Text>
        </VStack>

        <VStack
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 32,
          }}
        >
          <RulerSlider
            value={goal}
            onValueChange={(val: number) => {
              val !== goal && setGoal(val);
              val !== goal &&
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }}
            isDarkMode={false}
          />
          <SwipeIcon fill={theme.colors.body_text} />
        </VStack>
        <View>
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme).Text,
                TextStyles(theme).Headline5
              ),
              {
                marginBottom: 8,
                textAlign: "center",
              },
            ]}
          >
            Set your daily steps goal to earn more Kali Points
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
            title={"Get started"}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingGoalScreen);
