import { Image } from "react-native";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import {
  AntDesign,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import IMAGES from "./images";

function cacheImages(images: any[]) {
  return images.map((image: string) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(
  fonts: { [x: string]: any }[] | (string | Record<string, Font.FontSource>)[]
) {
  return fonts.map((font: string | Record<string, Font.FontSource>) =>
    Font.loadAsync(font)
  );
}

export default function cacheAssetsAsync() {
  const imageAssets = cacheImages(Object.values(IMAGES));
  const iconAssets = cacheFonts([
    AntDesign.font,
    Entypo.font,
    Ionicons.font,
    MaterialCommunityIcons.font,
    MaterialIcons.font,
  ]);

  return Promise.all([...imageAssets, ...iconAssets]);
}