import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import KActionHeaderBlock from '../components/KActionHeaderBlock';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  HStack,
  KeyboardAvoidingView,
  Link,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ForgotPasswordScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
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
            {'Password Assistance'}
          </Text>
          {/* Screen Description */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['BODY'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['BODY'].style, {
                textAlign: 'left',
              }),
              dimensions.width
            )}
          >
            {
              "We've sent a One Time Password (OTP) to the email someone@gmail.com. Please enter it below."
            }
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
              GlobalStyles.TextInputStyles(theme)['password-input'].style,
              dimensions.width
            )}
            value={textInputValue}
          />
        </View>
        {/* Container */}
        <HStack
          {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              {
                justifyContent: 'space-between',
                marginLeft: 18,
                marginRight: 18,
                paddingTop: 16,
              }
            ),
            dimensions.width
          )}
        >
          <Link
            accessible={true}
            {...GlobalStyles.LinkStyles(theme)['under-link'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.LinkStyles(theme)['under-link'].style,
              dimensions.width
            )}
            title={'I need more help'}
          />
          {/* Link 2 */}
          <Link
            accessible={true}
            {...GlobalStyles.LinkStyles(theme)['under-link'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.LinkStyles(theme)['under-link'].style,
              dimensions.width
            )}
            title={'Resend OTP'}
          />
        </HStack>
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
            {...GlobalStyles.ButtonStyles(theme)['Button Primary'].props}
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

export default withTheme(ForgotPasswordScreen);
