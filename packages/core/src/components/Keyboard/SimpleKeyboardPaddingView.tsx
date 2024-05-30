import React, { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { useKeyboardHeight } from "../../hooks/useKeyboardHeight";
import { ViewStyle } from "react-native";

type SimpleKeyboardPaddingViewProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};
export const SimpleKeyboardPaddingView: React.FC<
  SimpleKeyboardPaddingViewProps
> = (props) => {
  const { children, style } = props;
  const keyboardHeight = useKeyboardHeight();
  const paddingBottom = useSharedValue(0);

  useEffect(() => {
    paddingBottom.value = withTiming(keyboardHeight, { duration: 300 });
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardHeight]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      paddingBottom: paddingBottom.value,
    };
  });

  return (
    <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
  );
};
