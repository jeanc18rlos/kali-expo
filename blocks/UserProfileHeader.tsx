import React from "react";
import { HStack, ScreenContainer, withTheme } from "@draftbit/ui";
import { router } from "expo-router";
import Avatar from "./Avatar";
import KaliButton from "./Button";

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
          <Avatar uri="https://source.unsplash.com/random" size="Avatar" />
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
          icon={'MaterialCommunityIcons/alpha-k-circle'} 
          title="Points 0,0"
        />
      </HStack>
    </ScreenContainer>
  );
};

export default withTheme(UserProfileHeader);
