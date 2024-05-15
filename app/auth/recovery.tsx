import React, { useEffect } from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { KeyboardAvoidingView, ScreenContainer, withTheme } from "@draftbit/ui";
import { Keyboard, Text, View } from "react-native";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import useValidateEmail from "../../utils/validateEmail";
import { Container } from "../../blocks/Layout.stylesheet";
import EmailInput from "../../blocks/EmailInput";
import { Link, router } from "expo-router";
import { LinkStyles } from "../../GlobalStyles";

const AuthRecoveryPasswordScreen = ({ theme }: { theme: KaliThemeType }) => {
  const [submit, setSubmit] = React.useState(false);
  const [emailFieldValue, setEmailFieldValue] = React.useState("");
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const [errors] = useValidateEmail(emailFieldValue);

  const onChangeText = (text: string) => {
    const trimmedText = text.trim();
    setEmailFieldValue(trimmedText);
  };

  const alertEmailSent = () => {
    alert("Email sent");
  };

  const onSubmit = async () => {
    setSubmit(true);
    if (errors.length > 0 || emailFieldValue.length === 0) {
      return;
    } else {
      alert("Email sent");
      router.push("/auth/reset");
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
            flex: 1,
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
              Password Assistance
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
              Enter your email, if you have an account we will send you a link
              to reset your password.
            </Text>
            {/* Email Input */}
            <EmailInput
              onChangeText={onChangeText}
              textInputValue={emailFieldValue}
              onSubmitEditing={onSubmit}
              errors={submit ? errors : []}
              placeholder={"Email"}
              theme={theme}
              submitLabel="next"
            />
            {/* Email Input */}
            {/* Email Input */}
            <Link
              href={"/"}
              onPress={(e) => {
                e.preventDefault();
                alertEmailSent();
              }}
              accessible={true}
              style={[
                StyleSheet.compose(LinkStyles(theme)["Link"].style, {
                  marginBottom: 16,
                }),
              ]}
            >
              Resend email
            </Link>
            <Link
              href={"/auth/reset"}
              onPress={(e) => {
                router.push({
                  pathname: "/auth/reset",
                  params: { code: "123456" },
                });
                e.preventDefault();
                alertEmailSent();
              }}
              accessible={true}
              style={[
                StyleSheet.compose(LinkStyles(theme)["Link"].style, {
                  marginBottom: 16,
                }),
              ]}
            >
              Reset password with valid code (test only)
            </Link>
            <Link
              href={"/auth/reset"}
              onPress={(e) => {
                router.push({
                  pathname: "/auth/reset",
                  params: { code: "04321" },
                });
                e.preventDefault();
                alertEmailSent();
              }}
              accessible={true}
              style={[
                StyleSheet.compose(LinkStyles(theme)["Link"].style, {
                  marginBottom: 16,
                }),
              ]}
            >
              Reset password with invalid code (test only)
            </Link>
          </View>
          <KaliButton
            theme={theme}
            title={"Next"}
            disabled={
              (errors.length > 0 && submit) || emailFieldValue.length === 0
            }
            onPress={onSubmit}
          />
        </View>
        {/* Footer Wrapper */}
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default withTheme(AuthRecoveryPasswordScreen);
