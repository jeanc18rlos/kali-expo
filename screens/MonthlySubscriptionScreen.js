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
  RadioButton,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const MonthlySubscriptionScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [switchValue, setSwitchValue] = React.useState(false);

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
        {/* Subscription */}
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
          {'Subscriptions'}
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

      <View
        style={StyleSheet.applyWidth(
          { gap: 9, paddingLeft: 16, paddingRight: 16 },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center' },
            dimensions.width
          )}
        />
        {/* Kali Gold */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderColor: 'rgb(197, 198, 204)',
              borderRadius: 20,
              borderWidth: 1,
              gap: 24,
              padding: 8,
            },
            dimensions.width
          )}
        >
          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.HStackStyles(theme)['H Stack'].style,
                { gap: 24 }
              ),
              dimensions.width
            )}
          >
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={theme.colors['Custom Color_18']}
              unselectedColor={theme.colors['Custom Color_31']}
            />
            <View style={StyleSheet.applyWidth({ gap: 8 }, dimensions.width)}>
              <View style={StyleSheet.applyWidth({ gap: 4 }, dimensions.width)}>
                {/* Kali Gold */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: 'rgb(52, 52, 52)',
                        fontFamily: 'Raleway_600SemiBold',
                        fontSize: 16,
                        lineHeight: 18,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Kali Gold'}
                </Text>
                {/* Redeem your Kali Points */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: 'rgb(52, 52, 52)',
                        fontFamily: 'Raleway_400Regular',
                        lineHeight: 18,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Redeem your Kali Points'}
                </Text>
              </View>
              {/* price */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(52, 52, 52)',
                      fontFamily: 'Raleway_400Regular',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'$ 0.00 month'}
              </Text>
            </View>
          </HStack>
        </View>
        {/* Kali Premium */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'stretch',
              borderColor: 'rgb(70, 70, 70)',
              borderRadius: 20,
              borderWidth: 1,
              gap: 24,
              padding: 8,
            },
            dimensions.width
          )}
        >
          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.HStackStyles(theme)['H Stack'].style,
                { gap: 24 }
              ),
              dimensions.width
            )}
          >
            <RadioButton
              selectedIcon={'MaterialIcons/radio-button-checked'}
              size={24}
              unselectedIcon={'MaterialIcons/radio-button-unchecked'}
              color={theme.colors['Custom Color_18']}
              unselectedColor={theme.colors['Custom Color_31']}
            />
            <View style={StyleSheet.applyWidth({ gap: 8 }, dimensions.width)}>
              <View style={StyleSheet.applyWidth({ gap: 4 }, dimensions.width)}>
                {/* Kali Premium */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: 'rgb(52, 52, 52)',
                        fontFamily: 'Raleway_600SemiBold',
                        fontSize: 16,
                        lineHeight: 18,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Kali Premium'}
                </Text>
                {/* Redeem your Kali Points */}
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        color: 'rgb(52, 52, 52)',
                        fontFamily: 'Raleway_400Regular',
                        lineHeight: 18,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Redeem your Kali Points'}
                </Text>
              </View>
              {/* price */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(52, 52, 52)',
                      fontFamily: 'Raleway_400Regular',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'$ 0.00 month'}
              </Text>
            </View>
          </HStack>
        </View>
        {/* View 3 */}
        <View
          style={StyleSheet.applyWidth(
            { gap: 8, paddingTop: 8 },
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
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'center',
                    color: 'rgb(70, 70, 70)',
                    fontFamily: 'Raleway_700Bold',
                    fontSize: 16,
                    lineHeight: 18,
                  }
                ),
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
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(MonthlySubscriptionScreen);
