import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, IconButton, Pressable, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const ProductCardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <Pressable
      androidRippleBorderless={true}
      style={StyleSheet.applyWidth({ height: 229 }, dimensions.width)}
    >
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            backgroundColor: 'rgb(255, 255, 255)',
            borderColor: theme.colors['Custom Color_20'],
            borderRadius: 12,
            borderWidth: 1,
            height: '100%',
            overflow: 'hidden',
            width: '100%',
          },
          dimensions.width
        )}
      >
        {/* Product Image */}
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={{
            uri: `${
              props.image ??
              'https://apps-draftbit-com.s3.amazonaws.com/apps/FbFlTGZm/assets/7VX9vJb51zMfZZlUIgJtd'
            }`,
          }}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              height: 137,
              width: '100%',
            }),
            dimensions.width
          )}
        />
        {/* Product Title */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_21'],
              fontFamily: 'Raleway_400Regular',
              marginTop: 8,
            }),
            dimensions.width
          )}
        >
          {props.title ?? 'Product title'}
        </Text>
        {/* Product Description */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              alignSelf: 'center',
              color: theme.colors['Custom Color_21'],
              fontFamily: 'Raleway_400Regular',
            }),
            dimensions.width
          )}
        >
          {props.description ?? 'Product Description'}
        </Text>
        {/* Product Price */}
        <>
          {!(props.price ?? 3.99) ? null : (
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Custom Color_21'],
                    fontFamily: 'Raleway_700Bold',
                  }
                ),
                dimensions.width
              )}
            >
              {props.price ?? 3.99}
            </Text>
          )}
        </>
        {/* Product founder */}
        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              color: theme.colors['Custom Color_21'],
              fontFamily: 'Raleway_400Regular',
            }),
            dimensions.width
          )}
        >
          {props.founder ?? 'Product Brand'}
        </Text>
        {/* Favorite Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            { position: 'absolute', right: 16, top: 16 },
            dimensions.width
          )}
        >
          {/* Save to favorites */}
          <>
            {!!(props.isFavorite ?? false) ? null : (
              <IconButton
                onPress={() => {
                  try {
                    /* 'API Request' action requires configuration: choose an API endpoint */
                  } catch (err) {
                    console.error(err);
                  }
                }}
                color={theme.colors['Custom Color_3']}
                icon={'AntDesign/hearto'}
                size={24}
              />
            )}
          </>
          {/* Is Favorite */}
          <>
            {!(props.isFavorite ?? false) ? null : (
              <Icon
                size={24}
                color={theme.colors['Custom Color_22']}
                name={'AntDesign/heart'}
              />
            )}
          </>
        </View>
      </View>
    </Pressable>
  );
};

export default withTheme(ProductCardBlock);
