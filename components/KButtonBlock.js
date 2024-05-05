import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';

const KButtonBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const getVariant = (variant, field) => {
    const primary = {
      text_color: '#FFFFFF',
      background_color: '#262626',
      border_color: '#262626',
    };

    const secondary = {
      text_color: '#262626',
      background_color: '#FFFFFF',
      border_color: '#525252',
    };

    if (variant === 'primary') {
      return primary[field];
    } else if (variant === 'secondary') {
      return secondary[field];
    } else {
      return '#FFF';
    }
  };

  return (
    <Button
      onPress={() => {
        try {
          navigation.navigate('OnboardingNavigator', {
            screen: 'ConnectStepTrackerScreen',
          });
        } catch (err) {
          console.error(err);
        }
      }}
      {...GlobalStyles.ButtonStyles(theme)['Button'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.ButtonStyles(theme)['Button'].style, {
          backgroundColor: [
            { minWidth: Breakpoints.Mobile, value: null },
            {
              minWidth: Breakpoints.Mobile,
              value: getVariant(props.variant ?? 'primary', 'background_color'),
            },
          ],
          borderColor: [
            { minWidth: Breakpoints.Mobile, value: 'rgb(255, 255, 255)' },
            {
              minWidth: Breakpoints.Mobile,
              value: getVariant(props.variant ?? 'primary', 'border_color'),
            },
          ],
          borderRadius: 59,
          borderWidth: 1,
          color: [
            { minWidth: Breakpoints.Mobile, value: 'rgb(255, 255, 255)' },
            {
              minWidth: Breakpoints.Mobile,
              value: getVariant(props.variant ?? 'primary', 'text_color'),
            },
          ],
          fontFamily: 'Raleway_600SemiBold',
          fontSize: 16,
          height: 64,
          padding: 16,
        }),
        dimensions.width
      )}
      title={props.text ?? ''}
    />
  );
};

export default withTheme(KButtonBlock);
