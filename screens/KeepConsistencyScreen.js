import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import NavPillsBlock from '../components/NavPillsBlock';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, Link, ScreenContainer, VStack, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const KeepConsistencyScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            alignSelf: 'auto',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 12,
            paddingBottom: 40,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Header */}
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
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
          {/* screen title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: theme.colors['Typography Color'],
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Consistency is key!'}
          </Text>
        </VStack>
        {/* Footer */}
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              {
                alignItems: 'center',
                borderRadius: 6,
                justifyContent: 'flex-end',
              }
            ),
            dimensions.width
          )}
        >
          {/* screen subtitle */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'stretch',
                color: 'rgb(52, 52, 52)',
                fontFamily: 'Raleway_500Medium',
                fontSize: 16,
                lineHeight: 19,
                marginBottom: 8,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Check in on Kali daily to unlock additional\nrewards.'}
          </Text>
          <NavPillsBlock pillsCount={3} selectedPillIndex={2} />
          {/* Next Screen action */}
          <Button
            onPress={() => {
              try {
                navigation.push('OnboardingNavigator', {
                  screen: 'SetDailyGoalScreen',
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
                  backgroundColor: 'rgb(38, 38, 38)',
                  borderRadius: 31,
                  fontFamily: 'Rubik_600SemiBold',
                  padding: 20,
                  width: '100%',
                }
              ),
              dimensions.width
            )}
            title={'Next'}
          />
        </VStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(KeepConsistencyScreen);
