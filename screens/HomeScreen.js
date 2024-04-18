import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import ActivitybarBlock from '../components/ActivitybarBlock';
import DailyBonusBarBlock from '../components/DailyBonusBarBlock';
import ProgressCircleBlock from '../components/ProgressCircleBlock';
import StreakbarBlock from '../components/StreakbarBlock';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  HStack,
  LinearGradient,
  ScreenContainer,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { ScrollView, View } from 'react-native';

const HomeScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { justifyContent: 'flex-start' },
        dimensions.width
      )}
    >
      <LinearGradient
        endX={100}
        endY={100}
        startX={0}
        startY={0}
        {...GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].props}
        color1={theme.colors['Custom Color_11']}
        color2={theme.colors['Custom Color_12']}
        color3={theme.colors['Custom Color_13']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.LinearGradientStyles(theme)['Linear Gradient'].style,
            {
              height: '100%',
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
            { height: 48, width: '100%' }
          ),
          dimensions.width
        )}
      />
      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
      >
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              { alignItems: 'center', marginTop: 48 }
            ),
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 16 },
              dimensions.width
            )}
          >
            <ActivitybarBlock />
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              { marginBottom: 16 },
              dimensions.width
            )}
          >
            <ProgressCircleBlock />
          </View>
          {/* View 3 */}
          <View>
            <StreakbarBlock />
          </View>

          <VStack
            {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.VStackStyles(theme)['V Stack'].style,
                {
                  alignItems: 'center',
                  backgroundColor: 'rgb(255, 255, 255)',
                  borderTopLeftRadius: 25,
                  borderTopRightRadius: 25,
                  marginTop: 16,
                  padding: 16,
                  width: '100%',
                }
              ),
              dimensions.width
            )}
          >
            <DailyBonusBarBlock />
          </VStack>
        </VStack>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(HomeScreen);
