import { StyleSheet, View, Dimensions, ActivityIndicator } from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
import { Pedometer } from "expo-sensors";
import PointsToLevelProgressBar from "../../blocks/PointsToLevelProgressBar";
import * as BrandsServiceApi from "../../apis/BrandsServiceApi";
import BrandList from "../../blocks/BrandList";
import * as DealsServiceApi from "../../apis/DealsServiceApi";
import DealSlider from "../../blocks/DealSlider";
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

  const [isPedometerAvailable, setIsPedometerAvailable] = useState("checking");
  const [pastStepCount, setPastStepCount] = useState(0);
  const [currentStepCount, setCurrentStepCount] = useState(0);

  const subscribe = async () => {
    const isAvailable = await Pedometer.isAvailableAsync();
    setIsPedometerAvailable(String(isAvailable));

    if (isAvailable) {
      const end = new Date();
      const start = new Date();
      start.setDate(end.getDate() - 1);

      const pastStepCountResult = await Pedometer.getStepCountAsync(start, end);
      if (pastStepCountResult) {
        setPastStepCount(pastStepCountResult.steps);
      }

      return Pedometer.watchStepCount((result) => {
        setCurrentStepCount(result.steps);
      });
    }
  };

  useEffect(() => {
    const subscription = subscribe();
    return () => subscription && subscription.remove();
  }, []);

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
          <StepProgressBarBlock goal={1000} steps={currentStepCount} />
          <PointsToLevelProgressBar
            points={pastStepCount + currentStepCount}
            nextLevelPoints={
              (currentStepCount && currentStepCount > 0) ||
              (pastStepCount && pastStepCount > 0)
                ? Math.ceil(
                    ((pastStepCount || 0) + (currentStepCount || 0)) / 1000
                  ) * 1000
                : 1000
            }
            nextLevel={
              (currentStepCount && currentStepCount > 0) ||
              (pastStepCount && pastStepCount > 0)
                ? Math.ceil(
                    ((pastStepCount || 0) + currentStepCount || 0) / 1000
                  )
                : 1
            }
          />
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

          <VStack
            style={{
              gap: 32
            }}
          >
            <ProductsServiceApi.FetchGetProductsPOST
              refetchInterval={600 * 1000}
            >
              {({ loading, error, data, refetchGetProducts }: any) => {
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

            <BrandsServiceApi.FetchGetBrandsPOST>
              {({ loading, error, data, refetchGetBrands }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <BrandList
                    allLabel={"Shop all"}
                    brands={fetchData?.result}
                    title={"Your favorite brands"}
                    subtitle={"Shop from your favorite brands"}
                  />
                );
              }}
            </BrandsServiceApi.FetchGetBrandsPOST>

            <DealsServiceApi.FetchGetDealsPOST>
              {({ loading, error, data, refetchGetDeals }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return <DealSlider deals={fetchData?.result} theme={theme}/>;
              }}
            </DealsServiceApi.FetchGetDealsPOST>
          </VStack>
        </VStack>
      </ScreenContainer>
    </>
  );
}

export default withTheme(App);
