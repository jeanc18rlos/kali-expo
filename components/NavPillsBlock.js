import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import arrayFromCount from '../global-functions/arrayFromCount';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import { HStack, SimpleStyleFlatList, withTheme } from '@draftbit/ui';
import { View } from 'react-native';

const NavPillsBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <HStack
      {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.HStackStyles(theme)['H Stack'].style, {
          height: 16,
          marginBottom: 16,
          marginTop: 16,
        }),
        dimensions.width
      )}
    >
      <SimpleStyleFlatList
        data={arrayFromCount(props.pillsCount ?? 3)}
        horizontal={false}
        inverted={false}
        keyExtractor={(listData, index) => index}
        keyboardShouldPersistTaps={'never'}
        listKey={'IlauSgO9'}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => {
          const listData = item;
          return (
            <>
              {/* selected pill */}
              <>
                {!(index === (props.selectedPillIndex ?? 1)) ? null : (
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: theme.colors['Typography Color'],
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
                        backgroundColor: 'rgb(171, 171, 171)',
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
          { flexDirection: 'row' },
          dimensions.width
        )}
      />
    </HStack>
  );
};

export default withTheme(NavPillsBlock);
