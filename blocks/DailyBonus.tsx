import React, { useRef } from "react";
import { Icon } from "./icons/KIcon";
import {
  Button,
  HStack,
  LinearGradient,
  VStack,
  withTheme,
} from "@draftbit/ui";
import { Text, View } from "react-native";
import { LinearGradientStyles } from "../GlobalStyles";

const DailyBonusBarBlock = (props: { theme: KaliThemeType; onPress: any }) => {
  const { theme } = props;

  return (
    <>
      <View
        style={{
          borderRadius: 16,
          flexDirection: "row",
          overflow: "hidden",
          position: "relative",
          width: "100%",
        }}
      >
        <LinearGradient
          endX={100}
          endY={100}
          startX={0}
          startY={0}
          color1={theme.colors["gradient-color-4"]}
          color2={theme.colors["gradient-color-5"]}
          color3={theme.colors["gradient-color-4"]}
          style={[
            LinearGradientStyles(theme)["Linear Gradient"].style,
            {
              height: "100%",
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%",
              borderRadius: 8,
            },
          ]}
        />
        <View
          style={{
            paddingVertical: 16,
            paddingHorizontal: 16,
            flexDirection: "row",
            justifyContent: "space-between",
            position: "relative",
            alignItems: "center",
            width: "100%",
          }}
        >
          <HStack style={{ gap: 8, alignItems: "center" }}>
            <Icon />

            <VStack>
              {/* Daily bonus */}
              <Text
                accessible={true}
                style={{
                  color: "rgb(255, 255, 255)",
                  fontFamily: "Raleway_700Bold",
                }}
              >
                {"D A I L Y   B O N U S"}
              </Text>
              {/* Description */}
              <Text
                accessible={true}
                style={{
                  color: "rgb(255, 255, 255)",
                  fontFamily: "Raleway_400Regular",
                }}
              >
                {"Claim rewards!"}
              </Text>
            </VStack>
          </HStack>
          <Button
            icon={"AntDesign/caretright"}
            onPress={props.onPress}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.39)",
              color: "rgb(255, 255, 255)",
              fontFamily: "Raleway_700Bold",
              fontSize: 12,
              borderRadius: 16,
              padding: 8,
              width: 90,
            }}
            title={"Claim"}
          />
        </View>
      </View>
    </>
  );
};

export default withTheme(DailyBonusBarBlock);
