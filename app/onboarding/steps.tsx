import React from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { ScreenContainer, VStack, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import { Container } from "../../blocks/Layout.stylesheet";
import NavPillsBlock from "../../blocks/NavPillsBlock";
import ResetLink from "../../blocks/ResetLink";
import * as GlobalVariables from "../../config/GlobalVariableContext";

const OnboardingStepsScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const navigateToAuth = () => {
    try {
      router.push("/onboarding/points");
    } catch (err) {
      console.error(err);
    }
  };
  const Constants = GlobalVariables.useValues();
  console.log(Constants.AUTHORIZATION_HEADER);
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
            Take steps {"\n"}
            to earn points.
          </Text>
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
            We track your fitness and reward Kali Points
          </Text>
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Body"].style
              ),
              {
                marginBottom: 16,
                textAlign: "center",
              },
            ]}
          >
            For each step you take, you'll earn 1 Kali Point.
          </Text>
          <NavPillsBlock
            pillsCount={3}
            selectedPillIndex={0}
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
            title={"Get started"}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingStepsScreen);
