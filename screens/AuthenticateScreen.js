import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  IconButton,
  Link,
  ScreenContainer,
  VStack,
  withTheme,
} from '@draftbit/ui';
import * as WebBrowser from 'expo-web-browser';
import { Text, View } from 'react-native';

const AuthenticateScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignContent: 'flex-start',
            alignSelf: 'auto',
            flex: 1,
            gap: 16,
            justifyContent: 'space-between',
            padding: 16,
          },
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
          <View></View>

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

        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              { flex: 1, gap: 16, justifyContent: 'center' }
            ),
            dimensions.width
          )}
        >
          {/* Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(37, 37, 37)',
                fontFamily: 'Raleway_700Bold',
                fontSize: 32,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Get Started'}
          </Text>
          {/* Subtitle 2 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Custom Color_10'],
                fontFamily: 'Raleway_400Regular',
                fontSize: 16,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {
              'Explore our curated marketplace and see how rewarding healthy habits can be.'
            }
          </Text>

          <VStack
            {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.VStackStyles(theme)['V Stack'].style,
                { alignItems: 'stretch', gap: 8, justifyContent: 'center' }
              ),
              dimensions.width
            )}
          >
            {/* Button primary */}
            <Button
              onPress={() => {
                try {
                  navigation.push('AuthNavigator', {
                    screen: 'ContinueWithEmailScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              icon={'MaterialIcons/email'}
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
                    padding: 16,
                  }
                ),
                dimensions.width
              )}
              title={'Continue with email'}
            />
            {/* Button Secondary */}
            <Button
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              icon={'Entypo/app-store'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: theme.colors['Accent Color'],
                    borderRadius: 59,
                    borderWidth: 1,
                    color: 'rgb(45, 45, 45)',
                    fontFamily: 'Raleway_600SemiBold',
                    fontSize: 16,
                    height: 64,
                    padding: 16,
                  }
                ),
                dimensions.width
              )}
              title={'Continue with Apple'}
            />
            {/* Button Secondary */}
            <Button
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              icon={'AntDesign/google'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: theme.colors['Accent Color'],
                    borderRadius: 59,
                    borderWidth: 1,
                    color: 'rgb(45, 45, 45)',
                    fontFamily: 'Raleway_600SemiBold',
                    fontSize: 16,
                    height: 64,
                    padding: 16,
                  }
                ),
                dimensions.width
              )}
              title={'Continue with Google'}
            />
          </VStack>
          {/* Subtitle */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: theme.colors['Custom Color_10'],
                fontFamily: 'Raleway_400Regular',
                fontSize: 16,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {'By continuing your accept our'}
            </Text>
            {null}
          </Text>
          {/* Subtitle 3 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: theme.colors['Custom Color_10'],
                fontFamily: 'Raleway_400Regular',
                fontSize: 16,
                marginTop: -8,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            <Link
              accessible={true}
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://kali.day/terms-and-conditions/'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              {...GlobalStyles.LinkStyles(theme)['Link'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.LinkStyles(theme)['Link'].style,
                  { color: null, textDecorationLine: 'underline' }
                ),
                dimensions.width
              )}
              title={'Terms of Service '}
            />
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['Text'].style,
                dimensions.width
              )}
            >
              {'and '}
            </Text>
            {/* Link 2 */}
            <Link
              accessible={true}
              onPress={() => {
                const handler = async () => {
                  try {
                    await WebBrowser.openBrowserAsync(
                      'https://kali.day/privacy-policy/'
                    );
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
              {...GlobalStyles.LinkStyles(theme)['Link'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.LinkStyles(theme)['Link'].style,
                  { color: null, textDecorationLine: 'underline' }
                ),
                dimensions.width
              )}
              title={'Privacy Policy.'}
            />
            {null}
          </Text>
        </VStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(AuthenticateScreen);
