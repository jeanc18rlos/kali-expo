import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { withTheme } from '@draftbit/ui';
import { Text } from 'react-native';

const KTypographyTitleBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const validateEmail = email => {
    const errors = [];
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (Boolean(email.trim())) {
      if (!emailRegex.test(email)) {
        errors.push('Invalid email');
      }
    } else {
      errors.push('Email cannot be empty');
    }

    return errors;
  };

  return (
    <Text
      accessible={true}
      style={StyleSheet.applyWidth(
        {
          color: theme.colors.strong,
          fontFamily: 'Raleway_700Bold',
          fontSize: 24,
          textAlign: 'center',
          typography: theme.typography.headline4,
        },
        dimensions.width
      )}
    >
      {props.title ?? null}
    </Text>
  );
};

export default withTheme(KTypographyTitleBlock);
