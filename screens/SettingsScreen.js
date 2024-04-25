import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
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
                navigation.push('AppTabNavigator', {
                  screen: 'ProfileNavigator',
                  params: { screen: 'MyProfileScreen' },
                });
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
                navigation.push('OnboardingNavigator', {
                  screen: 'SetDailyGoalScreen',
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
                navigation.push('AppTabNavigator', {
                  screen: 'ProfileNavigator',
                  params: { screen: 'MyProfileScreen' },
                });
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
    </ScreenContainer>
  );
};

export default withTheme(SettingsScreen);
