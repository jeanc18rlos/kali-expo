import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  Icon,
  IconButton,
  Pressable,
  ScreenContainer,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Modal, Text, View } from 'react-native';

const DeleteAcountScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [emailFieldValue, setEmailFieldValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [isPressed, setIsPressed] = React.useState(false);
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textAreaValue2, setTextAreaValue2] = React.useState('');
  const [textAreaValue3, setTextAreaValue3] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');
  const [textInputValue3, setTextInputValue3] = React.useState('');
  const [textInputValue4, setTextInputValue4] = React.useState('');
  const [visible, setVisible] = React.useState(false);

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
    >
      <Modal
        transparent={false}
        animationType={'slide'}
        presentationStyle={'pageSheet'}
      >
        {/* Header Wrapper */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 16,
            },
            dimensions.width
          )}
        >
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
            {/* Icon Button 2 */}
            <IconButton
              onPress={() => {
                try {
                  navigation.push('AppTabNavigator', {
                    screen: 'ProfileNavigator',
                    params: { screen: 'SettingsScreen' },
                  });
                } catch (err) {
                  console.error(err);
                }
              }}
              color={theme.colors['Custom Color_3']}
              icon={'AntDesign/close'}
              size={24}
            />
          </View>
        </View>
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 100, justifyContent: 'center', padding: 16 },
            dimensions.width
          )}
        >
          {/* View 2 */}
          <View
            style={StyleSheet.applyWidth(
              { paddingBottom: 8 },
              dimensions.width
            )}
          >
            {/* Close Wrapper */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: 'rgba(221, 48, 36, 0.1)',
                  borderRadius: 22,
                  height: 48,
                  justifyContent: 'center',
                  opacity: 1,
                  width: 48,
                },
                dimensions.width
              )}
            >
              <Icon
                size={24}
                color={theme.colors['Custom Color_32']}
                name={'Entypo/warning'}
                style={StyleSheet.applyWidth(
                  { backgroundColor: 'rgba(0, 0, 0, 0)' },
                  dimensions.width
                )}
              />
            </View>
          </View>

          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'flex-start',
                backgroundColor: 'rgba(37, 37, 37, 0.01)',
                gap: 16,
                paddingTop: 16,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  { fontFamily: 'Raleway_700Bold', fontSize: 24 }
                ),
                dimensions.width
              )}
            >
              {'Delete account'}
            </Text>
            {/* Text 2 */}
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: 'rgb(80, 80, 80)',
                    fontFamily: 'Raleway_500Medium',
                    lineHeight: 20,
                  }
                ),
                dimensions.width
              )}
            >
              {
                'It would be very helpful for us to understand why you are leaving. Your feedback is valuable in order to improve the experience for all our users.'
              }
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue4(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Tell us why'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    borderColor: 'rgb(93, 93, 93)',
                    borderRadius: 16,
                    color: 'rgb(148, 148, 148)',
                    fontFamily: 'Raleway_500Medium',
                    height: 213,
                    lineHeight: 20,
                    width: '100%',
                  }
                ),
                dimensions.width
              )}
              value={textInputValue4}
            />
          </View>
        </View>

        <View
          style={StyleSheet.applyWidth(
            {
              gap: 16,
              justifyContent: 'center',
              paddingLeft: 20,
              paddingRight: 20,
            },
            dimensions.width
          )}
        >
          <Button
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: 'rgb(229, 72, 77)',
                  borderRadius: 31,
                  fontFamily: 'Raleway_700Bold',
                  fontSize: 16,
                  height: 56,
                  lineHeight: 18,
                  paddingLeft: 20,
                  paddingRight: 20,
                }
              ),
              dimensions.width
            )}
            title={'Submit and delete'}
          />
          <Pressable>
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'center',
                    color: 'rgb(229, 72, 77)',
                    fontFamily: 'Raleway_700Bold',
                    fontSize: 16,
                    lineHeight: 18,
                    paddingBottom: 16,
                  }
                ),
                dimensions.width
              )}
            >
              {'Skip and delete'}
            </Text>
          </Pressable>
        </View>
      </Modal>
    </ScreenContainer>
  );
};

export default withTheme(DeleteAcountScreen);
