import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  HStack,
  ScreenContainer,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const KeepConsistencyScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
    >
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
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            dimensions.width
          )}
        >
          {/* Text 2 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'flex-end',
                color: 'rgb(52, 52, 52)',
                fontFamily: 'Raleway_500Medium',
                marginBottom: 28,
                textDecorationLine: 'underline',
              }),
              dimensions.width
            )}
          >
            {'SKIP'}
          </Text>

          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: theme.colors['Typography Color'],
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Consistency is key!'}
          </Text>
        </VStack>

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
                marginBottom: 8,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Check in on Kali daily to unlock additional\nrewards.'}
          </Text>

          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.HStackStyles(theme)['H Stack'].style,
                { height: 16, marginBottom: 16, marginTop: 16 }
              ),
              dimensions.width
            )}
          >
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: 'rgb(171, 171, 171)',
                  borderRadius: 3,
                  height: 5,
                  marginRight: 4,
                  width: 8,
                },
                dimensions.width
              )}
            />
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: 'rgb(171, 171, 171)',
                  borderRadius: 3,
                  height: 5,
                  marginRight: 4,
                  width: 8,
                },
                dimensions.width
              )}
            />
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors['Typography Color'],
                  borderRadius: 5,
                  height: 5,
                  marginRight: 4,
                  width: 22,
                },
                dimensions.width
              )}
            />
          </HStack>
          {/* Button 2 */}
          <Button
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
            title={'Next'}
          />
        </VStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(KeepConsistencyScreen);
