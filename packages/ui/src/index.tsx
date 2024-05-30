import "./polyfillReanimatedWorkletInit";
import { Icon as NativeIcon } from "@kali/native";
export { LinearGradient } from "@kali/native";
export { Icon } from "@kali/native";

export {
  flattenReactFragments,
  useDeepCompareEffect,
  useDeepCompareMemo,
  Avatar,
  Center,
  Circle,
  DefaultTheme,
  Provider,
  ScreenContainer,
  Spacer,
  Square,
  ThemeProvider,
  withTheme,
  TextInput,
  AspectRatio,
  HStack,
  VStack,
  ZStack,
  KeyboardAvoidingView,
  SimpleStyleFlashList,
  SimpleStyleFlatList,
  SimpleStyleKeyboardAwareScrollView,
  SimpleStyleMasonryFlashList,
  SimpleStyleScrollView,
  SimpleStyleSectionList,
  SimpleStyleSwipeableList,
  emailValidationSchema,
  passwordValidationSchema,
  useYupValidationResolver,
  useKeyboardHeight,
  SimpleKeyboardPaddingView,
} from "@kali/core";

/**
 * Components with Injected Dependencies
 *
 * Inject a native module from `@kali/native` into these components for use
 * is snack / expo / react-native
 */

import {
  injectIcon,
  Button as BaseDeprecatedButton,
  IconButton as BaseIconButton,
} from "@kali/core";

export const Button = injectIcon(BaseDeprecatedButton, NativeIcon);

export const IconButton = injectIcon(BaseIconButton, NativeIcon);
