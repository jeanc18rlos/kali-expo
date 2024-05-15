import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as BackendApi from '../apis/BackendApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import getPushTokenUtil from '../utils/getPushToken';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  KeyboardAvoidingView,
  Link,
  ScreenContainer,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const AllowNotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [textInputValue, setTextInputValue] = React.useState('');
  const backendUpdateSettingsNotPATCH = BackendApi.useUpdateSettingsNotPATCH();

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        {/* Header */}
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              { padding: 16 }
            ),
            dimensions.width
          )}
        >
          {/* SKIP */}
          <Link
            accessible={true}
            onPress={() => {
              try {
                if (navigation.canGoBack()) {
                  navigation.popToTop();
                }
                navigation.replace('AppTabNavigator', { screen: 'HomeScreen' });
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.LinkStyles(theme)['SKIP'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.LinkStyles(theme)['SKIP'].style,
              dimensions.width
            )}
            title={'SKIP'}
          />
        </VStack>
        {/* Content Avoiding View */}
        <KeyboardAvoidingView
          behavior={'padding'}
          enabled={true}
          keyboardVerticalOffset={60}
          style={StyleSheet.applyWidth(
            { flexGrow: 1, justifyContent: 'space-between' },
            dimensions.width
          )}
        >
          {/* Input Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                alignSelf: 'auto',
                flexGrow: 1,
                justifyContent: 'flex-end',
                marginLeft: 18,
                marginRight: 18,
                marginTop: 36,
              },
              dimensions.width
            )}
          >
            {/* Title */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['HEADING-2'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['HEADING-2'].style,
                  { textAlign: 'left' }
                ),
                dimensions.width
              )}
            >
              {textInputValue}
              {
                '! Would you like to receive push notifications so \nI can help you progress?'
              }
            </Text>
          </View>
          {/* Footer Wrapper */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexGrow: 1,
                flexShrink: 0,
                gap: 8,
                justifyContent: 'flex-end',
                marginLeft: 18,
                marginRight: 18,
                paddingBottom: 24,
              },
              dimensions.width
            )}
          >
            {/* Yes Button */}
            <Button
              onLongPress={() => {
                try {
                  navigation.navigate('AuthNavigator', {
                    screen: 'SignInScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              onPress={() => {
                const handler = async () => {
                  try {
                    const response = await getPushTokenUtil({
                      permissionErrorMessage:
                        'Sorry, we need notifications permissions to make this work.',
                      deviceErrorMessage:
                        'Must use physical device for Push Notifications.',
                      showAlertOnPermissionError: true,
                      showAlertOnDeviceError: true,
                    });

                    setGlobalVariableValue({
                      key: 'pushToken',
                      value: response,
                    });
                    (await backendUpdateSettingsNotPATCH.mutateAsync())?.json;
                    navigation.push('OnboardingNavigator', {
                      screen: 'ConnectStepTrackerScreen',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button Primary'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ButtonStyles(theme)['Button Primary'].style,
                dimensions.width
              )}
              title={'Yes, please'}
            />
            {/* No Button */}
            <Button
              onLongPress={() => {
                try {
                  navigation.navigate('AuthNavigator', {
                    screen: 'SignInScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              onPress={() => {
                try {
                  navigation.push('OnboardingNavigator', {
                    screen: 'ConnectStepTrackerScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button Secondary'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ButtonStyles(theme)['Button Secondary'].style,
                dimensions.width
              )}
              title={'No, thanks'}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AllowNotificationsScreen);
