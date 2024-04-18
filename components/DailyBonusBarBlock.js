import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as KIcon from '../custom-files/KIcon';
import substractMargins from '../global-functions/substractMargins';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  HStack,
  LinearGradient,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const DailyBonusBarBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgb(158, 52, 52)',
          borderRadius: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          overflow: 'hidden',
          position: 'relative',
          width: substractMargins(dimensions.width),
        },
        dimensions.width
      )}
    >
      <LinearGradient
        endX={100}
        endY={100}
        startX={0}
        startY={0}
        {...GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].props}
        color1={theme.colors['Custom Color_8']}
        color2={theme.colors['Custom Color_9']}
        color3={theme.colors['Custom Color_8']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].style,
            {
              flex: null,
              height: 100,
              left: 0,
              position: 'absolute',
              top: 0,
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
            { padding: 12 }
          ),
          dimensions.width
        )}
      >
        <Utils.CustomCodeErrorBoundary>
          <KIcon.Icon />
        </Utils.CustomCodeErrorBoundary>
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              { marginLeft: 8 }
            ),
            dimensions.width
          )}
        >
          {/* Daily bonus */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(255, 255, 255)',
                fontFamily: 'Raleway_700Bold',
              }),
              dimensions.width
            )}
          >
            {'D A I L Y   B O N U S'}
          </Text>
          {/* Description */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(255, 255, 255)',
                fontFamily: 'Raleway_400Regular',
              }),
              dimensions.width
            )}
          >
            {'Claim rewards!'}
          </Text>
        </VStack>
      </HStack>
      <Button
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        icon={'AntDesign/caretright'}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'].style, {
            backgroundColor: 'rgba(0, 0, 0, 0.39)',
            color: 'rgb(255, 255, 255)',
            fontFamily: 'Raleway_700Bold',
            fontSize: 12,
            height: 24,
            marginBottom: 12,
            marginRight: 12,
            marginTop: 12,
            width: 90,
          }),
          dimensions.width
        )}
        title={'Claim'}
      />
    </View>
  );
};

export default withTheme(DailyBonusBarBlock);
