import React, { useState } from "react";
import {
  ScreenContainer,
  SimpleKeyboardPaddingView,
  withTheme,
} from "@kali/ui";
import { Text, View } from "react-native";
import { router } from "expo-router";
import KaliButton from "../../components/button/KaliButton";
import { TextStyles } from "../../components/typography.stylesheet";

import TextInput from "../../components/input/TextInput";
import useValidateNameExists from "../../utils/validateName";

const OnboardingNameScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const [submit, setSubmit] = useState(false);
  const [nameFieldValue, setEmailFieldValue] = useState("");

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

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={true}
    >
      <View
        style={[
          {
            justifyContent: "center",
            flex: 1,
            padding: 16,
          },
        ]}
      >
        {/* Container */}

        {/* Form */}
        <SimpleKeyboardPaddingView
          style={{
            gap: 16,
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <View />
          <View>
            <Text
              accessible={true}
              style={[
                TextStyles(theme).Text,
                TextStyles(theme).Headline2,
                {
                  marginBottom: 16,
                },
              ]}
            >
              How should we call you?
            </Text>
            <TextInput
              onChange={onChangeText}
              value={nameFieldValue}
              onSubmit={onSubmit}
              errors={submit ? errors : []}
              placeholder={"Name"}
              theme={theme}
              submitLabel="next"
              autoComplete={"name"}
            />
          </View>
          <KaliButton
            loading={false}
            variantName="ButtonPrimary"
            disabled={
              (errors.length > 0 && submit) || nameFieldValue.length === 0
            }
            onPress={onSubmit}
            style={{
              marginTop: 24,
            }}
            title={"Get started"}
          />
        </SimpleKeyboardPaddingView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OnboardingNameScreen);
