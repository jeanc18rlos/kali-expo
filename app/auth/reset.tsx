import React, { useEffect } from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { KeyboardAvoidingView, ScreenContainer, withTheme } from "@draftbit/ui";
import { Keyboard, Text, View } from "react-native";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import { Container } from "../../blocks/Layout.stylesheet";
import PasswordInput from "../../blocks/PasswordInput";
import useValidatePassword from "../../utils/validatePassword";
import { router, useLocalSearchParams } from "expo-router";

const AuthResetPasswordScreen = ({ theme }: { theme: KaliThemeType }) => {
  const [submit, setSubmit] = React.useState(false);
  const [passwordFieldValue, setPasswordFieldValue] = React.useState("");
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const [errors, setErrors] = useValidatePassword(passwordFieldValue);
  const params = useLocalSearchParams();
  const { code } = params;

  const onChangeText = (text: string) => {
    const trimmedText = text.trim();
    setPasswordFieldValue(trimmedText);
  };

  const onSubmit = async () => {
    setSubmit(true);
    if (errors.length > 0 || passwordFieldValue.length === 0) {
      return;
    } else {
      if (passwordFieldValue === "Pa55w0rd!") {
        setErrors((prevErrors) => [
          ...prevErrors,
          "Cannot use the same password",
        ]);
        return;
      }
      if (code !== "123456") {
        setErrors((prevErrors) => [
          ...prevErrors,
          "Cannot use the same password",
        ]);
        return;
      }
      await alert("Password succesfully changed, navigate to login screen");
      router.push("/auth/login");
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
              Create a new password
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
              Make sure your password is secure. {"\n"}
              <Text>Has 8 and 20 characters</Text> {"\n"}
              <Text>・An uppercase and a lowercase letter</Text>
              {"\n"}
              <Text>・A number and a special character</Text>
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

export default withTheme(AuthResetPasswordScreen);
