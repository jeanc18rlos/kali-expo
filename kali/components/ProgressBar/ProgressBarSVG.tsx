import React, { useEffect } from "react";
import { View } from "react-native";
import Svg, { Path, Defs, Stop, LinearGradient } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedProps,
  withTiming,
  Easing,
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const SemiCircleProgressBar = ({
  progress,
  radius,
  roated = false,
}: {
  progress: number;
  radius: number;
  roated?: boolean;
}) => {
  const animatedValue = useSharedValue(0);

  useEffect(() => {
    animatedValue.value = withTiming(progress, {
      duration: 500,
      easing: Easing.out(Easing.ease),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const animatedProps = useAnimatedProps(() => {
    const angle = Math.PI * animatedValue.value; // Angle is π times the progress
    const startX = radius + radius * Math.cos(angle); // Calculate X coordinate
    const startY = radius + radius * Math.sin(angle); // Calculate Y coordinate
    const largeArcFlag = animatedValue.value > 0.5 ? 1 : 0; // Only 0 or 1 based on angle

    // Define the path dynamically based on the animated value
    const path = `
        M ${radius} 0
        A ${radius} ${radius} 0 ${largeArcFlag} 1 ${startX} ${startY}
    `;

    return { d: path };
  });

  return (
    <View
      style={{
        justifyContent: "center",
        height: 160,
        alignItems: "center",
        width: 274,
      }}
    >
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${(radius + 10) * 2} ${radius * 2}`}
        style={{
          position: "absolute",
          top: roated ? -120 : 0,
          left: 0,
          transform: [{ rotate: roated ? "90deg" : "-90deg" }],
        }}
      >
        <Defs>
          <LinearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <Stop offset="0%" stopColor="#A8BA79" />

            <Stop offset="100%" stopColor="#BBE8C6" />
          </LinearGradient>
        </Defs>
        <Path
          d={`M ${radius} 0 A ${radius} ${radius} 0 0 1 ${radius} ${
            2 * radius
          }`}
          fill="none"
          stroke="#dbd4d1"
          strokeWidth={16}
          strokeLinecap="round"
        />
        <AnimatedPath
          animatedProps={animatedProps}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={10}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};
