import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import substractMargins from '../global-functions/substractMargins';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { VStack, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const ActivitybarBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom Color_14'],
          borderRadius: 12,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingBottom: 12,
          paddingTop: 12,
          width: substractMargins(dimensions.width),
        },
        dimensions.width
      )}
    >
      {/* Weekly points */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            { alignItems: 'center' }
          ),
          dimensions.width
        )}
      >
        {/* Metric */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_7'],
              fontFamily: 'Raleway_600SemiBold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {props.weeklyPoints ?? 0}
        </Text>
        {/* Metric label */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_7'],
            }),
            dimensions.width
          )}
        >
          {'Weekly points'}
        </Text>
      </VStack>
      {/* Streak */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            { alignItems: 'center' }
          ),
          dimensions.width
        )}
      >
        {/* Metric */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_7'],
              fontFamily: 'Raleway_600SemiBold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {props.streak ?? 0}
        </Text>
        {/* Metric label */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_7'],
            }),
            dimensions.width
          )}
        >
          {'Streak'}
        </Text>
      </VStack>
      {/* Weekly steps */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            { alignItems: 'center' }
          ),
          dimensions.width
        )}
      >
        {/* Metric */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_7'],
              fontFamily: 'Raleway_600SemiBold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {props.weeklySteps ?? 0}
        </Text>
        {/* Metric label */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_7'],
              fontFamily: 'Raleway_500Medium',
              fontSize: 12,
            }),
            dimensions.width
          )}
        >
          {'Weekly steps'}
        </Text>
      </VStack>
    </View>
  );
};

export default withTheme(ActivitybarBlock);
