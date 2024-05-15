import React from "react";
import { VStack, withTheme } from "@draftbit/ui";
import { Image, Text, View } from "react-native";

const BrandCardBlock = (props: {
  name?: string;
  image?: string;
  theme: KaliThemeType;
}) => {
  return (
    <VStack
      style={{
        justifyContent: "space-between",
        alignItems: "center",
        height: 120,
      }}
    >
      {/* Brand Logo */}
      <Image
        resizeMode={"cover"}
        source={{
          uri: `${
            props.image ??
            "https://apps-draftbit-com.s3.amazonaws.com/apps/FbFlTGZm/assets/7VX9vJb51zMfZZlUIgJtd"
          }`,
        }}
        style={{
          borderBottomWidth: 1,
          borderColor: "rgb(0,0,0)",
          borderRadius: 75,
          height: 75,
          width: 75,
        }}
      />
      {/* Brand name */}
      <Text
        accessible={true}
        ellipsizeMode={"tail"}
        numberOfLines={2}
        style={{
          textAlign: "center",
          fontFamily: "Raleway_400Regular",
          marginTop: 8,
        }}
      >
        {props.name ?? "name"}
      </Text>
    </VStack>
  );
};

export default withTheme(BrandCardBlock);
