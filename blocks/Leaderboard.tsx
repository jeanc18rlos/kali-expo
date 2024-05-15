import { HStack, withTheme } from "@draftbit/ui";
import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image } from "react-native";
const positions = [
  {
    position: 1,
    name: "Frederick Holst",
    steps: 3654,
  },
  {
    position: 2,
    name: "Frederick Holst",
    steps: 3654,
  },
  {
    position: 3,
    name: "Frederick Holst",
    steps: 3654,
    me: true,
  },
  {
    position: 4,
    name: "Frederick Holst",
    steps: 3654,
  },
  {
    position: 5,
    name: "Frederick Holst",
    steps: 3654,
  },
  {
    position: 6,
    name: "Frederick Holst",
    steps: 3654,
  },
  {
    position: 7,
    name: "Frederick Holst",
    steps: 3654,
  },
  {
    position: 8,
    name: "Frederick Holst",
    steps: 3654,
  },
  {
    position: 9,
    name: "Frederick Holst",
    steps: 3654,
  },
  {
    position: 10,
    name: "Frederick Holst",
    steps: 3654,
  },
];
export default withTheme(({ theme }) => {
  return (
    <View
      style={{
        borderColor: "#00000026",
        borderRadius: 16,
        borderWidth: 1,
        overflow: "hidden",
        marginRight: 15,
        width: "100%",
      }}
    >
      <HStack
        style={{
          marginBottom: 16,
        }}
      >
        <Text
          style={{
            color: "#616161",
            fontSize: 16,
            fontWeight: "bold",
            marginLeft: 16,
            marginTop: 16,
          }}
        >
          Leaderboard
        </Text>
        <Text
          style={{
            color: "#616161",
            fontSize: 16,
            marginLeft: "auto",
            marginRight: 16,
            marginTop: 16,
          }}
        >
          Today
        </Text>
      </HStack>
      {positions.map((position, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 60,
            padding: 16,
            flex: 1,
            backgroundColor: position.me
              ? theme.colors.divider
              : theme.colors.background,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: position.me ? "#000000" : "#616161",
                fontWeight: position.me ? "bold" : "normal",
                fontSize: 16,
                marginRight: 16,
                width: 24,
              }}
            >
              {position.position}
            </Text>
            <Image
              source={{ uri: "https://i.imgur.com/1tMFzp8.png" }}
              resizeMode={"stretch"}
              style={{
                borderRadius: 20,
                width: 40,
                height: 40,
                marginRight: 11,
                borderColor: "#00000026",
                borderWidth: 1,
              }}
            />
            <Text
              style={{
                color: "#616161",
                fontSize: 16,

                ...(position.me
                  ? {
                      color: "#000000",
                      fontWeight: "bold",
                    }
                  : {}),
              }}
            >
              Frederick Holst
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#616161", fontSize: 16, marginBottom: 7 }}>
              3.654
            </Text>
            <Text style={{ color: "#616161", fontSize: 12 }}>steps</Text>
          </View>
        </View>
      ))}
    </View>
  );
});
