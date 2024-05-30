import React from "react";
import { StyleSheet } from "react-native";
import { ScreenContainer, VStack, withTheme } from "@kali/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../../components/button/KaliButton";
import { TextStyles } from "../../components/typography.stylesheet";
import { LayoutStyles } from "../../components/layout/layout.stylesheet";

const OnboardingPointsScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const navigateToAuth = () => {
    try {
      router.push("/onboarding/consistency");
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
            Redeem points for rewards.
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
            Use your earned points in the marketplace{" "}
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
            Browse our curated marketplace and redeem your points for discounts
            on new products.{" "}
          </Text>

          {/* Get Started Button */}
          <KaliButton
            disabled={false}
            loading={false}
            variantName="ButtonPrimary"
            title={"Next"}
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

export default withTheme(OnboardingPointsScreen);
