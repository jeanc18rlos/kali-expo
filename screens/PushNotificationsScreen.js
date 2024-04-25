import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  HStack,
  IconButton,
  ScreenContainer,
  Switch,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const PushNotificationsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [switchRowValue, setSwitchRowValue] = React.useState(false);
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
          {'Notifications'}
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
          { flexDirection: 'column' },
          dimensions.width
        )}
      >
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderRadius: 12,
              flexDirection: 'column',
              gap: 6,
              margin: 12,
              paddingBottom: 16,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 16,
            },
            dimensions.width
          )}
        >
          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.HStackStyles(theme)['H Stack'].style,
                {
                  backgroundColor: theme.colors['Custom Color_31'],
                  borderRadius: 12,
                  justifyContent: 'space-between',
                  paddingBottom: 16,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 16,
                }
              ),
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
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: 'rgb(32, 32, 32)',
                      fontFamily: 'Raleway_600SemiBold',
                      fontSize: 16,
                      lineHeight: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Push Notifications'}
              </Text>
              {/* Text 2 */}
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    { fontFamily: 'Raleway_300Light', fontSize: 12 }
                  ),
                  dimensions.width
                )}
              >
                {'I want to receive push notifications'}
              </Text>
            </VStack>
            <Switch
              onValueChange={newSwitchValue => {
                const switchValue = newSwitchValue;
                try {
                  setSwitchValue(newSwitchValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              value={switchValue}
            />
          </HStack>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PushNotificationsScreen);
