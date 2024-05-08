import { Stack } from "expo-router";
import KaliModalHeader from "../../blocks/KaliModalHeader";
export default function Layout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "transparent",
        },

        header: (props) => (
          <KaliModalHeader
            right_icon="CloseButton"
            right_button={true}
            left_button={Boolean(props.navigation.canGoBack())}
            left_icon="GoBackButton"
          />
        ),

        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="email" />
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
      <Stack.Screen name="recovery" />
      <Stack.Screen name="reset" />
    </Stack>
  );
}
