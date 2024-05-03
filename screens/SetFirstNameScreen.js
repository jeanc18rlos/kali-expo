import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as BackendApi from '../apis/BackendApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  KeyboardAvoidingView,
  Link,
  ScreenContainer,
  TextInput,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const SetFirstNameScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [textInputValue, setTextInputValue] = React.useState('');
  const backendUpdateUserProfilePATCH = BackendApi.useUpdateUserProfilePATCH();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
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
            {...GlobalStyles.LinkStyles(theme)['Link'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                alignSelf: 'flex-end',
                color: theme.colors['Typography Color'],
                fontFamily: 'Raleway_400Regular',
                textDecorationLine: 'underline',
              }),
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
              {'How should we call you?'}
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
            {/* Name Field */}
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newNameFieldValue => {
                try {
                  setTextInputValue(newNameFieldValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              placeholder={'Enter your name here'}
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
                    (
                      await backendUpdateUserProfilePATCH.mutateAsync({
                        first_name: textInputValue,
                      })
                    )?.json;
                    navigation.navigate('OnboardingNavigator', {
                      screen: 'AllowNotificationsScreen',
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
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
              title={"That's me!"}
            />
          </View>
        </KeyboardAvoidingView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SetFirstNameScreen);
