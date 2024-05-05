import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { HStack, Switch, VStack, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const KSwitchBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [switchValue, setSwitchValue] = React.useState(false);

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          borderRadius: 12,
          flexDirection: 'column',
          gap: 6,
          margin: 12,
          paddingBottom: 16,
          paddingLeft: 12,
          paddingRight: 12,
          paddingTop: 16,
        },
        dimensions.width
      )}
    >
      <HStack
        {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.HStackStyles(theme)['H Stack'].style,
            {
              backgroundColor: theme.colors['Custom Color_31'],
              borderRadius: 12,
              gap: 8,
              justifyContent: 'space-between',
              paddingBottom: 16,
              paddingLeft: 12,
              paddingRight: 12,
              paddingTop: 16,
            }
          ),
          dimensions.width
        )}
      >
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              { gap: 8, width: '70%' }
            ),
            dimensions.width
          )}
        >
          {/* Push Notifications */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['HEADING-6'].props}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['HEADING-6'].style,
              dimensions.width
            )}
          >
            {props.title ?? null}
          </Text>
          {/* Description */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['BODY-SMALL'].props}
            adjustsFontSizeToFit={true}
            style={StyleSheet.applyWidth(
              GlobalStyles.TextStyles(theme)['BODY-SMALL'].style,
              dimensions.width
            )}
          >
            {props.subtitle ?? null}
            {'\n'}
          </Text>
        </VStack>
        <Switch
          onValueChange={newSwitchValue => {
            const switchValue = newSwitchValue;
            try {
              setSwitchValue(newSwitchValue);
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.SwitchStyles(theme)['switch'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.SwitchStyles(theme)['switch'].style,
            dimensions.width
          )}
          value={switchValue}
        />
      </HStack>
    </View>
  );
};

export default withTheme(KSwitchBlock);
