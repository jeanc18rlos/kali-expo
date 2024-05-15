import { CommonActions } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

const useResetRoute = () => {
  const navigation = useNavigation();

  return (route: string | string[]) => {
    navigation.dispatch(
      CommonActions.reset({
        routes: Array.isArray(route)
          ? route.map((r) => ({ name: r }))
          : [{ name: route }],
      })
    );
  };
};

export default useResetRoute;
