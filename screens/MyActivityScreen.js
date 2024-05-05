import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import WeeklyActivityBlock from '../components/WeeklyActivityBlock';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { HStack, IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const MyActivityScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const calculateHeight = activity => {
    /**
     * @name activity
     * @type {Object}
     * @param {number} sunday_steps - Number of steps taken on Sunday
     * @param {number} monday_steps - Number of steps taken on Monday
     * @param {number} tuesday_steps - Number of steps taken on Tuesday
     * @param {number} wednesday_steps - Number of steps taken on Wednesday
     * @param {number} thursday_steps - Number of steps taken on Thursday
     * @param {number} friday_steps - Number of steps taken on Friday
     * @param {number} saturday_steps - Number of steps taken on Saturday
     * @param {number} goal - Number of steps goal
     * @param {number} stepRecord - Number of steps record
     */
    const maxBarHeight = 135;
    const today = new Date().getDay();
    const stepRecord = activity.stepRecord;
    const goal = activity.goal / 7;

    const dictionary = [
      'sunday_steps: ',
      'monday_steps',
      'tuesday_steps',
      'wednesday_steps',
      'thursday_steps',
      'friday_steps',
      'saturday_steps',
    ];

    const response = {};

    const getAdjustedHeight = steps => {
      return (steps / stepRecord) * maxBarHeight;
    };

    Object.keys(activity).forEach(key => {
      if (dictionary.includes(key)) {
        response[key] = {
          dailySteps:
            key === dictionary[today] ? getAdjustedHeight(activity[key]) : 0,
          extraSteps:
            activity[key] > goal ? getAdjustedHeight(activity[key]) : 0,
          goalSteps:
            activity[key] > goal
              ? getAdjustedHeight(goal)
              : getAdjustedHeight(activity[key]),
        };
      }
    });

    return response;
  };

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
      <View>
        {/* Header */}
        <HStack
          {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              { justifyContent: 'space-between' }
            ),
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                lineHeight: 20.626,
              }),
              dimensions.width
            )}
          >
            {'1 - 7 JAN'}
          </Text>

          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.HStackStyles(theme)['H Stack'].style,
                { padding: 8 }
              ),
              dimensions.width
            )}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color_4'],
                  borderRadius: 15,
                  height: 30,
                  justifyContent: 'center',
                  marginRight: 8,
                  width: 30,
                },
                dimensions.width
              )}
            >
              <IconButton
                color={theme.colors['Custom Color_3']}
                icon={'AntDesign/left'}
                size={18}
              />
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: theme.colors['Custom Color_4'],
                  borderRadius: 15,
                  height: 30,
                  justifyContent: 'center',
                  width: 30,
                },
                dimensions.width
              )}
            >
              <IconButton
                color={theme.colors['Custom Color_3']}
                icon={'AntDesign/right'}
                size={18}
              />
            </View>
          </HStack>
        </HStack>
        <WeeklyActivityBlock />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MyActivityScreen);
