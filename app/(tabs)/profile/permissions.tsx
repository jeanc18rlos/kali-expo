import React, { useEffect } from "react";
import { ScreenContainer, withTheme } from "@draftbit/ui";
import { Text, View } from "react-native";
import { TextStyles } from "../../../blocks/Typography.stylesheet";
import useResetRoute from "../../../utils/resetRoute";
import KaliButton from "../../../blocks/Button";
import * as Notifications from "expo-notifications";
import * as Sensors from "expo-sensors";
const OnboardingConsistencyScreen = (props: { theme: KaliThemeType }) => {
  const { theme } = props;

  const reset = useResetRoute();
  const [stepCounter, setStepCounter] = React.useState<boolean | null>(false);
  const [notificationsPermission, setNotificationsPermission] = React.useState<{
    status: string;
    canAskAgain: boolean;
    shouldShowAlert: boolean;
    shouldPlaySound: boolean;
    shouldSetBadge: boolean;
  } | null>(null);

  useEffect(() => {
    Notifications.getPermissionsAsync().then((status) => {
      console.log("status", status);
      setNotificationsPermission({
        shouldPlaySound: status.ios?.allowsSound ?? false,
        shouldSetBadge: status.ios?.allowsBadge ?? false,
        shouldShowAlert: status.ios?.allowsAlert ?? false,
        status: status.granted ? "granted" : "denied",
        canAskAgain: status.canAskAgain,
      });
    });
  }, []);
  useEffect(() => {
    Sensors.Pedometer.getPermissionsAsync().then((status) => {
      console.log("status", status.granted);
      setStepCounter(status.granted);
    });
  }, []);
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
              TextStyles(theme)["Headline6"].style,
              {
                color: theme.colors.body_text,

                letterSpacing: 1,
                marginBottom: 4,
                marginTop: 32,
              },
            ]}
          >
            NOTIFICATIONS
          </Text>

          <View>
            <Text
              style={[
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Body"].style,
                {
                  color: theme.colors.body_text,

                  marginBottom: 32,
                  marginTop: 16,
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: "Raleway_700Bold",
                }}
              >
                Status:{" "}
              </Text>
              {notificationsPermission?.status === "granted"
                ? "Notifications are enabled"
                : "Notifications are disabled"}
            </Text>
            {notificationsPermission?.status !== "granted" ? (
              <KaliButton
                theme={theme}
                variant="ButtonPrimary"
                onPress={() => {
                  Notifications.requestPermissionsAsync().then((status) => {
                    if (status.status === "granted") {
                      setNotificationsPermission({
                        shouldPlaySound: status.ios?.allowsSound ?? false,
                        shouldSetBadge: status.ios?.allowsBadge ?? false,
                        shouldShowAlert: status.ios?.allowsAlert ?? false,
                        status: status.granted ? "granted" : "denied",
                        canAskAgain: status.canAskAgain,
                      });
                    }
                  });
                }}
                style={{
                  marginTop: 0,
                  maxWidth: 100,
                }}
                title={"Enable"}
              />
            ) : null}
          </View>
        </View>
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
              TextStyles(theme)["Headline6"].style,
              {
                color: theme.colors.body_text,

                letterSpacing: 1,
                marginBottom: 4,
                marginTop: 32,
              },
            ]}
          >
            STEP COUNTER
          </Text>

          <View>
            <Text
              style={[
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Body"].style,
                {
                  color: theme.colors.body_text,

                  marginBottom: 32,
                  marginTop: 16,
                },
              ]}
            >
              <Text
                style={{
                  fontFamily: "Raleway_700Bold",
                }}
              >
                Status:{" "}
              </Text>
              {notificationsPermission
                ? "Step tracking enabled"
                : "Step tracking disabled"}
            </Text>
            {!stepCounter ? (
              <KaliButton
                theme={theme}
                variant="ButtonPrimary"
                onPress={() => {
                  Sensors.Pedometer.requestPermissionsAsync().then((status) => {
                    if (status.granted) {
                      setStepCounter(true);
                    }
                  });
                }}
                style={{
                  marginTop: 0,
                  maxWidth: 100,
                }}
                title={"Enable"}
              />
            ) : null}
          </View>
        </View>
      </ScreenContainer>
    </>
  );
};

export default withTheme(OnboardingConsistencyScreen);
