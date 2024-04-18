import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  IconButton,
  KeyboardAvoidingView,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const SignInScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

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
            {'Welcome back!'}
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
            {'Enter your password'}
          </Text>
          {/* Password Field */}
          <TextInput
            autoCapitalize={'none'}
            changeTextDelay={500}
            onChangeText={newPasswordFieldValue => {
              try {
                setTextInputValue(newPasswordFieldValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter a value...'}
            webShowOutline={true}
            placeholder={'Password'}
            placeholderTextColor={theme.colors['Light']}
            secureTextEntry={true}
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
            value={textInputValue}
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
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
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

export default withTheme(SignInScreen);
