import * as React from "react";
import {
  useQueryClient,
  useMutation,
  UseMutationResult,
  MutationFunction,
  UseMutationOptions
} from "react-query";
import { useIsFocused } from "@react-navigation/native";
import { handleResponse } from "../utils/handleRestApiResponse";
import usePrevious from "../utils/usePrevious";
import * as GlobalVariables from "../config/GlobalVariableContext";


export const $v1$checkEmailGET = (Constants, { email }, handlers = {}) => {
  return fetch(
    `https://ahzvsgfgeenirbqjonrk.supabase.co/rest/v1/user_profiles?select=email&email=eq.${encodeURIComponent(email)}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: Constants["API_KEY_HEADER"],
        apikey: Constants["apikey"],
      },
      method: "GET",
    }
  ).then((res) => handleResponse(res, handlers));
};

export const use$v1$checkEmailGET = (
  initialArgs = {},
  { handlers = {} } = {}
) => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();
  return useMutation(
    (args) =>
      $v1$checkEmailGET(Constants, { ...initialArgs, ...args }, handlers),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          queryClient.setQueryData("userExists", previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries("userExists");
      },
    }
  );
};

export const Fetch$v1$checkEmailGET = ({
  children,
  onData = () => {},
  handlers = {},
  refetchInterval,
  email,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const {
    isLoading: loading,
    data,
    error,
    mutate: refetch,
  } = use$v1$checkEmailGET(
    { email },
    { refetchInterval, handlers: { onData, ...handlers } }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error("Fetch error: " + error);
    }
  }, [error]);

  return children({ loading, data, error, refetch$v1$checkEmail: refetch });
};

// Similar modifications should be applied to other API calls and components.
