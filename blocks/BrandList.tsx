import React from "react";
import useWindowDimensions from "../utils/useWindowDimensions";
import { HStack, Icon, Link, VStack, withTheme } from "@draftbit/ui";
import { FlatList, Text, View } from "react-native";
import { TextStyles } from "./Typography.stylesheet";
import BrandCardBlock from "./BrandCardBlock";

const BrandsListBlock = (props: {
  title?: string;
  subtitle?: string;
  allLabel?: string;
  products?: any[];
  theme: KaliThemeType;
  brands?: any[];
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
          marginLeft: -16,
          marginRight: -16,
          marginTop: 16,
          width: dimensions.width,
        }}
        data={props.brands ?? []}
        inverted={false}
        keyExtractor={(listData, index) =>
          listData?.id ?? listData?.uuid ?? index.toString()
        }
        keyboardShouldPersistTaps={"never"}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => {
          const productsData = item;
          return (
            <View
              style={{
                marginLeft: index === 0 ? 16 : 4,
                marginRight: props.brands && props.brands?.length - 1 ? 16 : 4,
                width: 80,
              }}
            >
              <BrandCardBlock
                image={productsData?.image}
                name={productsData?.name}
              />
            </View>
          );
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal={true}
      />
    </View>
  );
};

export default withTheme(BrandsListBlock);
