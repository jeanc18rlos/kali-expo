import React from 'react';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text } from 'react-native';

const KH2Block = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <Text
      accessible={true}
      style={StyleSheet.applyWidth(
        {
          alignSelf: 'center',
          color: theme.colors.strong,
          fontFamily: 'Raleway_700Bold',
          fontSize: 24,
          marginBottom: 16,
          textAlign: 'left',
          typography: theme.typography.headline4,
        },
        dimensions.width
      )}
    >
      {null}
    </Text>
  );
};

export default withTheme(KH2Block);
