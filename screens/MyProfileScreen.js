import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import * as KIcon from '../custom-files/KIcon';
import * as KaliCoinSVG from '../custom-files/KaliCoinSVG';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  BottomSheet,
  HStack,
  Icon,
  IconButton,
  LinearGradient,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const MyProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [emailFieldValue, setEmailFieldValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [isPressed, setIsPressed] = React.useState(false);
  const [showSignOff, setShowSignOff] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
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
          {'PROFILE '}
        </Text>
        {/* Close Wrapper */}
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
          {/* Edit Button */}
          <IconButton
            onPress={() => {
              try {
                navigation.navigate('AppTabNavigator', {
                  screen: 'ProfileNavigator',
                  params: { screen: 'EditProfileScreen' },
                });
              } catch (err) {
                console.error(err);
              }
            }}
            color={'#202020'}
            icon={'MaterialCommunityIcons/pencil-outline'}
            size={24}
            style={StyleSheet.applyWidth({ opacity: 0.96 }, dimensions.width)}
          />
        </View>
      </View>
      {/* View 2 */}
      <View>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              gap: 16,
              padding: 16,
              width: '100%',
            },
            dimensions.width
          )}
        >
          {/* User Profile Image */}
          <View
            style={StyleSheet.applyWidth(
              { height: 96, justifyContent: 'center', width: 96 },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={{
                uri: `${Constants['user_profile']?.data?.profile_image}`,
              }}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { borderRadius: 96, height: 96, width: 96 }
                ),
                dimensions.width
              )}
            />
          </View>
          {/* User Info */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                alignSelf: 'stretch',
                flex: 1,
                gap: 6,
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
                  {
                    color: 'rgb(32, 32, 32)',
                    fontFamily: 'Raleway_700Bold',
                    fontSize: 16,
                    letterSpacing: 0.08,
                    lineHeight: 24,
                  }
                ),
                dimensions.width
              )}
            >
              {'Hi, '}
              {null}
            </Text>
            {/* Text 3 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: 'rgb(32, 32, 32)',
                    fontFamily: 'Raleway_700Bold',
                    fontSize: 16,
                    letterSpacing: 0.08,
                    lineHeight: 24,
                  }
                ),
                dimensions.width
              )}
            >
              {'Hi, '}
              {textInputValue}
              {'!'}
            </Text>

            <Pressable
              style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
            >
              <LinearGradient
                {...GlobalStyles.LinearGradientStyles(theme)['Linear Gradient']
                  .props}
                color1={theme.colors['Custom Color_28']}
                color2={theme.colors['Custom Color_29']}
                color3={theme.colors['Custom Color_30']}
                endX={10}
                endY={100}
                startX={100}
                startY={100}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.LinearGradientStyles(theme)['Linear Gradient']
                      .style,
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
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: 'rgb(255, 252, 252)',
                          fontFamily: 'Raleway_700Bold',
                        }
                      ),
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
          </View>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-start',
              borderBottomWidth: 1,
              borderColor: theme.colors['Custom Color_31'],
              borderTopWidth: 1,
              flexDirection: 'row',
              marginLeft: 16,
              marginRight: 16,
              paddingBottom: 24,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 24,
            },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                borderColor: 'rgb(229, 231, 235)',
                borderRightWidth: 1,
                flex: 100,
                gap: 4,
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
                  {
                    color: 'rgb(32, 32, 32)',
                    fontFamily: 'Raleway_700Bold',
                    fontSize: 20,
                    letterSpacing: 0.1,
                    lineHeight: 24,
                  }
                ),
                dimensions.width
              )}
            >
              {'7.548'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: 'rgb(32, 32, 32)',
                    fontFamily: 'Raleway_700Bold',
                    fontSize: 12,
                    letterSpacing: 0.96,
                    lineHeight: 16,
                    textTransform: 'uppercase',
                  }
                ),
                dimensions.width
              )}
            >
              {'TODAY STEPS'}
            </Text>
          </View>
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 100, gap: 4, paddingLeft: 16 },
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
              <Utils.CustomCodeErrorBoundary>
                <KaliCoinSVG.Icon />
              </Utils.CustomCodeErrorBoundary>
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(32, 32, 32)',
                      fontFamily: 'Raleway_700Bold',
                      fontSize: 20,
                      letterSpacing: 1,
                      lineHeight: 24,
                      paddingLeft: 8,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'50.548'}
              </Text>
            </HStack>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: 'rgb(32, 32, 32)',
                    fontFamily: 'Raleway_700Bold',
                    fontSize: 12,
                    letterSpacing: 0.96,
                    lineHeight: 16,
                  }
                ),
                dimensions.width
              )}
            >
              {'KALI POINTS'}
            </Text>
          </View>
        </View>
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { paddingLeft: 16, paddingRight: 16, width: '100%' },
          dimensions.width
        )}
      >
        <Pressable
          onPress={() => {
            try {
              navigation.push('AppTabNavigator', {
                screen: 'ProfileNavigator',
                params: { screen: 'MyProfileScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* My Orders */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'stretch',
                borderColor: 'rgb(229, 231, 235)',
                flexDirection: 'row',
                gap: 16,
                padding: 8,
                paddingBottom: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            {/* Close Wrapper */}
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
              <Icon
                size={24}
                name={'MaterialCommunityIcons/shopping-outline'}
                style={StyleSheet.applyWidth(
                  { backgroundColor: 'rgb(249, 249, 249)' },
                  dimensions.width
                )}
              />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'flex-start', flex: 100, gap: 2 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(31, 41, 55)',
                      fontFamily: 'Raleway_600SemiBold',
                      fontSize: 16,
                      lineHeight: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'My Orders'}
              </Text>
            </View>
            {/* Icon 2 */}
            <Icon size={24} name={'AntDesign/right'} />
          </View>
        </Pressable>
        {/* Pressable 2 */}
        <Pressable
          onPress={() => {
            try {
              navigation.push('AppTabNavigator', {
                screen: 'ShopNavigator',
                params: { screen: 'FavoritesScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Favorites */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'stretch',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: 1,
                flexDirection: 'row',
                gap: 16,
                padding: 8,
                paddingBottom: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            {/* Close Wrapper */}
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
              <Icon size={24} name={'MaterialCommunityIcons/heart-outline'} />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'flex-start', flex: 100, gap: 2 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(31, 41, 55)',
                      fontFamily: 'Raleway_600SemiBold',
                      fontSize: 16,
                      lineHeight: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Favorites'}
              </Text>
            </View>
            {/* Icon 2 */}
            <Icon size={24} name={'AntDesign/right'} />
          </View>
        </Pressable>
        {/* Pressable 3 */}
        <Pressable
          onPress={() => {
            try {
              navigation.push('AppTabNavigator', {
                screen: 'ProfileNavigator',
                params: { screen: 'SettingsScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Settings */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'stretch',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: 1,
                flexDirection: 'row',
                gap: 16,
                padding: 8,
                paddingBottom: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            {/* Close Wrapper */}
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
              <Icon size={24} name={'Ionicons/md-settings-outline'} />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'flex-start', flex: 100, gap: 2 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(31, 41, 55)',
                      fontFamily: 'Raleway_600SemiBold',
                      fontSize: 16,
                      lineHeight: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Settings'}
              </Text>
            </View>
            {/* Icon 2 */}
            <Icon size={24} name={'AntDesign/right'} />
          </View>
        </Pressable>
        {/* Pressable 4 */}
        <Pressable
          onPress={() => {
            try {
              navigation.push('AppTabNavigator', {
                screen: 'ProfileNavigator',
                params: { screen: 'MyProfileScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Membership */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'stretch',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: 1,
                flexDirection: 'row',
                gap: 16,
                padding: 8,
                paddingBottom: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            {/* Close Wrapper */}
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
              <Icon size={24} name={'MaterialCommunityIcons/crown-outline'} />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'flex-start', flex: 100, gap: 2 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(31, 41, 55)',
                      fontFamily: 'Raleway_600SemiBold',
                      fontSize: 16,
                      lineHeight: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Membership'}
              </Text>
            </View>
            {/* Icon 2 */}
            <Icon size={24} name={'AntDesign/right'} />
          </View>
        </Pressable>
        {/* Pressable 5 */}
        <Pressable
          onPress={() => {
            try {
              navigation.push('AppTabNavigator', {
                screen: 'ProfileNavigator',
                params: { screen: 'MyProfileScreen' },
              });
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Support */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'stretch',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: 1,
                flexDirection: 'row',
                gap: 16,
                padding: 8,
                paddingBottom: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            {/* Close Wrapper */}
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
              <Icon size={24} name={'MaterialIcons/support-agent'} />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'flex-start', flex: 100, gap: 2 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(31, 41, 55)',
                      fontFamily: 'Raleway_600SemiBold',
                      fontSize: 16,
                      lineHeight: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Support'}
              </Text>
            </View>
            {/* Icon 2 */}
            <Icon size={24} name={'AntDesign/right'} />
          </View>
        </Pressable>
        {/* Pressable 6 */}
        <Pressable
          onPress={() => {
            try {
              setShowSignOff(true);
            } catch (err) {
              console.error(err);
            }
          }}
        >
          {/* Sign Off */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'stretch',
                borderColor: 'rgb(229, 231, 235)',
                borderTopWidth: 1,
                flexDirection: 'row',
                gap: 16,
                padding: 8,
                paddingBottom: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            {/* Close Wrapper */}
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
              <Icon size={24} name={'Ionicons/ios-exit-outline'} />
            </View>

            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'flex-start', flex: 100, gap: 2 },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(31, 41, 55)',
                      fontFamily: 'Raleway_600SemiBold',
                      fontSize: 16,
                      lineHeight: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Sign Off'}
              </Text>
            </View>
            {/* Icon 2 */}
            <Icon size={24} name={'AntDesign/right'} />
          </View>
        </Pressable>
      </SimpleStyleScrollView>
      <>
        {!showSignOff ? null : (
          <BottomSheet
            borderWidth={1}
            bottomSnapPosition={'80%'}
            friction={0.95}
            handleColor={theme.colors.divider}
            middleSnapPosition={'50%'}
            showHandle={true}
            showsVerticalScrollIndicator={true}
            topBorderRadius={20}
            topSnapPosition={'10%'}
            {...GlobalStyles.BottomSheetStyles(theme)['Bottom Sheet'].props}
            borderColor={theme.colors['Custom Color_2']}
            bounces={true}
            enableOverScroll={false}
            initialSnapPosition={'middle'}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.BottomSheetStyles(theme)['Bottom Sheet'].style,
                { gap: 24, padding: 16 }
              ),
              dimensions.width
            )}
          >
            {/* Header Wrapper */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-between' },
                dimensions.width
              )}
            >
              {/* View 2 */}
              <View></View>

              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    alignSelf: 'center',
                    backgroundColor: 'rgb(245, 245, 245)',
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
                  color={theme.colors['Custom Color_3']}
                  icon={'AntDesign/close'}
                  size={24}
                />
              </View>
            </View>
            {/* View 2 */}
            <View style={StyleSheet.applyWidth({ gap: 24 }, dimensions.width)}>
              {/* View 3 */}
              <View>
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: 'rgb(18, 18, 18)',
                        fontFamily: 'Raleway_700Bold',
                        fontSize: 24,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Sign Off'}
                </Text>
                {/* Text 2 */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        alignSelf: 'flex-start',
                        color: 'rgb(18, 18, 18)',
                        fontFamily: 'Raleway_400Regular',
                        fontSize: 16,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Are you sure you want to close your session'}
                </Text>
              </View>

              <View style={StyleSheet.applyWidth({ gap: 8 }, dimensions.width)}>
                {/* Pressable  */}
                <Pressable
                  onPress={() => {
                    try {
                      /* 'Set Variable' action requires configuration: choose a variable */
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgb(82, 82, 82)',
                        borderRadius: 31,
                        borderTopWidth: 1,
                        borderWidth: 1,
                        flexDirection: 'row',
                        gap: 16,
                        paddingBottom: 16,
                        paddingTop: 16,
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', flex: 100, gap: 2 },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              alignSelf: 'center',
                              color: 'rgb(31, 41, 55)',
                              fontFamily: 'Raleway_500Medium',
                              fontSize: 16,
                              lineHeight: 16,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Yes'}
                      </Text>
                    </View>
                  </View>
                </Pressable>
                {/* Pressable  2 */}
                <Pressable>
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgb(82, 82, 82)',
                        borderRadius: 31,
                        borderTopWidth: 1,
                        borderWidth: 1,
                        flexDirection: 'row',
                        gap: 16,
                        paddingBottom: 16,
                        paddingTop: 16,
                      },
                      dimensions.width
                    )}
                  >
                    <View
                      style={StyleSheet.applyWidth(
                        { alignItems: 'flex-start', flex: 100, gap: 2 },
                        dimensions.width
                      )}
                    >
                      <Text
                        accessible={true}
                        {...GlobalStyles.TextStyles(theme)['Text'].props}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'].style,
                            {
                              alignSelf: 'center',
                              color: 'rgb(31, 41, 55)',
                              fontFamily: 'Raleway_500Medium',
                              fontSize: 16,
                              lineHeight: 16,
                            }
                          ),
                          dimensions.width
                        )}
                      >
                        {'No'}
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
            </View>
          </BottomSheet>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(MyProfileScreen);
