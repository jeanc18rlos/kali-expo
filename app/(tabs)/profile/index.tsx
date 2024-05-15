import React, { useEffect } from "react";
import {
  BottomSheet,
  HStack,
  IconButton,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from "@draftbit/ui";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { TextStyles } from "../../../blocks/Typography.stylesheet";

import * as GlobalStyles from "../../../GlobalStyles";
import KaliCoinSVG from "../../../blocks/icons/KaliCoinSVG";
import KPressableProfileBlock from "../../../blocks/ProfilePressable";
import KaliButton from "../../../blocks/Button";
import useResetRoute from "../../../utils/resetRoute";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

const OnboardingConsistencyScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const [showSignOff, setShowSignOff] = React.useState(false);
  const [proxiedSignOff, setProxiedSignOff] = React.useState(false);
  const reset = useResetRoute();
  const navigateToAuth = () => {
    try {
      reset(["index", "(tabs)", "index"]);
    } catch (err) {
      console.error(err);
    }
  };
  const backdropStyle = useAnimatedStyle(() => ({
    opacity: 1 - interpolate(0, [0, 1], [0, 1]),
  }));

  useEffect(() => {
    if (showSignOff) {
      setTimeout(() => {
        setProxiedSignOff(true);
      }, 100);
    } else {
      setProxiedSignOff(false);
    }
  }, [showSignOff]);

  return (
    <>
      <ScreenContainer
        scrollable={false}
        hasBottomSafeArea={false}
        hasSafeArea={true}
        hasTopSafeArea={true}
      >
        {/* Container */}
        <View>
          {/* Container */}
          <View>
            {/* User  */}
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: 16,
                padding: 16,
                width: "100%",
              }}
            >
              {/* User Profile Image */}
              <View
                style={{
                  height: 96,
                  justifyContent: "center",
                  width: 96,
                }}
              >
                <Image
                  resizeMode={"cover"}
                  source={{
                    uri: `https://firebasestorage.googleapis.com/v0/b/kali-f3ff6.appspot.com/o/profile-pictures%2Fmarie.jpeg?alt=media&token=20b5d97d-8a07-471e-83eb-097f70f99a35`,
                  }}
                  style={
                    (GlobalStyles.ImageStyles(theme)["Image"].style,
                    { borderRadius: 96, height: 96, width: 96 })
                  }
                />
              </View>
              {/* User Info */}
              <View
                style={{
                  alignItems: "flex-start",
                  alignSelf: "stretch",
                  flex: 1,
                  gap: 6,
                }}
              >
                {/* H6 */}
                <Text
                  accessible={true}
                  style={TextStyles(theme)["Headline3"].style}
                >
                  {"Hi, Username"}
                  {null}
                </Text>
                {/* Subtitle */}
                <Text
                  accessible={true}
                  style={TextStyles(theme)["Headline5"].style}
                >
                  {"Welcome to Kali"}
                  {"!"}
                </Text>
                {/* <UpgradeBarBlock /> 2 */}
              </View>
            </View>
            {/* Steps & Points */}
            <View
              style={{
                alignItems: "flex-start",
                borderColor: theme.colors.divider,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                flexDirection: "row",
                marginLeft: 16,
                marginRight: 16,
                paddingBottom: 24,
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 24,
              }}
            >
              {/* Today Steps */}
              <View
                style={{
                  borderColor: "rgb(229, 231, 235)",
                  borderRightWidth: 1,
                  flex: 100,
                  gap: 4,
                }}
              >
                <Text
                  accessible={true}
                  style={
                    (TextStyles(theme)["Text"].style,
                    {
                      color: "rgb(32, 32, 32)",
                      fontFamily: "Raleway_700Bold",
                      fontSize: 20,
                      letterSpacing: 0.1,
                      lineHeight: 24,
                    })
                  }
                >
                  {"7.548"}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  style={
                    (TextStyles(theme)["Text"].style,
                    {
                      color: "rgb(32, 32, 32)",
                      fontFamily: "Raleway_700Bold",
                      fontSize: 12,
                      letterSpacing: 0.96,
                      lineHeight: 16,
                      textTransform: "uppercase",
                    })
                  }
                >
                  {"TODAY STEPS"}
                </Text>
              </View>
              {/* Kali Points */}
              <View
                style={{
                  flex: 100,
                  gap: 4,
                  paddingLeft: 16,
                }}
              >
                <HStack>
                  <KaliCoinSVG />

                  <Text
                    accessible={true}
                    style={
                      (TextStyles(theme)["Text"].style,
                      {
                        color: "rgb(32, 32, 32)",
                        fontFamily: "Raleway_700Bold",
                        fontSize: 20,
                        letterSpacing: 1,
                        lineHeight: 24,
                        paddingLeft: 8,
                      })
                    }
                  >
                    {"50.548"}
                  </Text>
                </HStack>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  style={
                    (TextStyles(theme)["Text"].style,
                    {
                      color: "rgb(32, 32, 32)",
                      fontFamily: "Raleway_700Bold",
                      fontSize: 12,
                      letterSpacing: 0.96,
                      lineHeight: 16,
                    })
                  }
                >
                  {"KALI POINTS"}
                </Text>
              </View>
            </View>
          </View>
          <SimpleStyleScrollView
            bounces={true}
            horizontal={false}
            keyboardShouldPersistTaps={"never"}
            nestedScrollEnabled={false}
            showsHorizontalScrollIndicator={true}
            showsVerticalScrollIndicator={true}
            style={{
              paddingLeft: 16,
              paddingRight: 16,
              width: "100%",
            }}
          >
            <KPressableProfileBlock
            withIcon
              title={"My Orders"}
              isFirst={true}
              onPress={() => alert("In dev")}
              icon="shopping"
            />
            <KPressableProfileBlock
            withIcon
              title={"Favorites"}
              onPress={() => alert("In dev")}
              icon="heart"
            />
            {/* k-pressable_profile 2 */}
            <KPressableProfileBlock
            withIcon
              title={"Settings"}
              icon="settings"
              onPress={() => router.push("/profile/settings")}
            />
            {/* k-pressable_profile 3 */}
            <KPressableProfileBlock
            withIcon
              icon="membership"
              title={"Membership"}
              onPress={() => alert("In dev")}
            />
            {/* k-pressable_profile 4 */}
            <KPressableProfileBlock
            withIcon
              icon="support"
              title={"Support"}
              onPress={() => alert("In dev")}
            />
            {/* k-pressable_profile 5 */}
            <KPressableProfileBlock
            withIcon
              icon="logout"
              title={"Sign Off"}
              onPress={() => setShowSignOff(true)}
            />
          </SimpleStyleScrollView>
        </View>
      </ScreenContainer>
      <Animated.View
        style={[
          {
            display: !proxiedSignOff ? "none" : "flex",
            height: "100%",
            position: "absolute",
            width: "100%",
          },
          backdropStyle,
        ]}
      >
        <TouchableOpacity
          style={{
            flex: 1,
            width: "100%",
            height: "100%",
            pointerEvents: "auto",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onPress={() => setShowSignOff(false)}
        />
        {!proxiedSignOff ? null : (
          <BottomSheet
            borderWidth={1}
            bottomSnapPosition={"80%"}
            friction={0.95}
            handleColor={theme.colors.divider}
            middleSnapPosition={"50%"}
            showHandle={true}
            showsVerticalScrollIndicator={true}
            topBorderRadius={20}
            topSnapPosition={"10%"}
            borderColor={theme.colors.divider}
            bounces={true}
            enableOverScroll={false}
            initialSnapPosition={"middle"}
            style={[{ gap: 24, padding: 16, zIndex: 100 }]}
          >
            {/* Header Wrapper */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {/* View 2 */}
              <View></View>

              <View
                style={{
                  alignItems: "center",
                  alignSelf: "center",
                  backgroundColor: "rgb(245, 245, 245)",
                  borderRadius: 22,
                  height: 32,
                  justifyContent: "center",
                  width: 32,
                }}
              >
                {/* Icon Button 2 */}
                <IconButton
                  onPress={() => {
                    try {
                      setShowSignOff(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  color={theme.colors.tertiary}
                  icon={"AntDesign/close"}
                  size={24}
                />
              </View>
            </View>
            {/* View 2 */}
            <View style={{ gap: 24 }}>
              {/* View 3 */}
              <View>
                <Text
                  accessible={true}
                  style={[
                    TextStyles(theme)["Text"].style,
                    TextStyles(theme)["Headline2"].style,
                    {
                      marginBottom: 16,
                    },
                  ]}
                >
                  {"Sign Off"}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  style={[
                    TextStyles(theme)["Text"].style,
                    TextStyles(theme)["Body"].style,
                  ]}
                >
                  {"Are you sure you want to close your session"}
                </Text>
              </View>

              <View style={{ gap: 8 }}>
                <KaliButton
                  theme={theme}
                  variant="ButtonPrimary"
                  onPress={() => {
                    try {
                      navigateToAuth();
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{
                    marginTop: 0,
                  }}
                  title={"Yes, please!"}
                />
                <KaliButton
                  theme={theme}
                  variant="ButtonSecondary"
                  onPress={() => {
                    try {
                      setShowSignOff(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{
                    marginTop: 8,
                  }}
                  title={"No, thanks!"}
                />
              </View>
            </View>
          </BottomSheet>
        )}
      </Animated.View>
    </>
  );
};

export default withTheme(OnboardingConsistencyScreen);
