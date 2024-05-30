import React from "react";
import { StyleSheet } from "react-native";
import { ScreenContainer, withTheme } from "@kali/ui";
import { Text, View } from "react-native";
import KaliButton from "../../components/button/KaliButton";
import { TextStyles } from "../../components/typography.stylesheet";
import { LayoutStyles } from "../../components/layout/layout.stylesheet";
import * as Notifications from "expo-notifications";
import { useRouter } from "expo-router";

const OnboardingConsistencyScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;
  const router = useRouter();
  const onSubmit = () => {
    try {
      router.replace("(tabs)");
    } catch (err) {
      console.error(err);
    }
  };

  const onRequestNotificationPermission = () =>
    Notifications.getPermissionsAsync().then((status) => {
      if (status.status === "granted") {
        onSubmit();
      }
    });
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
        <View />
        <Text>
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
            Greg!,{" "}
          </Text>
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme).Text,
                TextStyles(theme).Headline3
              ),
              {
                marginBottom: 16,
                textAlign: "left",
              },
            ]}
          >
            Would you like to receive push notifications so I can help you
            progress?
          </Text>
        </Text>
        <View>
          {/* Get Started Button */}
          <KaliButton
            variantName="ButtonPrimary"
            disabled={false}
            loading={false}
            onPress={() => {
              onRequestNotificationPermission;
            }}
            style={{
              marginBottom: 16,
            }}
            title={"Yes, please!"}
          />
          <KaliButton
            variantName="ButtonSecondary"
            disabled={false}
            loading={false}
            onPress={onSubmit}
            title={"No, thanks!"}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingConsistencyScreen);
