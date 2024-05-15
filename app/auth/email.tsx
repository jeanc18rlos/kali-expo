import React, { useEffect } from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { KeyboardAvoidingView, ScreenContainer, withTheme } from "@draftbit/ui";
import { Keyboard, Text, View } from "react-native";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import useValidateEmail from "../../utils/validateEmail";
import { Container } from "../../blocks/Layout.stylesheet";
import EmailInput from "../../blocks/EmailInput";
import { useRouter } from "expo-router";

const AuthEmailScreen = ({ theme }: { theme: KaliThemeType }) => {
  const router = useRouter();
  const [submit, setSubmit] = React.useState(false);
  const [emailFieldValue, setEmailFieldValue] = React.useState("");
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const [errors, setErrors] = useValidateEmail(emailFieldValue);
  // const backend$v1$checkEmailGET = use$v1$checkEmailGET();
  const onChangeText = (text: string) => {
    const trimmedText = text.trim();
    setEmailFieldValue(trimmedText);
  };

  const onSubmit = async () => {
    setSubmit(true);
    if (errors.length > 0 || emailFieldValue.length === 0) {
      return;
    } else {
      const handler = async () => {
        try {
          const email = "example@email.com";
          /*
            const { json, status } = await backend$v1$checkEmailGET.mutateAsync({
             email: emailFieldValue,
            });

            if (status === 200) {
            const email = json;
          */
          // if (email[0]) {
          if (email === emailFieldValue) {
            router.push({
              pathname: "/auth/login",
              params: { email: emailFieldValue },
            });
          } else {
            router.push({
              pathname: "/auth/register",
              params: { email: emailFieldValue },
            });
          }
          /*
          } else {
            setErrors(["Unexpected error occurred. Please try again later."]);
          }
        */
        } catch (err) {
          console.error(err);
        }
      };
      handler();
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
                TextStyles(theme)["Text"].style,
                {
                  marginBottom: 16,
                },
              ]}
            >
              Continue with Email
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
              "Explore our curated marketplace and see how rewarding healthy
              habits can be. "
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

export default withTheme(AuthEmailScreen);
