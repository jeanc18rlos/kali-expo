import React from 'react';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import mergeState from '../global-functions/mergeState';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { TextInput, withTheme } from '@draftbit/ui';

const KEmailInputBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [emailFieldValue, setEmailFieldValue] = React.useState('');
  const [errors, setErrors] = React.useState({});
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
    <TextInput
      autoCapitalize={'none'}
      autoCorrect={true}
      changeTextDelay={500}
      onChangeText={newEmailFieldValue => {
        try {
          const valueuDtmQYLG = newEmailFieldValue;
          setEmailFieldValue(valueuDtmQYLG);
          const savedEmail = valueuDtmQYLG;
          const emailValidationResult = validateEmail(savedEmail);
          const mergedState = mergeState(
            errors,
            'email',
            emailValidationResult
          );
          setErrors(mergedState);
        } catch (err) {
          console.error(err);
        }
      }}
      webShowOutline={true}
      placeholder={'Email'}
      placeholderTextColor={theme.colors['Light']}
      style={StyleSheet.applyWidth(
        {
          borderBottomWidth: 1,
          borderColor: theme.colors['Custom Color'],
          borderLeftWidth: 1,
          borderRadius: 16,
          borderRightWidth: 1,
          borderTopWidth: 1,
          borderWidth: 1,
          color: theme.colors['Input Color'],
          fontFamily: 'Raleway_500Medium',
          height: 56,
          marginBottom: 16,
          paddingBottom: 0,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 0,
          width: '100%',
        },
        dimensions.width
      )}
      value={emailFieldValue}
    />
  );
};

export default withTheme(KEmailInputBlock);
