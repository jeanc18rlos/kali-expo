import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import React, { useRef } from "react";
import * as ProductsServiceApi from "../../apis/ProductsServiceApi";
import {
  ScreenContainer,
  VStack,
  withTheme,
  LinearGradient,
} from "@draftbit/ui";
import ProductSlider from "../../blocks/ProductSlider";
import { Container } from "../../blocks/Layout.stylesheet";
import StatBarBlock from "../../blocks/StatsBar";
import { LinearGradientStyles } from "../../GlobalStyles";
import StreakBarBlock from "../../blocks/StreakbarBlock";
import StepProgressBarBlock from "../../blocks/StepsProgressBar";
import DailyBonus from "../../blocks/DailyBonus";
import ConfettiCannon from "react-native-confetti-cannon";
import * as Haptics from "expo-haptics";
import ParseShopifyProduct from "../../utils/parseShopifyProducts";
const stats = [
  { title: "weekly steps", count: 0 },
  { title: "daily streak", count: 0 },
  { title: "weekly points", count: 0 },
];
function App({ theme }: { theme: KaliThemeType }) {
  const explosion = useRef(null);

  const explode = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    explosion.current && (explosion.current as any).start();
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          zIndex: 100,
          position: "absolute",
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      >
        <ConfettiCannon
          count={200}
          origin={{ x: Dimensions.get("window").width / 2, y: -20 }}
          autoStart={false}
          fadeOut={true}
          ref={explosion}
        />
      </View>
      <ScreenContainer
        scrollable={true}
        hasBottomSafeArea={false}
        hasSafeArea={false}
        hasTopSafeArea={true}
        style={{
          backgroundColor: theme.colors.background,
        }}
      >
        <LinearGradient
          endX={100}
          endY={100}
          startX={0}
          startY={0}
          color1={theme.colors["gradient-color-1"]}
          color2={theme.colors["gradient-color-2"]}
          color3={theme.colors["gradient-color-3"]}
          style={[
            LinearGradientStyles(theme)["Linear Gradient"].style,
            {
              height: "100%",
              left: 0,
              position: "absolute",
              top: 0,
              width: "100%",
            },
          ]}
        />

        <VStack
          style={StyleSheet.compose(Container(theme)["View"].style, {
            justifyContent: "flex-start",
            gap: 16,
          })}
        >
          <StatBarBlock stats={stats} />
          <StepProgressBarBlock goal={1000} steps={0} />
          <StreakBarBlock activeDays={[]} />
        </VStack>
        <VStack
          style={StyleSheet.compose(Container(theme)["View"].style, {
            justifyContent: "flex-start",
            gap: 16,
            backgroundColor: theme.colors.background,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            padding: 16,
          })}
        >
          <DailyBonus
            onPress={() => {
              explode();
              alert("Daily bonus collected!");
            }}
          />

          <View>
            <ProductsServiceApi.FetchGetProductsPOST
              refetchInterval={60 * 1000}
            >
              {({ loading, error, data, refetchGetProducts }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <ProductSlider
                    allLabel={"Shop Now"}
                    products={ParseShopifyProduct(fetchData?.result)}
                    subtitle={"Redeem your Kali Points"}
                    title={"Products that you love"}
                  />
                );
              }}
            </ProductsServiceApi.FetchGetProductsPOST>
          </View>
        </VStack>
      </ScreenContainer>
    </>
  );
}

export default withTheme(App);
