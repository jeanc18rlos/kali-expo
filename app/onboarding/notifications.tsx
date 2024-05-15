import React from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { ScreenContainer, VStack, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import { Container } from "../../blocks/Layout.stylesheet";
import ResetLink from "../../blocks/ResetLink";
import useResetRoute from "../../utils/resetRoute";
import * as Notifications from "expo-notifications";

const OnboardingConsistencyScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;
  const reset = useResetRoute();

  const onSubmit = () => {
    try {
      reset("(tabs)");
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
        </VStack>
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
          Greg! Would you like to receive push notifications so I can help you
          progress?
        </Text>
        <View>
          {/* Get Started Button */}
          <KaliButton
            theme={theme}
            variant="ButtonPrimary"
            onPress={() => {
              Notifications.getPermissionsAsync().then((status) => {
                if (status.status === "granted") {
                  onSubmit();
                } else {
                  Notifications.requestPermissionsAsync().then((status) => {
                    if (status.status === "granted") {
                      onSubmit();
                    }
                  });
                }
              });
            }}
            style={{
              marginTop: 0,
            }}
            title={"Yes, please!"}
          />
          <KaliButton
            theme={theme}
            variant="ButtonSecondary"
            onPress={onSubmit}
            style={{
              marginTop: 8,
            }}
            title={"No, thanks!"}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingConsistencyScreen);
