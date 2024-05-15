import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text } from 'react-native';

const KH6Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <Text
      accessible={true}
      {...GlobalStyles.TextStyles(theme)['HEADING-6'].props}
      style={StyleSheet.applyWidth(
        GlobalStyles.TextStyles(theme)['HEADING-6'].style,
        dimensions.width
      )}
    >
      {props.title ?? null}
    </Text>
  );
};

export default withTheme(KH6Block);
