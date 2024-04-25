import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ProgressBarSVG from '../custom-files/ProgressBarSVG';
import substractMargins from '../global-functions/substractMargins';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const ProgressCircleBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: theme.colors['Custom Color_14'],
          borderRadius: 12,
          height: 310,
          width: substractMargins(dimensions.width),
        },
        dimensions.width
      )}
    >
      <Utils.CustomCodeErrorBoundary>
        <ProgressBarSVG.SemiCircleProgressBar
          radius={137}
          progress={Math.max(
            Math.min(props.steps / props.goal - 0.5, 0.5),
            -0.5
          )}
        />
      </Utils.CustomCodeErrorBoundary>
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', marginTop: -100 },
          dimensions.width
        )}
      >
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Raleway_700Bold',
              fontSize: 12,
            }),
            dimensions.width
          )}
        >
          {'STEPS TODAY'}
        </Text>
        {/* Text 2 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_27'],
              fontFamily: 'Raleway_700Bold',
              fontSize: 40,
            }),
            dimensions.width
          )}
        >
          {props.steps ?? 100}
        </Text>
        {/* Text 3 */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              fontFamily: 'Raleway_700Bold',
              fontSize: 12,
            }),
            dimensions.width
          )}
        >
          {'GOAL '}
          {props.goal ?? 1000}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(ProgressCircleBlock);
