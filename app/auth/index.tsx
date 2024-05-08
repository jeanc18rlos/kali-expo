import React from "react";
import * as StyleSheet from "../../utils/StyleSheet";
import { ScreenContainer, VStack, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { Link, router } from "expo-router";
import { Container, VStackStyles } from "../../blocks/Layout.stylesheet";
import { TextStyles } from "../../blocks/Typography.stylesheet";
import KaliButton from "../../blocks/Button";

const AuthProvidersScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const navigateToEmail = () => {
    try {
      router.push("/auth/email");
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
      <View
        style={[
          StyleSheet.compose(Container(theme)["View"].style, {
            justifyContent: "center",
          }),
        ]}
      >
        <VStack
          style={StyleSheet.compose(VStackStyles(theme)["V Stack"].style, {
            justifyContent: "center",
            gap: 16,
          })}
        >
          {/* Title */}
          <Text
            accessible={true}
            style={StyleSheet.compose(TextStyles(theme)["Headline"].style, {
              textAlign: "center",
            })}
          >
            Get Started
          </Text>
          {/*  Description */}
          <Text
            accessible={true}
            style={[
              StyleSheet.compose(
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Body"].style
              ),
              {
                textAlign: "center",
              },
            ]}
          >
            "Explore our curated marketplace and see how rewarding healthy
            habits can be. "
          </Text>
          {/* Container */}
          <VStack
            style={StyleSheet.compose(VStackStyles(theme)["V Stack"].style, {
              alignItems: "stretch",
              gap: 8,
              justifyContent: "center",
            })}
          >
            {/* Email */}
            <KaliButton
              theme={theme}
              onPress={navigateToEmail}
              title={"Continue with email"}
              icon={"MaterialIcons/email"}
            />
            {/* Google */}
            <KaliButton
              theme={theme}
              variant="ButtonSecondary"
              title={"Continue with Google"}
              icon={"AntDesign/google"}
            />
            {/* Apple */}
            <KaliButton
              theme={theme}
              variant="ButtonSecondary"
              title={"Continue with Apple"}
              icon={"MaterialCommunityIcons/apple"}
            />
            <Text
              accessible={true}
              style={[
                StyleSheet.compose(
                  TextStyles(theme)["Text"].style,
                  TextStyles(theme)["Body"].style
                ),
                {
                  textAlign: "center",
                },
              ]}
            >
              By continuing your accept our {"\n"}
              <Link
                accessible={true}
                style={{ textDecorationLine: "underline" }}
                href={"https://kali.day/terms-and-conditions"}
              >
                Terms and Conditions
              </Link>
              {" and "}
              <Link
                accessible={true}
                style={{ textDecorationLine: "underline" }}
                href={"https://kali.day/privacy-policy"}
              >
                Privacy Policy
              </Link>
            </Text>
          </VStack>
        </VStack>
        <View />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AuthProvidersScreen);
