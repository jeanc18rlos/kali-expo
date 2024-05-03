import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as BackendApi from '../apis/BackendApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Link,
  NumberInput,
  ScreenContainer,
  VStack,
  withTheme,
} from '@draftbit/ui';
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
          {/* Text 3 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: 'rgb(52, 52, 52)',
                fontFamily: 'Raleway_600SemiBold',
                fontSize: 64,
                margin: 20,
              }),
              dimensions.width
            )}
          >
            {'1000'}
          </Text>

          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: 'rgb(52, 52, 52)',
                fontFamily: 'Raleway_600SemiBold',
                fontSize: 24,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Set your daily\nsteps goal'}
          </Text>
        </VStack>

        <View
          style={StyleSheet.applyWidth({ borderRadius: 31 }, dimensions.width)}
        >
          <NumberInput
            changeTextDelay={500}
            onChangeText={newNumberInputValue => {
              const numberInputValue = newNumberInputValue;
              try {
                setNumberInputValue2(newNumberInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            placeholder={'Enter a number...'}
            webShowOutline={true}
            {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                {
                  borderColor: 'rgb(93, 93, 93)',
                  borderRadius: 31,
                  color: 'rgb(148, 148, 148)',
                  fontFamily: 'Raleway_400Regular',
                }
              ),
              dimensions.width
            )}
            value={numberInputValue2}
          />
        </View>

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
                marginBottom: 16,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Set your daily steps goal to earn more Kali \nPoints\n'}
          </Text>
          {/* Button 2 */}
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
            title={'Set up goal'}
          />
        </VStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(SetDailyGoalScreen);
