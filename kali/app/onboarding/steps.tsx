import React from "react";
import { ScreenContainer, VStack, withTheme } from "@kali/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import { StyleSheet } from "react-native";
import KaliButton from "../../components/button/KaliButton";
import { TextStyles } from "../../components/typography.stylesheet";
import { LayoutStyles } from "../../components/layout/layout.stylesheet";

const OnboardingStepsScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const navigateToAuth = () => {
    try {
      router.push("/onboarding/points");
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
            Take steps {"\n"}
            to earn points.
          </Text>
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
            We track your fitness and reward Kali Points
          </Text>
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme).Text,
                TextStyles(theme).Body
              ),
              {
                marginBottom: 16,
                textAlign: "center",
              },
            ]}
          >
            For each step you take, you'll earn 1 Kali Point.
          </Text>

          {/* Get Started Button */}
          <KaliButton
            disabled={false}
            loading={false}
            variantName="ButtonPrimary"
            title={"Get started"}
            onPress={navigateToAuth}
            style={{
              marginTop: 24,
            }}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingStepsScreen);
