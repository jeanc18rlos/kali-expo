import React from "react";
import * as StyleSheet from "../utils/StyleSheet";
import { IconButton, Pressable, VStack, withTheme } from "@draftbit/ui";
import { Image, Text, View } from "react-native";
import { TextStyles } from "./Typography.stylesheet";

const ProductCardBlock = (props: {
  image?: string;
  title?: string;
  description?: string;
  price?: number;
  founder?: string;
  IsFavorite?: boolean;
  onPressFavorite?: () => void;
  theme: KaliThemeType;
  onPress?: () => void;
}) => {
  const { theme } = props;

  return (
    <View
      style={{
        borderColor: theme.colors.tertiary,
        borderRadius: 16,
        borderWidth: 1,
        height: 265,
        overflow: "hidden",
        width: 170,
        padding: 4,
        paddingTop: 0,
      }}
    >
      <Pressable
        onPress={props.onPress}
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Product Image */}
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
            borderColor: theme.colors.tertiary,
            height: 137,
            width: 170,
            marginBottom: 8,
          }}
        />
        <VStack
          style={{
            alignItems: "center",
            justifyContent: "space-between",
            height: 114,
          }}
        >
          <VStack
            style={{
              alignItems: "center",
            }}
          >
            {/* Product Title */}
            <Text
              accessible={true}
              ellipsizeMode={"tail"}
              numberOfLines={1}
              style={[
                StyleSheet.compose(
                  TextStyles(theme)["Text"].style,
                  TextStyles(theme)["Headline6"].style
                ),
              ]}
            >
              {props.title ?? "title"}
            </Text>
            {/* Product Description */}
            <Text
              accessible={true}
              ellipsizeMode={"tail"}
              numberOfLines={2}
              style={[
                StyleSheet.compose(
                  TextStyles(theme)["Text"].style,
                  TextStyles(theme)["Caption"].style
                ),
              ]}
            >
              {props.description ?? "Description"}
            </Text>
          </VStack>

          <VStack
            style={{
              alignItems: "center",
            }}
          >
            {/* Product Price */}
            <Text
              accessible={true}
              style={[
                StyleSheet.compose(
                  TextStyles(theme)["Text"].style,
                  TextStyles(theme)["Headline6"].style
                ),
              ]}
            >
              {props.price ?? 3.9}
              {"$"}
            </Text>
            {/* Product Founder */}

            <Text
              accessible={true}
              ellipsizeMode={"tail"}
              numberOfLines={1}
              style={[
                TextStyles(theme)["Text"].style,
                TextStyles(theme)["Caption"].style,
              ]}
            >
              {props.founder ?? "Founder"}
            </Text>
          </VStack>
        </VStack>
        <IconButton
          onPress={props.onPressFavorite}
          color={props.IsFavorite ? theme.colors.error : theme.colors.tertiary}
          icon={"AntDesign/heart"}
          size={24}
          style={{ position: "absolute", right: 8, top: 8 }}
        />
      </Pressable>
    </View>
  );
};

export default withTheme(ProductCardBlock);
