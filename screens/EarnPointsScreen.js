import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as BackendApi from '../apis/BackendApi.js';
import NavPillsBlock from '../components/NavPillsBlock';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { Button, Link, ScreenContainer, VStack, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';

const EarnPointsScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const backendCreateUserProfilePOST = BackendApi.useCreateUserProfilePOST();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      hasTopSafeArea={true}
      style={StyleSheet.applyWidth(
        { alignContent: 'flex-start' },
        dimensions.width
      )}
    >
      {/* Screen container */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'stretch',
            alignSelf: 'auto',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 12,
            paddingBottom: 40,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 16,
          },
          dimensions.width
        )}
      >
        {/* Header */}
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            GlobalStyles.VStackStyles(theme)['V Stack'].style,
            dimensions.width
          )}
        >
          <Link
            accessible={true}
            onPress={() => {
              const handler = async () => {
                try {
                  (await backendCreateUserProfilePOST.mutateAsync())?.json;
                  if (navigation.canGoBack()) {
                    navigation.popToTop();
                  }
                  navigation.replace('AppTabNavigator', {
                    screen: 'HomeScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            {...GlobalStyles.LinkStyles(theme)['Link'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.LinkStyles(theme)['Link'].style, {
                alignSelf: 'flex-end',
                color: theme.colors['Typography Color'],
                fontFamily: 'Raleway_400Regular',
                textDecorationLine: 'underline',
              }),
              dimensions.width
            )}
            title={'SKIP'}
          />
          {/* screen title */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'center',
                color: theme.colors['Typography Color'],
                fontFamily: 'Raleway_700Bold',
                fontSize: 24,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'Take steps to earn \npoints. '}
          </Text>
        </VStack>
        {/* Footer */}
        <VStack
          {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.VStackStyles(theme)['V Stack'].style,
              {
                alignItems: 'center',
                borderRadius: 6,
                justifyContent: 'flex-end',
              }
            ),
            dimensions.width
          )}
        >
          {/* screen subtitle */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'stretch',
                color: 'rgb(52, 52, 52)',
                fontFamily: 'Raleway_500Medium',
                fontSize: 16,
                lineHeight: 19,
                marginBottom: 8,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {'We track your fitness and reward Kali points'}
          </Text>
          {/* screen description */}
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                alignSelf: 'stretch',
                color: 'rgb(52, 52, 52)',
                fontFamily: 'Raleway_300Light',
                fontSize: 16,
                textAlign: 'center',
              }),
              dimensions.width
            )}
          >
            {"For each step you take, you'll earn 1 Kali point."}
          </Text>
          <NavPillsBlock pillsCount={3} selectedPillIndex={0} />
          {/* Next Screen action */}
          <Button
            onPress={() => {
              const handler = async () => {
                try {
                  (await backendCreateUserProfilePOST.mutateAsync())?.json;
                  navigation.push('OnboardingNavigator', {
                    screen: 'RedeemPointsScreen',
                  });
                } catch (err) {
                  console.error(err);
                }
              };
              handler();
            }}
            {...GlobalStyles.ButtonStyles(theme)['Button'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.ButtonStyles(theme)['Button'].style,
                {
                  backgroundColor: 'rgb(38, 38, 38)',
                  borderRadius: 31,
                  fontFamily: 'Rubik_600SemiBold',
                  padding: 20,
                  width: '100%',
                }
              ),
              dimensions.width
            )}
            title={'Next'}
          />
        </VStack>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(EarnPointsScreen);
