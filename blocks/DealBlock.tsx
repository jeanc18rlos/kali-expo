import { VStack } from "@draftbit/ui";
import { Touchable, Button } from "@draftbit/ui";
import getAspectRatioHeight from "../utils/getAspectRatioHeight";
import useWindowDimensions from "../utils/useWindowDimensions";
import { View, Text, Image } from "react-native";
import KaliButton from "./Button";
type DealBlockProps = {
  title: string;
  description: string;
  image: string;
};
const DealBlock: React.FC<DealBlockProps> = ({
  image,
  description,
  title,
  theme,
}) => {
  const dimensions = useWindowDimensions();
  return (
    <Touchable>
      {/* Product Slider Record Item */}
      <View
        style={{
          backgroundColor: "rgb(27, 37, 210)",
          borderRadius: 16,
          borderWidth: 1,
          borderColor: theme.colors.divider,
          flexGrow: 0,
          flexShrink: 0,
          height: getAspectRatioHeight(dimensions.width - 32),
          justifyContent: "flex-end",
          marginTop: 18,
          overflow: "hidden",
          paddingBottom: 16,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 16,
          width: dimensions.width - 32,
        }}
      >
        {/* Overflow Text Hide */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 4,
            overflow: "hidden",
          }}
        >
          <View />
          <KaliButton
            onPress={() => {}}
            variant="ButtonSecondary"
            size="ButtonSmall"
            theme={theme}
            style={{
              maxWidth: 100,
              borderRadius: 8,
            }}
            title={"Shop Now"}
          />
        </View>
        {/* Absolute Image */}
        <View
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: dimensions.width - 16,
            zIndex: -1,
          }}
        >
          <Image
            resizeMode={"cover"}
            source={{ uri: `${image}` }}
            style={{
              opacity: 1,
              width: dimensions.width - 32,
              height: getAspectRatioHeight(dimensions.width - 32),
            }}
          />
        </View>
      </View>
    </Touchable>
  );
};

export default DealBlock;
