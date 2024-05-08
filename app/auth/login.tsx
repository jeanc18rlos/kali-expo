import React, { useEffect } from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { KeyboardAvoidingView, ScreenContainer, withTheme } from "@draftbit/ui";
import { Keyboard, Text, View } from "react-native";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import { Container } from "../../blocks/Layout.stylesheet";
import PasswordInput from "../../blocks/PasswordInput";
import useValidatePasswordExists from "../../utils/validateExists";
import { Link, router } from "expo-router";
import { LinkStyles } from "../../GlobalStyles";

const AuthLoginScreen = ({ theme }: { theme: KaliThemeType }) => {
  const [submit, setSubmit] = React.useState(false);
  const [passwordFieldValue, setPasswordFieldValue] = React.useState("");
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const errors = useValidatePasswordExists(passwordFieldValue);

  const onChangeText = (text: string) => {
    const trimmedText = text.trim();
    setPasswordFieldValue(trimmedText);
  };

  const onSubmit = () => {
    setSubmit(true);
    if (errors.length > 0 || passwordFieldValue.length === 0) {
      return;
    } else {
      router.replace("/home");
    }
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

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={false}
      hasTopSafeArea={false}
      scrollable={true}
    >
      {/* Content Avoiding View */}
      <KeyboardAvoidingView
        enabled={false}
        style={[
          StyleSheet.compose(Container(theme)["View"].style, {
            justifyContent: "center",
          }),
        ]}
      >
        {/* Form */}
        <View
          style={{
            gap: 16,
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingBottom: keyboardHeight,
          }}
        >
          <View />
          <View>
            {/* Title */}
            <Text
              accessible={true}
              style={[
                TextStyles(theme)["Headline2"].style,
                {
                  marginBottom: 16,
                },
              ]}
            >
              Welcome back!
            </Text>
            {/* Description */}
            <Text
              accessible={true}
              style={[
                StyleSheet.compose(
                  TextStyles(theme)["Text"].style,
                  TextStyles(theme)["Body"].style
                ),
                {
                  marginBottom: 16,
                },
              ]}
            >
              Enter your password to continue
            </Text>
            {/* Email Input */}
            <PasswordInput
              onChangeText={onChangeText}
              textInputValue={passwordFieldValue}
              onSubmitEditing={onSubmit}
              errors={submit ? errors : []}
              placeholder={"Password"}
              theme={theme}
              submitLabel="next"
            />
            {/* Email Input */}
            <Link
              href={"/auth/recovery"}
              accessible={true}
              style={[
                StyleSheet.compose(LinkStyles(theme)["Link"].style, {
                  marginBottom: 16,
                }),
              ]}
            >
              Forgot password?
            </Link>
          </View>

          <KaliButton
            theme={theme}
            title={"Next"}
            disabled={
              (errors.length > 0 && submit) || passwordFieldValue.length === 0
            }
            onPress={onSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default withTheme(AuthLoginScreen);
