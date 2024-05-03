import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const DailyActivityVerticalBarBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          height: 167,
          justifyContent: 'space-between',
          width: 30,
        },
        dimensions.width
      )}
    >
      {/* ProgressBar */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: 'rgb(255, 255, 255)',
            borderRadius: 3,
            height: 135,
            overflow: 'hidden',
            width: 6,
          },
          dimensions.width
        )}
      >
        {/* TodaySteps */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_36'],
              borderRadius: 3,
              bottom: 0,
              height: (props.dailySteps ?? null) && (props.dailySteps ?? null),
              left: 0,
              position: 'absolute',
              width: '100%',
            },
            dimensions.width
          )}
        />
        {/* Goal Steps */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_34'],
              borderRadius: 3,
              bottom: 0,
              height: props.goalSteps ?? 20,
              left: 0,
              position: 'absolute',
              width: '100%',
              zIndex: 2,
            },
            dimensions.width
          )}
        />
        {/* Extra Steps */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color_33'],
              borderRadius: 3,
              bottom: 0,
              height: props.extraSteps ?? 135,
              left: 0,
              position: 'absolute',
              width: 6,
            },
            dimensions.width
          )}
        />
      </View>
      {/* Label */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
            color: theme.colors['Custom Color_34'],
            fontFamily: 'DMSans_500Medium',
            lineHeight: 20,
          }),
          dimensions.width
        )}
      >
        {props.label ?? 'MO'}
      </Text>
    </View>
  );
};

export default withTheme(DailyActivityVerticalBarBlock);
