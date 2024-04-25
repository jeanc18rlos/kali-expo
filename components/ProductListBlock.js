import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import ProductCardBlock from '../components/ProductCardBlock';
import SearchBarBlock from '../components/SearchBarBlock';
import { parseBoolean } from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';
import {
  AccordionGroup,
  BottomSheet,
  Button,
  Divider,
  HStack,
  IconButton,
  Pressable,
  RadioButtonGroup,
  RadioButtonRow,
  SimpleStyleFlatList,
  SimpleStyleMasonryFlashList,
  SimpleStyleScrollView,
  Slider,
  StarRating,
  VStack,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';

const ProductListBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [Products, setProducts] = React.useState([
    {
      id: 1,
      image: 'https://picsum.photos/200/300',
      price: 99.99,
      title: 'Nike Shirt',
      founder: 'Nike',
      isFavorite: false,
      description: 'Black shirt with white logo',
    },
    {
      id: 2,
      image: 'https://picsum.photos/200/300',
      price: 199.99,
      title: 'Adidas Jeans',
      founder: 'Adidas',
      isFavorite: false,
      description: 'Blue jeans with white logo',
    },
    {
      id: 3,
      image: 'https://picsum.photos/200/300',
      price: 299.99,
      title: 'Puma Shoes',
      founder: 'Puma',
      description: 'White shoes with black logo',
    },
    {
      id: 4,
      image: 'https://picsum.photos/200/300',
      price: 99.99,
      title: 'Nike Shirt',
      founder: 'Nike',
      isFavorite: false,
      description: 'Black shirt with white logo',
    },
    {
      id: 5,
      image: 'https://picsum.photos/200/300',
      price: 199.99,
      title: 'Adidas Jeans',
      founder: 'Adidas',
      isFavorite: false,
      description: 'Blue jeans with white logo',
    },
    {
      id: 6,
      image: 'https://picsum.photos/200/300',
      price: 299.99,
      title: 'Puma Shoes',
      founder: 'Puma',
      isFavorite: false,
      description: 'White shoes with black logo',
    },
    {
      id: 7,
      image: 'https://picsum.photos/200/300',
      price: 99.99,
      title: 'Nike Shirt',
      founder: 'Nike',
      isFavorite: false,
      description: 'Red shirt with white logo',
    },
    {
      id: 8,
      image: 'https://picsum.photos/200/300',
      price: 199.99,
      title: 'Adidas Jeans',
      founder: 'Adidas',
      isFavorite: false,
      description: 'Blue jeans with white logo',
    },
    {
      id: 9,
      image: 'https://picsum.photos/200/300',
      price: 299.99,
      title: 'Puma Shoes',
      founder: 'Puma',
      isFavorite: false,
      description: 'White shoes with black logo',
    },
  ]);
  const [categories, setCategories] = React.useState([
    { id: '1', title: 'Fashion' },
    { id: '2', title: 'Food' },
    { id: '3', title: 'Travel' },
    { id: '4', title: 'Music' },
    { id: '5', title: 'Lifestyle' },
    { id: '6', title: 'Fitness' },
    { id: '7', title: 'Beauty' },
    { id: '8', title: 'Photography' },
    { id: '9', title: 'Art' },
    { id: '10', title: 'Design' },
  ]);
  const [data, setData] = React.useState([
    { id: 1, name: 'Font Vella', price: 0.5 },
    { id: 2, name: 'Coca Cola', price: 1.5 },
    { id: 3, name: 'Fanta', price: 1.5 },
    { id: 4, name: 'Aquarius', price: 1.5 },
    { id: 5, name: 'Nestea', price: 1.5 },
    { id: 6, name: 'Cerveza', price: 1.5 },
    { id: 7, name: 'Vino', price: 1.5 },
    { id: 8, name: 'Café', price: 1.5 },
    { id: 9, name: 'Té', price: 1.5 },
    { id: 10, name: 'Zumo', price: 1.5 },
  ]);
  const [radioButtonGroupValue, setRadioButtonGroupValue] = React.useState('');
  const [radioButtonGroupValue2, setRadioButtonGroupValue2] =
    React.useState('');
  const [selectedBrand, setSelectedBrand] = React.useState('');
  const [showFilter, setShowFilter] = React.useState(true);
  const [sliderValue, setSliderValue] = React.useState(0);
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [ratingValue, setRatingValue] = React.useState(undefined);

  return (
    <View
      style={StyleSheet.applyWidth(
        { backgroundColor: 'rgb(255, 255, 255)', flex: 1, paddingTop: 40 },
        dimensions.width
      )}
    >
      {/* View 3 */}
      <View>
        <HStack
          {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(
              GlobalStyles.HStackStyles(theme)['H Stack'].style,
              {
                justifyContent: 'space-between',
                paddingLeft: 16,
                paddingRight: 16,
              }
            ),
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                color: theme.colors['Custom Color_26'],
                fontFamily: 'Raleway_500Medium',
                fontSize: 24,
              }),
              dimensions.width
            )}
          >
            {'Products'}
          </Text>

          <Pressable
            onPress={() => {
              try {
                setShowFilter(true);
              } catch (err) {
                console.error(err);
              }
            }}
          >
            <Text
              accessible={true}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors['Custom Color_23'],
                    fontFamily: 'Raleway_700Bold',
                  }
                ),
                dimensions.width
              )}
            >
              {'Filter'}
            </Text>
          </Pressable>
        </HStack>

        <View
          style={StyleSheet.applyWidth(
            { paddingLeft: 8, paddingRight: 8, paddingTop: 8 },
            dimensions.width
          )}
        >
          <SearchBarBlock />
        </View>
      </View>
      <SimpleStyleFlatList
        data={categories}
        inverted={false}
        keyExtractor={(listData, index) => listData?.id}
        keyboardShouldPersistTaps={'never'}
        listKey={'Ltv7QErc'}
        nestedScrollEnabled={false}
        numColumns={1}
        onEndReachedThreshold={0.5}
        renderItem={({ item, index }) => {
          const listData = item;
          return (
            <Button
              {...GlobalStyles.ButtonStyles(theme)['Button'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Button'].style,
                  {
                    backgroundColor: 'rgb(243, 243, 243)',
                    borderRadius: 55,
                    color: 'rgb(71, 71, 71)',
                    fontFamily: 'Raleway_500Medium',
                    height: 40,
                    marginRight: 8,
                  }
                ),
                dimensions.width
              )}
              title={`${listData?.title}`}
            />
          );
        }}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        horizontal={true}
        style={StyleSheet.applyWidth(
          { flexDirection: 'row', height: 50, marginTop: 8, paddingLeft: 8 },
          dimensions.width
        )}
      />
      {/* View 2 */}
      <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
        <SimpleStyleMasonryFlashList
          data={Products}
          estimatedItemSize={50}
          keyExtractor={(masonryListData, index) => masonryListData?.id}
          listKey={'aPaheGx6'}
          onEndReachedThreshold={0.5}
          renderItem={({ item, index }) => {
            const masonryListData = item;
            return (
              <View
                style={StyleSheet.applyWidth({ padding: 4 }, dimensions.width)}
              >
                <ProductCardBlock
                  description={masonryListData?.description}
                  founder={masonryListData?.fouder}
                  image={masonryListData?.image}
                  isFavorite={masonryListData?.isfavorite}
                  price={masonryListData?.price}
                  title={masonryListData?.title}
                />
              </View>
            );
          }}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={true}
          numColumns={2}
          style={StyleSheet.applyWidth({ padding: 4 }, dimensions.width)}
        />
      </View>
      {/* Filter */}
      <>
        {!parseBoolean(showFilter) ? null : (
          <BottomSheet
            borderColor={theme.colors.divider}
            borderWidth={1}
            bottomSnapPosition={'80%'}
            bounces={true}
            enableOverScroll={false}
            friction={0.95}
            handleColor={theme.colors.divider}
            initialSnapPosition={'bottom'}
            middleSnapPosition={'50%'}
            showHandle={true}
            showsVerticalScrollIndicator={true}
            topBorderRadius={20}
            topSnapPosition={'10%'}
            {...GlobalStyles.BottomSheetStyles(theme)['Bottom Sheet'].props}
            initialSnapIndex={0}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.BottomSheetStyles(theme)['Bottom Sheet'].style,
                { paddingTop: null, width: '100%' }
              ),
              dimensions.width
            )}
          >
            <HStack
              {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.HStackStyles(theme)['H Stack'].style,
                  { justifyContent: 'space-between', marginBottom: 30 }
                ),
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                {...GlobalStyles.TextStyles(theme)['Text'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.TextStyles(theme)['Text'].style,
                    {
                      color: theme.colors['Custom Color_23'],
                      fontFamily: 'Raleway_700Bold',
                    }
                  ),
                  dimensions.width
                )}
              >
                {'Filter'}
              </Text>
              <IconButton
                onPress={() => {
                  try {
                    setShowFilter(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                color={theme.colors['Custom Color_24']}
                icon={'AntDesign/close'}
                size={24}
              />
            </HStack>

            <VStack
              {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
              style={StyleSheet.applyWidth(
                GlobalStyles.VStackStyles(theme)['V Stack'].style,
                dimensions.width
              )}
            >
              <AccordionGroup
                caretSize={24}
                expanded={false}
                iconSize={24}
                {...GlobalStyles.AccordionGroupStyles(theme)['Accordion'].props}
                closedColor={theme.colors['Custom Color_25']}
                label={'Category'}
                openColor={theme.colors['Strong']}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.AccordionGroupStyles(theme)['Accordion'].style,
                    {
                      fontFamily: 'Raleway_600SemiBold',
                      paddingBottom: 16,
                      paddingLeft: null,
                      paddingRight: null,
                      paddingTop: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                <SimpleStyleScrollView
                  bounces={true}
                  horizontal={false}
                  keyboardShouldPersistTaps={'never'}
                  nestedScrollEnabled={false}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  style={StyleSheet.applyWidth(
                    { height: 200 },
                    dimensions.width
                  )}
                >
                  <RadioButtonGroup
                    onValueChange={newRadioButtonGroupValue => {
                      const radioButtonGroupValue = newRadioButtonGroupValue;
                      try {
                        setRadioButtonGroupValue2(newRadioButtonGroupValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    value={radioButtonGroupValue2}
                  >
                    <SimpleStyleFlatList
                      data={data}
                      horizontal={false}
                      inverted={false}
                      keyExtractor={(listData, index) => listData?.id}
                      keyboardShouldPersistTaps={'never'}
                      listKey={'0uw1xhlv'}
                      nestedScrollEnabled={false}
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      renderItem={({ item, index }) => {
                        const listData = item;
                        return (
                          <RadioButtonRow
                            color={theme.colors['Strong']}
                            label={listData?.name}
                            unselectedColor={theme.colors['Light']}
                            value={listData?.name}
                          />
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                    />
                  </RadioButtonGroup>
                </SimpleStyleScrollView>
              </AccordionGroup>
              <Divider
                color={theme.colors.divider}
                {...GlobalStyles.DividerStyles(theme)['Divider'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  dimensions.width
                )}
              />
              {/* Accordion 2 */}
              <AccordionGroup
                caretSize={24}
                expanded={false}
                iconSize={24}
                {...GlobalStyles.AccordionGroupStyles(theme)['Accordion'].props}
                closedColor={theme.colors['Custom Color_25']}
                label={'Brand'}
                openColor={theme.colors['Strong']}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.AccordionGroupStyles(theme)['Accordion'].style,
                    {
                      fontFamily: 'Raleway_600SemiBold',
                      paddingBottom: 16,
                      paddingLeft: null,
                      paddingRight: null,
                      paddingTop: 16,
                    }
                  ),
                  dimensions.width
                )}
              >
                <SimpleStyleScrollView
                  bounces={true}
                  horizontal={false}
                  keyboardShouldPersistTaps={'never'}
                  nestedScrollEnabled={false}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  style={StyleSheet.applyWidth(
                    { height: 200 },
                    dimensions.width
                  )}
                >
                  <RadioButtonGroup
                    onValueChange={newRadioButtonGroupValue => {
                      const radioButtonGroupValue = newRadioButtonGroupValue;
                      try {
                        setRadioButtonGroupValue2(newRadioButtonGroupValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    value={radioButtonGroupValue2}
                  >
                    <SimpleStyleFlatList
                      data={data}
                      horizontal={false}
                      inverted={false}
                      keyExtractor={(listData, index) => listData?.id}
                      keyboardShouldPersistTaps={'never'}
                      listKey={'7ZmtZhxf'}
                      nestedScrollEnabled={false}
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      renderItem={({ item, index }) => {
                        const listData = item;
                        return (
                          <RadioButtonRow
                            color={theme.colors['Strong']}
                            label={listData?.name}
                            unselectedColor={theme.colors['Light']}
                            value={listData?.name}
                          />
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                    />
                  </RadioButtonGroup>
                </SimpleStyleScrollView>
              </AccordionGroup>
              {/* Divider 2 */}
              <Divider
                color={theme.colors.divider}
                {...GlobalStyles.DividerStyles(theme)['Divider'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  dimensions.width
                )}
              />
              <HStack
                {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.HStackStyles(theme)['H Stack'].style,
                    { justifyContent: 'space-between' }
                  ),
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        fontFamily: 'Raleway_600SemiBold',
                        fontSize: 16,
                        paddingBottom: 16,
                        paddingTop: 16,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Rating'}
                </Text>
                <StarRating
                  inactiveColor={theme.colors.divider}
                  maxStars={5}
                  onPress={newStarRatingValue => {
                    const ratingValue = newStarRatingValue;
                    try {
                      setStarRatingValue(newStarRatingValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  activeColor={theme.colors['Strong']}
                  isEditable={true}
                  rating={starRatingValue}
                  starSize={24}
                />
              </HStack>
              {/* Divider 3 */}
              <Divider
                color={theme.colors.divider}
                {...GlobalStyles.DividerStyles(theme)['Divider'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  dimensions.width
                )}
              />
              <VStack
                {...GlobalStyles.VStackStyles(theme)['V Stack'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.VStackStyles(theme)['V Stack'].style,
                    { paddingBottom: 16, paddingTop: 16 }
                  ),
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  {...GlobalStyles.TextStyles(theme)['Text'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.TextStyles(theme)['Text'].style,
                      {
                        fontFamily: 'Raleway_600SemiBold',
                        fontSize: 16,
                        paddingBottom: 16,
                        paddingTop: 16,
                      }
                    ),
                    dimensions.width
                  )}
                >
                  {'Price'}
                </Text>
                <Slider
                  onValueChange={newSliderValue => {
                    const sliderValue = newSliderValue;
                    try {
                      setSliderValue(newSliderValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  {...GlobalStyles.SliderStyles(theme)['Slider'].props}
                  minimumTrackTintColor={theme.colors['Strong']}
                  style={StyleSheet.applyWidth(
                    GlobalStyles.SliderStyles(theme)['Slider'].style,
                    dimensions.width
                  )}
                  thumbTintColor={theme.colors['Strong']}
                  value={sliderValue}
                />
              </VStack>
              {/* Divider 4 */}
              <Divider
                color={theme.colors.divider}
                {...GlobalStyles.DividerStyles(theme)['Divider'].props}
                style={StyleSheet.applyWidth(
                  GlobalStyles.DividerStyles(theme)['Divider'].style,
                  dimensions.width
                )}
              />
              {/* H Stack 2 */}
              <HStack
                {...GlobalStyles.HStackStyles(theme)['H Stack'].props}
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(
                    GlobalStyles.HStackStyles(theme)['H Stack'].style,
                    { justifyContent: 'space-between', marginTop: 24 }
                  ),
                  dimensions.width
                )}
              >
                <Button
                  {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Button'].style,
                      {
                        backgroundColor: 'rgb(32, 32, 32)',
                        borderRadius: 30,
                        fontFamily: 'Raleway_700Bold',
                        fontSize: 16,
                        paddingLeft: 20,
                        paddingRight: 20,
                        width: '49%',
                      }
                    ),
                    dimensions.width
                  )}
                  title={'Clear All'}
                />
                {/* Button 2 */}
                <Button
                  {...GlobalStyles.ButtonStyles(theme)['Button'].props}
                  style={StyleSheet.applyWidth(
                    StyleSheet.compose(
                      GlobalStyles.ButtonStyles(theme)['Button'].style,
                      {
                        backgroundColor: 'rgb(32, 32, 32)',
                        borderRadius: 30,
                        fontFamily: 'Raleway_700Bold',
                        fontSize: 16,
                        paddingLeft: 20,
                        paddingRight: 20,
                        width: '49%',
                      }
                    ),
                    dimensions.width
                  )}
                  title={'Filter products'}
                />
              </HStack>
            </VStack>
          </BottomSheet>
        )}
      </>
    </View>
  );
};

export default withTheme(ProductListBlock);
