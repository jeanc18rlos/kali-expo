import React, { useEffect } from "react";
import {
  BottomSheet,
  IconButton,
  ScreenContainer,
  withTheme,
} from "@draftbit/ui";
import { Text, View, Keyboard, TouchableOpacity, Linking } from "react-native";
import { router } from "expo-router";
import { TextStyles } from "../../../blocks/Typography.stylesheet";

import KPressableProfileBlock from "../../../blocks/ProfilePressable";
import KaliButton from "../../../blocks/Button";
import useResetRoute from "../../../utils/resetRoute";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import TextInput from "../../../blocks/TextInput";

const OnboardingConsistencyScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;
  const [deleteStep, setDeleteStep] = React.useState(1);
  const [showSignOff, setShowSignOff] = React.useState(false);
  const [proxiedSignOff, setProxiedSignOff] = React.useState(false);
  const reset = useResetRoute();
  const [nameFieldValue, onChangeText] = React.useState("");
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const onSubmit = () => {
    setDeleteStep(1);
    setProxiedSignOff(false);
    navigateToAuth();
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (e) => {
        setKeyboardHeight((prev) =>
          prev < e.endCoordinates.height || e.endCoordinates.height === 0
            ? e.endCoordinates.height
            : prev
        );
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardHeight(0);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
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
    setDeleteStep(1);
  }, [showSignOff]);

  return (
    <>
      <ScreenContainer
        scrollable={true}
        hasBottomSafeArea={false}
        hasSafeArea={true}
        hasTopSafeArea={true}
      >
        {/* Container */}
        <View
          style={{
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          {/* Container */}

          <Text
            style={[
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["BodySmall"].style,
              {
                color: theme.colors.body_text,
                fontFamily: "Raleway_300Light",
                fontWeight: 300,
                letterSpacing: 1,
                marginBottom: 4,
                marginTop: 32,
              },
            ]}
          >
            SETTINGS
          </Text>
          <KPressableProfileBlock
            title={"Permissions"}
            onPress={() => router.push("profile/permissions")}
            withIcon={false}
          />

          <Text
            style={[
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["BodySmall"].style,
              {
                color: theme.colors.body_text,
                fontFamily: "Raleway_300Light",
                fontWeight: 300,
                letterSpacing: 1,
                marginBottom: 4,
                marginTop: 32,
              },
            ]}
          >
            ACITIVITY
          </Text>
          {/* k-pressable_profile 2 */}
          <KPressableProfileBlock
            title={"Daily goal"}
            onPress={() => router.push("profile/goal")}
            withIcon={false}
          />
          <Text
            style={[
              TextStyles(theme)["Text"].style,
              TextStyles(theme)["BodySmall"].style,
              {
                color: theme.colors.body_text,
                fontFamily: "Raleway_300Light",
                fontWeight: 300,
                letterSpacing: 1,
                marginBottom: 4,
                marginTop: 32,
              },
            ]}
          >
            INFORMATION
          </Text>
          {/* k-pressable_profile 3 */}
          <KPressableProfileBlock
            title={"Kali points"}
            onPress={() => alert("In dev")}
            withIcon={false}
          />
          {/* k-pressable_profile 4 */}
          <KPressableProfileBlock
            title={"Terms of service"}
            onPress={() =>
              Linking.openURL("https://kali.day/terms-and-conditions")
            }
          />
          <KPressableProfileBlock
            title={"Privacy policy"}
            onPress={() => Linking.openURL("https://kali.day/privacy-policy")}
          />
          {/* k-pressable_profile 5 */}
          <KPressableProfileBlock
            title={"Delete Account"}
            onPress={() => setShowSignOff(true)}
          />
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
            bottomSnapPosition={deleteStep > 1 ? "0%" : "80%"}
            friction={0.95}
            handleColor={theme.colors.divider}
            middleSnapPosition={deleteStep > 1 ? "70%" : "50%"}
            showHandle={true}
            showsVerticalScrollIndicator={true}
            topBorderRadius={20}
            topSnapPosition={deleteStep > 1 ? "0%" : "10%"}
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
                {/* Text 2 */}

                {deleteStep === 2 ? (
                  <>
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
                      Help us improve!
                    </Text>
                    <Text
                      accessible={true}
                      style={[
                        TextStyles(theme)["Text"].style,
                        TextStyles(theme)["Body"].style,
                        {
                          marginBottom: 16,
                        },
                      ]}
                    >
                      {deleteStep}
                      {
                        "It would be very helpful for us to understand why you are leaving. Your feedback is valuable in order to improve the experience for all our users."
                      }
                    </Text>
                    <TextInput
                      autoComplete={"off"}
                      numberOfLines={8}
                      onChangeText={onChangeText}
                      textInputValue={nameFieldValue}
                      onSubmitEditing={onSubmit}
                      errors={[]}
                      placeholder={"Tell us why you are leaving..."}
                      theme={theme}
                      submitLabel="done"
                    />
                    <KaliButton
                      theme={theme}
                      variant="ButtonPrimary"
                      onPress={() => {
                        try {
                          onSubmit();
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={{
                        marginTop: 0,
                        backgroundColor: theme.colors.error,
                        borderColor: theme.colors.error,
                        marginBottom: keyboardHeight,
                      }}
                      title={"Delete my account"}
                    />
                  </>
                ) : (
                  <>
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
                      {"Are you sure?"}
                    </Text>
                    <Text
                      accessible={true}
                      style={[
                        TextStyles(theme)["Text"].style,
                        TextStyles(theme)["Body"].style,
                        { marginBottom: 16 },
                      ]}
                    >
                      You will lose access to your Kali points and ....This
                      action cannot be reverted.
                    </Text>

                    <KaliButton
                      theme={theme}
                      variant="ButtonPrimary"
                      onPress={() => {
                        try {
                          setDeleteStep(2);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={{
                        marginTop: 0,
                        backgroundColor: theme.colors.error,
                        borderColor: theme.colors.error,
                        marginBottom: 16,
                      }}
                      title={"Help us improve the app"}
                    />
                  </>
                )}
              </View>
            </View>
          </BottomSheet>
        )}
      </Animated.View>
    </>
  );
};

export default withTheme(OnboardingConsistencyScreen);
