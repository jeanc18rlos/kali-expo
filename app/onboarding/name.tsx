import React, { useEffect } from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { ScreenContainer, VStack, withTheme } from "@draftbit/ui";
import { Keyboard, KeyboardAvoidingView, Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../../blocks/Button";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import { Container } from "../../blocks/Layout.stylesheet";
import ResetLink from "../../blocks/ResetLink";
import TextInput from "../../blocks/TextInput";
import useValidateNameExists from "../../utils/validateName";

const OnboardingNameScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const [submit, setSubmit] = React.useState(false);
  const [nameFieldValue, setEmailFieldValue] = React.useState("");
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);
  const errors = useValidateNameExists(nameFieldValue);

  const onChangeText = (text: string) => {
    const trimmedText = text.trim();
    setEmailFieldValue(trimmedText);
  };

  const onSubmit = async () => {
    setSubmit(true);
    if (errors.length > 0 || nameFieldValue.length === 0) {
      return;
    } else {
      router.push("/onboarding/notifications");
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
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={true}
    >
      <KeyboardAvoidingView
        enabled={false}
        style={[
          StyleSheet.compose(Container(theme)["View"].style, {
            justifyContent: "center",
          }),
        ]}
      >
        {/* Container */}

        {/* Content Avoiding View */}
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
          <VStack>
            <ResetLink
              link="/home"
              title="SKIP"
              theme={theme}
              style={{
                alignSelf: "flex-end",
                marginBottom: 16,
              }}
            />
          </VStack>
          <View>
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
              How should we call you?
            </Text>
            <TextInput
              onChangeText={onChangeText}
              textInputValue={nameFieldValue}
              onSubmitEditing={onSubmit}
              errors={submit ? errors : []}
              placeholder={"Name"}
              theme={theme}
              submitLabel="next"
              autoComplete={"name"}
            />
          </View>
          <KaliButton
            theme={theme}
            style={{
              marginTop: 24,
            }}
            title={"Get started"}
            disabled={
              (errors.length > 0 && submit) || nameFieldValue.length === 0
            }
            onPress={onSubmit}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingNameScreen);
