import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  KeyboardAvoidingView,
  ScreenContainer,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const AllowNotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View
        style={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-between' },
          dimensions.width
        )}
      >
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
          {/* Text 2 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'flex-end',
                color: 'rgb(52, 52, 52)',
                fontFamily: 'Raleway_500Medium',
                marginBottom: 28,
                textDecorationLine: 'underline',
              }),
              dimensions.width
            )}
          >
            {'SKIP'}
          </Text>
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
                  alignSelf: 'center',
                  color: theme.colors.strong,
                  fontFamily: 'Raleway_700Bold',
                  fontSize: 24,
                  marginBottom: 16,
                  textAlign: 'left',
                  typography: theme.typography.headline4,
                },
                dimensions.width
              )}
            >
              {
                'Greg! would you like to receive push notifications so \nI can help you progress?'
              }
            </Text>
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
                try {
                  navigation.navigate('AuthNavigator', {
                    screen: 'SignUpScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
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
                    marginBottom: 8,
                    padding: 16,
                  }
                ),
                dimensions.width
              )}
              title={'Yes, please'}
            />
            {/* Screen nav link 2 */}
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
                  navigation.navigate('AuthNavigator', {
                    screen: 'SignUpScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  {
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgb(82, 82, 82)',
                    borderRadius: 59,
                    borderWidth: 1,
                    color: 'rgb(22, 22, 22)',
                    fontFamily: 'Raleway_600SemiBold',
                    fontSize: 16,
                    height: 64,
                    padding: 16,
                  }
                ),
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
