import { Stack } from "expo-router";
import { KaliAppHeader } from "@kali-app/components/layout/KaliAppHeader";

export default function Layout() {
  return (
    <Stack
      initialRouteName="providers"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "transparent",
        },

        header: (props) => <KaliAppHeader />,

        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="providers" />
      <Stack.Screen name="email" />
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
      <Stack.Screen name="recovery" />
      <Stack.Screen name="reset" />
    </Stack>
  );
}
