import React from "react";
import { ScreenContainer, VStack, withTheme } from "@kali/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import { Pedometer } from "expo-sensors";
import { StyleSheet } from "react-native";
import KaliButton from "../../components/button/KaliButton";
import { LayoutStyles } from "../../components/layout/layout.stylesheet";
import { TextStyles } from "../../components/typography.stylesheet";

const OnboardingTrackScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const connectStepTracker = () => {
    try {
      Pedometer.requestPermissionsAsync().then((response) => {
        if (response.granted) {
          alert("Tracking Permission granted");
        } else {
          alert("Tracking Permission denied");
        }
        router.push("/onboarding/goal");
      });
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
                textAlign: "left",
              },
            ]}
          >
            Connect your favorite fitness watch or app to start earning.
          </Text>

          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme).Text,
                TextStyles(theme).Headline5
              ),
              {
                marginBottom: 8,
                textAlign: "left",
              },
            ]}
          >
            Connect and we'll do the rest!
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
                textAlign: "left",
              },
            ]}
          >
            The more steps you take, the more you'll earn {"\n"}
            and the closer you'll be to reaching your goals.
          </Text>
        </VStack>

        <View>
          {/* Get Started Button */}

          <KaliButton
            disabled={false}
            loading={false}
            variantName="ButtonPrimary"
            onPress={connectStepTracker}
            style={{
              marginTop: 24,
            }}
            title={"Connect"}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingTrackScreen);
