import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, Link, ScreenContainer, VStack, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const ConnectStepTrackerScreen = props => {
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
            alignSelf: 'auto',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 40,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Container */}
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              { alignSelf: 'auto' }
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
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['SKIP'].style, {
                marginBottom: 8,
              }),
              dimensions.width
            )}
            title={'SKIP'}
          />
          {/* Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['HEADING-2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['HEADING-2'].style,
                { marginBottom: 24, textAlign: 'left' }
              ),
              dimensions.width
            )}
          >
            {'Connect your favorite fitness watch or app to start \nearning.'}
          </Text>
          {/* Subtitle */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['SUBTITLE'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['SUBTITLE'].style,
                { marginBottom: 8, textAlign: 'left' }
              ),
              dimensions.width
            )}
          >
            {"Connect and we'll do the rest!"}
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
            {
              "The more steps you take, the more you'll earn and the closer you'll be to reaching your goals."
            }
          </Text>
        </VStack>
        {/* Container */}
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              { alignContent: 'center', alignItems: 'center' }
            ),
            dimensions.width
          )}
        >
          {/* Connect Button */}
          <Button
            {...GlobalStyles.ButtonStyles(theme)['Button Primary'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button Primary'].style,
                { fontFamily: 'Rubik_600SemiBold' }
              ),
              dimensions.width
            )}
            title={'Connect'}
          />
        </VStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ConnectStepTrackerScreen);
