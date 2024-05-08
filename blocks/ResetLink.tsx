import { Text, Pressable } from "react-native";
import useResetRoute from "../utils/resetRoute";
import { LinkStyles } from "../GlobalStyles";

type ResetLinkProps = {
  link: string | string[];
  theme: KaliThemeType;
  title: string;
  style?: any;
};
export default function ResetLink(props: ResetLinkProps) {
  const reset = useResetRoute();
  return (
    <Pressable
      onPress={() => {
        reset(props.link);
      }}
    >
      <Text
        style={[
          LinkStyles(props.theme)["Link"].style,
          LinkStyles(props.theme)["SKIP"].style,
          props.style,
        ]}
      >
        {props.title}
      </Text>
    </Pressable>
  );
}
