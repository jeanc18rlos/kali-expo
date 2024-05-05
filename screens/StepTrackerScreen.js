import React from 'react';
import KActionHeaderBlock from '../components/KActionHeaderBlock';
import KSwitchBlock from '../components/KSwitchBlock';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const StepTrackerScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <KActionHeaderBlock
        left_button={true}
        right_button={true}
        title={'Step Tracker'}
      />
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'column' },
          dimensions.width
        )}
      >
        <KSwitchBlock
          subtitle={
            'Kali should know the total number of steps your phone detects'
          }
          title={'Enable Step Tracker'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(StepTrackerScreen);
