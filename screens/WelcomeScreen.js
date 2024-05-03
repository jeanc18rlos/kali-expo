import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CustomCode from '../custom-files/CustomCode';
import * as KaliIcon from '../custom-files/KaliIcon';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, Center, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const WelcomeScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { height: '100%', justifyContent: 'space-between', padding: 16 },
          dimensions.width
        )}
      >
        {/* Logo Container */}
        <Center
          {...GlobalStyles.CenterStyles(theme)['Center'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.CenterStyles(theme)['Center'].style,
              { flex: 1 }
            ),
            dimensions.width
          )}
        >
          {/* Logo */}
          <Utils.CustomCodeErrorBoundary>
            <KaliIcon.Icon />
          </Utils.CustomCodeErrorBoundary>
        </Center>
        {/* Screen Content */}
        <View
          style={StyleSheet.applyWidth({ paddingTop: 40 }, dimensions.width)}
        >
          {/* Screen Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Typography Color'],
                fontFamily: 'Raleway_400Regular',
                fontSize: 32,
              }),
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { color: null }
                ),
                dimensions.width
              )}
            >
              {'Take '}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { color: null, fontFamily: 'Raleway_700Bold' }
                ),
                dimensions.width
              )}
            >
              {'Steps'}
            </Text>
            {null}
          </Text>
          {/* Screen Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Typography Color'],
                fontFamily: 'Raleway_400Regular',
                fontSize: 32,
              }),
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { color: null }
                ),
                dimensions.width
              )}
            >
              {'Earn '}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'Raleway_700Bold' }
                ),
                dimensions.width
              )}
            >
              {'Rewards'}
            </Text>
            {null}
          </Text>
          {/* Screen nav link */}
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
            title={'Get started'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(WelcomeScreen);
