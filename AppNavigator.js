import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/Draftbit.js';
import LinkingConfiguration from './LinkingConfiguration.js';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';
import Breakpoints from './utils/Breakpoints';
import useWindowDimensions from './utils/useWindowDimensions';

import AllowNotificationsScreen from './screens/AllowNotificationsScreen';
import AuthenticateScreen from './screens/AuthenticateScreen';
import BrandHomeScreen from './screens/BrandHomeScreen';
import BrandProfileScreen from './screens/BrandProfileScreen';
import ConnectStepTrackerScreen from './screens/ConnectStepTrackerScreen';
import ContinueWithEmailScreen from './screens/ContinueWithEmailScreen';
import DeleteAcountScreen from './screens/DeleteAcountScreen';
import EarnPointsScreen from './screens/EarnPointsScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import KeepConsistencyScreen from './screens/KeepConsistencyScreen';
import MyActivityScreen from './screens/MyActivityScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import ProductScreen from './screens/ProductScreen';
import PushNotificationsScreen from './screens/PushNotificationsScreen';
import RedeemPointsScreen from './screens/RedeemPointsScreen';
import SetDailyGoalScreen from './screens/SetDailyGoalScreen';
import SetFirstNameScreen from './screens/SetFirstNameScreen';
import SettingsScreen from './screens/SettingsScreen';
import ShopHomeScreen from './screens/ShopHomeScreen';
import ShopSearchScreen from './screens/ShopSearchScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import UpdateActivityScreen from './screens/UpdateActivityScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function ActivityNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
      })}
    >
      <Stack.Screen
        name="MyActivityScreen"
        component={MyActivityScreen}
        options={({ navigation }) => ({
          title: 'My activity',
        })}
      />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
      })}
    >
      <Stack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={({ navigation }) => ({
          title: 'My Profile',
        })}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({ navigation }) => ({
          title: 'Settings',
        })}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={({ navigation }) => ({
          title: 'Edit profile',
        })}
      />
      <Stack.Screen
        name="PushNotificationsScreen"
        component={PushNotificationsScreen}
        options={({ navigation }) => ({
          title: 'Push notifications',
        })}
      />
      <Stack.Screen
        name="DeleteAcountScreen"
        component={DeleteAcountScreen}
        options={({ navigation }) => ({
          title: 'Delete acount',
        })}
      />
      <Stack.Screen
        name="UpdateActivityScreen"
        component={UpdateActivityScreen}
        options={({ navigation }) => ({
          title: 'Update activity',
        })}
      />
    </Stack.Navigator>
  );
}

function ShopNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
      })}
    >
      <Stack.Screen
        name="ShopHomeScreen"
        component={ShopHomeScreen}
        options={({ navigation }) => ({
          title: 'Shop home',
        })}
      />
      <Stack.Screen
        name="ShopSearchScreen"
        component={ShopSearchScreen}
        options={({ navigation }) => ({
          title: 'Shop search',
        })}
      />
      <Stack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={({ navigation }) => ({
          title: 'Favorites',
        })}
      />
      <Stack.Screen
        name="BrandHomeScreen"
        component={BrandHomeScreen}
        options={({ navigation }) => ({
          title: 'Brand home',
        })}
      />
      <Stack.Screen
        name="BrandProfileScreen"
        component={BrandProfileScreen}
        options={({ navigation }) => ({
          title: 'Brand profile',
        })}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={({ navigation }) => ({
          title: 'Product',
        })}
      />
    </Stack.Navigator>
  );
}

function AppTabNavigator() {
  const tabBarIcons = {
    HomeScreen: 'Foundation/home',
    ActivityNavigator: 'MaterialCommunityIcons/shoe-print',
    ShopNavigator: 'Entypo/shopping-bag',
    ProfileNavigator: 'Ionicons/person',
  };

  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
        headerShown: false,
        tabBarActiveTintColor: theme.colors['Custom Color_16'],
        tabBarInactiveTintColor: theme.colors['Custom Color_15'],
        tabBarLabelStyle: { fontFamily: 'Inter_600SemiBold', fontSize: 13 },
        tabBarStyle: { borderTopColor: 'transparent' },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Foundation/home"
              size={25}
              color={
                focused
                  ? theme.colors['Custom Color_16']
                  : theme.colors['Custom Color_15']
              }
            />
          ),
          tabBarLabel: ' Home',
          title: 'Home',
        })}
      />
      <Tab.Screen
        name="ActivityNavigator"
        component={ActivityNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="MaterialCommunityIcons/shoe-print"
              size={25}
              color={
                focused
                  ? theme.colors['Custom Color_16']
                  : theme.colors['Custom Color_15']
              }
            />
          ),
          tabBarLabel: 'Activity ',
          title: 'Activity Navigator',
        })}
      />
      <Tab.Screen
        name="ShopNavigator"
        component={ShopNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Entypo/shopping-bag"
              size={25}
              color={
                focused
                  ? theme.colors['Custom Color_16']
                  : theme.colors['Custom Color_15']
              }
            />
          ),
          tabBarLabel: ' Shop',
          title: 'Shop Navigator',
        })}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ focused, color }) => (
            <Icon
              name="Ionicons/person"
              size={25}
              color={
                focused
                  ? theme.colors['Custom Color_16']
                  : theme.colors['Custom Color_15']
              }
            />
          ),
          tabBarLabel: 'Profile ',
          title: 'Profile Navigator',
        })}
      />
    </Tab.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="WelcomeScreen"
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
      })}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Welcome',
        })}
      />
      <Stack.Screen
        name="AuthenticateScreen"
        component={AuthenticateScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Authenticate',
        })}
      />
      <Stack.Screen
        name="ContinueWithEmailScreen"
        component={ContinueWithEmailScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Continue with email',
        })}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Sign in',
        })}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Sign up',
        })}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Forgot Password',
        })}
      />
    </Stack.Navigator>
  );
}

function OnboardingNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerBackImage:
          Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
      })}
    >
      <Stack.Screen
        name="EarnPointsScreen"
        component={EarnPointsScreen}
        options={({ navigation }) => ({
          headerShown: false,
          title: 'Earn points',
        })}
      />
      <Stack.Screen
        name="RedeemPointsScreen"
        component={RedeemPointsScreen}
        options={({ navigation }) => ({
          title: 'Redeem points',
        })}
      />
      <Stack.Screen
        name="KeepConsistencyScreen"
        component={KeepConsistencyScreen}
        options={({ navigation }) => ({
          title: 'Keep consistency',
        })}
      />
      <Stack.Screen
        name="ConnectStepTrackerScreen"
        component={ConnectStepTrackerScreen}
        options={({ navigation }) => ({
          title: 'Connect step tracker',
        })}
      />
      <Stack.Screen
        name="SetDailyGoalScreen"
        component={SetDailyGoalScreen}
        options={({ navigation }) => ({
          title: 'Set daily goal',
        })}
      />
      <Stack.Screen
        name="SetFirstNameScreen"
        component={SetFirstNameScreen}
        options={({ navigation }) => ({
          title: 'Set first name',
        })}
      />
      <Stack.Screen
        name="AllowNotificationsScreen"
        component={AllowNotificationsScreen}
        options={({ navigation }) => ({
          title: 'Allow notifications',
        })}
      />
    </Stack.Navigator>
  );
}

export default function RootAppNavigator() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: '#ffffffff',
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="AuthNavigator"
        screenOptions={({ navigation }) => ({
          headerBackImage:
            Platform.OS === 'android' ? DefaultAndroidBackIcon : null,
          headerShown: false,
        })}
      >
        <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen
          name="OnboardingNavigator"
          component={OnboardingNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
