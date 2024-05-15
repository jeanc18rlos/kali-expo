import React from "react";
import { HStack, ScreenContainer, withTheme } from "@draftbit/ui";
import { router } from "expo-router";
import Avatar from "./Avatar";
import KaliButton from "./Button";
import { Pressable } from "react-native";

const UserProfileHeader: React.FC<{
  theme: any;
}> = (props) => {
  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      <HStack
        style={{
          height: 64,
          backgroundColor: props.theme.colors.background,
          paddingVertical: 8,
          paddingHorizontal: 16,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <HStack
          style={{
            alignItems: "center",
            gap: 8,
          }}
        >
          <Avatar
            onPress={() => router.push("profile")}
            uri="https://firebasestorage.googleapis.com/v0/b/kali-f3ff6.appspot.com/o/profile-pictures%2Fmarie.jpeg?alt=media&token=20b5d97d-8a07-471e-83eb-097f70f99a35"
            size="Avatar"
          />

          <KaliButton
            variant="ButtonTertiary"
            size="ButtonSmall"
            theme={props.theme}
            style={{
              width: 83,
            }}
            title="Upgrade"
          />
        </HStack>
        <KaliButton
          variant="ButtonTertiary"
          size="ButtonSmall"
          theme={props.theme}
          style={{
            width: 130,
          }}
          icon={"MaterialCommunityIcons/alpha-k-circle"}
          title="Points 0,0"
        />
      </HStack>
    </ScreenContainer>
  );
};

export default withTheme(UserProfileHeader);
