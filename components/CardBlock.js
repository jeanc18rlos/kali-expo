import React from 'react';
import ButtonBlock from '../components/ButtonBlock';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const CardBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      <ButtonBlock />
    </View>
  );
};

export default withTheme(CardBlock);
