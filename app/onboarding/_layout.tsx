import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack
      initialRouteName="steps"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: "transparent",
        },
      }}
    >
      <Stack.Screen name="steps" />
      <Stack.Screen name="points" />
      <Stack.Screen name="consistency" />
      <Stack.Screen name="track" />
      <Stack.Screen name="goal" />
      <Stack.Screen name="name" />
      <Stack.Screen name="notifications" />
    </Stack>
  );
}
