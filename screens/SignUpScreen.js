import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as AuthApi from '../apis/AuthApi.js';
import KActionHeaderBlock from '../components/KActionHeaderBlock';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import addBearerPrefix from '../global-functions/addBearerPrefix';
import mergeState from '../global-functions/mergeState';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
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
            {'Create a password'}
          </Text>
          {/* Description */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['BODY-SMALL'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['BODY-SMALL'].style,
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
            {...GlobalStyles.TextInputStyles(theme)['password-input'].props}
            placeholder={'Password'}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextInputStyles(theme)['password-input'].style,
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
                      timezone: 'UTC',
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
            {...GlobalStyles.ButtonStyles(theme)['Button Primary'].props}
            disabled={!passwordFieldValue || errors?.password?.length > 0}
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

export default withTheme(SignUpScreen);
