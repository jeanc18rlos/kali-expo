import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text } from 'react-native';

const KH1Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <Text
      accessible={true}
      {...GlobalStyles.TextStyles(theme)['HEADING-1'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.TextStyles(theme)['HEADING-1'].style,
        dimensions.width
      )}
    >
      {props.text ?? null}
    </Text>
  );
};

export default withTheme(KH1Block);
