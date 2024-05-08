import React from "react";
import * as StyleSheet from "../utils/StyleSheet";
import useWindowDimensions from "../utils/useWindowDimensions";
import { HStack, SimpleStyleFlatList, withTheme } from "@draftbit/ui";
import { View } from "react-native";
import { HStackStyles } from "./Layout.stylesheet";

const NavPillsBlock = (props: {
  pillsCount: any;
  selectedPillIndex: any;
  theme: KaliThemeType;
  style?: any;
}) => {
  const { theme, style } = props;
  const dimensions = useWindowDimensions();
  const arrayFromCount = (count: any) => {
    return new Array(count).fill(0);
  };
  return (
    <HStack
      {...HStackStyles(theme)["H Stack"].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(HStackStyles(theme)["H Stack"].style, {
          ...style,
        }),
        dimensions.width
      )}
    >
      <SimpleStyleFlatList
        data={arrayFromCount(props.pillsCount ?? 3)}
        horizontal={false}
        inverted={false}
        keyExtractor={(_listData, index) => index.toString()}
        keyboardShouldPersistTaps={"never"}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ index }) => {
          return (
            <>
              {/* selected pill */}
              <>
                {!(index === (props.selectedPillIndex ?? 1)) ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.body_text,
                        borderRadius: 5,
                        height: 5,
                        marginRight: 4,
                        width: 22,
                      },
                      dimensions.width
                    )}
                  />
                )}
              </>
              {/* unselected pill */}
              <>
                {!(index !== (props.selectedPillIndex ?? 1)) ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors.divider,
                        borderRadius: 3,
                        height: 5,
                        marginRight: 4,
                        width: 8,
                      },
                      dimensions.width
                    )}
                  />
                )}
              </>
            </>
          );
        }}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth(
          { flexDirection: "row" },
          dimensions.width
        )}
      />
    </HStack>
  );
};

export default withTheme(NavPillsBlock);
