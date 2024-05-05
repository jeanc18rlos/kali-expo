import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const ButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      <Button
        {...GlobalStyles.ButtonStyles(theme)['Button'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ButtonStyles(theme)['Button'].style,
          dimensions.width
        )}
        title={`${props.name ?? 'hola'}`}
      />
    </View>
  );
};

export default withTheme(ButtonBlock);
