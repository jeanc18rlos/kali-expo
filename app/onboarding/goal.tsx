import React from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { ScreenContainer, VStack, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import { Container } from "../../blocks/Layout.stylesheet";
import RulerSlider from "../../blocks/RulerSlider";
import ResetLink from "../../blocks/ResetLink";
import SwipeIcon from "../../blocks/icons/SwipeIcon";
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

      router.push("/onboarding/name");
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
        style={StyleSheet.compose(Container(theme)["View"].style, {
          justifyContent: "space-between",
        })}
      >
        <VStack>
          <ResetLink
            link={"(tabs)"}
            title="SKIP"
            theme={theme}
            style={{
              alignSelf: "flex-end",
              marginBottom: 16,
            }}
          />
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Headline2"].style
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
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["Display"].style,
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
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Headline5"].style
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
            theme={theme}
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
