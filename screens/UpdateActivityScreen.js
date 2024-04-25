import React from 'react';
import * as Pedometer from '../custom-files/Pedometer';
import * as Utils from '../utils';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const UpdateActivityScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <View>
        <Utils.CustomCodeErrorBoundary>
          <Pedometer.Button />
        </Utils.CustomCodeErrorBoundary>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(UpdateActivityScreen);
