import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  IconButton,
  NumberInput,
  ScreenContainer,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const GoalScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [numberInputValue2, setNumberInputValue2] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState(undefined);

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
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
        {/* Go back Wrapper */}
        <View style={StyleSheet.applyWidth({ padding: 10 }, dimensions.width)}>
          {/* Go back Button */}
          <IconButton
            onPress={() => {
              try {
                navigation.push('AppTabNavigator', {
                  screen: 'ProfileNavigator',
                  params: { screen: 'SettingsScreen' },
                });
              } catch (err) {
                console.error(err);
              }
            }}
            color={theme.colors['Custom Color_2']}
            icon={'AntDesign/left'}
            size={24}
          />
        </View>
        {/* Goal */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              alignSelf: 'center',
              color: 'rgb(32, 32, 32)',
              fontFamily: 'Raleway_600SemiBold',
              fontSize: 16,
              lineHeight: 24,
            }),
            dimensions.width
          )}
        >
          {'Goal'}
        </Text>
        <Button
          onPress={() => {
            try {
              /* 'Set Variable' action requires configuration: choose a variable */
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: '"rgb(240, 240, 240)"',
                borderRadius: 31,
                color: 'rgb(48, 48, 48)',
                fontFamily: 'Raleway_600SemiBold',
                fontSize: 16,
                lineHeight: 24,
              }
            ),
            dimensions.width
          )}
          title={'Save'}
        />
      </View>

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
        </VStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(GoalScreen);
