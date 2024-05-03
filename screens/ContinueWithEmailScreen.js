import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as BackendApi from '../apis/BackendApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
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

const ContinueWithEmailScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [emailFieldValue, setEmailFieldValue] = React.useState('');
  const [errors, setErrors] = React.useState({ email: [] });
  const [textInputValue, setTextInputValue] = React.useState('');
  const validateEmail = email => {
    const errors = [];
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (Boolean(email.trim())) {
      if (!emailRegex.test(email)) {
        errors.push('Invalid email');
      }
    } else {
      errors.push('Email cannot be empty');
    }

    return errors;
  };
  const backend$v1$checkEmailPOST = BackendApi.use$v1$checkEmailPOST();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={true}
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
          {/* Go back Wrapper */}
          <View>
            {/* Go back Button */}
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
          {/* Close Wrapper */}
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
            {/* Close Button */}
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
        {/* Form */}
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
            {'Continue with Email'}
          </Text>
          {/* Screen Description */}
          <Text
            accessible={true}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.medium,
                fontFamily: 'Raleway_300Light',
                fontSize: 16,
                marginBottom: 16,
                textAlign: 'center',
                typography: theme.typography.body1,
              },
              dimensions.width
            )}
          >
            {'Sign in or sign up with your email'}
          </Text>
          {/* Email Field */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newEmailFieldValue => {
              try {
                const valueoZHyPKv2 = newEmailFieldValue;
                setEmailFieldValue(valueoZHyPKv2);
                const savedEmail = valueoZHyPKv2;
                const emailValidationResult = validateEmail(savedEmail);
                const mergedState = mergeState(
                  errors,
                  'email',
                  emailValidationResult
                );
                setErrors(mergedState);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            placeholder={'Email'}
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
            value={emailFieldValue}
          />
          <SimpleStyleFlatList
            data={errors?.email}
            horizontal={false}
            inverted={false}
            keyExtractor={(listData, index) => index}
            keyboardShouldPersistTaps={'never'}
            listKey={'jmKgkrNb'}
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
                  const existsemail = (
                    await backend$v1$checkEmailPOST.mutateAsync({
                      email: emailFieldValue,
                    })
                  )?.json;
                  if (existsemail?.exists) {
                    navigation.navigate('AuthNavigator', {
                      screen: 'SignInScreen',
                      params: { email: emailFieldValue },
                    });
                  } else {
                    navigation.push('AuthNavigator', {
                      screen: 'SignUpScreen',
                      params: { email: emailFieldValue },
                    });
                  }
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            disabled={!emailFieldValue || errors?.email?.length > 0}
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

export default withTheme(ContinueWithEmailScreen);
