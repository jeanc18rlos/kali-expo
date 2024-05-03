import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  HStack,
  Icon,
  IconButton,
  Link,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const MembershipScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();

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
                  params: { screen: 'SettingsScreen' },
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
        {/* Membership */}
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
          {'Membership'}
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
      {/* View 2 */}
      <View>
        {/* MEMBERSHIP PERIOD */}
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
          {'MEMBERSHIP PERIOD'}
        </Text>
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
              { alignItems: 'stretch', flex: 100, gap: 2 },
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
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Raleway_700Bold', fontSize: 16 }
                  ),
                  dimensions.width
                )}
              >
                {'Kali Premium'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontSize: 16 }
                  ),
                  dimensions.width
                )}
              >
                {' - Your monthly Kali membership will renew on '}
              </Text>
              {/* Text 3 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Raleway_700Bold', fontSize: 16 }
                  ),
                  dimensions.width
                )}
              >
                {'January 18'}
              </Text>
              {null}
            </Text>
          </View>
        </View>
        {/* Payment method  */}
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
          {'PAYMENT METHOD'}
        </Text>
        {/* Notifications 2 */}
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
              { alignItems: 'stretch', flex: 100, gap: 2 },
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
              {'Card Ending in **66'}
            </Text>
          </View>
          <Link
            accessible={true}
            {...GlobalStyles.LinkStyles(theme)['Link'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                color: 'rgb(48, 48, 48)',
                fontFamily: 'Raleway_600SemiBold',
                fontSize: 12,
                lineHeight: 16,
              }),
              dimensions.width
            )}
            title={'Edit'}
          />
        </View>
      </View>
      {/* View 3 */}
      <View
        style={StyleSheet.applyWidth(
          { gap: 8, paddingLeft: 16, paddingRight: 16, paddingTop: 8 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              backgroundColor: 'rgb(247, 247, 247)',
              borderRadius: 20,
              gap: 16,
              paddingBottom: 8,
              paddingLeft: 8,
              paddingRight: 8,
              paddingTop: 16,
            },
            dimensions.width
          )}
        >
          {/* Included */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: 'rgb(70, 70, 70)',
                fontFamily: 'Raleway_700Bold',
                fontSize: 16,
                lineHeight: 18,
              }),
              dimensions.width
            )}
          >
            {'Included with your membership'}
          </Text>
          {/* View 5 */}
          <View>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  borderBottomWidth: 1,
                  borderColor: 'rgba(232, 231, 231, 0.98)',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
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
                <Icon size={24} name={'Ionicons/checkmark-sharp'} />
                <View
                  style={StyleSheet.applyWidth({ gap: 4 }, dimensions.width)}
                >
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_600SemiBold',
                          fontSize: 16,
                          lineHeight: 18,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'All Kali Gold’s features'}
                  </Text>
                  <Link
                    accessible={true}
                    {...GlobalStyles.LinkStyles(theme)['Link'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.LinkStyles(theme)['Link'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_500Medium',
                          lineHeight: 18,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Detail'}
                  />
                </View>
              </HStack>
            </View>
            {/* View 4 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  borderBottomWidth: 1,
                  borderColor: 'rgba(232, 231, 231, 0.98)',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
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
                <Icon size={24} name={'Ionicons/checkmark-sharp'} />
                <View
                  style={StyleSheet.applyWidth({ gap: 4 }, dimensions.width)}
                >
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_600SemiBold',
                          fontSize: 16,
                          lineHeight: 18,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Extra Kali Points'}
                  </Text>
                  <Link
                    accessible={true}
                    {...GlobalStyles.LinkStyles(theme)['Link'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.LinkStyles(theme)['Link'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_500Medium',
                          lineHeight: 18,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Detail'}
                  />
                </View>
              </HStack>
            </View>
            {/* View 3 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  borderBottomWidth: 1,
                  borderColor: 'rgba(232, 231, 231, 0.98)',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
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
                <Icon size={24} name={'Ionicons/checkmark-sharp'} />
                <View
                  style={StyleSheet.applyWidth({ gap: 4 }, dimensions.width)}
                >
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_600SemiBold',
                          fontSize: 16,
                          lineHeight: 18,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Extra Kali Points'}
                  </Text>
                  <Link
                    accessible={true}
                    {...GlobalStyles.LinkStyles(theme)['Link'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.LinkStyles(theme)['Link'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_500Medium',
                          lineHeight: 18,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Detail'}
                  />
                </View>
              </HStack>
            </View>
            {/* View 2 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  borderBottomWidth: 1,
                  borderColor: 'rgba(232, 231, 231, 0.98)',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
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
                <Icon size={24} name={'Ionicons/checkmark-sharp'} />
                <View
                  style={StyleSheet.applyWidth({ gap: 4 }, dimensions.width)}
                >
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_600SemiBold',
                          fontSize: 16,
                          lineHeight: 18,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Extra Kali Points'}
                  </Text>
                  <Link
                    accessible={true}
                    {...GlobalStyles.LinkStyles(theme)['Link'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.LinkStyles(theme)['Link'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_500Medium',
                          lineHeight: 18,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Detail'}
                  />
                </View>
              </HStack>
            </View>
            {/* View 5 */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'flex-start',
                  borderBottomWidth: 1,
                  borderColor: 'rgba(247, 247, 247, 0.56)',
                  paddingBottom: 10,
                  paddingTop: 10,
                },
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
                <Icon size={24} name={'Ionicons/checkmark-sharp'} />
                <View
                  style={StyleSheet.applyWidth({ gap: 4 }, dimensions.width)}
                >
                  <Text
                    accessible={true}
                    {...GlobalStyles.TextStyles(theme)['Text'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.TextStyles(theme)['Text'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_600SemiBold',
                          fontSize: 16,
                          lineHeight: 18,
                          textAlign: 'center',
                        }
                      ),
                      dimensions.width
                    )}
                  >
                    {'Extra Kali Points'}
                  </Text>
                  <Link
                    accessible={true}
                    {...GlobalStyles.LinkStyles(theme)['Link'].props}
                    style={StyleSheet.applyWidth(
                      StyleSheet.compose(
                        GlobalStyles.LinkStyles(theme)['Link'].style,
                        {
                          color: 'rgb(70, 70, 70)',
                          fontFamily: 'Raleway_500Medium',
                          lineHeight: 18,
                        }
                      ),
                      dimensions.width
                    )}
                    title={'Detail'}
                  />
                </View>
              </HStack>
            </View>
          </View>
        </View>

        <HStack
          {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              { justifyContent: 'space-between' }
            ),
            dimensions.width
          )}
        >
          <Link
            accessible={true}
            {...GlobalStyles.LinkStyles(theme)['Link'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                color: 'rgb(48, 48, 48)',
                fontFamily: 'Raleway_600SemiBold',
                fontSize: 12,
                lineHeight: 16,
              }),
              dimensions.width
            )}
            title={'Change plan'}
          />
          {/* Link 2 */}
          <Link
            accessible={true}
            {...GlobalStyles.LinkStyles(theme)['Link'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                color: 'rgb(48, 48, 48)',
                fontFamily: 'Raleway_600SemiBold',
                fontSize: 12,
                lineHeight: 16,
              }),
              dimensions.width
            )}
            title={'Cancel Membership'}
          />
        </HStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MembershipScreen);
