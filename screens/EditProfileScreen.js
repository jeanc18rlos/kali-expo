import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import openImagePickerUtil from '../utils/openImagePicker';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  Button,
  DatePicker,
  HStack,
  IconButton,
  NumberInput,
  Pressable,
  ScreenContainer,
  SimpleStyleScrollView,
  TextInput,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';

const EditProfileScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');
  const [date, setDate] = React.useState(new Date());

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={true}
      hasSafeArea={true}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        { alignItems: 'stretch', gap: 0 },
        dimensions.width
      )}
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
        {/* Go back Wrapper */}
        <View>
          {/* Go back Button */}
          <IconButton
            onPress={() => {
              try {
                navigation.push('AppTabNavigator', {
                  screen: 'ProfileNavigator',
                  params: { screen: 'MyProfileScreen' },
                });
              } catch (err) {
                console.error(err);
              }
            }}
            color={theme.colors['Custom Color_2']}
            icon={'AntDesign/left'}
            size={24}
          />
        </View>

        <Text
          accessible={true}
          {...GlobalStyles.TextStyles(theme)['Text'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
              alignSelf: 'center',
              color: 'rgb(32, 32, 32)',
              fontFamily: 'Raleway_600SemiBold',
              fontSize: 16,
              lineHeight: 24,
            }),
            dimensions.width
          )}
        >
          {'EDIT PROFILE'}
        </Text>
        <Button
          onPress={() => {
            try {
              /* 'Set Variable' action requires configuration: choose a variable */
            } catch (err) {
              console.error(err);
            }
          }}
          {...GlobalStyles.ButtonStyles(theme)['Button'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.ButtonStyles(theme)['Button'].style,
              {
                backgroundColor: '"rgb(240, 240, 240)"',
                borderRadius: 31,
                color: 'rgb(48, 48, 48)',
                fontFamily: 'Raleway_600SemiBold',
                fontSize: 16,
                lineHeight: 24,
              }
            ),
            dimensions.width
          )}
          title={'Save'}
        />
      </View>

      <View
        style={StyleSheet.applyWidth(
          { flexDirection: 'column', padding: 16, width: '100%' },
          dimensions.width
        )}
      >
        {/* User Profile Image */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'flex-end',
              flexDirection: 'row',
              justifyContent: 'center',
            },
            dimensions.width
          )}
        >
          <HStack
            {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.HStackStyles(theme)['H Stack'].style,
                { alignItems: 'flex-end' }
              ),
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              {...GlobalStyles.ImageStyles(theme)['Image'].props}
              source={Images._05085df9d96576a4befeecdef14e79a4}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ImageStyles(theme)['Image'].style,
                  { borderRadius: 96, height: 96, width: 96 }
                ),
                dimensions.width
              )}
            />
            <Pressable
              onPress={() => {
                const handler = async () => {
                  try {
                    await openImagePickerUtil({
                      mediaTypes: 'Images',
                      allowsEditing: true,
                      quality: 0.2,
                      allowsMultipleSelection: false,
                      permissionErrorMessage:
                        'Sorry, we need media library permissions to make this work.',
                      showAlertOnPermissionError: true,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                };
                handler();
              }}
            >
              {/* Close Wrapper */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: theme.colors['Custom Color_4'],
                    borderRadius: 20,
                    flexDirection: 'column',
                    paddingBottom: 8,
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
              >
                {/* Edit Button */}
                <IconButton
                  onPress={() => {
                    try {
                      navigation.navigate('AuthNavigator', {
                        screen: 'WelcomeScreen',
                      });
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  color={'#202020'}
                  icon={'Entypo/camera'}
                  size={24}
                  style={StyleSheet.applyWidth(
                    { opacity: 0.96 },
                    dimensions.width
                  )}
                />
              </View>
            </Pressable>
          </HStack>
        </View>
      </View>

      <SimpleStyleScrollView
        nestedScrollEnabled={false}
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        pagingEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { paddingLeft: 16, paddingRight: 16, width: '100%' },
          dimensions.width
        )}
      >
        {/* View 2 */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'stretch', gap: 24, padding: 16 },
            dimensions.width
          )}
        >
          {/* Name */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'stretch', gap: 8 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'stretch',
                    color: 'rgb(60, 60, 60)',
                    fontFamily: 'Raleway_500Medium',
                    letterSpacing: 0.14,
                  }
                ),
                dimensions.width
              )}
            >
              {'Name'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Name'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(93, 93, 93)',
                    borderRadius: 16,
                    color: 'rgb(148, 148, 148)',
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Last Name */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'stretch', gap: 8 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'stretch',
                    color: 'rgb(60, 60, 60)',
                    fontFamily: 'Raleway_500Medium',
                    letterSpacing: 0.14,
                  }
                ),
                dimensions.width
              )}
            >
              {'Last Name'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Last Name'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(93, 93, 93)',
                    borderRadius: 16,
                    color: 'rgb(148, 148, 148)',
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Bio */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'stretch', gap: 8 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'stretch',
                    color: 'rgb(60, 60, 60)',
                    fontFamily: 'Raleway_500Medium',
                    letterSpacing: 0.14,
                  }
                ),
                dimensions.width
              )}
            >
              {'Bio'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Bio'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(93, 93, 93)',
                    borderRadius: 16,
                    color: 'rgb(148, 148, 148)',
                    height: 82,
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Mail */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'stretch', gap: 8 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'stretch',
                    color: 'rgb(60, 60, 60)',
                    fontFamily: 'Raleway_500Medium',
                    letterSpacing: 0.14,
                  }
                ),
                dimensions.width
              )}
            >
              {'Mail'}
            </Text>
            <TextInput
              autoCapitalize={'none'}
              autoCorrect={true}
              changeTextDelay={500}
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.TextInputStyles(theme)['Text Input'].props}
              placeholder={'Email'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextInputStyles(theme)['Text Input'].style,
                  {
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(93, 93, 93)',
                    borderRadius: 16,
                    color: 'rgb(148, 148, 148)',
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  }
                ),
                dimensions.width
              )}
              value={textInputValue}
            />
          </View>
          {/* Phone Number */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'stretch', gap: 8 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'stretch',
                    color: 'rgb(60, 60, 60)',
                    fontFamily: 'Raleway_500Medium',
                    letterSpacing: 0.14,
                  }
                ),
                dimensions.width
              )}
            >
              {'Phone Number'}
            </Text>
            <NumberInput
              changeTextDelay={500}
              onChangeText={newNumberInputValue => {
                const numberInputValue = newNumberInputValue;
                try {
                  setNumberInputValue(newNumberInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              webShowOutline={true}
              {...GlobalStyles.NumberInputStyles(theme)['Number Input'].props}
              keyboardType={'number-pad'}
              placeholder={'Enter a phone number...'}
              returnKeyType={'next'}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.NumberInputStyles(theme)['Number Input'].style,
                  {
                    borderColor: 'rgb(93, 93, 93)',
                    borderRadius: 16,
                    color: 'rgb(148, 148, 148)',
                    fontFamily: 'Raleway_400Regular',
                    paddingBottom: 16,
                    paddingLeft: 16,
                    paddingRight: 16,
                    paddingTop: 16,
                  }
                ),
                dimensions.width
              )}
              value={numberInputValue}
            />
          </View>
          {/* Birthday */}
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'stretch', gap: 8 },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    alignSelf: 'stretch',
                    color: 'rgb(60, 60, 60)',
                    fontFamily: 'Raleway_500Medium',
                    letterSpacing: 0.14,
                  }
                ),
                dimensions.width
              )}
            >
              {'Birthday'}
            </Text>
            <DatePicker
              disabled={false}
              label={'Date'}
              leftIconMode={'inset'}
              onDateChange={newDatePickerValue => {
                const date = newDatePickerValue;
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              assistiveText={'mm/dd/yyyy '}
              autoDismissKeyboard={true}
              borderColorActive={theme.colors['Custom Color']}
              date={datePickerValue}
              hideLabel={true}
              maximumDate={'12/31/2006'}
              mode={'date'}
              style={StyleSheet.applyWidth(
                {
                  borderColor: 'rgb(93, 93, 93)',
                  borderRadius: 16,
                  color: 'rgb(31, 41, 55)',
                  fontFamily: 'Raleway_400Regular',
                },
                dimensions.width
              )}
              type={'solid'}
            />
          </View>
        </View>
      </SimpleStyleScrollView>
    </ScreenContainer>
  );
};

export default withTheme(EditProfileScreen);
