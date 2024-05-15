import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const KPressableProfileBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Pressable>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: 'rgb(255, 255, 255)',
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
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: 'rgb(31, 41, 55)',
                fontFamily: 'Raleway_600SemiBold',
                fontSize: 16,
                lineHeight: 16,
              }),
              dimensions.width
            )}
          >
            {props.title ?? null}
          </Text>
        </View>
        {/* Icon 2 */}
        <Icon size={24} name={'AntDesign/right'} />
      </View>
    </Pressable>
  );
};

export default withTheme(KPressableProfileBlock);
