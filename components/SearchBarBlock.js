import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Icon, TextInput, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const SearchBarBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          borderColor: theme.colors['Custom Color_19'],
          borderRadius: 12,
          borderWidth: 1,
          flexDirection: 'row',
          height: 44,
          justifyContent: 'flex-start',
          paddingLeft: 14,
          paddingRight: 14,
        },
        dimensions.width
      )}
    >
      <Icon
        color={theme.colors['Custom Color_2']}
        name={'MaterialCommunityIcons/magnify'}
        size={16}
      />
      <TextInput
        autoCapitalize={'none'}
        autoCorrect={true}
        changeTextDelay={500}
        onChangeText={newTextInputValue => {
          const textInputValue = newTextInputValue;
          try {
            const valueRx5ePqyb = newTextInputValue;
            setTextInputValue(valueRx5ePqyb);
            const searchterm = valueRx5ePqyb;
          } catch (err) {
            console.error(err);
          }
        }}
        webShowOutline={true}
        {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
        blurOnSubmit={true}
        enablesReturnKeyAutomatically={true}
        placeholder={'What are you looking for?'}
        placeholderTextColor={theme.colors['Custom Color_2']}
        returnKeyLabel={'search'}
        returnKeyType={'search'}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextInputStyles(theme)['Text Input'].style,
            {
              borderBottomWidth: null,
              borderLeftWidth: null,
              borderRadius: null,
              borderRightWidth: null,
              borderTopWidth: null,
              color: theme.colors['Custom Color_18'],
              fontFamily: 'Raleway_400Regular',
              fontSize: 16,
              width: '100%',
            }
          ),
          dimensions.width
        )}
        value={textInputValue}
      />
    </View>
  );
};

export default withTheme(SearchBarBlock);
