import React from 'react';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const StepProgressBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return <View />;
};

export default withTheme(StepProgressBlock);
