import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text } from 'react-native';

const KTypographyBodyBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Text
      accessible={true}
      {...GlobalStyles.TextStyles(theme)['Text'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
          color: theme.colors['Custom Color_10'],
          fontFamily: 'Raleway_400Regular',
          fontSize: 16,
          textAlign: 'center',
        }),
        dimensions.width
      )}
    >
      {props.text ?? null}
    </Text>
  );
};

export default withTheme(KTypographyBodyBlock);
