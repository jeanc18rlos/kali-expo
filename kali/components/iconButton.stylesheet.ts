export const IconButtonStyles = (theme: KaliThemeType) => ({
  IconButton: {
    style: {
      borderRadius: theme.spacing["4"],
      width: theme.spacing["8"],
      height: theme.spacing["8"],
      backgroundColor: theme.colors.tertiary,
      color: theme.colors.body_text,
    },
  },
  CloseButton: {
    props: {
      icon: "close",
      size: theme.spacing["6"],
    },
  },
  SaveButton: {
    props: {
      icon: "MaterialIcons/save-alt",
    },
  },
  PenButton: {
    props: {
      icon: "MaterialCommunityIcons/pencil-outline",
    },
  },
  GoBackButton: {
    props: {
      icon: "AntDesign/left",
    },
  },
});
