import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, ScreenContainer, VStack, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const ConnectStepTrackerScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignSelf: 'auto',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingBottom: 40,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* V Stack 2 */}
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              { alignSelf: 'auto' }
            ),
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
                textAlign: 'left',
              }),
              dimensions.width
            )}
          >
            {'Connect your favorite fitness watch or app to start \nearning.'}
          </Text>

          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'flex-start',
                color: 'rgb(52, 52, 52)',
                fontFamily: 'Raleway_500Medium',
                fontSize: 16,
                marginTop: 28,
                textAlign: 'left',
              }),
              dimensions.width
            )}
          >
            {"Connect and we'll do the rest!"}
          </Text>
          {/* Text 2 */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(52, 52, 52)',
                fontFamily: 'Raleway_300Light',
                fontSize: 16,
                marginTop: 8,
                textAlign: 'left',
              }),
              dimensions.width
            )}
          >
            {
              "The more steps you take, the more you'll earn and the closer you'll be to reaching your goals."
            }
          </Text>
        </VStack>

        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              { alignContent: 'center', alignItems: 'center' }
            ),
            dimensions.width
          )}
        >
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
            title={'Connect'}
          />
        </VStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(ConnectStepTrackerScreen);
