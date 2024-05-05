import React from 'react';
import KActionHeaderBlock from '../components/KActionHeaderBlock';
import KSwitchBlock from '../components/KSwitchBlock';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const PushNotificationsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [switchRowValue, setSwitchRowValue] = React.useState(false);
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
        title={'Notifications'}
      />
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'column' },
          dimensions.width
        )}
      >
        <KSwitchBlock
          subtitle={'I want to receive push notifications'}
          title={'Push Notifications'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PushNotificationsScreen);
