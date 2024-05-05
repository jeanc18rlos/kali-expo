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
              {'How should we call you?'}
            </Text>
            {/* Description */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['BODY'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['BODY'].style,
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
              {...GlobalStyles.TextInputStyles(theme)['text-input'].props}
              placeholder={'Enter your name here'}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextInputStyles(theme)['text-input'].style,
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
            {/* That´s Me Button */}
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
              {...GlobalStyles.ButtonStyles(theme)['Button Primary'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.ButtonStyles(theme)['Button Primary'].style,
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
