import { FlatList, useWindowDimensions, View } from "react-native";
import DealBlock from "./DealBlock";
import { withTheme } from "@draftbit/ui";

export default withTheme((props: { deals?: any[]; theme: KaliThemeType }) => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <FlatList
      style={{
        marginLeft: -16,
        width: dimensions.width,
      }}
      data={props.deals ?? []}
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
        console.log("productsData", productsData.image)
        return (
          <View
            style={{
              marginLeft: index === 0 ? 16 : 0,
              marginRight: 0,
              width: dimensions.width - 16,
            }}
          >
            <DealBlock
              theme={theme}
              image={productsData?.image}
              title={productsData?.title}
              description={productsData?.description}
            />
          </View>
        );
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={true}
    />
  );
});
