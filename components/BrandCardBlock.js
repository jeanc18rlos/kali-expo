import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Pressable, VStack, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const BrandCardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      <Pressable>
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            dimensions.width
          )}
        >
          <Image
            resizeMode={'cover'}
            source={{
              uri: 'https://static.draftbit.com/images/placeholder-image.png',
            }}
            {...GlobalStyles.ImageStyles(theme)['Image'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ImageStyles(theme)['Image'].style,
                { borderRadius: 75, height: 75, width: 75 }
              ),
              dimensions.width
            )}
          />
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['Text'].style,
              dimensions.width
            )}
          >
            {'Double click me to edit 👀'}
          </Text>
        </VStack>
      </Pressable>
    </View>
  );
};

export default withTheme(BrandCardBlock);
