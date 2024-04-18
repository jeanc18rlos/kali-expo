import React from 'react';
import substractMargins from '../global-functions/substractMargins';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const ProgressCircleBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: theme.colors['Custom Color_14'],
          height: 310,
          width: substractMargins(dimensions.width),
        },
        dimensions.width
      )}
    />
  );
};

export default withTheme(ProgressCircleBlock);
