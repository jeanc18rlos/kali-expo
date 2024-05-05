import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as BackendApi from '../apis/BackendApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, Link, ScreenContainer, VStack, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const SetDailyGoalScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [sliderValue2, setSliderValue2] = React.useState(0);
  const backendGoalPOST = BackendApi.useGoalPOST();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
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
          {/* Title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['HEADING-2'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['HEADING-2'].style,
                { marginBottom: 24 }
              ),
              dimensions.width
            )}
          >
            {'Set your daily\nstep goal'}
          </Text>

          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['HEADING-1'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['HEADING-1'].style,
                { fontSize: 64 }
              ),
              dimensions.width
            )}
          >
            {'1000'}
          </Text>
        </VStack>
        {/* Container */}
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
          {/* Subtitle */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['SUBTITLE'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextStyles(theme)['SUBTITLE'].style,
                { marginBottom: 16 }
              ),
              dimensions.width
            )}
          >
            {'Set your daily steps goal to earn more Kali \nPoints\n'}
          </Text>
          {/* Set Up Button */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  const Goals = (await backendGoalPOST.mutateAsync())?.json;
                  navigation.push('OnboardingNavigator', {
                    screen: 'SetFirstNameScreen',
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
            title={'Set up goal'}
          />
        </VStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SetDailyGoalScreen);
