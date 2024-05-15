import React from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { ScreenContainer, VStack, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import { Container } from "../../blocks/Layout.stylesheet";
import ResetLink from "../../blocks/ResetLink";
import { Pedometer } from "expo-sensors";
import * as GlobalVariables from "../../config/GlobalVariableContext";
const OnboardingTrackScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;
  const SetConstant = GlobalVariables.useSetValue();
  const navigateToAuth = () => {
    try {
      Pedometer.requestPermissionsAsync().then((response) => {
        if (response.granted) {
          console.log("Permission granted");
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
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Headline5"].style
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
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Body"].style
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
            theme={theme}
            onPress={navigateToAuth}
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
