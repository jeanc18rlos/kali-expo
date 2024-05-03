import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  BottomSheet,
  Button,
  Icon,
  IconButton,
  Link,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  withTheme,
} from '@draftbit/ui';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { Text, View } from 'react-native';

const SettingsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [ShowDelete, setShowDelete] = React.useState(false);
  const [isPressed, setIsPressed] = React.useState(false);
  const [showSignOff, setShowSignOff] = React.useState(false);

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      {/* Header Wrapper */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          },
          dimensions.width
        )}
      >
        {/* Go back Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { flexDirection: 'column' },
            dimensions.width
          )}
        >
          {/* Go back Button */}
          <IconButton
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
          {'SETTINGS'}
        </Text>
        {/* Close Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: 'rgb(255, 255, 255)',
              borderRadius: 22,
              height: 32,
              justifyContent: 'center',
              width: 32,
            },
            dimensions.width
          )}
        />
      </View>

      <SimpleStyleScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { gap: 4, paddingLeft: 16, paddingRight: 16, width: '100%' },
          dimensions.width
        )}
      >
        {/* View 3 */}
        <View>
          {/* Account Settings */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(100, 100, 100)',
                fontSize: 12,
                letterSpacing: 0.48,
                lineHeight: 16,
                textTransform: 'uppercase',
              }),
              dimensions.width
            )}
          >
            {'Account Settings'}
          </Text>

          <Pressable
            onPress={() => {
              try {
                navigation.push('AppTabNavigator', {
                  screen: 'ProfileNavigator',
                  params: { screen: 'PushNotificationsScreen' },
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Notifications */}
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
                  {'Notifications'}
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
                navigation.push('AppTabNavigator', { screen: 'HomeScreen' });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* App Tracking */}
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
                  {'App Tracking'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon size={24} name={'AntDesign/right'} />
            </View>
          </Pressable>
        </View>
        {/* View 2 */}
        <View>
          {/* Permissions */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(100, 100, 100)',
                fontSize: 12,
                letterSpacing: 0.48,
                lineHeight: 16,
                textTransform: 'uppercase',
              }),
              dimensions.width
            )}
          >
            {'Permissions'}
          </Text>
          {/* Pressable 3 */}
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
            style={StyleSheet.applyWidth(
              { borderColor: 'rgb(229, 231, 235)' },
              dimensions.width
            )}
          >
            {/* Step Tracker */}
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
                  {'Step Tracker'}
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
                  params: { screen: 'GoalScreen' },
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Goal */}
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
                  {'Goal'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon size={24} name={'AntDesign/right'} />
            </View>
          </Pressable>
        </View>

        <View>
          {/* Information */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(100, 100, 100)',
                fontSize: 12,
                letterSpacing: 0.48,
                lineHeight: 16,
                textTransform: 'uppercase',
              }),
              dimensions.width
            )}
          >
            {'Information'}
          </Text>
          {/* Pressable 5 */}
          <Pressable
            onPress={() => {
              try {
                /* 'Open App Link' action requires configuration: select URL */
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              { borderColor: 'rgb(229, 231, 235)', borderTopWidth: 1 },
              dimensions.width
            )}
          >
            {/* Kali Points */}
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
                  {'Kali Points'}
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
                Linking.openURL('https://kali.day/terms-and-conditions/');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Terms and Conditions */}
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
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'flex-start', flex: 100, gap: 2 },
                  dimensions.width
                )}
              >
                <Link
                  accessible={true}
                  onPress={() => {
                    const handler = async () => {
                      try {
                        await WebBrowser.openBrowserAsync(
                          'https://kali.day/terms-and-conditions/'
                        );
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  {...GlobalStyles.LinkStyles(theme)['Link'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.LinkStyles(theme)['Link'].style,
                      {
                        color: 'rgb(31, 41, 55)',
                        fontFamily: 'Raleway_600SemiBold',
                        fontSize: 16,
                        lineHeight: 16,
                      }
                    ),
                    dimensions.width
                  )}
                  title={'Terms of Service '}
                />
              </View>
              {/* Icon 2 */}
              <Icon size={24} name={'AntDesign/right'} />
            </View>
          </Pressable>
          {/* Pressable 7 */}
          <Pressable
            onPress={() => {
              try {
                Linking.openURL('https://kali.day/privacy-policy/');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Privacy Policy */}
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
              <View
                style={StyleSheet.applyWidth(
                  { alignItems: 'flex-start', flex: 100, gap: 2 },
                  dimensions.width
                )}
              >
                {/* Link 2 */}
                <Link
                  accessible={true}
                  onPress={() => {
                    const handler = async () => {
                      try {
                        await WebBrowser.openBrowserAsync(
                          'https://kali.day/privacy-policy/'
                        );
                      } catch (err) {
                        console.error(err);
                      }
                    };
                    handler();
                  }}
                  {...GlobalStyles.LinkStyles(theme)['Link'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.LinkStyles(theme)['Link'].style,
                      {
                        color: 'rgb(31, 41, 55)',
                        fontFamily: 'Raleway_600SemiBold',
                        fontSize: 16,
                        lineHeight: 16,
                      }
                    ),
                    dimensions.width
                  )}
                  title={'Privacy Policy.'}
                />
              </View>
              {/* Icon 2 */}
              <Icon size={24} name={'AntDesign/right'} />
            </View>
          </Pressable>
          {/* Pressable 8 */}
          <Pressable
            onPress={() => {
              try {
                setShowDelete(true);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Delete Account */}
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
                  {'Delete Account'}
                </Text>
              </View>
              {/* Icon 2 */}
              <Icon size={24} name={'AntDesign/right'} />
            </View>
          </Pressable>
        </View>
      </SimpleStyleScrollView>
      <>
        {!ShowDelete ? null : (
          <BottomSheet
            borderWidth={1}
            bottomSnapPosition={'80%'}
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
            friction={1}
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
              {/* Close Wrapper */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: 'rgba(221, 48, 36, 0.1)',
                    borderRadius: 22,
                    height: 48,
                    justifyContent: 'center',
                    opacity: 1,
                    width: 48,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors['Custom Color_32']}
                  name={'Entypo/warning'}
                  style={StyleSheet.applyWidth(
                    { backgroundColor: 'rgba(0, 0, 0, 0)' },
                    dimensions.width
                  )}
                />
              </View>

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
                  {'Are you sure?'}
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
                  {
                    'You will lose access to your Kali points and ....This action cannot be reverted.'
                  }
                </Text>
              </View>

              <View style={StyleSheet.applyWidth({ gap: 8 }, dimensions.width)}>
                <>
                  {!!isPressed ? null : (
                    <Button
                      onPress={() => {
                        try {
                          setIsPressed(!isPressed);
                          navigation.push('AppTabNavigator', {
                            screen: 'ProfileNavigator',
                            params: { screen: 'DeleteAcountScreen' },
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ButtonStyles(theme)['Button'].style,
                          {
                            backgroundColor: 'rgb(255, 255, 255)',
                            borderColor: 'rgb(93, 93, 93)',
                            borderRadius: 31,
                            borderWidth: 1,
                            color: theme.colors['Custom Color_3'],
                            fontFamily: 'Raleway_700Bold',
                            fontSize: 16,
                            height: 56,
                            lineHeight: 18,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'Delete my account'}
                    />
                  )}
                </>
                {/* Button 2 */}
                <>
                  {!isPressed ? null : (
                    <Button
                      onPress={() => {
                        try {
                          undefined;
                          navigation.push('AppTabNavigator', {
                            screen: 'ProfileNavigator',
                            params: { screen: 'DeleteAcountScreen' },
                          });
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                      style={StyleSheet.applyWidth(
                        StyleSheet.compose(
                          GlobalStyles.ButtonStyles(theme)['Button'].style,
                          {
                            backgroundColor: 'rgb(229, 72, 77)',
                            borderRadius: 31,
                            fontFamily: 'Raleway_700Bold',
                            fontSize: 16,
                            height: 56,
                            lineHeight: 18,
                          }
                        ),
                        dimensions.width
                      )}
                      title={'Delete my account'}
                    />
                  )}
                </>
              </View>
            </View>
          </BottomSheet>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(SettingsScreen);
