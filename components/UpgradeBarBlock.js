import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as CustomCode from '../custom-files/CustomCode';
import * as KIcon from '../custom-files/KIcon';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  HStack,
  Icon,
  LinearGradient,
  Pressable,
  withTheme,
} from '@draftbit/ui';
import { Text } from 'react-native';

const UpgradeBarBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Pressable
      style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
    >
      <LinearGradient
        {...GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].props}
        color1={theme.colors['Custom Color_28']}
        color2={theme.colors['Custom Color_29']}
        color3={theme.colors['Custom Color_30']}
        endX={10}
        endY={100}
        startX={100}
        startY={100}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].style,
            {
              borderRadius: 18,
              height: '100%',
              position: 'absolute',
              width: '100%',
            }
          ),
          dimensions.width
        )}
      />
      <HStack
        {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.HStackStyles(theme)['H Stack'].style,
            { gap: 8, justifyContent: 'space-between', padding: 12 }
          ),
          dimensions.width
        )}
      >
        <HStack
          {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              { gap: 8 }
            ),
            dimensions.width
          )}
        >
          <Utils.CustomCodeErrorBoundary>
            <KIcon.Icon />
          </Utils.CustomCodeErrorBoundary>
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(255, 252, 252)',
                fontFamily: 'Raleway_700Bold',
              }),
              dimensions.width
            )}
          >
            {'UPGRADE'}
          </Text>
        </HStack>
        <Icon
          size={24}
          color={theme.colors['Background']}
          name={'MaterialCommunityIcons/crown'}
        />
      </HStack>
    </Pressable>
  );
};

export default withTheme(UpgradeBarBlock);
