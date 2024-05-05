import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import KActionHeaderBlock from '../components/KActionHeaderBlock';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, Link, ScreenContainer, VStack, withTheme } from '@draftbit/ui';
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
        <KActionHeaderBlock right_button={true} right_icon={'close'} />
        {/* Container */}
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
            {...GlobalStyles.TextStyles(theme)['HEADING-1'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['HEADING-1'].style,
              dimensions.width
            )}
          >
            {'Get Started\n'}
          </Text>
          {/*  Description */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['BODY'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['BODY'].style,
              dimensions.width
            )}
          >
            {
              'Explore our curated marketplace and see how rewarding healthy habits can be. '
            }
          </Text>
          {/* Container */}
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
            {/* Email */}
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
              icon={'MaterialIcons/email'}
              style={StyleSheet.applyWidth(
                GlobalStyles.ButtonStyles(theme)['Button Primary'].style,
                dimensions.width
              )}
              title={'Continue with email'}
            />
            {/* Apple */}
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
              {...GlobalStyles.ButtonStyles(theme)['Button Secondary'].props}
              icon={'MaterialCommunityIcons/apple'}
              style={StyleSheet.applyWidth(
                GlobalStyles.ButtonStyles(theme)['Button Secondary'].style,
                dimensions.width
              )}
              title={'Continue with apple'}
            />
            {/* Google */}
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
              {...GlobalStyles.ButtonStyles(theme)['Button Secondary'].props}
              icon={'AntDesign/google'}
              style={StyleSheet.applyWidth(
                GlobalStyles.ButtonStyles(theme)['Button Secondary'].style,
                dimensions.width
              )}
              title={'Continue with Google'}
            />
          </VStack>
          {/* Description */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['BODY'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['BODY'].style,
              dimensions.width
            )}
          >
            {'By continuing your accept our  '}
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
