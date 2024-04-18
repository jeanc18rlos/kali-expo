import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import substractMargins from '../global-functions/substractMargins';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, VStack, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const StreakbarBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom Color_14'],
          borderRadius: 12,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          paddingBottom: 12,
          paddingTop: 12,
          width: substractMargins(dimensions.width),
        },
        dimensions.width
      )}
    >
      {/* Sunday */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            {
              alignItems: 'center',
              height: 52,
              justifyContent: 'space-around',
              width: 24,
            }
          ),
          dimensions.width
        )}
      >
        {/* Active icon */}
        <>
          {!(props.sunday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_6']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        {/* Disabled icon */}
        <>
          {!!(props.sunday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_5']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color 6'],
              fontFamily: 'Raleway_700Bold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'S'}
        </Text>
      </VStack>
      {/* Monday */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            {
              alignItems: 'center',
              height: 52,
              justifyContent: 'space-around',
              width: 24,
            }
          ),
          dimensions.width
        )}
      >
        {/* Active icon */}
        <>
          {!(props.monday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_6']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        {/* Disabled icon */}
        <>
          {!!(props.monday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_5']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color 6'],
              fontFamily: 'Raleway_700Bold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'M'}
        </Text>
      </VStack>
      {/* Tuesday */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            {
              alignItems: 'center',
              height: 52,
              justifyContent: 'space-around',
              width: 24,
            }
          ),
          dimensions.width
        )}
      >
        {/* Active icon */}
        <>
          {!(props.tuesday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_6']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        {/* Disabled icon */}
        <>
          {!!(props.tuesday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_5']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color 6'],
              fontFamily: 'Raleway_700Bold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'T'}
        </Text>
      </VStack>
      {/* Wednesday */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            {
              alignItems: 'center',
              height: 52,
              justifyContent: 'space-around',
              width: 24,
            }
          ),
          dimensions.width
        )}
      >
        {/* Active icon */}
        <>
          {!(props.wednesday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_6']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        {/* Disabled icon */}
        <>
          {!!(props.wednesday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_5']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color 6'],
              fontFamily: 'Raleway_700Bold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'W'}
        </Text>
      </VStack>
      {/* Thursday */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            {
              alignItems: 'center',
              height: 52,
              justifyContent: 'space-around',
              width: 24,
            }
          ),
          dimensions.width
        )}
      >
        {/* Active icon */}
        <>
          {!(props.thursday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_6']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        {/* Disabled icon */}
        <>
          {!!(props.thursday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_5']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color 6'],
              fontFamily: 'Raleway_700Bold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'T'}
        </Text>
      </VStack>
      {/* Friday */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            {
              alignItems: 'center',
              height: 52,
              justifyContent: 'space-around',
              width: 24,
            }
          ),
          dimensions.width
        )}
      >
        {/* Active icon */}
        <>
          {!(props.friday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_6']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        {/* Disabled icon */}
        <>
          {!!(props.friday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_5']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color 6'],
              fontFamily: 'Raleway_700Bold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'F'}
        </Text>
      </VStack>
      {/* Saturday */}
      <VStack
        {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            {
              alignItems: 'center',
              height: 52,
              justifyContent: 'space-around',
              width: 24,
            }
          ),
          dimensions.width
        )}
      >
        {/* Active icon */}
        <>
          {!(props.saturday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_6']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        {/* Disabled icon */}
        <>
          {!!(props.saturday ?? false) ? null : (
            <Icon
              size={24}
              color={theme.colors['Custom Color_5']}
              name={'Ionicons/ios-flame-sharp'}
            />
          )}
        </>
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color 6'],
              fontFamily: 'Raleway_700Bold',
              fontSize: 16,
            }),
            dimensions.width
          )}
        >
          {'S'}
        </Text>
      </VStack>
    </View>
  );
};

export default withTheme(StreakbarBlock);
