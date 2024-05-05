import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import KActionHeaderBlock from '../components/KActionHeaderBlock';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
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

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={true}
    >
      <KActionHeaderBlock
        left_button={true}
        left_icon={'chevron-left'}
        right_button={true}
        right_icon={'close'}
      />
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
        {/* Form */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
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
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['HEADING-2'].style,
                { alignSelf: 'flex-start' }
              ),
              dimensions.width
            )}
          >
            {'Continue with Email'}
          </Text>
          {/* Description */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['BODY'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['BODY'].style, {
                alignSelf: 'flex-start',
              }),
              dimensions.width
            )}
          >
            {'Sign in or sign up with your email.'}
          </Text>
          {/* Email input */}
          <TextInput
            autoCapitalize={'none'}
            autoCorrect={true}
            changeTextDelay={500}
            onChangeText={newEmailInputValue => {
              const textInputValue = newEmailInputValue;
              try {
                setTextInputValue(newEmailInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            webShowOutline={true}
            {...GlobalStyles.TextInputStyles(theme)['email-input'].props}
            placeholder={'Email'}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextInputStyles(theme)['email-input'].style,
              dimensions.width
            )}
            value={textInputValue}
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
          {/* Next Button */}
          <Button
            onPress={() => {
              try {
                navigation.navigate('OnboardingNavigator', {
                  screen: 'ConnectStepTrackerScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button Primary'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button Primary'].style,
                {
                  backgroundColor: theme.colors['Accent Color'],
                  borderColor: 'rgb(255, 255, 255)',
                  borderRadius: 59,
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
