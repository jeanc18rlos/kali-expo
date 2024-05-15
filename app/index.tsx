import React from "react";
import KaliIcon from "../blocks/icons/KaliIcon";
import * as StyleSheet from "../utils/StyleSheet";
import { Center, ScreenContainer, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../blocks/Button";
import { TextStyles } from "../blocks/Typography.stylesheet";
import { CenterStyles, Container } from "../blocks/Layout.stylesheet";
import { Route } from "expo-router/build/Route";

const WelcomeScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const navigateToAuth = () => {
    try {
      router.push("auth");
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
        {/* Logo Container */}
        <Center
          style={StyleSheet.compose(CenterStyles(theme)["Center"].style, {
            flex: 1,
          })}
        >
          <KaliIcon />
        </Center>
        {/* Content */}
        <View>
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Headline"].style
              ),
              {
                marginBottom: 16,
                textAlign: "left",
              },
            ]}
          >
            Take Steps {"\n"}
            Earn Rewards
          </Text>

          {/* Get Started Button */}
          <KaliButton
            theme={theme}
            onPress={navigateToAuth}
            onLongPress={() => {
              router.push("/(tabs)/home");
            }}
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

export default withTheme(WelcomeScreen);
