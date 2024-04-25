import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  HStack,
  IconButton,
  Pressable,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const EditProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
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
        {/* Go back Wrapper */}
        <View>
          {/* Go back Button */}
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

        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              alignSelf: 'center',
              color: 'rgb(32, 32, 32)',
              fontFamily: 'Raleway_600SemiBold',
              fontSize: 16,
              lineHeight: 24,
            }),
            dimensions.width
          )}
        >
          {'EDIT PROFILE'}
        </Text>
        <Button
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: '"rgb(240, 240, 240)"',
                borderRadius: 31,
                color: 'rgb(48, 48, 48)',
                fontFamily: 'Raleway_600SemiBold',
                fontSize: 16,
                lineHeight: 24,
              }
            ),
            dimensions.width
          )}
          title={'Save'}
        />
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'column', padding: 16, width: '100%' },
          dimensions.width
        )}
      >
        {/* User Profile Image */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={Images._05085df9d96576a4befeecdef14e79a4}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { borderRadius: 96, height: 96, width: 96 }
                ),
                dimensions.width
              )}
            />
            <Pressable>
              {/* Close Wrapper */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom Color_4'],
                    borderRadius: 20,
                    flexDirection: 'column',
                    paddingBottom: 8,
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                {/* Edit Button */}
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
                  color={'#202020'}
                  icon={'Entypo/camera'}
                  size={24}
                  style={StyleSheet.applyWidth(
                    { opacity: 0.96 },
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </HStack>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(EditProfileScreen);
