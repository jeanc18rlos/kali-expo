import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  IconButton,
  ScreenContainer,
  Swiper,
  SwiperItem,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, Text, View } from 'react-native';

const EarnPointsScreen = props => {
  const { theme, navigation } = props;
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
            flex: 1,
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
        {/* Header Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 16,
            },
            dimensions.width
          )}
        >
          {/* View 2 */}
          <View>
            <IconButton
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
              color={theme.colors['Custom Color_2']}
              icon={'AntDesign/left'}
              size={24}
            />
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: theme.colors['Custom Color_4'],
                borderRadius: 22,
                height: 32,
                justifyContent: 'center',
                width: 32,
              },
              dimensions.width
            )}
          >
            {/* Icon Button 2 */}
            <IconButton
              onPress={() => {
                try {
                  navigation.navigate('AuthNavigator', {
                    screen: 'WelcomeScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              color={theme.colors['Custom Color_3']}
              icon={'AntDesign/close'}
              size={24}
            />
          </View>
        </View>

        <Swiper
          dotActiveColor={theme.colors.primary}
          dotColor={theme.colors.light}
          dotsTouchable={true}
          loop={false}
          minDistanceForAction={0.2}
          minDistanceToCapture={5}
          timeout={0}
          vertical={false}
          {...GlobalStyles.SwiperStyles(theme)['Swiper'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.SwiperStyles(theme)['Swiper'].style,
              { alignSelf: 'stretch', flex: 1 }
            ),
            dimensions.width
          )}
        >
          <SwiperItem
            style={StyleSheet.applyWidth(
              {
                alignContent: 'flex-start',
                alignItems: 'stretch',
                alignSelf: 'stretch',
                gap: 16,
                justifyContent: 'space-around',
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'Raleway_700Bold', fontSize: 24 }
                ),
                dimensions.width
              )}
            >
              {'Take steps to earn points. '}
            </Text>

            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'Raleway_500Medium', fontSize: 16 }
                ),
                dimensions.width
              )}
            >
              {'We track your fitness and reward Kali Points'}
            </Text>
          </SwiperItem>
        </Swiper>

        <View>
          {/* Button 2 */}
          <Button
            title={'Get Started'}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: 'rgb(38, 38, 38)',
                  borderRadius: 31,
                  fontFamily: 'Rubik_600SemiBold',
                  padding: 20,
                }
              ),
              dimensions.width
            )}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(EarnPointsScreen);
