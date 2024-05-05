import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { IconButton, withTheme } from '@draftbit/ui';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';

const KActionHeaderBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          backgroundColor: 'rgb(255, 255, 255)',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
        },
        dimensions.width
      )}
    >
      {/* Go back Wrapper */}
      <>
        {!(props.left_button ?? null) ? null : (
          <View>
            {/* Go back Button */}
            <IconButton
              onPress={() => {
                try {
                  navigation.goBack();
                } catch (err) {
                  console.error(err);
                }
              }}
              color={theme.colors['Custom Color_2']}
              icon={'AntDesign/left'}
              size={24}
            />
          </View>
        )}
      </>
      {/* H6 */}
      <Text
        accessible={true}
        {...GlobalStyles.TextStyles(theme)['HEADING-6'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.TextStyles(theme)['HEADING-6'].style,
          dimensions.width
        )}
      >
        {props.title ?? ''}
      </Text>
      {/* Close Wrapper */}
      <>
        {!(props.right_button ?? null) ? null : (
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                alignSelf: 'center',
                backgroundColor: theme.colors['Custom Color_4'],
                borderRadius: 22,
                height: 32,
                justifyContent: 'center',
                width: 32,
              },
              dimensions.width
            )}
          >
            {/* Edit Button */}
            <IconButton
              onPress={() => {
                try {
                  navigation.navigate('AppTabNavigator', {
                    screen: 'ProfileNavigator',
                    params: { screen: 'EditProfileScreen' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              color={'#202020'}
              icon={'MaterialCommunityIcons/pencil-outline'}
              size={24}
              style={StyleSheet.applyWidth({ opacity: 0.96 }, dimensions.width)}
            />
          </View>
        )}
      </>
    </View>
  );
};

export default withTheme(KActionHeaderBlock);
