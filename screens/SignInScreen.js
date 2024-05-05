import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as AuthApi from '../apis/AuthApi.js';
import KActionHeaderBlock from '../components/KActionHeaderBlock';
import * as GlobalVariables from '../config/GlobalVariableContext';
import addBearerPrefix from '../global-functions/addBearerPrefix';
import { parseBoolean } from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  KeyboardAvoidingView,
  Link,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const SignInScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [error, setError] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [passwordFieldValue, setPasswordFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
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
        <KActionHeaderBlock
          left_button={true}
          left_icon={'chevron-left'}
          right_button={true}
          right_icon={'close'}
        />
        {/* Input Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              alignSelf: 'auto',
              flexGrow: 1,
              gap: 16,
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
              GlobalStyles.TextStyles(theme)['HEADING-2'].style,
              dimensions.width
            )}
          >
            {'Welcome back!'}
          </Text>
          {/*  Description */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['BODY'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['BODY'].style,
              dimensions.width
            )}
          >
            {'Enter password'}
          </Text>
          {/* Password Field */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newPasswordFieldValue => {
              try {
                setTextInputValue(newPasswordFieldValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['password-input'].props}
            placeholder={'Password'}
            secureTextEntry={true}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['password-input'].style,
                { marginBottom: 16 }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
          {/* Forgot Password */}
          <Link
            accessible={true}
            onPress={() => {
              try {
                navigation.push('AuthNavigator', {
                  screen: 'ForgotPasswordScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.LinkStyles(theme)['under-link'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.LinkStyles(theme)['under-link'].style,
                { alignSelf: 'flex-end', color: 'rgb(160, 72, 72)' }
              ),
              dimensions.width
            )}
            title={'Forgot Password?'}
          />
          {/* Error */}
          <>
            {!parseBoolean(error) ? null : (
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Error'],
                      fontFamily: 'Raleway_600SemiBold',
                    }
                  ),
                  dimensions.width
                )}
              >
                {error}
              </Text>
            )}
          </>
        </View>
        {/* Footer Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexGrow: 1,
              flexShrink: 0,
              justifyContent: 'flex-end',
              marginLeft: 18,
              marginRight: 18,
              paddingBottom: 24,
            },
            dimensions.width
          )}
        >
          {/* Next Button */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const SignUpResponse = (
                    await AuthApi.loginPOST(Constants, {
                      email: 'jeanc16rlos@gmail.com',
                      password: 'mSOSfWeRCbrRVVtVtAVB',
                    })
                  )?.json;
                  if (SignUpResponse?.error_code) {
                    const message = SignUpResponse?.msg;
                    setGlobalVariableValue({
                      key: 'ERROR_MESSAGE',
                      value: message,
                    });
                    if (message) {
                      return;
                    }
                  } else {
                    const access_token = SignUpResponse?.access_token;
                    setGlobalVariableValue({
                      key: 'AUTHORIZATION_HEADER',
                      value: addBearerPrefix(access_token),
                    });
                    if (navigation.canGoBack()) {
                      navigation.popToTop();
                    }
                    navigation.replace('AppTabNavigator', {
                      screen: 'HomeScreen',
                    });
                  }
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button Primary'].props}
            disabled={!textInputValue}
            style={StyleSheet.applyWidth(
              GlobalStyles.ButtonStyles(theme)['Button Primary'].style,
              dimensions.width
            )}
            title={'Next'}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default withTheme(SignInScreen);
