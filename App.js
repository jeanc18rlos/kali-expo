import * as React from 'react';
import * as Notifications from 'expo-notifications';
import * as SplashScreen from 'expo-splash-screen';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {
  View,
  Text,
  TextInput,
  ActivityIndicator,
  AppState,
} from 'react-native';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './AppNavigator';
import Draftbit from './themes/Draftbit.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import { useFonts } from 'expo-font';
import Fonts from './config/Fonts.js';
SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const queryClient = new QueryClient();

const App = () => {
  const [areAssetsCached, setAreAssetsCached] = React.useState(false);

  const [fontsLoaded] = useFonts({
    DMSans_500Medium: Fonts.DMSans_500Medium,
    DMSans_400Regular: Fonts.DMSans_400Regular,
    Inter_600SemiBold: Fonts.Inter_600SemiBold,
    Raleway_400Regular: Fonts.Raleway_400Regular,
    Raleway_500Medium: Fonts.Raleway_500Medium,
    Raleway_600SemiBold: Fonts.Raleway_600SemiBold,
    Raleway_700Bold: Fonts.Raleway_700Bold,
    Raleway_300Light: Fonts.Raleway_300Light,
    Rubik_600SemiBold: Fonts.Rubik_600SemiBold,
  });

  const appState = React.useRef(AppState.currentState);

  const handleAppStateChange = nextAppState => {
    if (
      appState?.current?.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
      // reset any badges once the user re-enters the app
      Notifications.setBadgeCountAsync(0);
    }
    // always update the current app state
    appState.current = nextAppState;
  };

  React.useEffect(() => {
    const appStateSubscription = AppState.addEventListener(
      'change',
      handleAppStateChange
    );

    return () => {
      appStateSubscription.remove();
    };
  }, []);

  React.useEffect(() => {
    async function prepare() {
      try {
        await cacheAssetsAsync();
      } catch (e) {
        console.warn(e);
      } finally {
        setAreAssetsCached(true);
      }
    }

    prepare();
  }, []);

  const isReady = areAssetsCached && fontsLoaded;
  const onLayoutRootView = React.useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <SafeAreaProvider
      initialMetrics={initialWindowMetrics}
      onLayout={onLayoutRootView}
    >
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={Draftbit}>
            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
