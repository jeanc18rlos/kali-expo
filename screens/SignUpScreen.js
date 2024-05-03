import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as AuthApi from '../apis/AuthApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import addBearerPrefix from '../global-functions/addBearerPrefix';
import mergeState from '../global-functions/mergeState';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  IconButton,
  KeyboardAvoidingView,
  ScreenContainer,
  SimpleStyleFlatList,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const SignUpScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [errors, setErrors] = React.useState({ password: [] });
  const [isPasswordHidden, setIsPasswordHidden] = React.useState(true);
  const [passwordFieldValue, setPasswordFieldValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const validatePassword = password => {
    const trimmedPw = password.trim();

    const errors = [];

    const digitRegex = /\d/;
    const symbolRegex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;

    if (Boolean(trimmedPw)) {
      if (trimmedPw.length < 8)
        errors.push('Password should have at least 8 characters');
      if (trimmedPw.length > 20)
        errors.push('Password should not have more than 20 characters');
      if (!digitRegex.test(trimmedPw))
        errors.push('Password should have at least 1 number');
      if (!symbolRegex.test(trimmedPw))
        errors.push('Password should have at least 1 symbol');
      if (!uppercaseRegex.test(trimmedPw))
        errors.push('Password should have at least 1 Uppercase character');
      if (!lowercaseRegex.test(trimmedPw))
        errors.push('Password should have at least 1 Lowercase character');
    } else {
      errors.push('Password cannot be empty');
    }

    return errors;
  };

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
        {/* Header Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 16,
            },
            dimensions.width
          )}
        >
          {/* View 2 */}
          <View>
            <IconButton
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
              color={theme.colors['Custom Color_2']}
              icon={'AntDesign/left'}
              size={24}
            />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: theme.colors['Custom Color_4'],
                borderRadius: 22,
                height: 32,
                justifyContent: 'center',
                width: 32,
              },
              dimensions.width
            )}
          >
            {/* Icon Button 2 */}
            <IconButton
              onPress={() => {
                try {
                  navigation.navigate('AuthNavigator', {
                    screen: 'WelcomeScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              color={theme.colors['Custom Color_3']}
              icon={'AntDesign/close'}
              size={24}
            />
          </View>
        </View>
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
          {/* Screen Title */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.strong,
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
                marginBottom: 16,
                textAlign: 'center',
                typography: theme.typography.headline4,
              },
              dimensions.width
            )}
          >
            {'Create a password'}
          </Text>
          {/* Screen Description */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                alignSelf: 'auto',
                color: theme.colors.medium,
                fontFamily: 'Raleway_300Light',
                fontSize: 16,
                marginBottom: 16,
                textAlign: 'left',
                typography: theme.typography.body1,
              },
              dimensions.width
            )}
          >
            {
              'Make sure your password is 8 or more characters and has at least 3 of the following:\n・An uppercase letter\n・A lowercase letter\n・A number\n・A symbol'
            }
          </Text>
          {/* Password Field */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newPasswordFieldValue => {
              try {
                const valueCq42WbBM = newPasswordFieldValue;
                setPasswordFieldValue(valueCq42WbBM);
                const savedPassword = valueCq42WbBM;
                const passwordValidationResult =
                  validatePassword(savedPassword);
                const mergedState = mergeState(
                  errors,
                  'password',
                  passwordValidationResult
                );
                setErrors(mergedState);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            placeholder={'Password'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 1,
                borderColor: theme.colors['Custom Color'],
                borderLeftWidth: 1,
                borderRadius: 16,
                borderRightWidth: 1,
                borderTopWidth: 1,
                borderWidth: 1,
                color: theme.colors['Input Color'],
                fontFamily: 'Raleway_500Medium',
                height: 56,
                marginBottom: 16,
                paddingBottom: 0,
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 0,
                width: '100%',
              },
              dimensions.width
            )}
            value={passwordFieldValue}
          />
          <>
            {!(errors?.password?.length > 0) ? null : (
              <SimpleStyleFlatList
                data={errors?.password}
                horizontal={false}
                inverted={false}
                keyExtractor={(listData, index) => index}
                keyboardShouldPersistTaps={'never'}
                listKey={'DDcERYKm'}
                nestedScrollEnabled={false}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const listData = item;
                  return (
                    <>
                      {/* Error */}
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
                        {listData}
                      </Text>
                    </>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
              />
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
          {/* Screen nav link */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const SignUpResponse = (
                    await AuthApi.signUpPOST(Constants, {
                      signupEmail: props.route?.params?.email ?? null,
                      signupPassword: passwordFieldValue,
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
                    const token_auth = setGlobalVariableValue({
                      key: 'AUTHORIZATION_HEADER',
                      value: addBearerPrefix(access_token),
                    });
                    if (navigation.canGoBack()) {
                      navigation.popToTop();
                    }
                    navigation.replace('OnboardingNavigator');
                  }
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            disabled={!passwordFieldValue || errors?.password?.length > 0}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: theme.colors['Accent Color'],
                  borderColor: 'rgb(255, 255, 255)',
                  borderRadius: 59,
                  color: 'rgb(255, 255, 255)',
                  fontFamily: 'Raleway_600SemiBold',
                  fontSize: 16,
                  height: 64,
                  marginTop: 24,
                  padding: 16,
                }
              ),
              dimensions.width
            )}
            title={'Next'}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

export default withTheme(SignUpScreen);
