import * as SplashScreen from "expo-splash-screen";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { LogBox } from "react-native";
import { AppState } from "react-native";
import { useFonts } from "expo-font";
import Fonts from "../config/fonts";
import KaliTheme from "../themes/kali";
import cacheAssetsAsync from "../config/cacheAssetsAsync";
import { ThemeProvider } from "@kali-ui/core/theming";

import { Stack } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [areAssetsCached, setAreAssetsCached] = useState(false);

  const colorScheme = useColorScheme();

  const [fontsLoaded] = useFonts({
    DMSans_500Medium: Fonts.DMSans_500Medium,
    DMSans_400Regular: Fonts.DMSans_400Regular,
    Inter_600SemiBold: Fonts.Inter_600SemiBold,
    Raleway_600SemiBold: Fonts.Raleway_600SemiBold,
    Raleway_700Bold: Fonts.Raleway_700Bold,
    Raleway_500Medium: Fonts.Raleway_500Medium,
    Raleway_400Regular: Fonts.Raleway_400Regular,
    Raleway_300Light: Fonts.Raleway_300Light,
    Rubik_600SemiBold: Fonts.Rubik_600SemiBold,
  });

  const appState = useRef(AppState.currentState);

  const handleAppStateChange = (nextAppState: any) => {
    if (
      appState?.current?.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      // reset any badges once the user re-enters the app
      //Notifications.setBadgeCountAsync(0);
    }
    // always update the current app state
    appState.current = nextAppState;
  };

  useEffect(() => {
    LogBox.ignoreAllLogs(true);

    const appStateSubscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      appStateSubscription.remove();
    };
  }, []);

  useEffect(() => {
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

  useEffect(() => {
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

  const onLayoutRootView = useCallback(async () => {
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
      <ThemeProvider theme={KaliTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              // Hide the header for all other routes.
              headerShown: false,
            }}
          />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
