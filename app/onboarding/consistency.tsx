import React from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { ScreenContainer, VStack, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import { Container } from "../../blocks/Layout.stylesheet";
import ResetLink from "../../blocks/ResetLink";
import NavPillsBlock from "../../blocks/NavPillsBlock";

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
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Body"].style
              ),
              {
                marginBottom: 8,
                textAlign: "center",
              },
            ]}
          >
            Check in on Kali daily to unlock additional rewards.
          </Text>
          <NavPillsBlock
            pillsCount={3}
            selectedPillIndex={2}
            theme={theme as any}
            style={{
              height: 16,
              margin: "auto",
              width: "100%",
              justifyContent: "center",
            }}
          />
          {/* Get Started Button */}
          <KaliButton
            theme={theme}
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