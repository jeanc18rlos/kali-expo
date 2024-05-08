import React from "react";
import ProductCardBlock from "./ProductCard";
import * as StyleSheet from "../utils/StyleSheet";
import useWindowDimensions from "../utils/useWindowDimensions";
import { HStack, Icon, Link, VStack, withTheme } from "@draftbit/ui";
import { FlatList, Text, View } from "react-native";
import { TextStyles } from "./Typography.stylesheet";

const ProductsListBlock = (props: {
  title?: string;
  subtitle?: string;
  allLabel?: string;
  products?: any[];
  theme: KaliThemeType;
}) => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <View>
      {/* Product List Header */}
      <HStack
        style={{
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        {/* Product List Info */}
        <VStack>
          {/* Product List Title */}
          <Text
            accessible={true}
            style={[
              TextStyles(theme)["Headline4"].style,
              TextStyles(theme)["Text"].style,
            ]}
          >
            {props.title ?? "Products"}
          </Text>
          {/* Product List Subtitle */}
          <Text
            accessible={true}
            style={[
              TextStyles(theme)["Body"].style,
              TextStyles(theme)["Text"].style,
            ]}
          >
            {props.subtitle ?? "Description"}
          </Text>
        </VStack>
        {/* All Products Link */}
        <HStack>
          {/* All Products Link */}
          <Link
            style={[
              TextStyles(theme)["Headline6"].style,
              TextStyles(theme)["Text"].style,
            ]}
            title={`${props.allLabel ?? "See all"} `}
          />
          {/* All Products Icon */}
          <Icon
            size={24}
            color={theme.colors["body_text"]}
            name={"Entypo/chevron-right"}
          />
        </HStack>
      </HStack>
      {/* Products */}
      <FlatList
        style={{
          marginTop: 16,
          marginLeft: -16,
          marginRight: -16,
          width: dimensions.width,
        }}
        data={props.products ?? []}
        inverted={false}
        keyExtractor={(productsData, index) =>
          productsData?.id ?? productsData?.uuid ?? index.toString()
        }
        keyboardShouldPersistTaps={"never"}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => {
          const productsData = item;
          return (
            <View
              style={StyleSheet.applyWidth(
                {
                  marginLeft: index === 0 ? 16 : 4,
                  marginRight:
                    props.products && props.products?.length - 1 ? 16 : 4,
                },
                dimensions.width
              )}
            >
              <ProductCardBlock
                description={productsData?.description}
                founder={productsData?.founder}
                image={productsData?.image}
                price={productsData?.price}
                title={productsData?.title}
              />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={StyleSheet.applyWidth(
          { marginLeft: 0 },
          dimensions.width
        )}
        horizontal={true}
      />
    </View>
  );
};

export default withTheme(ProductsListBlock);
