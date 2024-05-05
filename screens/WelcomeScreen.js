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
        {/* Content */}
        <View
          style={StyleSheet.applyWidth({ paddingTop: 40 }, dimensions.width)}
        >
          {/* Title */}
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
            {/* Text Title */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['HEADING-1'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['HEADING-1'].style,
                  { color: null }
                ),
                dimensions.width
              )}
            >
              {'Make Steps'}
            </Text>
            {null}
          </Text>
          {/* Title */}
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
            {/* Text Title */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['HEADING-1'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.TextStyles(theme)['HEADING-1'].style,
                dimensions.width
              )}
            >
              {'Earn Rewards'}
            </Text>
            {null}
          </Text>
          {/* Get Started Button */}
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
