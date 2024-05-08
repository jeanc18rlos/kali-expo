import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import DailyActivityVerticalBarBlock from '../components/DailyActivityVerticalBarBlock';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { HStack, VStack, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const WeeklyActivityBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        { paddingBottom: 16, paddingTop: 16 },
        dimensions.width
      )}
    >
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            {
              backgroundColor: theme.colors['Custom Color_4'],
              borderRadius: 20,
              padding: 16,
            }
          ),
          dimensions.width
        )}
      >
        {/* Legend */}
        <HStack
          {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              {
                justifyContent: 'space-between',
                marginBottom: 20,
                width: '100%',
              }
            ),
            dimensions.width
          )}
        >
          {/* Today Steps */}
          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              dimensions.width
            )}
          >
            {/* color */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color_36'],
                  borderRadius: 5,
                  height: 10,
                  width: 10,
                },
                dimensions.width
              )}
            />
            {/* label */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Custom Color_34'],
                    fontFamily: 'DMSans_400Regular',
                    marginLeft: 8,
                  }
                ),
                dimensions.width
              )}
            >
              {'Today steps'}
            </Text>
          </HStack>
          {/* Goal Steps */}
          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              dimensions.width
            )}
          >
            {/* color */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color_34'],
                  borderRadius: 5,
                  height: 10,
                  width: 10,
                },
                dimensions.width
              )}
            />
            {/* label */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Custom Color_34'],
                    fontFamily: 'DMSans_400Regular',
                    marginLeft: 8,
                  }
                ),
                dimensions.width
              )}
            >
              {'Goal steps'}
            </Text>
          </HStack>
          {/* Extra Steps */}
          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              dimensions.width
            )}
          >
            {/* color */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Custom Color_33'],
                  borderRadius: 5,
                  height: 10,
                  width: 10,
                },
                dimensions.width
              )}
            />
            {/* label */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Custom Color_34'],
                    fontFamily: 'DMSans_400Regular',
                    marginLeft: 8,
                  }
                ),
                dimensions.width
              )}
            >
              {'Extra steps'}
            </Text>
          </HStack>
        </HStack>
        {/* Activity */}
        <HStack
          {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              { flex: 1, justifyContent: 'space-between' }
            ),
            dimensions.width
          )}
        >
          {/* Sunday */}
          <DailyActivityVerticalBarBlock
            dailySteps={
              (
                props.sunday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.sunday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.sunday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={'SU'}
          />
          {/* Monday */}
          <DailyActivityVerticalBarBlock
            dailySteps={
              (
                props.monday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.monday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.monday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={'MO'}
          />
          {/* Tuesday */}
          <DailyActivityVerticalBarBlock
            dailySteps={
              (
                props.tuesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.tuesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.tuesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={'TU'}
          />
          {/* Wednesday */}
          <DailyActivityVerticalBarBlock
            dailySteps={
              (
                props.wednesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.wednesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.wednesday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={'WE'}
          />
          {/* Thursday */}
          <DailyActivityVerticalBarBlock
            dailySteps={
              (
                props.thursday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.thursday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.thursday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={'TH'}
          />
          {/* Friday */}
          <DailyActivityVerticalBarBlock
            dailySteps={
              (
                props.friday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.friday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.friday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={'FR'}
          />
          {/* Saturday */}
          <DailyActivityVerticalBarBlock
            dailySteps={
              (
                props.saturday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.dailySteps
            }
            extraSteps={
              (
                props.saturday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.extraSteps
            }
            goalSteps={
              (
                props.saturday_steps ?? {
                  goalSteps: 0,
                  dailySteps: 0,
                  extraSteps: 0,
                }
              )?.goalSteps
            }
            label={'SA'}
          />
        </HStack>
      </VStack>
    </View>
  );
};

export default withTheme(WeeklyActivityBlock);
